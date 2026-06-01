import { ContactsMedia } from '../../components/Contacts/ContactsMedia'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { PageSubtitle } from '../../components/PageSubtitle/PageSubtitle'
import { PageTitle } from '../../components/PageTitle/PageTitle'
import { GitHubIcon } from '../../icons/GitHubIcon'
import './ContactPage.css'

export function ContactPage() {
	return (
		<>
			<Header />

			<div className='main-container'>
				<PageTitle text={'контакты'} />
				<p className='contact__text'>Как со мной связаться?</p>
				<div className='contact__wrapper'>
					<p className='contact__description'>
						В настоящее время - активно ищу работу, поэтому открыт к любым новым
						предложениям. Готов к выполнению тестовых заданий, прохождению
						стажировок. Готов к удалённой работе в других регионах. В дальнейшем
						возможна релокация в другую страну.
					</p>
					<ContactsMedia />
				</div>
				<PageSubtitle text={'все-медиа'} />
				<a
					className='contact__media'
					href='https://github.com/george-sergeev'
					target='_blank'
				>
					<GitHubIcon size={32} />
					george-sergeev
				</a>
			</div>

			<Footer />
		</>
	)
}
