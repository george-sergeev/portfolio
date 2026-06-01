import projects from '../../data/projects.json'
import { ProjectsCard } from '../Projects/ProjectsCard'
import './SmallProjects.css'

export function SmallProjects() {
	return (
		<>
			<div className='projects__inner'>
				{projects
					.filter(project => project.type === 'small')
					.map(project => (
						<ProjectsCard key={project.id} project={project} />
					))}
			</div>
		</>
	)
}
