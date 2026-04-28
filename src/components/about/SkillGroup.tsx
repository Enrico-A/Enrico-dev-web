type SkillCategory = {
  title: string
  skills: readonly string[]
}

type SkillGroupProps = {
  group: SkillCategory
}

function SkillGroup({ group }: SkillGroupProps) {
  return (
    <article className="card skill-group">
      <h3>{group.title}</h3>
      <div className="skill-group__list">
        {group.skills.map((skill) => (
          <span className="badge" key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </article>
  )
}

export default SkillGroup
