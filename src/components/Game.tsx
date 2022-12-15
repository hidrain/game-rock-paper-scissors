import React, { useEffect, useState } from 'react'

type Props = {
    myChoice: string,
    score: number,
    setScore: (score: number) => void
}

export const Game = ({ myChoice, score, setScore }: Props) => {

    const [house, setHouse] = useState('')
    const [playerWin, setPlayerWin] = useState('')

    const newHousePick = () => {
        const choices = ['rock', 'paper', 'scissors']
        setHouse(choices[Math.floor(Math.random() * 3)])
    }

    useEffect(() => {
        newHousePick()
    }, [])

    return (
        <div>
            My choice: {myChoice} <br />
            House choice: {house}
        </div>
    )
}