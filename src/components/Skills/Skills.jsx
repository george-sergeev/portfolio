import skills from '../../data/skills.json'
import './Skills.css'
import { SkillsBlock } from './SkillsBlock'
import { SkillsIllustrations } from './SkillsIllustrations'

export function Skills() {
	return (
		<section className='skills'>
			<h2 className='section-title'>Скилы</h2>
			<div className='skills__inner'>
				<SkillsIllustrations />
				<div className='skills__list'>
					{skills.map(skill => (
						<SkillsBlock key={skill.name} skill={skill} />
					))}
				</div>
			</div>
		</section>
	)
}
