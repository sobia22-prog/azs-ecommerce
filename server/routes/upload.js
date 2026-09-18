const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const { requireAdmin } = require('./auth');

const UPLOAD_DIR = path.join(__dirname, '../../public/assets/uploads');

// Ensure upload directory exists
if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

// POST /api/upload - Upload image (Admin only)
router.post('/', requireAdmin, (req, res) => {
  try {
    const { filename, base64Data } = req.body;

    if (!base64Data) {
      return res.status(400).json({ success: false, message: 'No image data provided.' });
    }

    // Extract mime and buffer
    const matches = base64Data.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    let buffer;
    let ext = '.png';

    if (matches && matches.length === 3) {
      const mime = matches[1];
      if (mime.includes('jpeg') || mime.includes('jpg')) ext = '.jpg';
      else if (mime.includes('webp')) ext = '.webp';
      else if (mime.includes('svg')) ext = '.svg';
      else ext = '.png';
      buffer = Buffer.from(matches[2], 'base64');
    } else {
      // Raw base64 string
      buffer = Buffer.from(base64Data, 'base64');
    }

    // Clean filename
    const parsedName = path.parse(filename || 'upload').name;
    const cleanBase = parsedName.replace(/[^a-zA-Z0-9_-]/g, '_').slice(0, 40) || 'image';
    const safeFilename = `${Date.now()}_${cleanBase}${ext}`;
    const targetPath = path.join(UPLOAD_DIR, safeFilename);

    fs.writeFileSync(targetPath, buffer);

    const publicUrl = `/assets/uploads/${safeFilename}`;

    return res.json({
      success: true,
      message: 'Image uploaded successfully.',
      url: publicUrl,
      filename: safeFilename
    });
  } catch (err) {
    console.error('Upload error:', err);
    return res.status(500).json({ success: false, message: 'Failed to upload image.', error: err.message });
  }
});

// GET /api/upload/gallery - List available assets
router.get('/gallery', requireAdmin, (req, res) => {
  try {
    const publicAssetsDir = path.join(__dirname, '../../public/assets');
    const files = fs.readdirSync(publicAssetsDir);
    
    // Filter image files
    const images = files
      .filter(f => /\.(png|jpg|jpeg|svg|webp)$/i.test(f))
      .map(f => ({
        filename: f,
        url: `/assets/${f}`
      }));

    // Also include uploads
    if (fs.existsSync(UPLOAD_DIR)) {
      const uploadFiles = fs.readdirSync(UPLOAD_DIR);
      uploadFiles
        .filter(f => /\.(png|jpg|jpeg|svg|webp)$/i.test(f))
        .forEach(f => {
          images.unshift({
            filename: f,
            url: `/assets/uploads/${f}`,
            isUploaded: true
          });
        });
    }

    return res.json({ success: true, count: images.length, data: images });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
