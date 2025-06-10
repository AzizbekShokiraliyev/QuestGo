import {
	FaGithub,
	FaInstagram,
	FaLinkedin,
	FaTelegramPlane,
} from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
import { navLinks, secondaryLinks } from '../constants/links'

const Sidebar = ({ onClose }) => {
	const { pathname } = useLocation()

	const renderLinks = links =>
		links.map(({ path, label, icon: Icon }) => (
			<li
				key={path}
				className={`flex items-center gap-2 p-2 rounded-md cursor-pointer transition hover:bg-[#18181B] ${
					pathname === path ? 'bg-[#18181B]' : ''
				}`}
				onClick={onClose}
			>
				<Link to={path} className='flex items-center gap-2 w-full'>
					<Icon className='text-lg' />
					<span>{label}</span>
				</Link>
			</li>
		))

	return (
		<div className='bg-[#000] w-full h-full p-3 rounded-xl border-4 border-[#27272A] text-white flex flex-col'>
			{/* X tugmasi - yuqori o'ng burchakda */}
			<button
				className='md:hidden mb-3 ml-auto p-1 hover:bg-[#27272A] rounded text-white'
				onClick={onClose}
				aria-label='Close sidebar'
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
						d='M6 18L18 6M6 6l12 12'
					/>
				</svg>
			</button>

			{/* Sahifalar bo'limi */}
			<div className='flex-grow overflow-auto'>
				<h4 className='text-base font-semibold mb-3 text-[#A1A1AA]'>
					Sahifalar
				</h4>
				<ul className='space-y-2 text-sm'>{renderLinks(navLinks)}</ul>
				<div className='mt-3 border-t border-[#27272A] pt-3'>
					<ul className='space-y-2 text-sm'>{renderLinks(secondaryLinks)}</ul>
				</div>
			</div>

			{/* Social media ikonalar - pastda */}
			<div className='flex justify-center gap-4 mt-3 pt-3 border-t border-[#27272A]'>
				{[
					{ icon: <FaGithub />, label: 'GitHub', link: 'https://github.com' },
					{
						icon: <FaTelegramPlane />,
						label: 'Telegram',
						link: 'https://t.me',
					},
					{
						icon: <FaLinkedin />,
						label: 'LinkedIn',
						link: 'https://linkedin.com',
					},
					{
						icon: <FaInstagram />,
						label: 'Instagram',
						link: 'https://instagram.com',
					},
				].map(({ icon, label, link }, i) => (
					<div key={i} className='relative group'>
						<a href={link} target='_blank' rel='noopener noreferrer'>
							<div className='text-base hover:text-gray-300 transition'>
								{icon}
							</div>
						</a>
						<span className='absolute bottom-full mb-1 px-2 py-0.5 text-xs text-white bg-[#27272A] rounded opacity-0 group-hover:opacity-100 transition pointer-events-none'>
							{label}
						</span>
					</div>
				))}
			</div>
		</div>
	)
}

export default Sidebar
