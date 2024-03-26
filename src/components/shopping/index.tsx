import { useState } from "react";
import styled from "styled-components"
import snacksData from '../../json/snacks.json'
import { Card } from "../card";
import { theme } from "../../styles/style";
import { AddToCartCard } from "../addToCartCard";

export const Shopping = () => {
    const [snacks] = useState(snacksData.data);
    const [showAddToCart, setShowAddToCart] = useState(false);
    const [snackId, setSnackId] = useState<number>();

    const handleAddToCart = (id : number) => {
        setShowAddToCart(true);
        setSnackId(id);
    }

    const handleCloseAddToCart = () => {
        setShowAddToCart(false);
        document.body.style.overflow = 'auto';
    }
    
    return (
        <Container>
            <h2 className="title">Choose your order</h2>
            <div className="snacks">
            {snacks.length > 0 &&
            <>
                {snacks.map((snack, index) => 
                    <Card key={index} snackData={snack} handleAddToCart={handleAddToCart}/>
                )}
                </>
            }
            </div>
            {showAddToCart && <AddToCartCard snackId={snackId} onClose={handleCloseAddToCart} />}
        </Container>
    )
}

const Container = styled.section`
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

    @media (max-width: 768px) {
        .title {
            margin-top: 100px;
        }
    }

    @media(max-width: 440px) {
        .snacks {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        }
    }
`