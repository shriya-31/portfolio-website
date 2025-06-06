import { ArrowDown } from "lucide-react"
export const LandingSection = () => {
    return <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in">Hi, I'm</span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1">{" "}Shriya</span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">{" "}Kaistha</span>
                </h1>
                 <i className="text-primary/60 text-md md:text-lg">“A quote I live by: Shake things up. Use that big brain of yours to think your way out. Look for a new angle.”
— Takeshi Hamada, Big Hero 6</i>
                <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4">Software engineer, research nerd, and part-time dog enthusiast 🐶 on a quest to explore the many creatice ways tech can be used to make a difference.
                </p>

                <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                    <a href="#Projects" className="cosmic-button">View my Side Quests</a>
                </div>
            </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm texte-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary"/>
        </div>
    </section>
}