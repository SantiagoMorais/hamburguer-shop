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
        display: flex;
        gap: 20px;
        width: 100%;
        padding: 0 20px;
        flex-wrap: wrap;
        justify-content: center;
    }
`