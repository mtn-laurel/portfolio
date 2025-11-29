import { useEffect, useRef } from 'react';
import "./Hero.css";

export default function Hero() {
    const streamingRef = useRef<HTMLHeadingElement>(null);
    const fullText = "EMERY LAUREL JONES";

    useEffect(() => {
        if (!streamingRef.current) return;

        let index = 0;
        streamingRef.current.textContent = "";

        let timeoutId: ReturnType<typeof setTimeout>;

        function typeWriter() {
            if (streamingRef.current && index < fullText.length) {
                streamingRef.current.textContent += fullText.charAt(index);
                index++;
                timeoutId = setTimeout(typeWriter, 110);
            }
        }
        typeWriter();

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <header className="hero">
            <div className="overlay">
                <h1 ref={streamingRef}></h1>
                <p>Front End Developer & Digital Artist</p>
            </div>
        </header>
    );
}