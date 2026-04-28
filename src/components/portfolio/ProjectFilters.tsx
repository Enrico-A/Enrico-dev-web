import type { ProjectFilter, ProjectFilterOption } from '../../pages/Portfolio'
import { useLanguage } from '../../i18n/useLanguage'

type ProjectFiltersProps = {
  filters: readonly ProjectFilterOption[]
  activeFilter: ProjectFilter
  onFilterChange: (filter: ProjectFilter) => void
}

function ProjectFilters({ filters, activeFilter, onFilterChange }: ProjectFiltersProps) {
  const { t } = useLanguage()

  return (
    <div className="project-filters" role="group" aria-label={t.portfolio.filtersLabel}>
      {filters.map((filter) => (
        <button
          key={filter.id}
          type="button"
          className={
            activeFilter === filter.id
              ? 'project-filters__button project-filters__button--active'
              : 'project-filters__button'
          }
          aria-pressed={activeFilter === filter.id}
          onClick={() => onFilterChange(filter.id)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  )
}

export default ProjectFilters
