import styled from "styled-components"
import { NavBar } from "../navBar"
import { Hero } from "../hero"
import heroImage from "@assets/hamburger-hero-image.jpg"
import { theme } from "@styles/style"
import { Footer } from "../footer"

export const Home = () => {
    return (
        <Container>
            <NavBar currentPage="home"/>
            <Hero />
            <Footer currentPage="home"/>
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

    &:after {
        content: '';
        width: 100%;
        height: 100%;
        background: url(${heroImage}) no-repeat right center;
        background-size: cover;
        opacity: .2;
        position: absolute;
        z-index: 0;
    }
`