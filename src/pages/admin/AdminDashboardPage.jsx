import React, { useState, useEffect, useRef } from 'react';
import { useRouter, Link } from '../../Router';
import useSEO from '../../hooks/useSEO';

export default function AdminDashboardPage() {
  const { navigate } = useRouter();
  const [activeTab, setActiveTab] = useState('overview');
  const [user, setUser] = useState(null);
  const [dbStatus, setDbStatus] = useState('Checking...');
  const [notification, setNotification] = useState(null);

  // Collections Data State
  const [leads, setLeads] = useState([]);
  const [marketplaces, setMarketplaces] = useState([]);
  const [caseStudies, setCaseStudies] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Edit / Modal States
  const [editItem, setEditItem] = useState(null); // { type: 'marketplace' | 'caseStudy' | 'blog', data: {...} }

  useSEO({
    title: 'Super Admin Operations Console | AZS Solutions',
    description: 'Central management console for AZS Solutions ecommerce operations.',
    canonicalPath: '/admin'
  });

  const notify = (msg, type = 'success') => {
    setNotification({ msg, type });
    setTimeout(() => setNotification(null), 4000);
  };

  // Auth Protection Check
  useEffect(() => {
    const token = localStorage.getItem('azs_admin_token');
    const savedUser = localStorage.getItem('azs_admin_user');

    if (!token) {
      navigate('/admin/login');
      return;
    }

    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch {
        setUser({ email: 'admin@azssolutions.com', name: 'Super Admin' });
      }
    }

    // Fetch live data
    fetchAllData(token);
  }, []);

  const getHeaders = () => {
    const token = localStorage.getItem('azs_admin_token') || '';
    return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    };
  };

  const fetchAllData = async (token) => {
    setLoading(true);
    try {
      // Check health
      fetch('/api/health')
        .then(r => r.json())
        .then(d => setDbStatus(d.database || 'Online'))
        .catch(() => setDbStatus('Offline'));

      // Fetch all collections in parallel
      const [leadsRes, mktRes, csRes, blogRes] = await Promise.all([
        fetch('/api/leads', { headers: { Authorization: `Bearer ${token}` } }).then(r => r.json()),
        fetch('/api/marketplaces').then(r => r.json()),
        fetch('/api/case-studies').then(r => r.json()),
        fetch('/api/blogs').then(r => r.json())
      ]);

      if (leadsRes.data) setLeads(leadsRes.data);
      if (mktRes.data) setMarketplaces(mktRes.data);
      if (csRes.data) setCaseStudies(csRes.data);
      if (blogRes.data) setBlogs(blogRes.data);
    } catch (err) {
      notify('Could not load some data from server.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('azs_admin_token');
    localStorage.removeItem('azs_admin_user');
    navigate('/admin/login');
  };

  const [uploading, setUploading] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [galleryImages, setGalleryImages] = useState([]);
  const fileInputRef = useRef(null);

  const fetchGallery = async () => {
    try {
      const res = await fetch('/api/upload/gallery', { headers: getHeaders() });
      const data = await res.json();
      if (data.success && data.data) {
        setGalleryImages(data.data);
      }
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    if (editItem && galleryImages.length === 0) {
      fetchGallery();
    }
  }, [editItem]);

  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 15 * 1024 * 1024) {
      notify('File too large. Please select an image under 15MB.', 'error');
      return;
    }

    setUploading(true);
    const reader = new FileReader();
    reader.onload = async () => {
      try {
        const base64Data = reader.result;
        const res = await fetch('/api/upload', {
          method: 'POST',
          headers: getHeaders(),
          body: JSON.stringify({
            filename: file.name,
            base64Data
          })
        });
        const data = await res.json();
        if (data.success && data.url) {
          setEditItem(prev => ({
            ...prev,
            data: { ...prev.data, image: data.url }
          }));
          notify('Image uploaded and applied successfully!');
          fetchGallery();
        } else {
          throw new Error(data.message || 'Upload failed');
        }
      } catch (err) {
        notify(err.message || 'Error uploading file.', 'error');
      } finally {
        setUploading(false);
      }
    };
    reader.readAsDataURL(file);
  };

  // Lead Actions
  const handleUpdateLeadStatus = async (leadId, newStatus) => {
    try {
      const res = await fetch(`/api/leads/${leadId}`, {
        method: 'PUT',
        headers: getHeaders(),
        body: JSON.stringify({ status: newStatus })
      });
      const data = await res.json();
      if (data.success) {
        setLeads(prev => prev.map(l => (l._id === leadId ? { ...l, status: newStatus } : l)));
        notify(`Lead marked as ${newStatus}`);
      }
    } catch {
      notify('Failed to update lead status.', 'error');
    }
  };

  const handleDeleteLead = async (leadId) => {
    if (!window.confirm('Are you sure you want to delete this lead?')) return;
    try {
      const res = await fetch(`/api/leads/${leadId}`, {
        method: 'DELETE',
        headers: getHeaders()
      });
      const data = await res.json();
      if (data.success) {
        setLeads(prev => prev.filter(l => l._id !== leadId));
        notify('Lead deleted successfully.');
      }
    } catch {
      notify('Failed to delete lead.', 'error');
    }
  };

  // Save edits for Marketplace / Case Study / Blog
  const handleSaveItem = async (e) => {
    e.preventDefault();
    if (!editItem) return;

    const { type, isNew, data } = editItem;
    const endpoint = type === 'marketplace' ? '/api/marketplaces' : type === 'caseStudy' ? '/api/case-studies' : '/api/blogs';
    const id = data._id || data.slug;
    const url = isNew ? endpoint : `${endpoint}/${id}`;
    const method = isNew ? 'POST' : 'PUT';

    try {
      const res = await fetch(url, {
        method,
        headers: getHeaders(),
        body: JSON.stringify(data)
      });
      const resData = await res.json();

      if (!res.ok || !resData.success) {
        throw new Error(resData.message || 'Error saving changes.');
      }

      notify(`${type === 'marketplace' ? 'Marketplace' : type === 'caseStudy' ? 'Case Study' : 'Blog'} saved successfully!`);
      setEditItem(null);
      // Refresh token
      fetchAllData(localStorage.getItem('azs_admin_token'));
    } catch (err) {
      notify(err.message || 'Error saving item.', 'error');
    }
  };

  // Delete Item
  const handleDeleteItem = async (type, id) => {
    if (!window.confirm(`Are you sure you want to delete this ${type}?`)) return;
    const endpoint = type === 'marketplace' ? '/api/marketplaces' : type === 'caseStudy' ? '/api/case-studies' : '/api/blogs';

    try {
      const res = await fetch(`${endpoint}/${id}`, {
        method: 'DELETE',
        headers: getHeaders()
      });
      const data = await res.json();
      if (data.success) {
        notify(`${type} deleted successfully.`);
        fetchAllData(localStorage.getItem('azs_admin_token'));
      }
    } catch {
      notify(`Failed to delete ${type}.`, 'error');
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#080d16', color: '#e2e8f0', fontFamily: 'var(--font-sans)' }}>
      {/* Top Navbar */}
      <header style={{
        background: 'rgba(11, 17, 29, 0.98)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '14px 28px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backdropFilter: 'blur(16px)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            background: 'rgba(0, 245, 155, 0.12)',
            border: '1px solid rgba(0, 245, 155, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem',
            color: 'var(--neon-mint)'
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          </div>
          <div>
            <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#ffffff' }}>
              AZS Solutions <span style={{ color: 'var(--neon-mint)' }}>Super Admin</span>
            </div>
            <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
              Full Control & Operations Portal
            </div>
          </div>
        </div>

        {/* Status Pill & User Badges */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '4px 12px',
            borderRadius: '9999px',
            background: dbStatus.includes('Connected') ? 'rgba(0, 245, 155, 0.1)' : 'rgba(234, 179, 8, 0.1)',
            border: `1px solid ${dbStatus.includes('Connected') ? 'rgba(0, 245, 155, 0.3)' : 'rgba(234, 179, 8, 0.3)'}`,
            fontSize: '0.74rem',
            fontWeight: 700,
            color: dbStatus.includes('Connected') ? 'var(--neon-mint)' : '#eab308'
          }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: dbStatus.includes('Connected') ? 'var(--neon-mint)' : '#eab308' }}></span>
            <span>{dbStatus}</span>
          </div>

          <div style={{ fontSize: '0.82rem', color: '#cbd5e1' }}>
            <span style={{ color: '#94a3b8' }}>Logged in as: </span>
            <strong style={{ color: 'var(--neon-mint)' }}>{user?.email || 'admin@azssolutions.com'}</strong>
          </div>

          <Link
            to="/"
            style={{
              padding: '6px 12px',
              borderRadius: '6px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#ffffff',
              fontSize: '0.78rem',
              fontWeight: 600,
              textDecoration: 'none'
            }}
          >
            View Live Site ➔
          </Link>

          <button
            onClick={handleLogout}
            style={{
              padding: '6px 14px',
              borderRadius: '6px',
              background: 'rgba(239, 68, 68, 0.12)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              color: '#f87171',
              fontSize: '0.78rem',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            Sign Out
          </button>
        </div>
      </header>

      {/* Toast Notification */}
      {notification && (
        <div style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          padding: '12px 20px',
          borderRadius: '10px',
          background: notification.type === 'error' ? '#991b1b' : '#065f46',
          color: '#ffffff',
          fontWeight: 700,
          fontSize: '0.88rem',
          boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
          zIndex: 999
        }}>
          {notification.msg}
        </div>
      )}

      {/* Main Admin Body */}
      <div style={{ maxWidth: '1380px', margin: '0 auto', padding: '28px 24px' }}>
        {/* Navigation Tabs */}
        <div style={{
          display: 'flex',
          gap: '8px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          paddingBottom: '14px',
          marginBottom: '28px',
          overflowX: 'auto'
        }}>
          {[
            { id: 'overview', label: 'Overview & KPIs', count: null },
            { id: 'leads', label: 'Inbound Leads', count: leads.length },
            { id: 'marketplaces', label: 'Marketplaces Hub', count: marketplaces.length },
            { id: 'caseStudies', label: 'Case Studies', count: caseStudies.length },
            { id: 'blogs', label: 'Blogs & Playbooks', count: blogs.length }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '9px 18px',
                borderRadius: '8px',
                border: '1px solid',
                borderColor: activeTab === tab.id ? 'rgba(0, 245, 155, 0.4)' : 'rgba(255, 255, 255, 0.06)',
                background: activeTab === tab.id ? 'rgba(0, 245, 155, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                color: activeTab === tab.id ? 'var(--neon-mint)' : '#94a3b8',
                fontSize: '0.86rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap'
              }}
            >
              <span>{tab.label}</span>
              {tab.count !== null && (
                <span style={{
                  padding: '2px 7px',
                  borderRadius: '9999px',
                  background: activeTab === tab.id ? 'var(--neon-mint)' : 'rgba(255, 255, 255, 0.08)',
                  color: activeTab === tab.id ? '#04070b' : '#cbd5e1',
                  fontSize: '0.72rem',
                  fontWeight: 800
                }}>
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '60px 0', color: '#94a3b8' }}>
            <div style={{ fontSize: '1.8rem', marginBottom: '10px' }}>⏳</div>
            <div>Loading live database collections...</div>
          </div>
        ) : (
          <>
            {/* 1. OVERVIEW TAB */}
            {activeTab === 'overview' && (
              <div>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                  gap: '20px',
                  marginBottom: '32px'
                }}>
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(0, 245, 155, 0.25)',
                    borderRadius: '14px',
                    padding: '20px'
                  }}>
                    <div style={{ fontSize: '0.76rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Inbound Leads</div>
                    <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--neon-mint)', margin: '6px 0' }}>{leads.length}</div>
                    <div style={{ fontSize: '0.76rem', color: '#38bdf8' }}>
                      {leads.filter(l => l.status === 'New').length} pending review
                    </div>
                  </div>

                  <div style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(0, 210, 255, 0.25)',
                    borderRadius: '14px',
                    padding: '20px'
                  }}>
                    <div style={{ fontSize: '0.76rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Marketplace Platforms</div>
                    <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--neon-cyan)', margin: '6px 0' }}>{marketplaces.length}</div>
                    <div style={{ fontSize: '0.76rem', color: '#94a3b8' }}>Amazon KSA/USA, Noon, Trendyol</div>
                  </div>

                  <div style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(168, 85, 247, 0.25)',
                    borderRadius: '14px',
                    padding: '20px'
                  }}>
                    <div style={{ fontSize: '0.76rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Verified Case Studies</div>
                    <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#c084fc', margin: '6px 0' }}>{caseStudies.length}</div>
                    <div style={{ fontSize: '0.76rem', color: '#94a3b8' }}>Published with proof consoles</div>
                  </div>

                  <div style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(245, 158, 11, 0.25)',
                    borderRadius: '14px',
                    padding: '20px'
                  }}>
                    <div style={{ fontSize: '0.76rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Strategic Playbooks</div>
                    <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#fbbf24', margin: '6px 0' }}>{blogs.length}</div>
                    <div style={{ fontSize: '0.76rem', color: '#94a3b8' }}>Indexed research guides</div>
                  </div>
                </div>

                {/* Recent Leads Preview */}
                <div style={{
                  background: 'rgba(11, 17, 29, 0.8)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '14px',
                  padding: '24px',
                  marginBottom: '28px'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <h2 style={{ fontSize: '1.15rem', color: '#ffffff', margin: 0 }}>Latest Client Inquiries</h2>
                    <button
                      onClick={() => setActiveTab('leads')}
                      style={{ background: 'none', border: 'none', color: 'var(--neon-mint)', fontSize: '0.82rem', fontWeight: 700, cursor: 'pointer' }}
                    >
                      View All Leads ➔
                    </button>
                  </div>

                  {leads.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '30px 0', color: '#64748b' }}>
                      No leads received yet. Discovery bookings from the live site will appear here automatically.
                    </div>
                  ) : (
                    <div style={{ overflowX: 'auto' }}>
                      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                        <thead>
                          <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', textAlign: 'left', color: '#94a3b8' }}>
                            <th style={{ padding: '10px 12px' }}>Client</th>
                            <th style={{ padding: '10px 12px' }}>Channel Focus</th>
                            <th style={{ padding: '10px 12px' }}>Monthly Volume</th>
                            <th style={{ padding: '10px 12px' }}>Status</th>
                            <th style={{ padding: '10px 12px' }}>Received</th>
                          </tr>
                        </thead>
                        <tbody>
                          {leads.slice(0, 5).map(lead => (
                            <tr key={lead._id} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}>
                              <td style={{ padding: '12px' }}>
                                <div style={{ fontWeight: 700, color: '#ffffff' }}>{lead.name}</div>
                                <div style={{ fontSize: '0.76rem', color: '#94a3b8' }}>{lead.email} {lead.phone && `• ${lead.phone}`}</div>
                              </td>
                              <td style={{ padding: '12px', color: '#cbd5e1' }}>{lead.primaryChannel}</td>
                              <td style={{ padding: '12px', color: 'var(--neon-mint)', fontWeight: 700 }}>{lead.revenueTier}</td>
                              <td style={{ padding: '12px' }}>
                                <span style={{
                                  padding: '3px 8px',
                                  borderRadius: '6px',
                                  fontSize: '0.74rem',
                                  fontWeight: 700,
                                  background: lead.status === 'New' ? 'rgba(56, 189, 248, 0.15)' : 'rgba(0, 245, 155, 0.15)',
                                  color: lead.status === 'New' ? '#38bdf8' : 'var(--neon-mint)'
                                }}>
                                  {lead.status}
                                </span>
                              </td>
                              <td style={{ padding: '12px', color: '#64748b', fontSize: '0.78rem' }}>
                                {new Date(lead.createdAt).toLocaleDateString()}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* 2. LEADS TAB */}
            {activeTab === 'leads' && (
              <div style={{
                background: 'rgba(11, 17, 29, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '14px',
                padding: '24px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <div>
                    <h2 style={{ fontSize: '1.25rem', color: '#ffffff', margin: 0 }}>All Inbound Inquiries & Discovery Bookings</h2>
                    <p style={{ fontSize: '0.8rem', color: '#94a3b8', margin: '4px 0 0' }}>Manage submitted leads, change consultation status, or export client details.</p>
                  </div>
                </div>

                {leads.length === 0 ? (
                  <div style={{ textAlign: 'center', padding: '50px 0', color: '#64748b' }}>No leads in database yet.</div>
                ) : (
                  <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.84rem' }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', textAlign: 'left', color: '#94a3b8' }}>
                          <th style={{ padding: '12px' }}>Client & Contact</th>
                          <th style={{ padding: '12px' }}>Website / Brand</th>
                          <th style={{ padding: '12px' }}>Revenue Tier</th>
                          <th style={{ padding: '12px' }}>Primary Platform</th>
                          <th style={{ padding: '12px' }}>Target Markets</th>
                          <th style={{ padding: '12px' }}>Status</th>
                          <th style={{ padding: '12px' }}>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {leads.map(lead => (
                          <tr key={lead._id} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}>
                            <td style={{ padding: '12px' }}>
                              <div style={{ fontWeight: 700, color: '#ffffff' }}>{lead.name}</div>
                              <div style={{ fontSize: '0.78rem', color: 'var(--neon-cyan)' }}>{lead.email}</div>
                              {lead.phone && <div style={{ fontSize: '0.74rem', color: '#94a3b8' }}>{lead.phone}</div>}
                            </td>
                            <td style={{ padding: '12px', color: '#cbd5e1' }}>
                              {lead.website ? (
                                <a href={lead.website.startsWith('http') ? lead.website : `https://${lead.website}`} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--neon-mint)', textDecoration: 'none' }}>
                                  {lead.website}
                                </a>
                              ) : (
                                <span style={{ color: '#64748b' }}>—</span>
                              )}
                            </td>
                            <td style={{ padding: '12px', color: 'var(--neon-mint)', fontWeight: 700 }}>{lead.revenueTier}</td>
                            <td style={{ padding: '12px', color: '#cbd5e1' }}>{lead.primaryChannel}</td>
                            <td style={{ padding: '12px', color: '#94a3b8' }}>
                              {Array.isArray(lead.targetMarkets) ? lead.targetMarkets.join(', ') : lead.targetMarkets}
                            </td>
                            <td style={{ padding: '12px' }}>
                              <select
                                value={lead.status || 'New'}
                                onChange={(e) => handleUpdateLeadStatus(lead._id, e.target.value)}
                                style={{
                                  background: 'rgba(255, 255, 255, 0.06)',
                                  border: '1px solid rgba(255, 255, 255, 0.15)',
                                  borderRadius: '6px',
                                  color: '#ffffff',
                                  padding: '4px 8px',
                                  fontSize: '0.76rem',
                                  fontWeight: 700,
                                  cursor: 'pointer'
                                }}
                              >
                                <option value="New" style={{ background: '#0b111d' }}>New</option>
                                <option value="Contacted" style={{ background: '#0b111d' }}>Contacted</option>
                                <option value="Audit Prepared" style={{ background: '#0b111d' }}>Audit Prepared</option>
                                <option value="Converted" style={{ background: '#0b111d' }}>Converted</option>
                              </select>
                            </td>
                            <td style={{ padding: '12px' }}>
                              <button
                                onClick={() => handleDeleteLead(lead._id)}
                                style={{
                                  background: 'rgba(239, 68, 68, 0.1)',
                                  border: '1px solid rgba(239, 68, 68, 0.25)',
                                  color: '#f87171',
                                  borderRadius: '6px',
                                  padding: '4px 8px',
                                  fontSize: '0.74rem',
                                  cursor: 'pointer'
                                }}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {/* 3. MARKETPLACES TAB */}
            {activeTab === 'marketplaces' && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <div>
                    <h2 style={{ fontSize: '1.25rem', color: '#ffffff', margin: 0 }}>Marketplaces & Platform Consoles</h2>
                    <p style={{ fontSize: '0.8rem', color: '#94a3b8', margin: '4px 0 0' }}>Manage Amazon, Noon, Trendyol card copy, verified proof images, and highlight metrics.</p>
                  </div>
                  <button
                    onClick={() => setEditItem({
                      type: 'marketplace',
                      isNew: true,
                      data: {
                        slug: '',
                        name: '',
                        sub: '',
                        badge: 'Official Partner',
                        buttonText: 'Explore Hub',
                        image: '/assets/homemaster_amazon_dashboard.svg',
                        metrics: { highlight: '', sub: '', volume: '' },
                        features: ['Feature 1', 'Feature 2']
                      }
                    })}
                    className="btn btn-primary"
                    style={{ padding: '8px 16px', fontSize: '0.84rem' }}
                  >
                    + Add New Platform
                  </button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '22px' }}>
                  {marketplaces.map(p => (
                    <div key={p._id || p.slug} style={{
                      background: 'rgba(11, 17, 29, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '14px',
                      padding: '20px',
                      display: 'flex',
                      flexDirection: 'column'
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                        <span style={{ fontSize: '1.4rem' }}>{p.icon}</span>
                        <span style={{
                          padding: '2px 8px',
                          borderRadius: '6px',
                          background: 'rgba(0, 245, 155, 0.1)',
                          border: '1px solid rgba(0, 245, 155, 0.25)',
                          color: 'var(--neon-mint)',
                          fontSize: '0.72rem',
                          fontWeight: 700
                        }}>
                          {p.badge}
                        </span>
                      </div>

                      {/* Image Preview */}
                      {p.image && (
                        <div style={{
                          height: '140px',
                          borderRadius: '8px',
                          overflow: 'hidden',
                          marginBottom: '14px',
                          border: '1px solid rgba(255, 255, 255, 0.06)'
                        }}>
                          <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                      )}

                      <h3 style={{ fontSize: '1.05rem', color: '#ffffff', margin: '0 0 4px' }}>{p.name}</h3>
                      <div style={{ fontSize: '0.78rem', color: 'var(--neon-cyan)', marginBottom: '10px' }}>{p.sub}</div>

                      {/* Metric Preview */}
                      <div style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        borderRadius: '8px',
                        padding: '10px 14px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '14px'
                      }}>
                        <div>
                          <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--neon-mint)' }}>{p.metrics?.highlight || '—'}</div>
                          <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>{p.metrics?.sub || 'Metric'}</div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#ffffff' }}>{p.metrics?.volume || '—'}</div>
                          <div style={{ fontSize: '0.68rem', color: '#64748b' }}>Volume</div>
                        </div>
                      </div>

                      <div style={{ marginTop: 'auto', display: 'flex', gap: '8px' }}>
                        <button
                          onClick={() => setEditItem({ type: 'marketplace', isNew: false, data: p })}
                          style={{
                            flex: 1,
                            padding: '8px',
                            background: 'rgba(0, 245, 155, 0.12)',
                            border: '1px solid rgba(0, 245, 155, 0.3)',
                            color: 'var(--neon-mint)',
                            borderRadius: '6px',
                            fontSize: '0.78rem',
                            fontWeight: 700,
                            cursor: 'pointer'
                          }}
                        >
                          Edit Data & Console
                        </button>
                        <button
                          onClick={() => handleDeleteItem('marketplace', p._id || p.slug)}
                          style={{
                            padding: '8px 12px',
                            background: 'rgba(239, 68, 68, 0.1)',
                            border: '1px solid rgba(239, 68, 68, 0.25)',
                            color: '#f87171',
                            borderRadius: '6px',
                            fontSize: '0.78rem',
                            cursor: 'pointer'
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. CASE STUDIES TAB */}
            {activeTab === 'caseStudies' && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <div>
                    <h2 style={{ fontSize: '1.25rem', color: '#ffffff', margin: 0 }}>Client Case Studies & Verified Results</h2>
                    <p style={{ fontSize: '0.8rem', color: '#94a3b8', margin: '4px 0 0' }}>Manage client growth stories, stats, quotes, and proof images.</p>
                  </div>
                  <button
                    onClick={() => setEditItem({
                      type: 'caseStudy',
                      isNew: true,
                      data: {
                        slug: '',
                        title: '',
                        category: '',
                        region: 'GCC & Global',
                        platforms: ['Amazon UAE', 'Amazon Saudi'],
                        image: '/assets/homemaster_case_study.jpg',
                        metrics: { salesGrowth: '+100%', sevenDayRevenue: '$35K', roas: '6.0x', acos: '8%' },
                        summary: '',
                        highlightQuote: ''
                      }
                    })}
                    className="btn btn-primary"
                    style={{ padding: '8px 16px', fontSize: '0.84rem' }}
                  >
                    + Add New Case Study
                  </button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '22px' }}>
                  {caseStudies.map(cs => (
                    <div key={cs._id || cs.slug} style={{
                      background: 'rgba(11, 17, 29, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '14px',
                      padding: '20px',
                      display: 'flex',
                      flexDirection: 'column'
                    }}>
                      {cs.image && (
                        <div style={{ height: '140px', borderRadius: '8px', overflow: 'hidden', marginBottom: '14px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                          <img src={cs.image} alt={cs.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                      )}

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                        <span style={{ fontSize: '0.78rem', color: 'var(--neon-mint)', fontWeight: 700 }}>{cs.metrics?.salesGrowth || '+100%'} Growth</span>
                        <span style={{ fontSize: '0.74rem', color: '#94a3b8' }}>{cs.region}</span>
                      </div>

                      <h3 style={{ fontSize: '1.05rem', color: '#ffffff', margin: '0 0 6px' }}>{cs.title}</h3>
                      <p style={{ fontSize: '0.82rem', color: '#94a3b8', margin: '0 0 14px' }}>{cs.summary}</p>

                      <div style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        borderRadius: '8px',
                        padding: '10px 14px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: '14px'
                      }}>
                        <div>
                          <div style={{ fontSize: '0.68rem', color: '#94a3b8', textTransform: 'uppercase' }}>Volume</div>
                          <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--neon-mint)' }}>{cs.metrics?.sevenDayRevenue}</div>
                        </div>
                        <div>
                          <div style={{ fontSize: '0.68rem', color: '#94a3b8', textTransform: 'uppercase' }}>ROAS</div>
                          <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#ffffff' }}>{cs.metrics?.roas}</div>
                        </div>
                      </div>

                      <div style={{ marginTop: 'auto', display: 'flex', gap: '8px' }}>
                        <button
                          onClick={() => setEditItem({ type: 'caseStudy', isNew: false, data: cs })}
                          style={{
                            flex: 1,
                            padding: '8px',
                            background: 'rgba(0, 245, 155, 0.12)',
                            border: '1px solid rgba(0, 245, 155, 0.3)',
                            color: 'var(--neon-mint)',
                            borderRadius: '6px',
                            fontSize: '0.78rem',
                            fontWeight: 700,
                            cursor: 'pointer'
                          }}
                        >
                          Edit Case Study
                        </button>
                        <button
                          onClick={() => handleDeleteItem('caseStudy', cs._id || cs.slug)}
                          style={{
                            padding: '8px 12px',
                            background: 'rgba(239, 68, 68, 0.1)',
                            border: '1px solid rgba(239, 68, 68, 0.25)',
                            color: '#f87171',
                            borderRadius: '6px',
                            fontSize: '0.78rem',
                            cursor: 'pointer'
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 5. BLOGS TAB */}
            {activeTab === 'blogs' && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <div>
                    <h2 style={{ fontSize: '1.25rem', color: '#ffffff', margin: 0 }}>Strategic Playbooks & Insights</h2>
                    <p style={{ fontSize: '0.8rem', color: '#94a3b8', margin: '4px 0 0' }}>Manage published research guides, target SEO keywords, and takeaways.</p>
                  </div>
                  <button
                    onClick={() => setEditItem({
                      type: 'blog',
                      isNew: true,
                      data: {
                        slug: '',
                        title: '',
                        badge: 'Strategic Playbook',
                        targetKeyword: '',
                        readTime: '6 min read',
                        date: '2026',
                        author: 'AZS Research Team',
                        summary: '',
                        takeaways: ['Takeaway 1', 'Takeaway 2']
                      }
                    })}
                    className="btn btn-primary"
                    style={{ padding: '8px 16px', fontSize: '0.84rem' }}
                  >
                    + Write New Playbook
                  </button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {blogs.map(b => (
                    <div key={b._id || b.slug} style={{
                      background: 'rgba(11, 17, 29, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '12px',
                      padding: '18px 22px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      gap: '14px'
                    }}>
                      <div style={{ flex: 1, minWidth: '280px' }}>
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '6px' }}>
                          <span style={{
                            padding: '2px 8px',
                            borderRadius: '6px',
                            background: 'rgba(0, 210, 255, 0.1)',
                            border: '1px solid rgba(0, 210, 255, 0.25)',
                            color: 'var(--neon-cyan)',
                            fontSize: '0.72rem',
                            fontWeight: 700
                          }}>
                            {b.badge}
                          </span>
                          <span style={{ fontSize: '0.74rem', color: '#94a3b8' }}>{b.date} • {b.readTime}</span>
                        </div>
                        <h3 style={{ fontSize: '1rem', color: '#ffffff', margin: '0 0 6px' }}>{b.title}</h3>
                        <p style={{ fontSize: '0.82rem', color: '#94a3b8', margin: 0 }}>{b.summary}</p>
                      </div>

                      <div style={{ display: 'flex', gap: '8px' }}>
                        <button
                          onClick={() => setEditItem({ type: 'blog', isNew: false, data: b })}
                          style={{
                            padding: '8px 14px',
                            background: 'rgba(0, 245, 155, 0.12)',
                            border: '1px solid rgba(0, 245, 155, 0.3)',
                            color: 'var(--neon-mint)',
                            borderRadius: '6px',
                            fontSize: '0.78rem',
                            fontWeight: 700,
                            cursor: 'pointer'
                          }}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteItem('blog', b._id || b.slug)}
                          style={{
                            padding: '8px 12px',
                            background: 'rgba(239, 68, 68, 0.1)',
                            border: '1px solid rgba(239, 68, 68, 0.25)',
                            color: '#f87171',
                            borderRadius: '6px',
                            fontSize: '0.78rem',
                            cursor: 'pointer'
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* EDIT / CREATE MODAL */}
      {editItem && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px'
        }}>
          <div style={{
            width: '100%',
            maxWidth: '560px',
            maxHeight: '90vh',
            overflowY: 'auto',
            background: 'rgba(11, 17, 29, 0.98)',
            border: '1px solid rgba(0, 245, 155, 0.3)',
            borderRadius: '16px',
            padding: '28px',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.9)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '1.2rem', color: '#ffffff', margin: 0 }}>
                {editItem.isNew ? 'Add' : 'Edit'} {editItem.type === 'marketplace' ? 'Marketplace' : editItem.type === 'caseStudy' ? 'Case Study' : 'Playbook'}
              </h3>
              <button
                onClick={() => setEditItem(null)}
                style={{ background: 'none', border: 'none', color: '#94a3b8', fontSize: '1.2rem', cursor: 'pointer' }}
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveItem} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', marginBottom: '4px' }}>Slug (Unique ID)</label>
                <input
                  type="text"
                  value={editItem.data.slug || ''}
                  onChange={(e) => setEditItem({ ...editItem, data: { ...editItem.data, slug: e.target.value } })}
                  required
                  disabled={!editItem.isNew}
                  style={{ width: '100%', padding: '10px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', color: '#ffffff' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', marginBottom: '4px' }}>Title / Name</label>
                <input
                  type="text"
                  value={editItem.data.name || editItem.data.title || ''}
                  onChange={(e) => {
                    const field = editItem.type === 'marketplace' ? 'name' : 'title';
                    setEditItem({ ...editItem, data: { ...editItem.data, [field]: e.target.value } });
                  }}
                  required
                  style={{ width: '100%', padding: '10px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', color: '#ffffff' }}
                />
              </div>

              {/* Subtitle / Sub */}
              {editItem.type === 'marketplace' && (
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', marginBottom: '4px' }}>Subtitle / Corridor</label>
                  <input
                    type="text"
                    value={editItem.data.sub || ''}
                    onChange={(e) => setEditItem({ ...editItem, data: { ...editItem.data, sub: e.target.value } })}
                    style={{ width: '100%', padding: '10px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', color: '#ffffff' }}
                  />
                </div>
              )}

              {/* Visual Image & Console Upload / Picker */}
              {editItem.type !== 'blog' && (
                <div style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '10px',
                  padding: '14px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#ffffff' }}>
                        Console / Showcase Image
                      </label>
                      <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
                        Upload screenshot from your device or pick from existing console library
                      </span>
                    </div>
                    {editItem.data.image && (
                      <button
                        type="button"
                        onClick={() => setEditItem(prev => ({ ...prev, data: { ...prev.data, image: '' } }))}
                        style={{
                          background: 'rgba(239, 68, 68, 0.1)',
                          border: '1px solid rgba(239, 68, 68, 0.25)',
                          color: '#f87171',
                          padding: '4px 8px',
                          borderRadius: '6px',
                          fontSize: '0.72rem',
                          cursor: 'pointer'
                        }}
                      >
                        ✕ Remove
                      </button>
                    )}
                  </div>

                  {/* Hidden File Input */}
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/png,image/jpeg,image/webp,image/svg+xml"
                    onChange={handleFileUpload}
                    style={{ display: 'none' }}
                  />

                  {/* Image Live Preview / Drop Box */}
                  <div
                    onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); }}
                    onDrop={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      if (e.dataTransfer.files?.[0]) {
                        handleFileUpload({ target: { files: e.dataTransfer.files } });
                      }
                    }}
                    style={{
                      position: 'relative',
                      width: '100%',
                      minHeight: '160px',
                      borderRadius: '8px',
                      border: editItem.data.image
                        ? '1px solid rgba(0, 245, 155, 0.35)'
                        : '2px dashed rgba(255, 255, 255, 0.15)',
                      background: editItem.data.image
                        ? 'rgba(0, 0, 0, 0.4)'
                        : 'rgba(255, 255, 255, 0.02)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '12px',
                      transition: 'all 0.2s ease',
                      overflow: 'hidden'
                    }}
                  >
                    {editItem.data.image ? (
                      <div style={{ position: 'relative', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          background: 'rgba(0, 245, 155, 0.15)',
                          border: '1px solid rgba(0, 245, 155, 0.4)',
                          color: 'var(--neon-mint)',
                          padding: '2px 8px',
                          borderRadius: '4px',
                          fontSize: '0.68rem',
                          fontWeight: 700
                        }}>
                          ✓ Active Image
                        </div>
                        <img
                          src={editItem.data.image}
                          alt="Console Preview"
                          style={{
                            maxHeight: '150px',
                            maxWidth: '100%',
                            objectFit: 'contain',
                            borderRadius: '6px',
                            marginTop: '20px'
                          }}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.style.opacity = '0.3';
                          }}
                        />
                        <div style={{ marginTop: '8px', fontSize: '0.72rem', color: '#94a3b8' }}>
                          {editItem.data.image.split('/').pop()}
                        </div>
                      </div>
                    ) : (
                      <div style={{ textAlign: 'center', padding: '16px' }}>
                        <div style={{ color: 'var(--neon-mint)', marginBottom: '8px', display: 'flex', justifyContent: 'center' }}>
                          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                            <circle cx="8.5" cy="8.5" r="1.5" />
                            <polyline points="21 15 16 10 5 21" />
                          </svg>
                        </div>
                        <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#ffffff', marginBottom: '4px' }}>
                          No Console Image Selected
                        </div>
                        <div style={{ fontSize: '0.74rem', color: '#64748b', maxWidth: '300px' }}>
                          Drag and drop an image here, upload from your computer, or choose from the visual library below.
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Actions: Upload & Gallery Toggle */}
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <button
                      type="button"
                      disabled={uploading}
                      onClick={() => fileInputRef.current?.click()}
                      style={{
                        flex: 1,
                        minWidth: '160px',
                        padding: '10px 14px',
                        background: 'linear-gradient(135deg, rgba(0, 245, 155, 0.15), rgba(0, 217, 245, 0.15))',
                        border: '1px solid rgba(0, 245, 155, 0.4)',
                        color: 'var(--neon-mint)',
                        borderRadius: '8px',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        cursor: uploading ? 'wait' : 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        transition: 'all 0.2s'
                      }}
                    >
                      {uploading ? 'Uploading Image...' : 'Upload from Computer'}
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        if (!galleryImages.length) fetchGallery();
                        setShowGallery(prev => !prev);
                      }}
                      style={{
                        padding: '10px 14px',
                        background: showGallery ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        color: '#cbd5e1',
                        borderRadius: '8px',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      {showGallery ? 'Hide Gallery' : `Choose from Gallery (${galleryImages.length || '...'})`}
                    </button>
                  </div>

                  {/* Visual Gallery Selection Grid */}
                  {showGallery && (
                    <div style={{
                      background: 'rgba(0, 0, 0, 0.3)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '8px',
                      padding: '12px'
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <span style={{ fontSize: '0.74rem', fontWeight: 700, color: '#94a3b8' }}>
                          Select Console Thumbnail (Click to apply)
                        </span>
                        <button
                          type="button"
                          onClick={fetchGallery}
                          style={{ background: 'none', border: 'none', color: 'var(--neon-cyan)', fontSize: '0.72rem', cursor: 'pointer', textDecoration: 'underline' }}
                        >
                          Refresh
                        </button>
                      </div>

                      {galleryImages.length === 0 ? (
                        <div style={{ textAlign: 'center', padding: '16px', color: '#64748b', fontSize: '0.75rem' }}>
                          Loading gallery images...
                        </div>
                      ) : (
                        <div style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))',
                          gap: '8px',
                          maxHeight: '220px',
                          overflowY: 'auto',
                          paddingRight: '4px'
                        }}>
                          {galleryImages.map(img => {
                            const isSelected = editItem.data.image === img.url;
                            const displayName = img.filename
                              .replace(/\.(png|jpg|jpeg|svg|webp)$/i, '')
                              .replace(/^[\d_]+/, '')
                              .replace(/[_-]/g, ' ');
                            return (
                              <div
                                key={img.url}
                                onClick={() => setEditItem(prev => ({
                                  ...prev,
                                  data: { ...prev.data, image: img.url }
                                }))}
                                style={{
                                  position: 'relative',
                                  cursor: 'pointer',
                                  borderRadius: '6px',
                                  overflow: 'hidden',
                                  border: isSelected ? '2px solid var(--neon-mint)' : '1px solid rgba(255, 255, 255, 0.08)',
                                  background: isSelected ? 'rgba(0, 245, 155, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                                  padding: '4px',
                                  display: 'flex',
                                  flexDirection: 'column',
                                  transition: 'all 0.15s ease'
                                }}
                              >
                                <div style={{ height: '60px', width: '100%', borderRadius: '4px', overflow: 'hidden', background: '#070b14', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                  <img
                                    src={img.url}
                                    alt={img.filename}
                                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                                    loading="lazy"
                                  />
                                </div>
                                <div style={{
                                  fontSize: '0.64rem',
                                  color: isSelected ? 'var(--neon-mint)' : '#94a3b8',
                                  marginTop: '4px',
                                  whiteSpace: 'nowrap',
                                  overflow: 'hidden',
                                  textOverflow: 'ellipsis',
                                  textTransform: 'capitalize'
                                }}>
                                  {displayName}
                                </div>
                                {isSelected && (
                                  <div style={{
                                    position: 'absolute',
                                    top: '4px',
                                    right: '4px',
                                    background: 'var(--neon-mint)',
                                    color: '#000000',
                                    borderRadius: '50%',
                                    width: '14px',
                                    height: '14px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '9px',
                                    fontWeight: 900
                                  }}>
                                    ✓
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Metrics (Marketplace or Case Study) */}
              {editItem.type === 'marketplace' && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.72rem', color: '#94a3b8', marginBottom: '4px' }}>Highlight (e.g. 14.43x)</label>
                    <input
                      type="text"
                      value={editItem.data.metrics?.highlight || ''}
                      onChange={(e) => setEditItem({
                        ...editItem,
                        data: { ...editItem.data, metrics: { ...editItem.data.metrics, highlight: e.target.value } }
                      })}
                      style={{ width: '100%', padding: '8px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', color: '#ffffff' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.72rem', color: '#94a3b8', marginBottom: '4px' }}>Sub Label</label>
                    <input
                      type="text"
                      value={editItem.data.metrics?.sub || ''}
                      onChange={(e) => setEditItem({
                        ...editItem,
                        data: { ...editItem.data, metrics: { ...editItem.data.metrics, sub: e.target.value } }
                      })}
                      style={{ width: '100%', padding: '8px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', color: '#ffffff' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.72rem', color: '#94a3b8', marginBottom: '4px' }}>Volume (e.g. $48.9K)</label>
                    <input
                      type="text"
                      value={editItem.data.metrics?.volume || ''}
                      onChange={(e) => setEditItem({
                        ...editItem,
                        data: { ...editItem.data, metrics: { ...editItem.data.metrics, volume: e.target.value } }
                      })}
                      style={{ width: '100%', padding: '8px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', color: '#ffffff' }}
                    />
                  </div>
                </div>
              )}

              {/* Case Study Metrics */}
              {editItem.type === 'caseStudy' && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.72rem', color: '#94a3b8', marginBottom: '4px' }}>Sales Growth (e.g. +11,963%)</label>
                    <input
                      type="text"
                      value={editItem.data.metrics?.salesGrowth || ''}
                      onChange={(e) => setEditItem({
                        ...editItem,
                        data: { ...editItem.data, metrics: { ...editItem.data.metrics, salesGrowth: e.target.value } }
                      })}
                      style={{ width: '100%', padding: '8px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', color: '#ffffff' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.72rem', color: '#94a3b8', marginBottom: '4px' }}>Revenue (e.g. $32.2K)</label>
                    <input
                      type="text"
                      value={editItem.data.metrics?.sevenDayRevenue || ''}
                      onChange={(e) => setEditItem({
                        ...editItem,
                        data: { ...editItem.data, metrics: { ...editItem.data.metrics, sevenDayRevenue: e.target.value } }
                      })}
                      style={{ width: '100%', padding: '8px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', color: '#ffffff' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.72rem', color: '#94a3b8', marginBottom: '4px' }}>ROAS (e.g. 14.43x)</label>
                    <input
                      type="text"
                      value={editItem.data.metrics?.roas || ''}
                      onChange={(e) => setEditItem({
                        ...editItem,
                        data: { ...editItem.data, metrics: { ...editItem.data.metrics, roas: e.target.value } }
                      })}
                      style={{ width: '100%', padding: '8px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', color: '#ffffff' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.72rem', color: '#94a3b8', marginBottom: '4px' }}>ACOS / Units (e.g. 6.93%)</label>
                    <input
                      type="text"
                      value={editItem.data.metrics?.acos || ''}
                      onChange={(e) => setEditItem({
                        ...editItem,
                        data: { ...editItem.data, metrics: { ...editItem.data.metrics, acos: e.target.value } }
                      })}
                      style={{ width: '100%', padding: '8px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', color: '#ffffff' }}
                    />
                  </div>
                </div>
              )}

              {/* Description / Summary */}
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', marginBottom: '4px' }}>Summary / Description</label>
                <textarea
                  rows="3"
                  value={editItem.data.summary || editItem.data.desc || ''}
                  onChange={(e) => {
                    const field = editItem.type === 'marketplace' ? 'desc' : 'summary';
                    setEditItem({ ...editItem, data: { ...editItem.data, [field]: e.target.value } });
                  }}
                  required
                  style={{ width: '100%', padding: '10px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', color: '#ffffff', resize: 'vertical' }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '10px' }}>
                <button
                  type="button"
                  onClick={() => setEditItem(null)}
                  style={{ padding: '10px 18px', borderRadius: '6px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#cbd5e1', cursor: 'pointer' }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ padding: '10px 22px', fontSize: '0.88rem' }}
                >
                  Save Changes ➔
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
