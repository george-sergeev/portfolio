import { About } from '../../components/About/About'
import { Contacts } from '../../components/Contacts/Contacts'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { Hero } from '../../components/Hero/Hero'
import { Projects } from '../../components/Projects/Projects'
import { Skills } from '../../components/Skills/Skills'
import './HomePage.css'

export function HomePage() {
	return (
		<>
			<Header />

			<main className='main-container home-page__container'>
				<Hero className='section-padding' />
				<Projects />
				<Skills />
				<About />
				<Contacts />
			</main>

			<Footer />
		</>
	)
}
