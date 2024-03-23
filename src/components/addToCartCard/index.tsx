import styled from "styled-components";
import snacksData from '../../json/snacks.json'
import React, { useState } from "react";
import { theme } from "../../styles/style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping, faCartPlus, faX } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

interface ICardProps {
    snackId: number | undefined,
    onClose: () => void,
}

export const AddToCartCard: React.FC<ICardProps> = ({ snackId, onClose }) => {
    const [snack] = useState(snacksData.data.find(snack => snack.id === snackId));

    const handleClose = () => {
        onClose();
    }

    return (
        <Card>
            {snack &&
                <div className="container">
                    <button className="closeButton" onClick={handleClose}> <FontAwesomeIcon icon={faX} /></button>

                    <div className="optionsButtons">
                        <button className="option" onClick={handleClose}>Keep shopping <FontAwesomeIcon icon={faBasketShopping} /></button>
                        <Link to={"/chart"}>
                            <button className="option">
                                Complete purchases <FontAwesomeIcon icon={faCartPlus} className="icon" />
                            </button>
                        </Link>
                    </div>

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
    position: fixed;
    color: ${theme.backgroundColor};
    width: 100vw;
    min-height: 100vh;
    z-index: 2;
    padding: 20px;
    border-radius: 8px;
    border: 1px solid;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;

    .container {
        background-color: ${theme.textColor};
        max-width: 50vw;
        min-width: 700px;
        display: flex;
        z-index: 1;
        padding: 25px;
        position: relative;
        border-radius: 20px;
        margin: 0 20px;
        gap: 20px;
        
        .closeButton {
            position: absolute;
            top: 10px;
            right: 10px;
            cursor: pointer;
            font-size: 16px;
            border-radius: 8px;
            border: 1px solid;
            width: 35px;
            height: 35px;
            opacity: .6;
            transition: .3s;

            &:hover {
                opacity: 1;
            }
        }

        .optionsButtons {
            position: absolute;
            bottom: -45px;
            width: 100%;
            display: flex;
            gap: 10px;
            justify-content: center;

            .option {
                border-radius: 8px;
                padding: 5px;
                font-size: 16px;
                cursor: pointer;
                transition: .3s;
                font-weight: 500;

                &:hover {
                    box-shadow: 0 0 10px ${theme.highlightColor};
                }
            }
            
        }

        .image {
            .lunchImage {
                height: 200px;
                width: 200px;
                object-fit: cover;
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
            }
        }
    }

    &:after {
        content: "";
        position: absolute;
        z-index: 0;
        width: 100vw;
        height: 100vh;
        background-color: ${theme.backgroundColor};
        opacity: .6;
    }
`