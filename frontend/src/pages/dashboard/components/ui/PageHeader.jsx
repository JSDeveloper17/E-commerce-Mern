import { PlusIcon, RefreshIcon, SearchIcon } from '../Icons'

/*
 * Page header for every dashboard panel:
 * title + description on the left, optional search / action buttons on the right.
 */
function PageHeader({ eyebrow, title, description, onAction, actionLabel, showSearch = true, searchPlaceholder = 'Search…' }) {
  return (
    <header className="page-header">
      <div className="page-header__text">
        {eyebrow && <span className="page-header__eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>

      <div className="page-header__actions">
        {showSearch && (
          <form className="page-header__search" onSubmit={(e) => e.preventDefault()}>
            <SearchIcon />
            <input type="text" placeholder={searchPlaceholder} aria-label="Search" />
          </form>
        )}
        <button type="button" className="dash-btn dash-btn--ghost" onClick={onAction}>
          <RefreshIcon />
          Refresh
        </button>
        {actionLabel && (
          <button type="button" className="dash-btn dash-btn--primary" onClick={onAction}>
            <PlusIcon />
            {actionLabel}
          </button>
        )}
      </div>
    </header>
  )
}

export default PageHeader
