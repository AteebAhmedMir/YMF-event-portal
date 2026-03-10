import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import CTASection from './components/CTASection'
import CurriculumSection from './components/CurriculumSection'
import WhatWeBuildSection from './components/WhatWeBuildSection'
import EnrollmentSection from './components/EnrollmentSection'

function App() {
    return (
        <div className="app-container">
            <Toaster position="top-right" />
            <main>
                <HeroSection />
                <FeaturesSection />
                <CTASection />
                <CurriculumSection />
                <WhatWeBuildSection />
                <EnrollmentSection />
            </main>
        </div>
    )
}

export default App
