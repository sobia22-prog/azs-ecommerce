import express from 'express';
const router = express.Router();

router.post('/project', (req, res) => {
  try {
    const { monthlyRevenue, monthlyAdSpend, channels } = req.body;

    const currentRev = Number(monthlyRevenue) || 50000;
    const currentSpend = Number(monthlyAdSpend) || 8000;
    const channelCount = Array.isArray(channels) ? Math.max(1, channels.length) : 3;

    // Cross-channel expansion multiplier
    const multiplier = 1.75 + (channelCount * 0.28);
    const projectedRev = Math.round(currentRev * multiplier);
    const incrementalLift = projectedRev - currentRev;
    const annualizedGMV = projectedRev * 12;
    const gccShare = Math.round(projectedRev * 0.42);

    const calculatedRoas = Math.min(15.2, Math.max(4.5, (projectedRev / (currentSpend * 1.35)).toFixed(1)));

    return res.json({
      success: true,
      data: {
        projectedMonthlyRevenue: projectedRev,
        incrementalMonthlyLift: incrementalLift,
        annualizedGMV,
        gccShare,
        targetROAS: calculatedRoas,
        channelsConsidered: channelCount,
        recommendation: channelCount >= 3 ? 'High Omnichannel Synergy' : 'Expansion Ready'
      }
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
