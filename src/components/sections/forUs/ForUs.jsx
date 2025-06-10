import { useState } from 'react'
import { CiCoffeeCup } from 'react-icons/ci'
import { FaRegCopy } from 'react-icons/fa'

const ForUs = () => {
	const [copied, setCopied] = useState(false)
	const cardNumber = '8600 0609 4976 1556'

	const handleCopy = () => {
		navigator.clipboard.writeText(cardNumber)
		setCopied(true)
		setTimeout(() => setCopied(false), 2000)
	}

	return (
		<div className='bg-[#000] w-full p-3 rounded-xl border-4 border-[#27272A] mt-2 pt-5 h-full text-white mb-1'>
			<div className='text-center mb-8 px-2'>
				<h1 className='text-3xl sm:text-4xl font-bold text-[#FACC15] mb-3'>
					Sayt foydali bo‘ldimi?
				</h1>
				<p className='text-[#d4d4d8] text-base leading-relaxed max-w-lg mx-auto'>
					Agar loyihamiz sizga yordam bergan bo‘lsa, bizni bir chashka kofe
					bilan quvontiring. Sizning e’tiboringiz — eng katta mukofot 💛
				</p>
			</div>

			<div className='bg-[#18181B] w-full max-w-[600px] p-4 sm:p-6 mt-20 rounded-xl shadow-inner border border-[#3f3f46] mx-auto'>
				<div className='flex items-center justify-center mb-4'>
					<CiCoffeeCup className='text-5xl sm:text-6xl text-[#FACC15]' />
				</div>
				<h2 className='text-center text-[#A1A1AA] text-xl sm:text-2xl font-semibold mb-3'>
					Karta raqami:
				</h2>

				<div className='flex justify-center items-center gap-3 bg-[#27272A] py-3 px-4 rounded-lg overflow-x-auto'>
					<span className='font-mono tracking-wider text-base sm:text-lg text-[#FACC15] whitespace-nowrap'>
						{cardNumber}
					</span>
					<button
						onClick={handleCopy}
						className='text-[#A1A1AA] hover:text-white transition'
					>
						<FaRegCopy className='text-lg sm:text-xl' />
					</button>
				</div>

				{copied && (
					<p className='text-center text-green-400 text-sm mt-2'>Nusxalandi!</p>
				)}

				<p className='text-center text-[#A1A1AA] mt-5 text-sm italic'>
					Eslatma: Bu ixtiyoriy. Har bir kofe — katta ruhiy qo‘llab-quvvatlash!
				</p>
			</div>
		</div>
	)
}

export default ForUs
