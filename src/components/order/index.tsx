import styled from "styled-components"
import { NavBar } from "../navBar"
import { OrderFooter } from "../orderFooter"
import { useState } from "react";
import snacksData from '../../json/snacks.json'
import { Card } from "../card";
import { AddToCartCard } from "../addToCartCard";
import { theme } from "@styles/style";

export const OrderOnline = () => {
    const [snacks] = useState(snacksData.data);
    const [showAddToCart, setShowAddToCart] = useState(false);
    const [snackId, setSnackId] = useState<number>();

    const handleAddToCart = (id: number) => {
        setShowAddToCart(true);
        setSnackId(id);
    }

    const handleCloseAddToCart = () => {
        setShowAddToCart(false);
        document.body.style.overflow = 'auto';
    }

    return (
        <Container>
            <NavBar currentPage="order-online" />
            <div className="shopping">
                <h2 className="title">Choose your order</h2>
                <div className="snacks">
                    {snacks.length > 0 &&
                        <>
                            {snacks.map((snack, index) =>
                                <Card key={index} snackData={snack} handleAddToCart={handleAddToCart} />
                            )}
                        </>
                    }
                </div>
                {showAddToCart && <AddToCartCard snackId={snackId} onClose={handleCloseAddToCart} />}
            </div>
            <OrderFooter />
        </Container>
    )
}

const Container = styled.section`
    max-width: 100vw;
    overflow-X: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${theme.backgroundColor};
    position: relative;

    .shopping {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        color: ${theme.textColor};
        max-width: 100vw;
        margin-bottom: 10vh;

        .title {
            margin-top: 80px;
        }

        .snacks {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
            gap: 20px;
            width: 100%;
            max-width: 1200px; 
            padding: 0 20px;
        }

    }
    @media (max-width: 768px) {
        .shopping {
            .title {
                margin-top: 100px;
            }
        }
    }

    @media(max-width: 440px) {
        .shopping {
            .snacks {
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            }
        }
    }
`