import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import eng from '../assets/eng.png'
import Logo from '../assets/Logo.png'
import ru from '../assets/ru.png'
import uzb from '../assets/uzb.png'

const languages = [
	{ code: 'uz', label: "O'zbek", flag: uzb },
	{ code: 'en', label: 'English', flag: eng },
	{ code: 'ru', label: 'Русский', flag: ru },
]

const Header = ({ onToggleSidebar }) => {
	const [selectedLang, setSelectedLang] = useState(languages[0])
	const [isOpen, setIsOpen] = useState(false)
	const dropdownRef = useRef(null)

	useEffect(() => {
		const handleClickOutside = event => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setIsOpen(false)
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [])

	return (
		<div className='bg-[#000] w-full p-3 rounded-xl border-4 border-[#27272A] mt-1 flex items-center justify-between relative'>
			{/* Chap tomon: 
          - katta ekranlarda logo
          - kichik ekranlarda hamburger */}
			<div className='flex items-center'>
				<button
					className='text-white focus:outline-none md:hidden mr-3'
					onClick={onToggleSidebar}
					aria-label='Toggle sidebar'
				>
					<svg
						className='w-6 h-6'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M4 6h16M4 12h16M4 18h16'
						/>
					</svg>
				</button>

				<Link to='/' className='hidden md:flex items-center space-x-3'>
					<img className='h-12 w-auto cursor-pointer' src={Logo} alt='logo' />
				</Link>
			</div>

			{/* Ong tomon: til tanlash + A doira */}
			<div className='flex items-center gap-4' ref={dropdownRef}>
				{/* Til tanlash tugmasi */}
				<button
					onClick={() => setIsOpen(!isOpen)}
					className='bg-[#18181B] border border-[#27272A] text-white rounded-md p-2 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
					type='button'
				>
					<img
						src={selectedLang.flag}
						alt={selectedLang.label}
						className='w-10 h-6 object-contain'
					/>
					<span className='text-sm'>{selectedLang.label}</span>
					<svg
						className={`w-4 h-4 ml-1 transition-transform ${
							isOpen ? 'rotate-180' : ''
						}`}
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M19 9l-7 7-7-7'
						/>
					</svg>
				</button>

				{/* 'A' doira */}
				<div className='w-10 h-10 bg-[#27272A] rounded-full flex items-center justify-center text-lg font-semibold cursor-pointer text-white'>
					A
				</div>

				{/* Til tanlash dropdown */}
				{isOpen && (
					<ul className='absolute right-3 top-14 w-40 bg-[#18181B] border border-[#27272A] rounded-md shadow-lg z-10'>
						{languages.map(lang => (
							<li
								key={lang.code}
								className='flex items-center space-x-2 p-2 cursor-pointer hover:bg-[#27272A]'
								onClick={() => {
									setSelectedLang(lang)
									setIsOpen(false)
								}}
							>
								<img
									src={lang.flag}
									alt={lang.label}
									className='w-10 h-6 object-contain'
								/>
								<span className='text-white text-sm'>{lang.label}</span>
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	)
}

export default Header
