import React from 'react';
import Typed from 'typed.js';

import "./Typewriter.css"

export default function Typewriter() {
    const ref = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(ref.current, {
            strings: [
                'Grajcie razem w wiele dostępnych tytułów',
                'Grajcie razem aby świetnie spędzić czas',
                'Grajcie razem dla niezapomnianych chwil',
                'Grajcie razem w niskich cenach'
            ],
            typeSpeed: 50,
            loop: true,
            backDelay: 3000,
            smartBackspace: true,
            shuffle: true
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className='mt-4'>
            <span className='text-3xl' ref={ref} />
        </div>
    );
}