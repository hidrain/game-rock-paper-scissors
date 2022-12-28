type Props = {
    score: number
}

export const Header = ({ score }: Props) => {
    return (
        <div className="header">
            <div className="text">
                <span>Rock</span>
                <span>Paper</span>
                <span>Scissors</span>
                <span>Lizard</span>
                <span>Spock</span>
            </div>

            <div className="score-box">
                <span>Score</span>
                <div className="score-box__score">
                    {score}
                </div>
            </div>
        </div>
    )
}