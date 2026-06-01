import { Route, Routes } from 'react-router-dom'
import './App.css'
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop'
import { AboutPage } from './pages/AboutPage/AboutPage'
import { ContactPage } from './pages/ContactPage/ContactPage'
import { HomePage } from './pages/HomePage/HomePage'
import { ProjectPage } from './pages/ProjectPage/ProjectPage'

function App() {
	return (
		<>
			<ScrollToTop />

			<Routes>
				<Route path='/' element={<HomePage />}></Route>
				<Route path='projects' element={<ProjectPage />}></Route>
				<Route path='contact' element={<ContactPage />}></Route>
				<Route path='about-me' element={<AboutPage />}></Route>
			</Routes>
		</>
	)
}

export default App
