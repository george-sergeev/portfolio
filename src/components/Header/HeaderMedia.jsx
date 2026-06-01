import { EmailIcon } from '../../icons/EmailIcon'
import { GitHubIcon } from '../../icons/GitHubIcon'
import { TelegramIcon } from '../../icons/TelegramIcon'
import './HeaderMedia.css'

export function HeaderMedia() {
	return (
		<div className='header-media'>
			<span className='header-media__line'></span>
			<div className='header-media__link'>
				<a
					className='header-media__link-item'
					href='https://github.com/george-sergeev'
					target='_blank'
				>
					<GitHubIcon size={32} />
				</a>
				<a
					className='header-media__link-item'
					href='mailto:sergeev.georgy.031@gmail.com'
					target='_blank'
				>
					<EmailIcon size={32} />
				</a>
				<a
					className='header-media__link-item'
					href='https://t.me/george_sergeev_031'
					target='_blank'
				>
					<TelegramIcon size={32} />
				</a>
			</div>
		</div>
	)
}
