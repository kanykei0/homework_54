import './Cell.css';
import { CellProps } from '../../type';

const Cell: React.FC<CellProps> = ({hasItem, clicked, onClickCell}) => {
    let cellClicked = ['cell'];

    if(clicked){
        cellClicked.push('clicked');
    }

    let detected = '';

    if(clicked && hasItem){
        detected = 'O';
    }

    return(
        <div onClick={onClickCell} className={cellClicked.join(' ')}>
            {detected}
        </div>
    );
};

export default Cell;