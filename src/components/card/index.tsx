import styled from "styled-components"
import { theme } from "../../styles/style"
import React from "react"
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
}

export const Card: React.FC<ICardProps> = ({ snackData }) => {

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
                                <>
                                    <span className="ingredient"> {ingredient} {index === (snackData.ingredients?.length ?? 0) - 1 ? "" : "-"} </span>
                                </>
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
                                <p className="price">
                                    <span>Prices: </span> {snackData.ml_options.map((ml, index) =>
                                        <>
                                            <span className="mlMeasure">{ml.ml}ml:</span> ${ml.ml * (snackData?.price_per_ml ?? 0)} {index === (snackData?.ml_options?.length ?? 0) - 1 ? "" : "| "}
                                        </>
                                    )}
                                </p>
                            }
                        </div>
                    </div>
                    <div className="addToCart">
                        <button className="button">
                            <FontAwesomeIcon icon={faCartPlus} />
                        </button>
                    </div>
                </>
            }
        </Container>
    )
}

const Container = styled.div`
    width: 45%;
    min-width: 400px;
    min-height: 150px;
    border-radius: 20px;
    background-color: ${theme.textColor};
    color: ${theme.backgroundColor};
    display: flex;
    align-items: center;
    padding: 10px;

    .image {
        height: 90%;
        border-radius: 8px;
        margin: 10px;

        .lunchImage {
            height: 100%;
            object-fit: cover;
            width: 120px;
            border-radius: 30px;
            box-shadow: 0 0 10px ${theme.highlightColor};
        }
    }

    .data {
        display: flex;
        flex-direction: column;
        gap: 10px;

        .snackName {
            color: ${theme.highlightColor}
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

            span {
                font-weight: 700;
            }
        }

        .weight {

            span {
                font-weight: 700;
            }
        }

        .price {

            span {
                font-weight: 700;
            }

            .mlMeasure {
                font-weight: 500;
                color: ${theme.highlightColor}
            }
        }
    }

    .addToCart {
        width: 100px,
        height: 100px;
        background-color: red;
    }
    
`