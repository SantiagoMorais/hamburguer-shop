import { useState } from "react";
import styled from "styled-components"
import snacksData from '../../json/snacks.json'
import { Card } from "../card";
import { theme } from "../../styles/style";

export const Shopping = () => {
    const [snacks] = useState(snacksData.data);
    
    return (
        <Container>
            <h2 className="title">Choose your order</h2>
            <div className="snacks">
            {snacks.length > 0 &&
            <>
                {snacks.map((snack, index) => 
                    <Card key={index} snackData={snack} />
                )}
                </>
            }
            </div>
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
    margin-bottom: 20vh;

    .snacks {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: 20px;
        width: 100%;
        max-width: 1200px; 
        padding: 0 20px;
    }

    @media (max-width: 768px) {
        margin-top: 30px;
        margin-bottom: 26vh;
    }
`