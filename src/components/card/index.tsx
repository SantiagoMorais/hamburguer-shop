import styled from "styled-components"
import { theme } from "@styles/style.tsx"
import React, { useState } from "react"
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AddToCartCard } from "../addToCartCard";
import { ISnackData } from "@contexts/cartContext";

interface ICardProps {
    snackData: ISnackData;
    handleAddToCart: (id: number) => void;
}

export const Card: React.FC<ICardProps> = ({ snackData, handleAddToCart }) => {
    const [showSnackCard, setShowSnackCard] = useState(false);

    return (
        <Container>
            {snackData !== null &&
                <>
                    <div className="image">
                        <img className="lunchImage" src={snackData?.image} alt="Lunch image" />
                    </div>
                    <div className="data">
                        <h2 className="snackName">{snackData.name}</h2>
                        {(snackData.ingredients?.length ?? 0) > 0 &&
                            <p className="ingredientsList">Ingredients: {snackData.ingredients?.map((ingredient, index) =>
                                <span key={index} className="ingredient"> {ingredient} {index === (snackData.ingredients?.length ?? 0) - 1 ? "" : "|"} </span>
                            )}</p>
                        }
                        {snackData.flavor &&
                            <p className="flavor">
                                <span>Flavor:</span> {snackData.flavor}
                            </p>
                        }
                        {snackData.weight &&
                            <p className="weight">
                                <span>Weight:</span> {snackData.weight}
                            </p>
                        }
                        <div className="price">
                            {snackData.price &&
                                <p className="price">
                                    <span>Price: </span> ${snackData.price}
                                </p>
                            }
                            {snackData.ml &&
                                <p className="price">
                                    <span className="mlMeasure">- {snackData.ml}ml</span>
                                </p>
                            }
                        </div>
                    </div>
                    <div className="cart">
                        <button className="addToCart" onClick={() => handleAddToCart(snackData.id)}>
                            <FontAwesomeIcon icon={faCartPlus} />
                        </button>
                    </div>
                    {showSnackCard &&
                        <AddToCartCard snackId={snackData.id} onClose={() => setShowSnackCard(!showSnackCard)} />
                    }
                </>
            }
        </Container>
    )
}

const Container = styled.div`
    border-radius: 20px;
    background-color: ${theme.textColor};
    color: ${theme.backgroundColor};
    display: flex;
    padding: 10px 13px;
    gap: 10px;
    position: relative;

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

        .snackName {
            color: ${theme.highlightColor};
            font-size: 18px;
        }

        .ingredientsList {
            font-weight: 700;
            
            .ingredient {
                text-transform: capitalize;
                font-weight: 500;
            }
        }

        .flavor {
            text-transform: capitalize;
            font-weight: 500;

            span {
                font-weight: 700;
            }
        }

        .weight {
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

    .addToCart {
        position: absolute;
        right: 15px;
        bottom: 15px;
        padding: 3px;
        font-size: 18px;
        border-radius: 8px;
        border: 1px solid;
        color: ${theme.textColor};
        background-color: ${theme.backgroundColor};
        cursor: pointer;
        transition: .3s;

        &:hover {
            opacity: .8;
            box-shadow: 0 0 10px ${theme.highlightColor};
            color: ${theme.highlightColor};
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