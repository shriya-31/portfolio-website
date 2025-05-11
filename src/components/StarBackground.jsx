import { useEffect, useState } from "react"
export const StarBackground = () => {
    //list that keeps track of stars 
    // star -> id, size, x, y, opacity, animationDuration 
    // meteor -> id, size, x, y, delay, animationDuration 

    const [stars, setStars] = useState([])
    const [meteors, setMeteors] = useState([])

    useEffect(() => {
        generateStars(); 
        generateMeteors();
        // Imp idea -> changing the num of stars when displaying on different screen size 
        const handleResize = () => {
            generateStars(); 
        }; 
        window.addEventListener('resize', handleResize); 
        //cleanup - to avoid memory leaks
        return () => { 
            window.removeEventListener("resize", handleResize)
        }
    }, [])
    const generateStars = () => {
        const numStars = Math.floor(window.innerWidth * window.innerHeight / 10000); 
        const newStars = [] 
        for (let i = 0; i < numStars; ++i){
            newStars.push({
                id: i, 
                size: Math.random() * 3 + 1, 
                x: Math.random() * 100, 
                y: Math.random() * 100, //lace star anywhere in viewport from 0 to 100%, 
                opacity: Math.random() * 0.5 + 0.5, 
                animationDuration: Math.random() * 4 + 2, 
            });
        }
        setStars(newStars)
    }
    const generateMeteors = () => {
        const numMeteors = 4
        const newMeteors = [] 
        for (let i = 0; i < numMeteors; ++i){
            newMeteors.push({
                id: i, 
                size: Math.random() * 2 + 1, 
                x: Math.random() * 100, 
                y: Math.random() * 20, //place meteoranywhere in viewport from 0 to 100%, 
                delay: Math.random() * 15, 
                animationDuration: Math.random() * 3 + 3, 
            });
        }
        setMeteors(newMeteors)
    }
    return <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {stars.map((star) => (
            <div key={star.id} className="star animate-pulse-subtle" style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
            }}/>
        ))}
        {meteors.map((meteor) => (
            <div key={meteor.id} className="meteor animate-meteor" style={{
            width: meteor.size * 50 + "px",
            height: meteor.size * 2 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            delay: meteor.delay,
            animationDuration: meteor.animationDuration + "s",
            }}/>  
        ))}
    </div>
}