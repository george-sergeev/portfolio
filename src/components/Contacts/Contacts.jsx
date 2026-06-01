import { ContactsMedia } from '../../components/Contacts/ContactsMedia'
import { SectionTitle } from '../SectionTitle/SectionTitle'
import './Contacts.css'

export function Contacts() {
	return (
		<section className='contacts'>
			<SectionTitle text={'Контакты'} />
			<div className='contacts__inner'>
				<p className='contacts__description'>
					В настоящее время - активно ищу работу, поэтому открыт к любым новым
					предложениям.
				</p>
				<ContactsMedia />
			</div>
		</section>
	)
}
