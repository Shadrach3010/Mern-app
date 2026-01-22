import React, { useState } from 'react';
import { useAuth } from '../auth/AuthContext';

const Dashboard = () => {
    const { user, logout, updateProfile, deleteAccount } = useAuth();
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: user?.name || '',
        email: user?.email || '',
        password: ''
    });
    const [message, setMessage] = useState({ type: '', text: '' });
    const [loading, setLoading] = useState(false);

    const stats = [
        { label: 'Security Level', value: 'Strong', trend: 'Verified', trendClass: 'up' },
        { label: 'Active Sessions', value: '2', trend: '+1 today', trendClass: 'up' },
        { label: 'Account Age', value: '12d', trend: 'Growing', trendClass: 'up' },
        { label: 'Data Sync', value: 'Live', trend: '100%', trendClass: 'up' },
    ];

    const activities = [
        { desc: 'Logged in from New Device', time: '2 hours ago', status: 'Security' },
        { desc: 'Profile details updated', time: 'Yesterday', status: 'Account' },
        { desc: 'Password changed successfully', time: '3 days ago', status: 'Security' },
        { desc: 'Email verification completed', time: '1 week ago', status: 'Identity' },
    ];

    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage({ type: '', text: '' });
        try {
            await updateProfile(formData);
            setMessage({ type: 'success', text: 'Profile updated successfully!' });
            setIsEditing(false);
        } catch (err) {
            setMessage({ type: 'error', text: err.response?.data?.message || 'Failed to update profile' });
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
            try {
                await deleteAccount();
            } catch (err) {
                setMessage({ type: 'error', text: 'Failed to delete account' });
            }
        }
    };

    return (
        <div className="dashboard-container glass">
            <div className="dashboard-header">
                <h2>Dashboard Overview</h2>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button onClick={() => setIsEditing(!isEditing)} className="action-btn">
                        {isEditing ? 'Cancel' : 'Edit Profile'}
                    </button>
                    <button onClick={logout} className="logout-btn">Logout</button>
                </div>
            </div>

            {message.text && (
                <div className={message.type === 'success' ? 'success-message' : 'error-message'} style={{
                    backgroundColor: message.type === 'success' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                    border: `1px solid ${message.type === 'success' ? 'var(--success)' : 'var(--error)'}`,
                    color: message.type === 'success' ? '#6ee7b7' : '#fca5a5',
                    padding: '0.8rem',
                    borderRadius: '8px',
                    marginBottom: '1.5rem',
                    textAlign: 'center'
                }}>
                    {message.text}
                </div>
            )}

            {isEditing ? (
                <div className="user-profile glass" style={{ marginBottom: '2rem' }}>
                    <h3>Edit Profile</h3>
                    <form onSubmit={handleUpdate} style={{ marginTop: '1rem' }}>
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>New Password (leave blank to keep current)</label>
                            <input
                                type="password"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            />
                        </div>
                        <button type="submit" disabled={loading} className="action-btn" style={{ background: 'var(--primary)', width: 'auto' }}>
                            {loading ? 'Saving...' : 'Save Changes'}
                        </button>
                    </form>
                </div>
            ) : (
                <div className="user-profile">
                    <h3>Welcome back, {user?.name || user?.email}!</h3>
                    <p><strong>Email:</strong> {user?.email}</p>
                    <p>Your workspace is ready. Here is a summary of your activity.</p>
                </div>
            )}

            <div className="stats-grid">
                {stats.map((stat, index) => (
                    <div key={index} className="stat-card glass">
                        <span className="label">{stat.label}</span>
                        <span className="value">{stat.value}</span>
                        <span className={`trend ${stat.trendClass}`}>{stat.trend}</span>
                    </div>
                ))}
            </div>

            <div className="activity-section">
                <h3>Recent Activity</h3>
                <div className="activity-list">
                    {activities.map((activity, index) => (
                        <div key={index} className="activity-item">
                            <div className="activity-info">
                                <span className="activity-desc">{activity.desc}</span>
                                <span className="activity-time">{activity.time}</span>
                            </div>
                            <span className="activity-status">{activity.status}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="quick-actions" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button className="action-btn">Security Settings</button>
                    <button className="action-btn">Export Data</button>
                </div>
                <button onClick={handleDelete} className="logout-btn" style={{ background: 'rgba(239, 68, 68, 0.05)', color: '#fca5a5', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                    Delete Account
                </button>
            </div>
        </div>
    );
};

export default Dashboard;
