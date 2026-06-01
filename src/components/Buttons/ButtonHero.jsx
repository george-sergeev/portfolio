import { NavLink } from 'react-router-dom'
import './ButtonHero.css'

export function ButtonHero() {
	return (
		<NavLink
			to='/contact'
			className='button-hero'
			aria-label='Ссылка на раздел, где вы можете со мной связаться'
		>
			Связаться со мной →
		</NavLink>
	)
}
