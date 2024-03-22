import styled from "styled-components"
import { NavBar } from "../navBar"
import { theme } from "../../styles/style"

export const Chart = () => {
    return (
        <Container>
            <NavBar currentPage="chart"/>
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