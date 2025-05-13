import { Code, Leaf, BookOpen, BrainCircuit } from "lucide-react"
export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About 
                <span className="text-primary"> Me</span>
            </h2>
            <div className="grid grid-cols-1 lg: grid grid-cols-2 gap-12 items-center">
                {/* LHS */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Curious Software Engineer | Research Enthusiast | Dog Lover</h3>
                    <p className="text-muted-foreground">With a strong foundation in software development owinf to 2+ years pf experience and a growing passion for AI research, I’m a Computer Science student at the University of Waterloo who thrives at the intersection of engineering and impact. My work spans full-stack development, backend systems, and reinforcement learning — driven by curiosity, clarity, and the desire to build meaningful tech.</p>
                    <p className="text-muted-foreground">I’m always looking to explore new technologies and ideas — currently venturing deeper into the AI/ML space, game-theoretic reasoning, and backend architecture. I’m also deeply passionate about using my skills to help others — whether that’s by solving real-world problems or mentoring peers.
                    When I’m not coding or dissecting a research paper, you’ll probably find me obsessing over dogs, taking long walks, or hunting down the next great puzzle to solve. 🐶</p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">Get in Touch</a>
                        <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">Download Resume</a>
                    </div>
                </div>
                {/* RHS */}
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            {/* lhs circle for img */}
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                            </div>
                            {/* rhs */}
                            <div className="text-left">
                                <h4 className="font-semibold text-lg text-primary">Software Development</h4>
                                <p className="text-muted-foreground">TODO: edit!! full-stack applications with a focus on backend systems. Comfortable with modern frameworks like React, Flask, Node, and Go — and passionate about creating robust, scalable, and maintainable solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <BrainCircuit className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg text-primary">Research & Problem Solving</h4>
                                <p className="text-muted-foreground">I’m drawn to problems that blend logic, learning, and complexity — from multi-agent systems to mathematical puzzles. I enjoy diving deep, asking why things work, and being simply creative!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            {/* lhs circle for img */}
                            <div className="p-3 rounded-full bg-primary/10">
                                <Leaf className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg text-primary">Community & Impact</h4>
                                <p className="text-muted-foreground">Leading initiatives at UW Blueprint to scope and deliver tech-for-good projects, and fostering inclusion in tech through WiCS events, mentorship, and outreach.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
}