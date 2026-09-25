import React, { useEffect } from 'react';

export default function ProofModal({ isOpen, imgSrc, title, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={`modal-backdrop ${isOpen ? 'active' : ''}`} onClick={onClose}>
      <div className="modal-content-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          ✕
        </button>
        <h3 style={{ fontSize: '1.5rem', marginTop: '4px', color: 'var(--text-pure)' }}>
          {title || 'Verified Metric Inspection'}
        </h3>
        <img src={imgSrc} alt={title || 'Verified Metric Preview'} className="modal-img-large" />
      </div>
    </div>
  );
}
