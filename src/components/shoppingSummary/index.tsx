import styled from "styled-components"
import { theme } from "../../styles/style"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../contexts/cartContext";
import { useContext } from "react";

interface IShoppingSummaryProps {
    closeWindow: () => void;
    totalValue: number;
}

export const ShoppingSummary: React.FC<IShoppingSummaryProps> = ({ closeWindow, totalValue }) => {
    const { cartItems, setCartItems } = useContext(CartContext);

    const handleCompletePurchase = () => {
        setCartItems([]);
    }

    return (
        <Card>
            <div className="background"></div>

            <div className="container">
                <button
                    className="closeButton"
                    onClick={closeWindow}
                    title="Close Window">
                    <FontAwesomeIcon icon={faX} />
                </button>
                {cartItems.length > 0
                    ? <>
                        <h2 className="summaryTitle">Shopping Summary</h2>
                        <ul className="items">
                            {cartItems.map((item, index) =>
                                <li key={index} className="item"><p className="name"><span>{index + 1}.</span> {item.name}</p><span>${item.price}</span></li>
                            )}
                        </ul>

                        <h3 className="totalValue">Total value: <span>${totalValue}</span></h3>
                        <button className="finalizePurchase" onClick={handleCompletePurchase}>Confirm Purchase?</button>
                    </>
                    : <div className="thankYou">
                        <h2>Thank you for your choice!</h2>
                        <p>Your shopping you arrived really soon, enjoy! 🍔😋</p>
                    </div>
                }
            </div>
        </Card>
    )
}

const Card = styled.div`
    position: fixed;
    width: 100vw;
    min-height: 100vh;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;

    .background {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100vw;
        height: 100vh;
        background-color: ${theme.backgroundColor};
        opacity: .3;
    }

    .container {
        background-color: ${theme.textColor};
        color: ${theme.backgroundColor};
        max-width: 50vw;
        min-width: 700px;
        display: flex;
        flex-direction: column;
        z-index: 2;
        padding: 25px;
        position: relative;
        border-radius: 20px;
        gap: 20px;

        .closeButton {
            position: absolute;
            top: 10px;
            right: 10px;
            cursor: pointer;
            font-size: 16px;
            border-radius: 8px;
            border: 1px solid;
            width: 30px;
            height: 35px;
            opacity: .6;
            transition: .3s;
    
            &:hover {
                opacity: 1;
            }
        }

        .items {
            display: flex;
            flex-direction: column;
            gap: 3px;
            max-height: 300px;
            overflow-y: scroll;
            padding: 5px;

            .item {
                display: flex;
                justify-content: space-between;
                font-weight: 500;
                padding: 3px 0;

                &:nth-child(odd) {
                    background-color: rgba(0,0,0,.2);
                }

                span {
                    font-weight: 700;
                    color: ${theme.highlightColor};
                }
            }
        }

        .finalizePurchase {
            width: 250px;
            align-self: center;
            transition: .3s;

            &:hover {
                opacity: .8;
            }
        }

        .thankYou {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;

            p {
                font-size: 20px;
            }
        }
    }

    @media(max-width: 768px) {
        .container {
            max-width: 100%;
            width: 100%;
            min-width: 300px;
            margin: 20px;

            .thankYou {
                text-align: center;
    
                p {
                    font-size: 18px;
                }
            }
        }
    }

    @media(max-width: 350px) {
        .container {
            .items {
                .item {
                    justify-content: center;
                    flex-direction: column;
                    align-items: center;
                }
            }
    
            .finalizePurchase {
                width: 200px;
                font-size: 18px;
            }
        }
    }
`