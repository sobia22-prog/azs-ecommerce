import React, { useState } from 'react';
import { useRouter, Link } from '../../Router';
import useSEO from '../../hooks/useSEO';

export default function AdminLoginPage() {
  const { navigate } = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useSEO({
    title: 'Super Admin Login | AZS Solutions Console',
    description: 'Secure management portal for AZS Solutions executive staff.',
    canonicalPath: '/admin/login'
  });

  const handleQuickFill = () => {
    setEmail('admin@azssolutions.com');
    setPassword('AZSAdmin2026!Secure');
    setError('');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      let data = null;
      try {
        data = await res.json();
      } catch (jsonErr) {
        throw new Error(`Server returned ${res.status} (${res.statusText || 'Endpoint unavailable'}). Please verify your backend deployment.`);
      }

      if (!res.ok || !data || !data.success) {
        throw new Error(data?.message || 'Login failed. Please check credentials.');
      }

      localStorage.setItem('azs_admin_token', data.token);
      localStorage.setItem('azs_admin_user', JSON.stringify(data.user));
      navigate('/admin');
    } catch (err) {
      setError(err.message || 'Network error connecting to backend API.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'radial-gradient(ellipse at top, #0f1c2e 0%, #06090e 100%)',
      padding: '24px',
      position: 'relative'
    }}>
      {/* Background Ambience */}
      <div style={{
        position: 'absolute',
        width: '450px',
        height: '450px',
        background: 'radial-gradient(circle, rgba(0, 245, 155, 0.08) 0%, transparent 70%)',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        pointerEvents: 'none'
      }}></div>

      <div style={{
        width: '100%',
        maxWidth: '440px',
        background: 'rgba(11, 17, 29, 0.95)',
        border: '1px solid rgba(0, 245, 155, 0.25)',
        borderRadius: '18px',
        padding: '36px 32px',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 35px rgba(0, 245, 155, 0.08)',
        backdropFilter: 'blur(20px)',
        position: 'relative',
        zIndex: 2
      }}>
        {/* Header Branding */}
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '48px',
            height: '48px',
            borderRadius: '12px',
            background: 'rgba(0, 245, 155, 0.1)',
            border: '1px solid rgba(0, 245, 155, 0.3)',
            color: 'var(--neon-mint)',
            fontSize: '1.4rem',
            marginBottom: '14px'
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          </div>
          <h1 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
            AZS Solutions <span style={{ color: 'var(--neon-mint)' }}>Console</span>
          </h1>
          <p style={{ fontSize: '0.82rem', color: '#94a3b8', marginTop: '6px', margin: 0 }}>
            Super Admin Control & Operations Dashboard
          </p>
        </div>

        {/* Error Banner */}
        {error && (
          <div style={{
            background: 'rgba(239, 68, 68, 0.12)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            borderRadius: '8px',
            padding: '10px 14px',
            color: '#f87171',
            fontSize: '0.84rem',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ flexShrink: 0 }}>
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Super Admin Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@azssolutions.com"
              required
              style={{
                width: '100%',
                padding: '12px 14px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '8px',
                color: '#ffffff',
                fontSize: '0.9rem',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
              <label style={{ fontSize: '0.78rem', fontWeight: 700, color: '#cbd5e1', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Secure Password
              </label>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--neon-cyan)',
                  fontSize: '0.76rem',
                  cursor: 'pointer',
                  padding: 0
                }}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••••••"
              required
              style={{
                width: '100%',
                padding: '12px 14px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '8px',
                color: '#ffffff',
                fontSize: '0.9rem',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary"
            style={{
              width: '100%',
              justifyContent: 'center',
              padding: '12px',
              fontSize: '0.95rem',
              fontWeight: 800,
              marginTop: '8px',
              opacity: loading ? 0.7 : 1,
              cursor: loading ? 'not-allowed' : 'pointer'
            }}
          >
            {loading ? 'Authenticating...' : 'Sign In to Super Admin Dashboard ➔'}
          </button>
        </form>

        {/* Quick-Fill Seed Helper */}
        <div style={{
          marginTop: '22px',
          padding: '12px',
          background: 'rgba(0, 245, 155, 0.04)',
          border: '1px dashed rgba(0, 245, 155, 0.25)',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '0.76rem', color: '#94a3b8', marginBottom: '8px' }}>
            Seeded Super Admin Credentials:
          </div>
          <button
            type="button"
            onClick={handleQuickFill}
            style={{
              background: 'rgba(0, 245, 155, 0.12)',
              border: '1px solid rgba(0, 245, 155, 0.3)',
              color: 'var(--neon-mint)',
              borderRadius: '6px',
              padding: '6px 12px',
              fontSize: '0.78rem',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            Auto-Fill Admin Credentials
          </button>
        </div>

        {/* Back Link */}
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Link to="/" style={{ color: '#64748b', fontSize: '0.82rem', textDecoration: 'none' }}>
            ← Back to Public Website
          </Link>
        </div>
      </div>
    </div>
  );
}
