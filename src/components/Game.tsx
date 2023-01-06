import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

type Props = {
    myChoice: string,
    score: number,
    setScore: (score: number) => void
}

export const Game = ({ myChoice, score, setScore }: Props) => {

    const [house, setHouse] = useState('')
    const [playerWin, setPlayerWin] = useState('')
    const [counter, setCounter] = useState(3)

    const newHousePick = () => {
        const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock']
        setHouse(choices[Math.floor(Math.random() * 5)])
    }

    useEffect(() => {
        newHousePick();
    }, []);

    const Result = () => {
        if (myChoice === 'rock' && house === 'scissors') {
            setPlayerWin('win')
            setScore(score + 1)
        } else if (myChoice === 'rock' && house === 'lizard') {
            setPlayerWin('win')
            setScore(score + 1)
        } else if (myChoice === 'rock' && house === 'paper') {
            setPlayerWin('lose')
            setScore(score - 1)
        } else if (myChoice === 'rock' && house === 'spock') {
            setPlayerWin('lose')
            setScore(score - 1)

        } else if (myChoice === 'scissors' && house === 'paper') {
            setPlayerWin('win')
            setScore(score + 1)
        } else if (myChoice === 'scissors' && house === 'lizard') {
            setPlayerWin('win')
            setScore(score + 1)
        } else if (myChoice === 'scissors' && house === 'rock') {
            setPlayerWin('lose')
            setScore(score - 1)
        } else if (myChoice === 'scissors' && house === 'spock') {
            setPlayerWin('lose')
            setScore(score - 1)

        } else if (myChoice === 'paper' && house === 'rock') {
            setPlayerWin('win')
            setScore(score + 1)
        } else if (myChoice === 'paper' && house === 'spock') {
            setPlayerWin('win')
            setScore(score + 1)
        } else if (myChoice === 'paper' && house === 'scissors') {
            setPlayerWin('lose')
            setScore(score - 1)
        } else if (myChoice === 'paper' && house === 'lizard') {
            setPlayerWin('lose')
            setScore(score - 1)

        } else if (myChoice === 'lizard' && house === 'paper') {
            setPlayerWin('win')
            setScore(score + 1)
        } else if (myChoice === 'lizard' && house === 'spock') {
            setPlayerWin('win')
            setScore(score + 1)
        } else if (myChoice === 'lizard' && house === 'rock') {
            setPlayerWin('lose')
            setScore(score - 1)
        } else if (myChoice === 'lizard' && house === 'scissors') {
            setPlayerWin('lose')
            setScore(score - 1)

        } else if (myChoice === 'spock' && house === 'rock') {
            setPlayerWin('win')
            setScore(score + 1)
        } else if (myChoice === 'spock' && house === 'scissors') {
            setPlayerWin('win')
            setScore(score + 1)
        } else if (myChoice === 'spock' && house === 'paper') {
            setPlayerWin('lose')
            setScore(score - 1)
        } else if (myChoice === 'spock' && house === 'lizard') {
            setPlayerWin('lose')
            setScore(score - 1)

        } else {
            setPlayerWin('draw')
        }
    }

    useEffect(() => {
        const timer = counter > 0 ? setInterval(() => {
            setCounter(counter - 1)
        }, 1000) : Result()

        return () => {
            clearInterval(timer as NodeJS.Timeout)
        }
    }, [counter, house])

    return (
        <div className='game'>
            <div className="game__you">
                <span className="text">You picked:</span>
                <div className={`icon icon--${myChoice} ${playerWin === 'win' ? `icon icon--${myChoice}--winner` : ''}`}>
                </div>
            </div>

            {playerWin === 'win' && <div className="game__play">
                <span className="text">You win</span>
                <Link to='/'
                    className='play-again'
                    onClick={() => setHouse('')}>
                    Play again
                </Link>
            </div>}


            {playerWin === 'lose' && <div className="game__play">
                <span className="text">You lose</span>
                <Link to='/'
                    className='play-again'
                    onClick={() => setHouse('')}>
                    Play again
                </Link>
            </div>}

            {playerWin === 'draw' && <div className="game__play">
                <span className="text">Draw</span>
                <Link to='/'
                    className='play-again'
                    onClick={() => setHouse('')}>
                    Play again
                </Link>
            </div>}

            <div className="game__house">
                <span className="text">The House picked:</span>
                {
                    counter == 0
                        ? <div className={`icon icon--${house} ${playerWin === 'lose' ? `icon icon--${house}--winner` : ''}`}></div>
                        : <div className="counter">{counter}</div>

                }
            </div>
        </div >
    )
}