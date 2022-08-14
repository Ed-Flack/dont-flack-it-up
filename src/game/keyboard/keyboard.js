import Box from "../boxes/box/box";
import './keyboard.css';

const Keyboard = (props) => {

    return (<div className="keyboard">
            <div className="topRow">
                <Box letter="Q" onClick={props.handleClick}/>
                <Box letter="W" onClick={props.handleClick}/>
                <Box letter="E" onClick={props.handleClick}/>
                <Box letter="R" onClick={props.handleClick}/>
                <Box letter="T" onClick={props.handleClick}/>
                <Box letter="Y" onClick={props.handleClick}/>
                <Box letter="U" onClick={props.handleClick}/>
                <Box letter="I" onClick={props.handleClick}/>
                <Box letter="O" onClick={props.handleClick}/>
                <Box letter="P" onClick={props.handleClick}/>
                <Box letter="←" onClick={props.handleClick}/>
            </div>
            <div className="middleRow">
                <Box letter="A" onClick={props.handleClick}/>
                <Box letter="S" onClick={props.handleClick}/>
                <Box letter="D" onClick={props.handleClick}/>
                <Box letter="F" onClick={props.handleClick}/>
                <Box letter="G" onClick={props.handleClick}/>
                <Box letter="H" onClick={props.handleClick}/>
                <Box letter="J" onClick={props.handleClick}/>
                <Box letter="K" onClick={props.handleClick}/>
                <Box letter="L" onClick={props.handleClick}/>
                <Box letter="⏎" onClick={props.handleClick}/>
            </div>
            <div className="bottomRow">
                <Box letter="Z" onClick={props.handleClick}/>
                <Box letter="X" onClick={props.handleClick}/>
                <Box letter="C" onClick={props.handleClick}/>
                <Box letter="V" onClick={props.handleClick}/>
                <Box letter="B" onClick={props.handleClick}/>
                <Box letter="N" onClick={props.handleClick}/>
                <Box letter="M" onClick={props.handleClick}/>
            </div>
        </div>);
}

export default Keyboard;