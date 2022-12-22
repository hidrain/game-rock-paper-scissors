import React from 'react'

type Props = {
    score: number
}

export const Header = ({ score }: Props) => {
    return (
        <div>
            <h1>Score: {score}</h1>
        </div>
    )
}