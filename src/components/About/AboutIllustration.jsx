import './AboutIllustration.css'

export function AboutIllustration() {
	return (
		<div className='about-illustration'>
			<img
				className='about-illustration__dots'
				src='./images/dots.png'
				alt=''
			/>
			<img
				className='about-illustration__image'
				src='./images/about.png'
				alt='Моя фотография'
			/>
			<img
				className='about-illustration__dots'
				src='./images/dots.png'
				alt=''
			/>
		</div>
	)
}
