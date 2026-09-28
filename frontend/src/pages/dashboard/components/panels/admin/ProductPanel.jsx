import { toast } from 'react-toastify'
import PageHeader from '../../ui/PageHeader'
import PanelCard from '../../ui/PanelCard'
import DataTable from '../../ui/DataTable'
import StatusBadge from '../../ui/StatusBadge'
import { EditIcon, EyeIcon, TrashIcon } from '../../Icons'
import { productRows } from '../../../data/adminData'

/* Admin → Products: table with thumbnail, price, stock and status. */
function ProductPanel() {
  const lowStock = productRows.filter((row) => row.status === 'Low Stock' || row.status === 'Out of Stock').length

  const columns = [
    {
      key: 'name',
      label: 'Product',
      render: (row) => (
        <div className="table-product">
          <img src={row.image} alt={row.name} />
          <div>
            <strong>{row.name}</strong>
            <span>#{row.id}</span>
          </div>
        </div>
      ),
    },
    { key: 'category', label: 'Category' },
    { key: 'price', label: 'Price', align: 'right', render: (row) => `$${row.price.toFixed(2)}` },
    { key: 'stock', label: 'Stock', align: 'center' },
    { key: 'sold', label: 'Sold', align: 'center' },
    { key: 'status', label: 'Status', render: (row) => <StatusBadge value={row.status} /> },
    {
      key: 'actions',
      label: 'Actions',
      align: 'right',
      render: () => (
        <div className="row-actions">
          <button type="button" className="row-actions__btn" aria-label="View" onClick={() => toast.info('View product — API wiring next')}>
            <EyeIcon />
          </button>
          <button type="button" className="row-actions__btn" aria-label="Edit" onClick={() => toast.info('Edit product — API wiring next')}>
            <EditIcon />
          </button>
          <button type="button" className="row-actions__btn row-actions__btn--danger" aria-label="Delete" onClick={() => toast.warn('Delete product — API wiring next')}>
            <TrashIcon />
          </button>
        </div>
      ),
    },
  ]

  return (
    <div className="panel">
      <PageHeader
        eyebrow="Catalog"
        title="All Products"
        description={`${productRows.length} products · ${lowStock} need restocking`}
        actionLabel="Add Product"
        searchPlaceholder="Search products…"
        onAction={() => toast.info('Add product — API wiring next')}
      />

      <PanelCard title="Product Inventory" subtitle="Prices, stock levels and sales">
        <DataTable
          columns={columns}
          rows={productRows}
          footer={<span>Showing {productRows.length} products</span>}
        />
      </PanelCard>
    </div>
  )
}

export default ProductPanel
