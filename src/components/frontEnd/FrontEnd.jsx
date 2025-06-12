import { FaAngleRight } from 'react-icons/fa'
import bootstrap from '../../assets/icons/bootstrap.jpg'
import cPlus from '../../assets/icons/cPlus.jpg'
import cSharp from '../../assets/icons/cSharp.jpg'
import css from '../../assets/icons/css.jpg'
import html from '../../assets/icons/html.jpg'
import js from '../../assets/icons/js.png'
import php from '../../assets/icons/php.png'
import python from '../../assets/icons/python.png'
import react from '../../assets/icons/react.png'
import reactNative from '../../assets/icons/reactNative.png'
import tailwind from '../../assets/icons/tailwind.png'
import vue from '../../assets/icons/vue.png'
import './FrontEnd.css'

const technologies = [
	{ img: html, name: 'HTML' },
	{ img: css, name: 'CSS' },
	{ img: js, name: 'JavaScript' },
	{ img: react, name: 'React' },
	{ img: reactNative, name: 'React Native' },
	{ img: vue, name: 'Vue.js' },
	{ img: tailwind, name: 'Tailwind' },
	{ img: bootstrap, name: 'Bootstrap' },
	{ img: cSharp, name: 'C#' },
	{ img: cPlus, name: 'C++' },
	{ img: python, name: 'Python' },
	{ img: php, name: 'PHP' },
]

const FrontEnd = () => {
	const doubledTech = [...technologies, ...technologies]

	return (
		<div className='bg-[#18181B] py-6 text-white'>
			<h2 className='text-2xl font-semibold px-6 mb-4 flex items-center gap-2 md:text-3xl font-semibold px-4 mb-3 flex items-center gap-2 '>
				Frontend & Backend
				<FaAngleRight />
			</h2>

			<div className='px-6 overflow-hidden'>
				<div
					className='flex animate-scroll-left gap-6'
					style={{
						width: `${doubledTech.length * 220}px`,
						animation: 'scroll-left 60s linear infinite',
					}}
				>
					{doubledTech.map((tech, index) => (
						<div
							key={index}
							className='min-w-[180px] h-[190px] bg-[#27272A] rounded-xl flex flex-col items-center justify-center shadow-lg '
						>
							<img
								src={tech.img}
								alt={tech.name}
								className='w-20 h-20 object-contain mb-3'
							/>
							<p className='text-lg font-semibold'>{tech.name}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default FrontEnd
