"use client";
import { useState } from 'react';

export default function StartCard() {
    const [transformStyle, setTransformStyle] = useState('');

    const handleMouseMove = (e: React.MouseEvent) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const cardCenterX = rect.left + rect.width / 2;
        const cardCenterY = rect.top + rect.height / 2;
        const angleX = (e.clientY - cardCenterY) / 20;
        const angleY = (e.clientX - cardCenterX) / -20;
        setTransformStyle(`rotateX(${angleX}deg) rotateY(${angleY}deg)`);
    };

    const handleMouseLeave = () => {
        setTransformStyle('rotateX(0) rotateY(0)');
    };

    return (
        <div 
            className="relative mx-auto mt-20 max-w-5xl rounded-3xl bg-gradient-to-r from-blue-500 to-indigo-500 px-8 py-16 text-center text-white shadow-lg transition-transform duration-300 ease-out"
            style={{
                transform: transformStyle,
                perspective: '1000px',
            }}
            onMouseMove={handleMouseMove} 
            onMouseLeave={handleMouseLeave}
        >
            <h2 className="text-3xl font-bold">Ready to get started?</h2>
            <p className="mt-4 text-xl">Create an account for free!</p>
            <div className="mt-8">
                <a 
                    href="https://app.celesia.io/" 
                    className="rounded-full bg-white px-6 py-3 text-lg font-semibold text-blue-500 shadow-md hover:bg-gray-100"
                >
                    Get started →
                </a>
            </div>
            
            {/* Top-left grid pattern */}
            <div className="absolute top-6 left-6 pointer-events-none opacity-20">
                <svg width="80" height="80">
                    <defs>
                        <pattern id="small-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="2" fill="white" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#small-dots)" />
                </svg>
            </div>

            {/* Bottom-right grid pattern */}
            <div className="absolute bottom-6 right-6 pointer-events-none opacity-20">
                <svg width="80" height="80">
                    <rect width="100%" height="100%" fill="url(#small-dots)" />
                </svg>
            </div>
        </div>
    );
}