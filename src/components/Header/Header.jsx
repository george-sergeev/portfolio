import { useEffect, useState } from 'react'
import { Logo } from '../Logo/Logo'
import { BurgerMenu } from './BurgerMenu'
import './Header.css'
import { HeaderButton } from './HeaderButton'
import { HeaderMedia } from './HeaderMedia'
import { HeaderMenu } from './HeaderMenu'

export function Header() {
	const [menuOpen, setMenuOpen] = useState(false)

	useEffect(() => {
		if (menuOpen) {
			const scrollY = window.scrollY

			document.body.style.position = 'fixed'
			document.body.style.top = `-${scrollY}px`
			document.body.style.left = '0'
			document.body.style.right = '0'
		} else {
			const scrollY = document.body.style.top

			document.body.style.position = ''
			document.body.style.top = ''
			document.body.style.left = ''
			document.body.style.right = ''

			window.scrollTo(0, parseInt(scrollY || '0') * -1)
		}
	}, [menuOpen])

	return (
		<>
			<header className='header'>
				<HeaderMedia />
				<div className='header__container'>
					<Logo />
					<HeaderMenu />
					<HeaderButton
						active={menuOpen}
						onClick={() => setMenuOpen(!menuOpen)}
					/>
				</div>
			</header>{' '}
			<BurgerMenu isOpen={menuOpen} onLinkClick={() => setMenuOpen(false)} />
		</>
	)
}
