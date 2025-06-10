import { Link } from 'react-router-dom'
import './Banner.css'

const Star = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 784.11 815.53'
		className='w-full h-full'
	>
		<path
			d='M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 
         207.96,29.37 371.12,197.68 392.05,407.74 
         20.93,-210.06 184.09,-378.37 392.05,-407.74 
         -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z'
			fill='#FFFDEF'
		/>
	</svg>
)

const Banner = () => {
	return (
		<div className='banner bg-[#000] w-full p-4 md:p-6 rounded-xl border-4 border-[#27272A] mt-2 text-white h-[520px] flex flex-col justify-between'>
			<div>
				<h2 className='text-2xl font-semibold'>
					QuestGo – Bilim sari eng qisqa yo‘l!
				</h2>

				<div className='pt-4 space-y-3'>
					<h4 className='text-2xl text-[#A1A1AA] leading-snug'>
						Har bir savolingiz – yangi imkoniyat. QuestGo bilan eng murakkab
						savollarga ham oson va aniq javob oling.
					</h4>
					<h4 className='text-2xl text-[#A1A1AA] leading-snug'>
						Dasturlash, texnologiya yo‘nalishlarida bilimlaringizni test orqali
						mustahkamlang. Har bir savol – sinov, har bir test – imkoniyat!
					</h4>
				</div>
			</div>

			{/* Button row fixed at bottom */}
			<div className='flex flex-row justify-end items-center gap-3 pt-4 flex-wrap'>
				<Link to='/coders'>
					<button className='star-btn small-btn'>Dasturchilar</button>
				</Link>
				<Link to='/questions'>
					<button className='star-btn small-btn relative'>
						Boshlash
						<div className='star-1'>{Star()}</div>
						<div className='star-2'>{Star()}</div>
						<div className='star-3'>{Star()}</div>
						<div className='star-4'>{Star()}</div>
						<div className='star-5'>{Star()}</div>
						<div className='star-6'>{Star()}</div>
					</button>
				</Link>
			</div>
		</div>
	)
}

export default Banner
