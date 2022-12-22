import Figure, { FigureNames } from "./Figure";
import blackLogo from "../../assets/bR.svg"
import whiteLogo from "../../assets/wR.svg"
import { Colors } from "../Colors";
import { Cell } from "../Cell";

export class Rook extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
        this.name = FigureNames.ROOK
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target))
            return false
        if (this.cell.isEmptyVertical(target))
            return true
        if (this.cell.isEmptyHorizontal(target))
            return true
        return false
    }
}