import styled from "styled-components"
import { NavBar } from "../navBar"
import { theme } from "../../styles/style"
import { Footer } from "../footer"

export const AboutUs = () => {
    return (
        <Container>
            <NavBar currentPage="about-us"/>
            <Footer currentPage="about-us"/>
        </Container>
    )
}

const Container = styled.section`
    width: 100vw;
    height: 100dvh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${theme.backgroundColor};
    position: relative;
`