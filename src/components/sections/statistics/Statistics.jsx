import { motion } from 'framer-motion'
import { FaCheckCircle, FaFileAlt, FaUsers } from 'react-icons/fa'

const stats = [
	{
		title: "Ro'yxatdan o'tganlar",
		value: 1342,
		icon: <FaUsers className='text-yellow-400 text-4xl' />,
		bg: 'bg-yellow-900/20',
	},
	{
		title: 'Ishlangan testlar',
		value: 4792,
		icon: <FaCheckCircle className='text-green-400 text-4xl' />,
		bg: 'bg-green-900/20',
	},
	{
		title: 'Mavjud testlar',
		value: 128,
		icon: <FaFileAlt className='text-blue-400 text-4xl' />,
		bg: 'bg-blue-900/20',
	},
]

const cardVariants = {
	hidden: { opacity: 0, y: 50 },
	visible: i => ({
		opacity: 1,
		y: 0,
		transition: { delay: i * 0.3, duration: 0.6, ease: 'easeOut' },
	}),
}

const Statistics = () => {
	return (
		<div className='h-[100%] bg-gradient-to-b bg-[#18181B] py-16 px-4 text-white'>
			<h1 className='text-4xl md:text-5xl font-bold text-center text-[#FACC15] mb-12'>
				Statistika
			</h1>

			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
				{stats.map((stat, index) => (
					<motion.div
						key={index}
						custom={index}
						initial='hidden'
						animate='visible'
						variants={cardVariants}
						className={`rounded-2xl p-6 shadow-xl border border-[#3f3f46] hover:shadow-2xl transition duration-300 ${stat.bg} flex flex-col items-center justify-center gap-4`}
					>
						<div>{stat.icon}</div>
						<div className='text-center'>
							<p className='text-xl font-medium text-[#A1A1AA]'>{stat.title}</p>
							<p className='text-3xl font-bold text-[#FACC15] mt-1'>
								{stat.value.toLocaleString()}
							</p>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	)
}

export default Statistics
