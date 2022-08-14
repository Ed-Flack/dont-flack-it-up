import Boxes from "./boxes/boxes";
import './game.css';
import {useState} from "react";
import Keyboard from "./keyboard/keyboard";
import data from "./sgb-words.txt";

// make game scalable, outer component should care about adjusting css

const Game = () => {
    const [count, setCount] = useState(1);
    const [currentWord, setCurrentWord] = useState('');
    const [offset, setOffset] = useState(0);
    const [gameDone, setGameDone] = useState(false);
    const wordTofind = 'WHICH';
    const lettersTally = {W: 1, H: 2, I: 1, C: 1};
    const [letterMapping, setLetterMapping] = useState(() => {
        let letterMapping = {};
        for (let i = 1; i <= 30; i++) {
            letterMapping['box' + i] = {letter: '', colour: ''};
        }
        return letterMapping;
    });

    const handleClick = (letter) => {
        if (!gameDone) {
            if (letter === '←') {
                if (count > 1 + offset) {
                    const mapping = letterMapping;
                    const thisCount = count - 1;
                    mapping['box' + thisCount].letter = '';
                    setCount(thisCount);
                    setLetterMapping(mapping);
                    setCurrentWord(currentWord.slice(0, currentWord.length - 1));
                }
            } else if (letter === '⏎') {
                if (currentWord.length === 5) {
                    fetch(data)
                        .then(r => r.text())
                        .then(text => {
                            const words = text.split('\n');
                            if (words.includes(currentWord.toLowerCase())) {
                                const mapping = letterMapping;
                                let thisLetterTally = {};
                                for (let i = 0; i < 5; i++) {
                                    // currentWord.split('').forEach(() => thisLetterTally[currentWord[i]] = thisLetterTally[currentWord[i]] ? 1 : thisLetterTally[currentWord[i]] + 1);
                                    if (wordTofind.includes(currentWord[i])) {
                                        thisLetterTally[currentWord[i]] = !thisLetterTally[currentWord[i]] ? 1 : thisLetterTally[currentWord[i]] + 1;
                                        if (thisLetterTally[currentWord[i]] <= lettersTally[currentWord[i]]) {
                                            mapping['box' + (offset + i + 1)].colour = 'yellow';
                                        } else if (currentWord[i] === wordTofind[i]) {
                                            mapping['box' + (offset + i + 1)].colour = 'green';
                                            if (thisLetterTally[currentWord[i]] > lettersTally[currentWord[i]]) {
                                                currentWord.split('').forEach((char, position) => {
                                                    if (char === currentWord[i] && position < i) {
                                                        mapping['box'+(offset + i + 1)].colour = '';
                                                    }
                                                });
                                            }
                                        }
                                    }
                                    // if (wordTofind.includes(currentWord[i]) && (!lettersUsed[currentWord[i]] || lettersUsed[currentWord[i]] < lettersTally[wordTofind[i]])) {
                                    //     lettersUsed[currentWord[i]] = lettersUsed[currentWord[i]] ? 1 : lettersUsed[currentWord[i]] + 1;
                                    //     mapping['box' + (offset + i + 1)].colour = 'yellow';
                                    // }
                                    // if (currentWord[i] === wordTofind[i]) {
                                    //     console.log(offset + i + 1);
                                    //     mapping['box' + (offset + i + 1)].colour = 'green';
                                    //     lettersUsed[currentWord[i]] = lettersUsed[currentWord[i]] ? 1 : lettersUsed[currentWord[i]] + 1;
                                    // }
                                }
                                if (currentWord === wordTofind) {
                                    setGameDone(true);
                                }
                                console.log(mapping);
                                setLetterMapping(mapping);
                                setOffset(offset + 5);
                                setCurrentWord('');
                            }
                        });
                }
            } else if (currentWord.length < 5) {
                const mapping = letterMapping;
                mapping['box' + count].letter = letter;
                setCount(count < 26 ? count + 1 : 26);
                setLetterMapping(mapping);
                setCurrentWord(currentWord + letter);
                console.log(currentWord + letter);
            }
        }
    }

    return (
        <div className="game">
            <h1 className="title">Don't Flack it up</h1>
            <Boxes className="boxes" letterMapping={letterMapping}/>
            <Keyboard className="keyboard" handleClick={handleClick}/>
        </div>
    );
}

export default Game;