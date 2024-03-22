import styled from "styled-components"
import { NavBar } from "../navBar"
import { theme } from "../../styles/style"
import { Footer } from "../footer"
import { Shopping } from "../shopping"

export const OrderOnline = () => {
    return (
        <Container>
            <NavBar currentPage="order-online"/>
            <Shopping />
            <Footer currentPage="order-online"/>
        </Container>
    )
}

const Container = styled.section`
    max-width: 100vw;
    overflowX: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${theme.backgroundColor};
    position: relative;
`