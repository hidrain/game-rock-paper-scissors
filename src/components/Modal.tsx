import ReactDOM from 'react-dom'
import close from "../images/icon-close.svg";
import rules from "../images/image-rules-bonus.svg";

type Props = {
    toggle: () => void
}

export const Modal = ({ toggle }: Props) => {

    const portalDiv = document.getElementById("modal") as HTMLElement;

    return ReactDOM.createPortal(
        <div className="modal-container">
            <div className="modal-box">
                <div className="modal__header">
                    <h1>Rules</h1>
                    <button onClick={toggle}>
                        <img src={close} alt="close" />
                    </button>
                </div>

                <img src={rules} alt="rules" />
            </div>
        </div>,

        portalDiv
    )
}