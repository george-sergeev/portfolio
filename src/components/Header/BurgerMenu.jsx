import { NavLink } from 'react-router'
import './BurgerMenu.css'
import { BurgerMenuMedia } from './BurgerMenuMedia'

export function BurgerMenu({ isOpen, onLinkClick }) {
	return (
		<div className={`burger-menu ${isOpen ? 'burger-menu--active' : ''}`}>
			<ul className='burger-menu__list'>
				<li className='burger-menu__item'>
					<NavLink
						to='/'
						className={({ isActive }) =>
							isActive
								? 'burger-menu__link burger-menu__link--active'
								: 'burger-menu__link'
						}
						onClick={onLinkClick}
					>
						Главная
					</NavLink>
				</li>
				<li className='burger-menu__item'>
					<NavLink
						to='/projects'
						className={({ isActive }) =>
							isActive
								? 'burger-menu__link burger-menu__link--active'
								: 'burger-menu__link'
						}
						onClick={onLinkClick}
					>
						Проекты
					</NavLink>
				</li>
				<li className='burger-menu__item'>
					<NavLink
						to='/about-me'
						className={({ isActive }) =>
							isActive
								? 'burger-menu__link burger-menu__link--active'
								: 'burger-menu__link'
						}
						onClick={onLinkClick}
					>
						О-себе
					</NavLink>
				</li>
				<li className='burger-menu__item'>
					<NavLink
						to='/contact'
						className={({ isActive }) =>
							isActive
								? 'burger-menu__link burger-menu__link--active'
								: 'burger-menu__link'
						}
						onClick={onLinkClick}
					>
						Контакты
					</NavLink>
				</li>
			</ul>
			<BurgerMenuMedia />
		</div>
	)
}
