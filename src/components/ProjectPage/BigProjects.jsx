import projects from '../../data/projects.json'
import { ProjectsCard } from '../Projects/ProjectsCard'
import './BigProjects.css'

export function BigProjects() {
	return (
		<>
			<div className='projects__inner'>
				{projects
					.filter(project => project.type === 'big')
					.map(project => (
						<ProjectsCard key={project.id} project={project} />
					))}
			</div>
		</>
	)
}
