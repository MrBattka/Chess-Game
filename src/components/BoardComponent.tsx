import React, { useEffect, useState } from "react";
import '../App.css';
import Board from "../models/Board";
import { Cell } from "../models/Cell";
import { Colors } from "../models/Colors";
import { Player } from "../models/Player";
import CellComponent from "./CellComponent";
import LostFigures from "./LostFigures";
import Timer from "./Timer";

interface BoardProps {
    board: Board
    setBoard: (board: Board) => void
    currentPlayer: Player | null
    swapPlayer: () => void
    restart: () => void
}

const BoardComponent: React.FC<BoardProps> = ({ board, setBoard, currentPlayer, swapPlayer, restart }) => {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

    function click(cell: Cell) {
        if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
            selectedCell.moveFigure(cell)
            swapPlayer()
            setSelectedCell(null)
            updateBoard()
        } else {
            if (cell.figure?.color === currentPlayer?.color) {
                setSelectedCell(cell)
            }
        }
    }

    useEffect(() => {
        highlightCells()
    }, [selectedCell])

    function highlightCells() {
        board.highlightCells(selectedCell)
        updateBoard()
    }

    function updateBoard() {
        const newBoard = board.getCopyBoard()
        setBoard(newBoard)
    }

    return (
        <div className="board__wrapper">
            <div className="lost__wrapper">
                <LostFigures
                    title='Черные фигуры:'
                    figure={board.lostBlackFigure}
                />
                <LostFigures
                    title='Белые фигуры:'
                    figure={board.lostWhiteFigure}
                />
            </div>
            <div className="wrapper__desk">
                <h3>Текущий  игрок: <span className={currentPlayer?.color === Colors.WHITE ? "white__player" : ""}>
                    {currentPlayer?.color}
                </span></h3>
                <div className="board">
                    {board.cells.map((row, index) =>
                        <React.Fragment key={index}>
                            {row.map(cell =>
                                <CellComponent
                                    click={click}
                                    cell={cell}
                                    key={cell.id}
                                    selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                                />
                            )}
                        </React.Fragment>
                    )}
                </div>
            </div>
            <div className="menu">
                <Timer
                    restart={restart}
                    currentPlayer={currentPlayer}
                />
            </div>
        </div>
    )
}

export default BoardComponent