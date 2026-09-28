import { toast } from 'react-toastify'
import PageHeader from '../../ui/PageHeader'
import { EditIcon, MapPinIcon, PlusIcon, TrashIcon } from '../../Icons'
import { addressList } from '../../../data/customerData'

/* Customer → Addresses: saved shipping addresses as cards. */
function AddressPanel() {
  return (
    <div className="panel">
      <PageHeader
        eyebrow="My Account"
        title="My Addresses"
        description={`${addressList.length} saved addresses`}
        showSearch={false}
        actionLabel="Add Address"
        onAction={() => toast.info('Add address — API wiring next')}
      />

      <div className="address-grid">
        {addressList.map((item) => (
          <article className={`address-card ${item.isDefault ? 'address-card--default' : ''}`} key={item.id}>
            <div className="address-card__head">
              <span className="address-card__label">
                <MapPinIcon />
                {item.label}
              </span>
              {item.isDefault && <span className="chip chip--active">Default</span>}
            </div>

            <strong>{item.name}</strong>
            <p>{item.line1}</p>
            <p>{item.city}, {item.state} — {item.zip}</p>
            <p>{item.phone}</p>

            <div className="address-card__actions">
              <button type="button" className="dash-btn dash-btn--ghost" onClick={() => toast.info('Edit address — API wiring next')}>
                <EditIcon />
                Edit
              </button>
              <button type="button" className="dash-btn dash-btn--danger" onClick={() => toast.warn('Delete address — API wiring next')}>
                <TrashIcon />
                Delete
              </button>
            </div>
          </article>
        ))}

        <button type="button" className="address-add" onClick={() => toast.info('Add address — API wiring next')}>
          <PlusIcon />
          <span>Add new address</span>
        </button>
      </div>
    </div>
  )
}

export default AddressPanel
