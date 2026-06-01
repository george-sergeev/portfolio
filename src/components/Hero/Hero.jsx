import { ButtonHero } from '../Buttons/ButtonHero'
import './Hero.css'
import { HeroIllustration } from './HeroIllustration'

export function Hero() {
	return (
		<section className='hero'>
			<div className='hero__inner'>
				<div className='hero__content'>
					<h1 className='hero__title'>
						Георгий Сергеев - <span>фронтенд разработчик</span>
					</h1>
					<p className='hero__description'>Пока только учусь веб-разработке</p>
					<ButtonHero />
				</div>
				<HeroIllustration />
			</div>
		</section>
	)
}
