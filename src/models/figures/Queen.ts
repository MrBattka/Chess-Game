import Figure, { FigureNames } from "./Figure";
import blackLogo from "../../assets/bQ.svg"
import whiteLogo from "../../assets/wQ.svg"
import { Colors } from "../Colors";
import { Cell } from "../Cell";

export class Queen extends Figure {
    
    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
        this.name = FigureNames.QUEEN
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target))
            return false
        if (this.cell.isEmptyVertical(target))
            return true
            if (this.cell.isEmptyHorizontal(target))
            return true
            if (this.cell.isEmptyDiagonal(target))
            return true
        return false
    }
}