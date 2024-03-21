import styled, { keyframes } from "styled-components"
import hamburguerImage from "../../assets/hamburguer-hero.png"
import { theme } from "../../styles/style"


export const Hero = () => {
    return (
        <Container style={{color: theme.textColor}}>
            <h1 className="title">HAMBURGUER</h1>
            <div className="lightCircle"></div>
            <img className="heroImage" src={hamburguerImage} alt="Hamburguer image" />
        </Container>
    )
}

const bounceAnimation = keyframes`
    0% {
        transform: translateY(0);
    };
    50% {
        transform: translateY(-10px);
    };
    100% {
        transform: translateY(0);
    }
`;

const Container = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    .title {
        font-size: 150px;
        font-weight: 900;
        opacity: .6;
        z-index:1;
    }

    .lightCircle {
        width: 500px;
        height: 500px;
        position:absolute;
        z-index: 0;
        background-color: red;
        border-radius: 50%;
        background: radial-gradient(circle, ${theme.highlightColor} 0%, transparent 70%);
        animation: ${bounceAnimation} 2s infinite;
    }

    .heroImage {
        width: 500px;
        position: absolute;
        z-index: 2;
        animation: ${bounceAnimation} 2s infinite;
    }
`