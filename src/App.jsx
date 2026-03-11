import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import CTASection from './components/CTASection'
import CurriculumSection from './components/CurriculumSection'
import WhatWeBuildSection from './components/WhatWeBuildSection'
import EnrollmentSection from './components/EnrollmentSection'
import Footer from './components/Footer'
import BrandsSection from './components/BrandsSection'

function App() {
    return (
        <div className="app-container">
            <Toaster position="top-right" />
            <main>
                <HeroSection />
                <BrandsSection />
                <FeaturesSection />
                <CTASection />
                <CurriculumSection />
                <WhatWeBuildSection />
                <EnrollmentSection />
                <Footer />
            </main>
        </div>
    )
}

export default App
