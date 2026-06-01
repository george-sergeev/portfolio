import './ButtonGitHub.css'

export function ButtonGitHub({ href }) {
	return (
		<a
			className='button-gitHub'
			href={href}
			target='_blank'
			aria-label='Ссылка на код этого проекта'
		>
			GitHub {'</>'}
		</a>
	)
}
