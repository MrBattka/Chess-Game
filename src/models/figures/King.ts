import Figure, { FigureNames } from "./Figure";
import blackLogo from "../../assets/bK.svg"
import whiteLogo from "../../assets/wK.svg"
import { Colors } from "../Colors";
import { Cell } from "../Cell";

export class King extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
        this.name = FigureNames.KING
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target)) 
            return false
        const dx = Math.abs(this.cell.x - target.x)
        const dy = Math.abs(this.cell.y - target.y)
        const x = 1
        const y = 1

        if ((dx === 1 && dy === 1)
            || target.x === this.cell.x + x
            && target.y === this.cell.y
            || target.x === this.cell.x - x
            && target.y === this.cell.y
            || target.y === this.cell.y + y
            && target.x === this.cell.x
            || target.y === this.cell.y - y
            && target.x === this.cell.x) {
            return true
        }

        return false
    }
}