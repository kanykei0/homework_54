import Cell from "./Cell";
import { CellProps } from "../../type";

interface Props {
    cells: CellProps[];
    clickCell: (id: number) => void;
}

const Board: React.FC<Props> = ({cells, clickCell}) => {     
    return(
        <div className="board">
            {cells.map((cell, index) => (
                <Cell 
                    key={index}
                    onClickCell={() => clickCell(index)} 
                    hasItem={cell.hasItem} 
                    clicked={cell.clicked} />
            ))}
        </div>
    );
};

export default Board;