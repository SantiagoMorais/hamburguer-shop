import styled from "styled-components"
import { NavBar } from "../navBar"
import { useContext, useEffect, useState } from "react"
import { CartContext } from "@contexts/cartContext"
import { CardsInTheCart } from "../cardsInTheCart"
import { ShoppingSummary } from "../shoppingSummary"
import { theme } from "@styles/style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faAt } from "@fortawesome/free-solid-svg-icons"

export const Cart = () => {
    const { cartItems, setCartItems } = useContext(CartContext);
    const [totalValue, setTotalValue] = useState(0);
    const [finalizePurchase, setFinalizePurchase] = useState(false);

    const handleCloseWindow = () => {
        setFinalizePurchase(!finalizePurchase);
    }

    const handleDeleteList = () => {
        const deleteList = confirm("Do you really want to delete all the items in your cart? Really? 😢🍔 ");
        if (deleteList) setCartItems([]);
    }

    useEffect(() => {
        setTotalValue(0);
        const total = cartItems.reduce((acc, snack) => acc + snack.price, 0);
        setTotalValue(Number(total.toFixed(2)));
    }, [cartItems])

    return (
        <Container>
            <NavBar currentPage="chart" />
            <h1 className="title">Cart</h1>
            {cartItems.length > 0
                ?
                <>
                    <button className="deleteList" onClick={handleDeleteList}>Delete Cart List</button>
                    <div className="snackList">
                        {cartItems.map((snack, index) =>
                            <CardsInTheCart snackData={snack} key={index} />
                        )}
                    </div>
                </>
                : <h2 className="emptyCart">Your Cart is empty. 🍔❓</h2>
            }
            {totalValue > 0 &&
                <>
                    <h2 className="totalValue">Total Value: <span>${totalValue}</span></h2>
                    <button className="finalizePurchase" onClick={handleCloseWindow}>Finalize Purchase</button>
                </>
            }
            {finalizePurchase &&
                <ShoppingSummary closeWindow={handleCloseWindow} totalValue={totalValue} />
            }
            <footer className="social">
                <p className="creator">Created by: <br /> <a href="https://github.com/SantiagoMorais" className="link" target="_blank">Felipe Santiago</a></p>
                <div className="icons">
                    <a href="https://github.com/SantiagoMorais" className="icon" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="https://www.linkedin.com/in/felipe-santiago-morais/" className="icon" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="mailto:contatofelipesantiago@gmail.com" className="icon" target="_blank"><FontAwesomeIcon icon={faAt} /></a>
                </div>
            </footer>
        </Container>
    )
}

const Container = styled.section`
    max-width: 100dvw;
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${theme.backgroundColor};
    color: ${theme.textColor};
    gap: 20px;

    .title {
        padding-top: 80px;
        text-transform: uppercase;
    }

    .deleteList, .finalizePurchase {
        padding: 8px;
        font-size: 20px;
        border: 1px solid;
        font-weight: 600;
        border-radius: 8px;
        cursor: pointer;
        transition: .3s;

        &: hover {
            box-shadow: 0 0 5px ${theme.highlightColor};
            color: ${theme.highlightColor};
        }
    }

    .snackList {
        width: 100%;
        max-width: 1200px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: 10px;
        padding: 20px;
    }

    .emptyCart {
        text-align: center;
    }

    .totalValue {
        text-align:center;
        margin: 0 10px;
        
        span {
            color: ${theme.highlightColor};
        }
    }

    .finalizePurchase {
        margin-bottom: 60px;
    }

    .social {
        display: flex;
        background-color: ${theme.highlightColor};
        align-items: center;
        justify-content: center;
        gap: 5px;
        position: fixed;
        bottom: 0;
        width: 100%;

        .creator {
            text-align: center;
            color: ${theme.backgroundColor};
            font-weight: 600;
            
            .link {
                color: ${theme.textColor};
                transition: .3s;

                &:hover {
                    filter: drop-shadow(0 0 5px);
                }
            }
        }

        .icons {
            display: flex;
            gap: 15px;
            font-size: 30px;
            width: 180px;
            justify-content: center;
            
            .icon {
                transition: .3s;
                cursor: pointer;
                color: ${theme.textColor};
                padding: 5px;
            
                &:hover {
                    filter: drop-shadow(0 0 10px);
                }
            }
        }
    }

    @media (max-width: 768px) {
        .title {
            padding-top: 100px;
        }
    }

    @media(max-width: 440px) {
        .snackList {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        }

        .finalizePurchase, .deleteList {
            width: 90%;
        }

        .social{
            .creator {
                font-size: 14px;
            }

            .icons {
                font-size: 25px;
                gap: 5px;
            }
        }
    }

`