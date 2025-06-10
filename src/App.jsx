import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Header from './components/Header'
import Sidebar from './components/SideBaer'

import Banner from './components/banner/Banner'
import FrontEnd from './components/frontEnd/FrontEnd'
import CodersPage from './components/sections/coders/Coders'
import AboutPage from './components/sections/forUs/ForUs'
import TestPage from './components/sections/questions/Questions'
import RequestsPage from './components/sections/requirement/Requirement'
import StatsPage from './components/sections/statistics/Statistics'

const App = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false)

	return (
		<Router>
			<div className='flex h-screen overflow-hidden bg-[#18181B]'>
				<div
					className={`fixed inset-y-0 left-0 z-40 w-[220px] bg-[#18181B] p-1 text-white]
            transform transition-transform duration-300 ease-in-out
            md:static md:translate-x-0
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
				>
					<Sidebar onClose={() => setSidebarOpen(false)} />
				</div>

				{sidebarOpen && (
					<div
						className='fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden'
						onClick={() => setSidebarOpen(false)}
					></div>
				)}

				{/* Main content */}
				<div className='flex flex-col flex-1 overflow-y-auto h-full'>
					<Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
					<Routes>
						<Route
							path='/'
							element={
								<>
									<Banner />
									<FrontEnd />
								</>
							}
						/>
						<Route path='/questions' element={<TestPage />} />
						<Route path='/statistics' element={<StatsPage />} />
						<Route path='/requirements' element={<RequestsPage />} />
						<Route path='/coders' element={<CodersPage />} />
						<Route path='/forUs' element={<AboutPage />} />
					</Routes>
				</div>
			</div>
		</Router>
	)
}

export default App
