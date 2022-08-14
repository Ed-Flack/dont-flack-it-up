import React from 'react';
import './box.css';

const Box = (props) => {
    // console.log(props);
    return (
        <div onClick={() => props.onClick(props.letter)} className={props.colour ? props.colour : 'box'}>
            <div className="letter">
                {props.letter}
            </div>
        </div>
    );
}

export default Box;