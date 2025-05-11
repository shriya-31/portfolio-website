import { ExternalLink, ArrowRight } from "lucide-react";

const projects = [
    {
        id: 1, 
        title: "WatDFS: Distributed File System", 
        description: "Built a fault-tolerant distributed file system in C++ with client-server architecture using RPC. Implemented consistency checks, version control, and concurrent access support to simulate realistic file operations at scale.", 
        image: "/projects/placeholder-img.jpg", 
        tags: ["C++", "C", "Systems Design"], 
        githubURL: "#"
    }, 
    {
        id: 2, 
        title: "Gossip LLM: Multiagent RL Research", 
        description: "Built a fault-tolerant distributed file system in C++ with client-server architecture using RPC. Implemented consistency checks, version control, and concurrent access support to simulate realistic file operations at scale.", 
        image: "/projects/placeholder-img.jpg", 
        tags: ["Python/Numpy", "Reinforcement Learning", "Game Theory"], 
        githubURL: "#"
    }, 
    {
        id: 3, 
        title: "FilmFolios: Full Stack Movie Platform", 
        description: "Built a fault-tolerant distributed file system in C++ with client-server architecture using RPC. Implemented consistency checks, version control, and concurrent access support to simulate realistic file operations at scale.", 
        image: "/projects/placeholder-img.jpg", 
        tags: ["React", "Typescript", "MySQL", "Python", "Flask", "Docker"], 
        githubURL: "#"
    }, 
    {
        id: 4, 
        title: "Hat Guessing Game: Math Research Paper", 
        description: "Built a fault-tolerant distributed file system in C++ with client-server architecture using RPC. Implemented consistency checks, version control, and concurrent access support to simulate realistic file operations at scale.", 
        image: "/projects/placeholder-img.jpg", 
        tags: ["Research", "Discrete Math", "Problem Solving"], 
        paperURL: "#"
    }, 
    {
        id: 5, 
        title: "Gymmy: Design Project", 
        description: "Designed a mobile-first fitness app focused on helping beginners build consistent workout habits. Conducted user research, journey mapping, and iterative prototyping to prioritize approachability, habit tracking, and motivational design.", 
        image: "/projects/placeholder-img.jpg", 
        tags: ["UX/UI", "Figma", "Designing"], 
        paperURL: "#"
    }
    
]
export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className=" containter mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                {" "}Featured<span className="text-primary"> Projects</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum recusandae vitae similique pariatur nisi suscipit ullam esse odio inventore libero. Quidem natus molestiae nobis corrupti ea non distinctio id doloremque!
            </p>
            {/* Project Display Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className=" h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                        </div>
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/80 text-secondary">{tag}</span>
                                ))}
                            </div>
                            <h4 className="text-xl font:semibold mb-1">{project.title}
                            </h4>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}
                            </p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={project.githubURL} 
                                    target="_blank"
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300"><ExternalLink size={20}></ExternalLink></a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
            {/* Github Profile Link */}
            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/shriya-31" target="_blank">
                    Check my Github <ArrowRight size={16}/>
                </a>
            </div>
        </div>
    </section>; 
}