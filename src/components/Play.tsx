import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
    setMyChoice: (value: string) => void
}

export const Play = ({ setMyChoice }: Props) => {

    const setChoice = (e: any) => {
        setMyChoice(e.target.dataset.id)
    }

    return (
        <div>
            <Link to='/game'>
                <div data-id='paper' onClick={setChoice}>
                    Paper
                </div>
            </Link >

            <Link to='/game'>
                <div data-id='scissors' onClick={setChoice}>
                    Scissors
                </div>
            </Link >

            <Link to='/game'>
                <div data-id='rock' onClick={setChoice}>
                    Rock
                </div>
            </Link >
        </div >
    )
}