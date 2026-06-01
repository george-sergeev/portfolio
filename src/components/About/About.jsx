import { SectionTitle } from '../SectionTitle/SectionTitle'
import './About.css'
import { AboutIllustration } from './AboutIllustration'

export function About() {
	return (
		<section className='about'>
			<SectionTitle text={'О-себе'} />
			<div className='about__inner'>
				<div className='about__content'>
					<div className='about__text'>
						<p className='about__paragraph'>
							Всем привет, меня зовут Георгий 👋
						</p>
						<p className='about__paragraph'>
							Я — самоучка фронтенд-разработчик. В настоящее время активно
							совершенствую свои навыки и знания, а также изучаю новые
							технологии.
						</p>
					</div>
				</div>
				<AboutIllustration />
			</div>
		</section>
	)
}
