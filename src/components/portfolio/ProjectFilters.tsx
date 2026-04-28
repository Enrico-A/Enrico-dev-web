import type { ProjectFilter } from '../../pages/Portfolio'

type ProjectFiltersProps = {
  filters: ProjectFilter[]
  activeFilter: ProjectFilter
  onFilterChange: (filter: ProjectFilter) => void
}

function ProjectFilters({ filters, activeFilter, onFilterChange }: ProjectFiltersProps) {
  return (
    <div className="project-filters" aria-label="Filtra progetti">
      {filters.map((filter) => (
        <button
          key={filter}
          type="button"
          className={
            activeFilter === filter
              ? 'project-filters__button project-filters__button--active'
              : 'project-filters__button'
          }
          aria-pressed={activeFilter === filter}
          onClick={() => onFilterChange(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  )
}

export default ProjectFilters
