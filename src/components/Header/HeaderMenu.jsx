import { NavLink } from 'react-router-dom'
import './HeaderMenu.css'

export function HeaderMenu() {
	return (
		<nav className='header-menu'>
			<ul className='header-menu__list'>
				<li className='header-menu__item'>
					<NavLink
						to='/'
						className={({ isActive }) =>
							isActive
								? 'header-menu__link header-menu__link--active'
								: 'header-menu__link'
						}
					>
						Главная
					</NavLink>
				</li>
				<li className='header-menu__item'>
					<NavLink
						to='/projects'
						className={({ isActive }) =>
							isActive
								? 'header-menu__link header-menu__link--active'
								: 'header-menu__link'
						}
					>
						Проекты
					</NavLink>
				</li>
				<li className='header-menu__item'>
					<NavLink
						to='/about-me'
						className={({ isActive }) =>
							isActive
								? 'header-menu__link header-menu__link--active'
								: 'header-menu__link'
						}
					>
						О-себе
					</NavLink>
				</li>
				<li className='header-menu__item'>
					<NavLink
						to='/contact'
						className={({ isActive }) =>
							isActive
								? 'header-menu__link header-menu__link--active'
								: 'header-menu__link'
						}
					>
						Контакты
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}
