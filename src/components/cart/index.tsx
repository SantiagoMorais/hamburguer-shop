import styled from "styled-components"
import { NavBar } from "../navBar"
import { theme } from "../../styles/style"
import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../contexts/cartContext"
import { CardsInTheCart } from "../cardsInTheCart"
import { ShoppingSummary } from "../shoppingSummary"

export const Cart = () => {
    const { cartItems } = useContext(CartContext);
    const [totalValue, setTotalValue] = useState(0);
    const [finalizePurchase, setFinalizePurchase] = useState(false);

    const handleCloseWindow = () => {
        if(cartItems.length > 0) setFinalizePurchase(!finalizePurchase);
    }

    const handleCloseShoppingSummary = () => {
        setFinalizePurchase(!finalizePurchase);
    }
    
    useEffect(() => {
        setTotalValue(0);
        const total = cartItems.reduce((acc, snack) => acc + snack.price ,0);
        setTotalValue(Number(total.toFixed(2)));
    }, [cartItems])

    return (
        <Container>
            <NavBar currentPage="chart" />
            <h1 className="title">Cart</h1>
            {cartItems.length > 0
                ?
                <div className="snackList">
                    {cartItems.map((snack, index) =>
                        <CardsInTheCart snackData={snack} key={index} />
                    )}
                </div>
                : <h2 className="emptyCart">Your Cart is empty. 🍔❓</h2>
            }
            <h2 className="totalValue">Total Value: <span>${totalValue}</span></h2>
            <button className="finalizePurchase" onClick={handleCloseWindow}>Finalize Purchase</button>
            {finalizePurchase &&
            <ShoppingSummary closeWindow={handleCloseShoppingSummary} totalValue={totalValue}/>
            }
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
        span {
            color: ${theme.highlightColor};
        }
    }

    .finalizePurchase {
        padding: 8px;
        font-size: 20px;
        border: 1px solid;
        font-weight: 600;
        border-radius: 8px;
        cursor: pointer;
        margin-bottom: 40px;
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
    }
`