import { useState } from 'react'
import { toast } from 'react-toastify'
import PageHeader from '../../ui/PageHeader'
import PanelCard from '../../ui/PanelCard'

/* Shared profile/settings panel — used by both admin and customer dashboards. */
function SettingsPanel({ role = 'admin', profile }) {
  const [form, setForm] = useState({
    name: profile?.name || '',
    email: profile?.email || '',
    phone: '+91 98765 43210',
    country: 'India',
    bio: '',
  })

  const update = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    toast.success('Profile saved (static demo)')
  }

  return (
    <div className="panel">
      <PageHeader
        eyebrow={role === 'admin' ? 'Admin' : 'Account'}
        title="Settings"
        description="Update your profile details and preferences."
        showSearch={false}
      />

      <div className="dash__grid dash__grid--split">
        <PanelCard title="Profile Information" subtitle="This data is static for now">
          <form className="dash-form" onSubmit={handleSubmit}>
            <div className="dash-field">
              <label htmlFor="dash-name">Full Name</label>
              <input id="dash-name" type="text" value={form.name} onChange={update('name')} />
            </div>

            <div className="dash-field">
              <label htmlFor="dash-email">Email Address</label>
              <input id="dash-email" type="email" value={form.email} onChange={update('email')} />
            </div>

            <div className="dash-field-row">
              <div className="dash-field">
                <label htmlFor="dash-phone">Phone</label>
                <input id="dash-phone" type="text" value={form.phone} onChange={update('phone')} />
              </div>
              <div className="dash-field">
                <label htmlFor="dash-country">Country</label>
                <input id="dash-country" type="text" value={form.country} onChange={update('country')} />
              </div>
            </div>

            <div className="dash-field">
              <label htmlFor="dash-bio">Bio</label>
              <textarea id="dash-bio" rows="3" placeholder="Tell us a little about yourself…" value={form.bio} onChange={update('bio')} />
            </div>

            <button type="submit" className="dash-btn dash-btn--primary">Save Changes</button>
          </form>
        </PanelCard>

        <PanelCard title="Preferences" subtitle="Notifications and security">
          <ul className="toggle-list">
            {[
              { id: 'email', label: 'Email notifications', text: 'Order updates and receipts' },
              { id: 'promo', label: 'Promotions', text: 'Deals and seasonal offers' },
              { id: 'security', label: 'Two-factor authentication', text: 'Extra login protection' },
            ].map((item) => (
              <li className="toggle-list__item" key={item.id}>
                <div>
                  <strong>{item.label}</strong>
                  <p>{item.text}</p>
                </div>
                <label className="switch">
                  <input type="checkbox" defaultChecked={item.id !== 'security'} onChange={() => toast.info('Preference updated (demo)')} />
                  <span />
                </label>
              </li>
            ))}
          </ul>
        </PanelCard>
      </div>
    </div>
  )
}

export default SettingsPanel
