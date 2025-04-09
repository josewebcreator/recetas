import { getRandomColor } from "./functions";
import React, { useState, useEffect } from 'react';

export default function FilterLetter({ filter, setFilter }) {
    const [lettersWithColors, setLettersWithColors] = useState([]);

    useEffect(() => {
        if (filter && filter.letters && filter.letters.length > 0) {
            const lettersWithColor = filter.letters.map(letter => ({
                letter: letter,
                color: getRandomColor(),
            }));
            setLettersWithColors(lettersWithColor);
        }
    }, []); 

    return (
        <div className="Filter FilterLetter">
            <h3>{filter.name}</h3>
            <div>
                {lettersWithColors.map((item) => (
                    <button
                        key={item.letter}
                        className={`color-${item.color}`}
                        onClick={() => setFilter(item.letter)}
                    >
                        {item.letter}
                    </button>
                ))}
            </div>
        </div>
    );
}