import { ButtonGitHub } from '../Buttons/ButtonGitHub'
import { ButtonLive } from '../Buttons/ButtonLive'
import './ProjectsCard.css'
import { ProjectsCardTechnology } from './ProjectsCardTechnology'

export function ProjectsCard({ project }) {
	return (
		<div className='project-card'>
			{project.image && (
				<img
					className='project-card__image'
					src={project.image}
					alt={project.name}
				></img>
			)}
			<div className='project-card__technologies'>
				{project.technology?.map(technology => (
					<ProjectsCardTechnology key={technology} technology={technology} />
				))}
			</div>
			<div className='project-card__content'>
				<h3 className='project-card__name'>{project.name}</h3>
				<p className='project-card__description'>{project.description}</p>
				<div className='project-card__buttons'>
					{project.links.live && <ButtonLive href={project.links.live} />}
					{project.links.github && <ButtonGitHub href={project.links.github} />}
				</div>
			</div>
		</div>
	)
}
