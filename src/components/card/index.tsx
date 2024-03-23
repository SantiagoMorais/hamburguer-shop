import styled from "styled-components"
import { theme } from "../../styles/style"
import React, { useState } from "react"
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AddToCartCard } from "../addToCartCard";

interface ILunchData {
    id: number;
    name: string;
    flavor?: string;
    ml_options?: { ml: number; }[];
    price_per_ml?: number;
    price?: number;
    image: string;
    ingredients?: string[];
    weight?: string;
}

interface ICardProps {
    snackData: ILunchData;
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

                            {snackData.ml_options &&
                                <>
                                    {snackData.ml_options.map((ml, index) =>
                                        <p className="price" key={index}>
                                            <span className="mlMeasure">{ml.ml}ml:</span> ${ml.ml * (snackData?.price_per_ml ?? 0)}
                                        </p>
                                    )}
                                </>
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
        height: 120px;

        .lunchImage {
            height: 100%;
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
`