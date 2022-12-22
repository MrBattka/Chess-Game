import React from "react"
import Figure from "../models/figures/Figure"

interface LostFiguresProps {
    title: string
    figure: Figure[]
}

const LostFigures: React.FC<LostFiguresProps> = ({title, figure}) => {
    return(
        <div className="lost">
            <h3>{title}</h3>
            {figure.map(figure =>
                <div>
                    {figure.name} {figure.logo && <img width={20} height={20} src={figure.logo} alt="#"/>}
                </div>
                )}
        </div>
    )
}

export default LostFigures