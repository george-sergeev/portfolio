import { AboutIllustration } from '../../components/About/AboutIllustration'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { PageSubtitle } from '../../components/PageSubtitle/PageSubtitle'
import { PageTitle } from '../../components/PageTitle/PageTitle'
import { SkillsBlock } from '../../components/Skills/SkillsBlock'
import skills from '../../data/skills.json'
import './AboutPage.css'

export function AboutPage() {
	return (
		<div className='about-page'>
			<Header />

			<main className='main-container'>
				<PageTitle text={'о-себе'} />
				<p className='about-page__text'>кто я такой?</p>
				<div className='about-page__wrapper'>
					<div className='about-page__block'>
						<p className='about-page__paragraph'>Ещё раз здравствуйте ✌️</p>
						<p className='about-page__paragraph'>
							Я начинающий программист из Санкт-Петербурга. Мне
							интересно всё, что связано с IT. В данный момент я
							активно изучаю веб-разработку.
						</p>
					</div>
					<AboutIllustration />
				</div>
				<PageSubtitle text={'скилы'} />
				<div className='about-page__list'>
					{skills.map(skill => (
						<SkillsBlock key={skill.name} skill={skill} />
					))}
				</div>
			</main>

			<Footer />
		</div>
	)
}
