import { useState } from 'react'
import { Modal } from './Modal'

type Props = {}

export const Footer = (props: Props) => {

    const [modal, setModal] = useState(false)

    const toggle = () => {
        setModal(!modal)
    }

    return (
        <>
            <div className="footer">
                <div className="atribution">
                    Coded by <a href='https://github.com/hidrain'>Yuliya Kurilchik</a>
                </div>

                <button className="rules" onClick={toggle}>
                    Rules
                </button>
            </div>

            {
                modal ?
                    <Modal toggle={toggle} />
                    : null
            }
        </>
    )
}