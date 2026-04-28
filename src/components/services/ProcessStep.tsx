import type { Step } from '../../pages/Services'

type ProcessStepProps = {
  step: Step
  index: number
}

function ProcessStep({ step, index }: ProcessStepProps) {
  return (
    <article className="process-step">
      <span className="process-step__number">{String(index).padStart(2, '0')}</span>
      <h3>{step.title}</h3>
      <p>{step.description}</p>
    </article>
  )
}

export default ProcessStep
