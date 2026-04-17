import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'

// Pages
import Home        from './pages/Home'
import About       from './pages/About'
import Team        from './pages/Team'
import CaseStudies from './pages/CaseStudies'
import Contact     from './pages/Contact'
import Privacy     from './pages/Privacy'
import Terms       from './pages/Terms'
import Download    from './pages/Download'

// 404
function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
      <div className="font-mono text-teal-500 text-6xl font-bold mb-4">404</div>
      <h1 className="font-display font-bold text-ink text-2xl mb-3">Page not found</h1>
      <p className="text-gray-500 mb-8">The page you're looking for doesn't exist.</p>
      <a href="/" className="bg-teal-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-teal-700 transition-colors">
        Back to Home
      </a>
    </main>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="font-body min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/"             element={<Home />}        />
            <Route path="/about"        element={<About />}       />
            <Route path="/team"         element={<Team />}        />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/contact"      element={<Contact />}     />
            <Route path="/privacy"      element={<Privacy />}     />
            <Route path="/terms"        element={<Terms />}       />
            <Route path="/download"     element={<Download />}    />
            <Route path="*"             element={<NotFound />}    />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
