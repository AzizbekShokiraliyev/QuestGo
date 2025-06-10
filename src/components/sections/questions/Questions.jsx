import { motion } from 'framer-motion'
import { FaAngleRight } from 'react-icons/fa'
import bootstrap from '../../../assets/icons/bootstrap.jpg'
import cPlus from '../../../assets/icons/cPlus.png'
import cSharp from '../../../assets/icons/cSharp.png'
import css from '../../../assets/icons/css.jpg'
import html from '../../../assets/icons/html.png'
import js from '../../../assets/icons/js.png'
import php from '../../../assets/icons/php.png'
import python from '../../../assets/icons/python.png'
import react from '../../../assets/icons/react.png'
import reactNative from '../../../assets/icons/reactNative.png'
import tailwind from '../../../assets/icons/tailwind.png'
import vue from '../../../assets/icons/vue.png'

const frontend = [
	{ img: html, name: 'HTML', tests: 12 },
	{ img: css, name: 'CSS', tests: 10 },
	{ img: js, name: 'JavaScript', tests: 15 },
	{ img: react, name: 'React', tests: 9 },
	{ img: reactNative, name: 'React Native', tests: 6 },
	{ img: vue, name: 'Vue.js', tests: 5 },
	{ img: tailwind, name: 'Tailwind', tests: 8 },
	{ img: bootstrap, name: 'Bootstrap', tests: 7 },
]

const backend = [
	{ img: cSharp, name: 'C#', tests: 6 },
	{ img: cPlus, name: 'C++', tests: 8 },
	{ img: python, name: 'Python', tests: 10 },
	{ img: php, name: 'PHP', tests: 4 },
]

const cardVariants = {
	hidden: { opacity: 0, y: 50 },
	visible: i => ({
		opacity: 1,
		y: 0,
		transition: { delay: i * 0.4, duration: 0.6 },
	}),
}

const Card = ({ tech, index }) => (
	<motion.div
		custom={index}
		initial='hidden'
		animate='visible'
		variants={cardVariants}
		className='bg-[#000] hover:bg-[#323232] transition duration-500 rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-[#3f3f46] flex items-center gap-4 cursor-pointer'
		title={`${tech.tests} ta test mavjud`}
	>
		<img
			src={tech.img}
			alt={tech.name}
			className='w-20 h-20 object-contain rounded-md'
		/>
		<div>
			<h3 className='text-xl font-semibold text-white'>{tech.name}</h3>
			<p className='text-[#A1A1AA] text-sm'>{tech.tests} ta test mavjud</p>
		</div>
	</motion.div>
)

const Section = ({ title, data }) => (
	<section className='mb-16'>
		<h2 className='text-3xl font-bold mb-6 px-4 flex items-center gap-2 text-[#FACC15]'>
			{title} <FaAngleRight className='text-[#FACC15]' />
		</h2>
		<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4'>
			{data.map((tech, index) => (
				<Card key={index} tech={tech} index={index} />
			))}
		</div>
	</section>
)

const Question = () => (
	<div className='bg-gradient-to-b from-[#111] to-[#1f1f1f] py-12 text-white min-h-screen'>
		<Section title='Frontend Texnologiyalar' data={frontend} />
		<Section title='Backend Texnologiyalar' data={backend} />
	</div>
)

export default Question
