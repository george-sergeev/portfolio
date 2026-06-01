import './SkillsBlock.css'

export function SkillsBlock({ skill }) {
	return (
		<div className='skill-block'>
			<h3 className='skill-block__title'>{skill.name}</h3>
			<ul className='skill-block__list'>
				{skill.items.map(item => (
					<li key={item} className='skill-block__item'>
						{item}
					</li>
				))}
			</ul>
		</div>
	)
}
