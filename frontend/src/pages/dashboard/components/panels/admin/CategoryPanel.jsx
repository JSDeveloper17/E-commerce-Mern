import { toast } from 'react-toastify'
import PageHeader from '../../ui/PageHeader'
import PanelCard from '../../ui/PanelCard'
import DataTable from '../../ui/DataTable'
import StatusBadge from '../../ui/StatusBadge'
import { EditIcon, TrashIcon } from '../../Icons'
import { categoryRows } from '../../../data/adminData'

/* Admin → Categories: table of every category. */
function CategoryPanel() {
  const activeCount = categoryRows.filter((row) => row.status === 'Active').length

  const columns = [
    { key: 'name', label: 'Category', render: (row) => <strong>{row.name}</strong> },
    { key: 'slug', label: 'Slug', render: (row) => <code className="dash-code">/{row.slug}</code> },
    { key: 'products', label: 'Products', align: 'center' },
    { key: 'status', label: 'Status', render: (row) => <StatusBadge value={row.status} /> },
    { key: 'updated', label: 'Updated' },
    {
      key: 'actions',
      label: 'Actions',
      align: 'right',
      render: () => (
        <div className="row-actions">
          <button type="button" className="row-actions__btn" aria-label="Edit" onClick={() => toast.info('Edit category — API wiring next')}>
            <EditIcon />
          </button>
          <button type="button" className="row-actions__btn row-actions__btn--danger" aria-label="Delete" onClick={() => toast.warn('Delete category — API wiring next')}>
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
        title="All Categories"
        description={`${categoryRows.length} categories · ${activeCount} active`}
        actionLabel="Add Category"
        searchPlaceholder="Search categories…"
        onAction={() => toast.info('Add category — API wiring next')}
      />

      <PanelCard title="Category List" subtitle="Grouping used across the store">
        <DataTable
          columns={columns}
          rows={categoryRows}
          footer={<span>Showing {categoryRows.length} categories</span>}
        />
      </PanelCard>
    </div>
  )
}

export default CategoryPanel
