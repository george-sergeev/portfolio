import './HeaderButton.css'

export function HeaderButton({ active, onClick }) {
	return (
		<button
			className={`header-button ${active ? 'header-button--active' : ''}`}
			onClick={onClick}
		>
			<span></span>
		</button>
	)
}
