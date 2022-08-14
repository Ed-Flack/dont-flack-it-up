import Box from "./box/box";
import './boxes.css';

const Boxes = (props) => {
    console.log(props)
    let boxes = null;
    for (let i = 1; i <= 30; i++) {
        boxes = <> {boxes} <Box letter={props.letterMapping['box' + i].letter} colour={props.letterMapping['box' + i].colour}/> </>;
    }
    return (
        <div className="boxes">
            {boxes}
        </div>
    );
}

export default Boxes;