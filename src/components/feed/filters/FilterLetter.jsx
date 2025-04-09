import { getRandomColor } from "./functions";
import React, { useState, useEffect } from 'react';
import { useContext } from "react";
import { MyContext } from "../../../context/context";

export default function FilterLetter() {

    const [state, dispatch]   = useContext(MyContext);
    const { filterType, filter } = state || {};

    const [lettersWithColors, setLettersWithColors] = useState([]);
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    useEffect(() => {
        if (letters && letters.length > 0) {
            const lettersWithColor = letters.map(letter => ({
                letter: letter,
                color: getRandomColor(),
            }));
            setLettersWithColors(lettersWithColor);

        }
    }, []); 

    function handleFilterClick(letter) {
        dispatch({
            type: 'SET_FILTER',
            payload: {
                filterType: 'letter',
                filter: letter,
            },
        });
    }

    return (
        <div className="Filter FilterLetter">
            <h3>Filter by letter</h3>
            <div>
                {lettersWithColors.map((item) => (
                    <button
                        key={item.letter}
                        className={`color-${item.color}`}
                        onClick={() => handleFilterClick(item.letter)}
                    >
                        {item.letter}
                    </button>
                ))}
            </div>
        </div>
    );
}