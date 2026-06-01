import { Logo } from '../Logo/Logo'
import './Footer.css'

export function Footer() {
	return (
		<footer className='footer'>
			<div className='footer__wrapper'>
				<p className='footer__copyright'>© Copyright 2026. Made by EnoTT031</p>
				<Logo />
			</div>
		</footer>
	)
}
