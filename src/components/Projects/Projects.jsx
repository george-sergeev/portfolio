import { NavLink } from 'react-router-dom'
import projects from '../../data/projects.json'
import { SectionTitle } from '../SectionTitle/SectionTitle'
import './Projects.css'
import { ProjectsCard } from './ProjectsCard'

export function Projects() {
	return (
		<section className='projects'>
			<SectionTitle text={'Проекты'} />
			<div className='projects__inner'>
				{projects
					.filter(project => project.type === 'big')
					.map(project => (
						<ProjectsCard key={project.id} project={project} />
					))}
			</div>
			<NavLink to='/projects' className='projects__link'>
				Посмотреть все проекты {'~~>'}
			</NavLink>
		</section>
	)
}
