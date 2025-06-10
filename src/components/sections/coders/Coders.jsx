import { motion } from 'framer-motion'
import { FaGithub, FaInstagram, FaLinkedin, FaTelegram } from 'react-icons/fa'
import { Typewriter } from 'react-simple-typewriter'

import Aziko from '../../../assets/coders/Aziko.jpg'
import AzizbekFront from '../../../assets/coders/Azizbek.jpg'

const coders = [
	{
		name: 'Azizbek Shokiraliyev',
		role: 'Frontend Developer',
		image: Aziko,
		desc: 'React, Tailwind va UI/UX dizaynga ixtisoslashgan. Minimalistik, responsive interfeyslar ustasi. Komponent asosidagi dizayn prinsiplarini chuqur tushunadi va kodni qayta ishlatish, optimallashtirish bo‘yicha boy tajribaga ega. Figma va boshqa dizayn vositalari bilan hamkorlikda ishlashda mohir. Animatsiya, interaktivlik va foydalanuvchi tajribasiga katta e’tibor qaratadi. Har qanday murakkab interfeysni soddalashtirib, foydalanuvchiga qulay shaklga keltira oladi.',
		order: 'normal',
		links: {
			github: 'https://github.com/azizbek',
			linkedin: 'https://linkedin.com/in/azizbek',
			telegram: 'https://t.me/azizbek',
			instagram: 'https://instagram.com/azizbek.dev',
		},
	},
	{
		name: 'Azizbek Shokiraliyev',
		role: 'Backend Developer',
		image: AzizbekFront,
		desc: 'Node.js, Express va PostgreSQL orqali kuchli va xavfsiz backend tizimlarini yaratadi. RESTful API’lar tuzishda, autentifikatsiya va avtorizatsiya mexanizmlarini joriy etishda katta tajribaga ega. Ma’lumotlar bazasi dizayni, normalizatsiya va so‘rov optimallashtirish borasida puxta bilimga ega. JWT, OAuth kabi xavfsizlik protokollaridan samarali foydalanadi. Tizim monitoringi, loglash va xatoliklarni aniqlash uchun ilg‘or metodlarni qo‘llaydi. Kod sifatiga, test yozishga va skalalanuvchi arxitekturaga katta e’tibor qaratadi.',
		order: 'reversed',
		links: {
			github: 'https://github.com/azizbek-back',
			linkedin: 'https://linkedin.com/in/azizbek-back',
			telegram: 'https://t.me/azizbekback',
			instagram: 'https://instagram.com/backend.aziz',
		},
	},
]

const containerVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.3,
		},
	},
}

const cardVariants = {
	hidden: { opacity: 0, y: 40 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
	hover: { scale: 1.03 },
}

const Coders = () => {
	return (
		<section className='max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 rounded-xl'>
			<motion.h2
				className='text-3xl sm:text-4xl font-bold text-center text-[#FACC15] mb-4 sm:mb-10 tracking-wide select-none'
				initial={{ opacity: 0, y: -30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.7, ease: 'easeOut' }}
			>
				Dasturchilar 👨‍💻
			</motion.h2>

			<motion.div
				variants={containerVariants}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.3 }}
				className='space-y-16 sm:space-y-24'
			>
				{coders.map((coder, i) => (
					<motion.article
						key={i}
						variants={cardVariants}
						whileHover='hover'
						className={`flex flex-col ${
							coder.order === 'reversed' ? 'md:flex-row-reverse' : 'md:flex-row'
						} bg-gradient-to-br from-[#1E1E1E] to-[#141414] border border-[#27272A] rounded-2xl p-6 sm:p-10 gap-6 sm:gap-10 shadow-lg cursor-default select-text`}
					>
						<div className='w-full max-w-full sm:max-w-[400px] overflow-hidden rounded-xl border-2 border-[#27272A] shadow-lg'>
							<img
								src={coder.image}
								alt={coder.name}
								loading='lazy'
								draggable={false}
								className='w-full h-full object-cover transition-transform duration-500 hover:scale-105'
							/>
						</div>

						<div className='flex flex-col justify-center w-full text-white space-y-4 sm:space-y-6'>
							<h3 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#FACC15] min-h-[48px]'>
								<Typewriter
									words={[coder.name, coder.role]}
									loop={true}
									cursor
									cursorStyle='|'
									typeSpeed={50}
									deleteSpeed={30}
									delaySpeed={1000}
								/>
							</h3>

							<p className='text-xl sm:text-base text-xl text-gray-300 leading-relaxed'>
								{coder.desc}
							</p>

							<div className='flex gap-5 text-xl sm:text-2xl mt-2'>
								{coder.links.github && (
									<a
										href={coder.links.github}
										target='_blank'
										rel='noopener noreferrer'
										className='hover:text-[#FACC15]'
									>
										<FaGithub />
									</a>
								)}
								{coder.links.linkedin && (
									<a
										href={coder.links.linkedin}
										target='_blank'
										rel='noopener noreferrer'
										className='hover:text-[#0A66C2]'
									>
										<FaLinkedin />
									</a>
								)}
								{coder.links.telegram && (
									<a
										href={coder.links.telegram}
										target='_blank'
										rel='noopener noreferrer'
										className='hover:text-[#229ED9]'
									>
										<FaTelegram />
									</a>
								)}
								{coder.links.instagram && (
									<a
										href={coder.links.instagram}
										target='_blank'
										rel='noopener noreferrer'
										className='hover:text-pink-500'
									>
										<FaInstagram />
									</a>
								)}
							</div>
						</div>
					</motion.article>
				))}
			</motion.div>
		</section>
	)
}

export default Coders
