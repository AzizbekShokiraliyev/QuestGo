import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { useState } from 'react'
import { FaTelegramPlane } from 'react-icons/fa'

const Input = ({
	name,
	value,
	onChange,
	placeholder,
	required = false,
	type = 'text',
}) => (
	<div className='relative w-full'>
		<input
			type={type}
			name={name}
			value={value}
			onChange={onChange}
			required={required}
			className='peer w-full bg-transparent border border-gray-600 text-white placeholder-transparent px-4 py-3 rounded-lg focus:outline-none focus:border-yellow-400 transition'
			placeholder={placeholder}
		/>
		<label className='absolute left-4 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-[-10px] peer-focus:text-xs peer-focus:text-yellow-400 bg-[#1C1C1C] px-1'>
			{placeholder}
		</label>
	</div>
)

const Requirement = () => {
	const [form, setForm] = useState({ name: '', phone: '', message: '' })
	const [status, setStatus] = useState(null)

	const handleChange = e => {
		setForm({ ...form, [e.target.name]: e.target.value })
	}

	const handleSubmit = async e => {
		e.preventDefault()
		if (!form.name || !form.message) return

		const botToken = 'YOUR_BOT_TOKEN'
		const chatId = 'YOUR_CHAT_ID'
		const text = `📥 Yangi talab!\n\n👤 Ism: ${form.name}\n📞 Tel: ${
			form.phone || 'yo‘q'
		}\n📝 Xabar:\n${form.message}`

		try {
			await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ chat_id: chatId, text }),
			})

			setForm({ name: '', phone: '', message: '' })
			setStatus('success')
			setTimeout(() => setStatus(null), 4000)
		} catch {
			setStatus('error')
			setTimeout(() => setStatus(null), 4000)
		}
	}

	return (
		<div className='bg-gradient-to-b from-[#0e0e0e] to-[#1a1a1a] flex justify-center items-center px-4 py-16 text-white'>
			<motion.form
				onSubmit={handleSubmit}
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				className='w-full max-w-xl bg-[#1f1f1f]/70 backdrop-blur-xl border border-[#333] rounded-2xl shadow-xl p-8 space-y-6'
			>
				<h2 className='text-3xl font-bold text-yellow-400 text-center'>
					📬 Talab yuborish
				</h2>

				<Input
					name='name'
					value={form.name}
					onChange={handleChange}
					placeholder='Ismingiz'
					required
				/>
				<Input
					name='phone'
					value={form.phone}
					onChange={handleChange}
					placeholder='Telefon raqamingiz (ixtiyoriy)'
				/>
				<div className='relative'>
					<textarea
						name='message'
						value={form.message}
						onChange={handleChange}
						required
						rows={5}
						className='peer w-full bg-transparent border border-gray-600 text-white placeholder-transparent px-4 py-3 rounded-lg focus:outline-none focus:border-yellow-400 transition resize-none'
						placeholder='Talab matni'
					></textarea>
					<label className='absolute left-4 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-[-10px] peer-focus:text-xs peer-focus:text-yellow-400 bg-[#1C1C1C] px-1'>
						Talab matni
					</label>
				</div>

				<motion.button
					whileTap={{ scale: 0.97 }}
					type='submit'
					className='w-full py-3 rounded-lg bg-yellow-400 text-black font-bold text-lg hover:bg-yellow-300 transition flex items-center justify-center gap-2 shadow-md'
				>
					<FaTelegramPlane /> Yuborish
				</motion.button>

				<AnimatePresence>
					{status === 'success' && (
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.8 }}
							className='flex items-center gap-2 bg-green-600 text-white px-4 py-3 rounded-lg mt-4 justify-center'
						>
							<CheckCircle className='w-5 h-5' />
							Xabaringiz yuborildi!
						</motion.div>
					)}
					{status === 'error' && (
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.8 }}
							className='bg-red-600 text-white px-4 py-3 rounded-lg mt-4 text-center'
						>
							Xatolik yuz berdi. Qayta urinib ko‘ring.
						</motion.div>
					)}
				</AnimatePresence>
			</motion.form>
		</div>
	)
}

export default Requirement
