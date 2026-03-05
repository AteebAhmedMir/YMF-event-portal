import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import CTASection from './components/CTASection'
import CurriculumSection from './components/CurriculumSection'
import PricingSection from './components/PricingSection'
import EnrollmentSection from './components/EnrollmentSection'
import Footer from './components/Footer'

function App() {
    return (
        <div className="app-container">
            <Toaster position="top-right" />
            <Navbar />
            <main>
                <HeroSection />
                <FeaturesSection />
                <CTASection />
                <CurriculumSection />
                <PricingSection />
                <EnrollmentSection />
            </main>
            <Footer />
        </div>
    )
}

export default App
