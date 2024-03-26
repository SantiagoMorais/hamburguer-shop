import styled from "styled-components"
import { CartContext, ISnackData } from "../../contexts/cartContext"
import { theme } from "../../styles/style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";

interface ICardsInTheCartProps {
    snackData: ISnackData;
}

export const CardsInTheCart: React.FC<ICardsInTheCartProps> = ({ snackData }) => {
    const { cartItems, setCartItems } = useContext(CartContext);

    const handleRemoveSnack = () => {
        const index = cartItems.findIndex(item => item.id === snackData.id);

        if (index !== -1) setCartItems(prevData => {
            const newCartItems = [...prevData];
            newCartItems.splice(index, 1);
            return newCartItems;
        })
    }

    return (
        <Card>
            <button
                className="closeButton"
                onClick={handleRemoveSnack}
                title="Remove Item">
                <FontAwesomeIcon icon={faX} />
            </button>

            <div className="image">
                <img className="lunchImage" src={snackData.image} alt="Lunch image" />
            </div>

            <div className="data">
                <h2 className="snackName">{snackData.name}</h2>
                {snackData.flavor &&
                    <p className="flavor">
                        <span>Flavor:</span> {snackData.flavor}
                    </p>
                }
                {snackData.ml &&
                    <p className="price">
                        <span className="mlMeasure">- {snackData.ml}ml</span>
                    </p>
                }
                {snackData.weight &&
                    <p className="price">
                        <span className="weight">Weight:</span> {snackData.weight}
                    </p>
                }
                {snackData.price &&
                    <p className="price">
                        <span>Price: </span> ${snackData.price}
                    </p>
                }
            </div>
        </Card>
    )
}

const Card = styled.div`
    border-radius: 20px;
    background-color: ${theme.textColor};
    color: ${theme.backgroundColor};
    display: flex;
    padding: 10px 13px;
    gap: 10px;
    position: relative;

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

    .image {
        .lunchImage {
            height: 100%;
            min-height: 150px;
            object-fit: cover;
            width: 120px;
            border-radius: 20px;
            box-shadow: 0 0 10px ${theme.highlightColor};
        }
    }

    .data {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100%;

        .snackName {
            color: ${theme.highlightColor};
            font-size: 18px;
        }

        .flavor, .weight {
            text-transform: capitalize;
            font-weight: 500;

            span {
                font-weight: 700;
            }
        }

        .price {
            font-weight: 500;
            span {
                font-weight: 700;
            }

            .mlMeasure {
                font-weight: 700;
                color: ${theme.highlightColor};
            }
        }
    }

    @media(max-width: 440px) {
        .image {
            .lunchImage {
                width: 100px;
            }
        }
    
        .data {
            gap: 5px;
            font-size: 14px;
    
            .snackName {
                font-size: 16px;
            }
        }
    }

    @media(max-width: 350px) {
        flex-direction: column;

        .image {
            width: 100%;
            display: flex;
            justify-content: center;

            .lunchImage {
                width: 100%;
                height: 150px;
                min-height: 0px;
            }
        }
    }
`
