import styled from "styled-components";
import snacksData from '../../json/snacks.json'
import React, { useState } from "react";
import { theme } from "../../styles/style";

interface ICardProps {
    snackId: number,
}

export const AddToCartCard: React.FC<ICardProps> = ({ snackId }) => {
    const [snack] = useState(snacksData.data.find(snack => snack.id === snackId));

    return (
        <Card>
            {snack &&
                <div className="container">
                    <div className="image">
                        <img className="lunchImage" src={snack?.image} alt="Lunch image" />
                    </div>

                    <div className="data">
                        <h2 className="snackName">{snack.name}</h2>

                        {(snack.ingredients?.length ?? 0) > 0 &&
                            <p className="ingredientsList">Ingredients: {snack.ingredients?.map((ingredient, index) =>
                                <span key={index} className="ingredient"> {ingredient} {index === (snack.ingredients?.length ?? 0) - 1 ? "" : "|"} </span>
                            )}</p>
                        }

                        {snack.flavor &&
                            <p className="flavor">
                                <span>Flavor:</span> {snack.flavor}
                            </p>
                        }

                        {snack.weight &&
                            <p className="weight">
                                <span>Weight:</span> {snack.weight}
                            </p>
                        }

                        <div className="price">
                            {snack.price &&
                                <p className="price">
                                    <span>Price: </span> ${snack.price}
                                </p>
                            }

                            {snack.ml_options &&
                                <div className="price">
                                    <p>Prices: </p> {snack.ml_options.map((ml, index) =>
                                        <p key={index}>
                                            <span className="mlMeasure">{ml.ml}ml:</span> ${ml.ml * (snack?.price_per_ml ?? 0)} {index === (snack?.ml_options?.length ?? 0) - 1 ? "" : "| "}
                                        </p>
                                    )}
                                </div>
                            }
                        </div>
                    </div>
                </div>
            }
        </Card>
    );
}

const Card = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    background-color: ${theme.textColor};
    color: ${theme.backgroundColor};
    width: 50vw;
    height: 50vh;
    z-index: 3;
    padding: 20px;
    border-radius: 8px;
    border: 1px solid;
    display: flex;
    align-items: center;

    .container {
        display: flex;
        gap: 20px;
        align-items: center;
    }
`