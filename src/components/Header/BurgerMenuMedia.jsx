import { EmailIcon } from '../../icons/EmailIcon'
import { GitHubIcon } from '../../icons/GitHubIcon'
import { TelegramIcon } from '../../icons/TelegramIcon'
import './BurgerMenuMedia.css'

export function BurgerMenuMedia() {
	return (
		<div className='burger-menu-media'>
			<a
				className='burger-menu-media__link'
				href='https://github.com/george-sergeev'
				target='_blank'
			>
				<GitHubIcon size={48} />
			</a>
			<a
				className='burger-menu-media__link'
				href='mailto:sergeev.georgy.031@gmail.com'
				target='_blank'
			>
				<EmailIcon size={48} />
			</a>
			<a
				className='burger-menu-media__link'
				href='https://t.me/george_sergeev_031'
				target='_blank'
			>
				<TelegramIcon size={48} />
			</a>
		</div>
	)
}
