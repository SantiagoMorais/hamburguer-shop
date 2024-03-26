import styled from "styled-components";
import snacksData from "@json/snacks.json"
import React, { FormEvent, useContext, useEffect, useState } from "react";
import { theme } from "@styles/style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping, faCartPlus, faRotateLeft, faX } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { CartContext, ISnackData } from "@contexts/cartContext.tsx";
interface ICardProps {
    snackId: number | undefined,
    onClose: () => void,
}

export const AddToCartCard: React.FC<ICardProps> = ({ snackId, onClose }) => {
    const snack = snacksData.data.find(snack => snack.id === snackId);
    const [purchaseAdvise, setPurchaseAdvice] = useState(false);
    const [recentlyAddedSnacks, setRecentlyAddedSnacks] = useState<ISnackData[]>([]);
    const { setCartItems } = useContext(CartContext);

    const handleClose = () => {
        onClose();
    }

    const handleItemAddedToCart = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const snackQuantity = Number(((e.target as HTMLFormElement).elements.namedItem("snackQuantity") as HTMLInputElement).value);

        setPurchaseAdvice(true);
        setTimeout(() => {
            setPurchaseAdvice(false);
            setRecentlyAddedSnacks([]);
        }, 3000);

        if (snack) {
            const newOrders: ISnackData[] = [];
            for (let i = 0; i < snackQuantity; i++) {
                newOrders.push(snack);
            }
            setCartItems(prevdata => [...prevdata, ...newOrders])
            setRecentlyAddedSnacks(newOrders);
        }
    }

    const handleUndo = () => {
        setRecentlyAddedSnacks([]);
        setCartItems(prevdata => prevdata.filter(item => !recentlyAddedSnacks.includes(item)));
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setRecentlyAddedSnacks([]);
        }, 3000);
        return () => clearTimeout(timer);
    }, [recentlyAddedSnacks]);

    return (
        <Card>
            {snack &&
                <div className="container">
                    <button className="closeButton" onClick={handleClose}> <FontAwesomeIcon icon={faX} /></button>
                    <div className="optionsButtons">
                        <button
                            className="option"
                            onClick={handleClose}
                            title="Keep shopping">
                            <span>Keep shopping</span> <FontAwesomeIcon icon={faBasketShopping} />
                        </button>
                        <Link to={"/chart"}>
                            <button
                                className="option"
                                title="Finalize purchase">
                                <span>Finalize purchase</span> <FontAwesomeIcon icon={faCartPlus} className="icon" />
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
                                <span className="flavorLabel">Flavor:</span> {snack.flavor}
                            </p>
                        }
                        {snack.weight &&
                            <p className="weight">
                                <span className="weightLabel">Weight:</span> {snack.weight}
                            </p>
                        }
                        {snack.ml &&
                            <p className="mlMeasureLabel">- {snack.ml}ml</p>
                        }
                        {snack.price &&
                            <p className="price">
                                <span className="priceLabel">Price: </span> ${snack.price}
                            </p>
                        }
                        <form className="quantity" onSubmit={handleItemAddedToCart}>
                            <label htmlFor="snackQuantity" className="snackQuantity">Quantity:</label>
                            <input type="number" name="snackQuantity" id="snackQuantity" placeholder="00" min={1} />
                            <button className="addToCart" title="Add to cart"><span>Add to cart</span> <FontAwesomeIcon icon={faCartPlus} className="icon" /></button>
                        </form>
                    </div>
                    <div className="advices" style={{ height: `${purchaseAdvise ? "65px" : "0px"}` }}>
                        <p className="addedToCartAdvice" >Snack added to cart!</p>
                        <button className="undo" onClick={handleUndo}><FontAwesomeIcon icon={faRotateLeft} /> Undo!</button>
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
    display: flex;
    align-items: center;
    justify-content: center;

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
                margin-right: 20px;
            }

            .ingredientsList {
                font-weight: 700;
                text-transform: capitalize;

                .ingredient {
                    font-weight: 500;
                }
            }

            .weightLabel, .priceLabel, .flavorLabel, .mlMeasureLabel {
                font-weight: 700;
            }

            .mlMeasureLabel {
                color: ${theme.highlightColor};
            }

            .quantity {
                display: flex;
                gap: 10px;
                align-items: center;

                .snackQuantity {
                    font-weight: 700;
                }
                
                #snackQuantity {
                    width: 40px;
                    height: 30px;
                    text-align: center;
                    border-radius: 8px;
                    border: 1px solid;
                    font-weight: 600;
                    sizer: none;
                    -webkit-appearance: none;
                    appearance: none;

                    &::-webkit-inner-spin-button {
                        display: none;
                    }
                    
                    &::-webkit-outer-spin-button {
                        display: none;
                    }
                }

                .addToCart {
                    padding: 5px;
                    border-radius: 8px;
                    font-weight: 600;
                    border: 1px solid;
                    cursor: pointer;
                    transition: .3s;

                    &:hover {
                        box-shadow: 0 0 10px;
                    }
                }
            }
        }
    }

    .advices {
        position: fixed;
        bottom: 60px;
        overflow: hidden;
        text-align: center;
        transition: .3s;
        border-radius: 8px;
        gap: 5px;
        width: 100vw;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        
        .addedToCartAdvice, .undo {
            background-color: ${theme.highlightColor};
            color: ${theme.textColor};
            padding: 5px;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 700;
            border: 1px solid transparent;
        }

        .addedToCartAdvice {
            width: 200px;
        }
        
        .undo {
            width: 100px;
            cursor: pointer;
            border: none;
            transition: .3s;

            &:hover {
                box-shadow: 0 0 10px ${theme.highlightColor};
                border: 1px solid ${theme.textColor};
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

    @media(max-width: 768px) {
        .container {
            max-width: 100%;
            min-width: 0px;
            width: 100%;
            padding: 10px;
            border-radius: 10px;
    
            .optionsButtons {
                width: 100%;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                bottom: -85px;
    
                .option {
                    width: 220px;
                }  
            }
    
            .image {
                .lunchImage {
                    height: 100%;
                    width: 150px;
                    border-radius: 8px;
                }
            }
    
            .data {
                font-size: 14px;
                gap: 5px;

                .snackName {
                    font-size: 18px;
                }
    
                .quantity {
                    #snackQuantity {
                        width: 30px;
                    }
                    
                    .addToCart {
                        height: 30px;

                        span {
                            display: none;
                        }
                    }
                }
            }
        }

        .advices {
            top: 30px;
            bottom: auto;
            font-size: 14px;
        }
    
    }

    @media(max-width: 400px) {
        .container {
            flex-direction: column;
    
            .image {
                .lunchImage {
                    height: 200px;
                    width: 100%;
                }
            }
        }

        .advices {
            flex-direction: column;
        }
    }

    @media(max-width: 300px) {
        .container {
            .optionsButtons {
                flex-direction: row;
                bottom: -45px;
    
                .option {
                    width: 50px;
    
                    span {
                        display: none;
                    }
                }  
            }
        }
    }
`