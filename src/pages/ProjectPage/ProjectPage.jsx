import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { PageSubtitle } from '../../components/PageSubtitle/PageSubtitle'
import { PageTitle } from '../../components/PageTitle/PageTitle'
import { BigProjects } from '../../components/ProjectPage/BigProjects'
import { SmallProjects } from '../../components/ProjectPage/SmallProjects'
import './ProjectPage.css'

export function ProjectPage() {
	return (
		<>
			<Header />

			<main className='main-container'>
				<PageTitle text={'проекты'} />
				<p className='work__text'>список моих проектов</p>
				<div className='work__wrapper'>
					<div className='work__block'>
						<PageSubtitle text={'крупные проекты'} />
						<BigProjects />
					</div>
					<div className='work__block'>
						<PageSubtitle text={'маленькие проекты'} />
						<SmallProjects />
					</div>
				</div>
			</main>

			<Footer />
		</>
	)
}
