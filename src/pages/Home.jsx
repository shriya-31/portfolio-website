import { ThemeToggle } from "@/components/ThemeToggle"
import { StarBackground } from "@/components/StarBackground"
import { Navbar } from "@/components/Navbar"
import { LandingSection } from "@/components/LandingSection"
import { AboutSection } from "../components/AboutSection"
import { ProjectsSection } from "../components/ProjectsSection"
import { Footer } from "../components/Footer"
export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* 1. Theme Toggle */}
        <ThemeToggle/>
        {/* 2.Background Effects */}
        <StarBackground />
        {/* 3. Navbar */}
        <Navbar/>
        {/* 4. Main Content -> Projects, About, Etc */}
        <main>
            <LandingSection></LandingSection>
            <AboutSection/>
            <ProjectsSection/>
        </main>
        {/* 5. Footer */}
        <Footer/>
    </div>
}