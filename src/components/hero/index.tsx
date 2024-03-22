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
        font-size: 12vw;
        font-weight: 900;
        opacity: .6;
        z-index:1;
    }

    .lightCircle {
        width: 42vw;
        height: 42vw;
        position: absolute;
        z-index: 0;
        border-radius: 50%;
        background: radial-gradient(circle, ${theme.highlightColor} 0%, transparent 70%);
        animation: ${bounceAnimation} 2s infinite;
    }

    .heroImage {
        width: 40vw;
        position: absolute;
        z-index: 2;
        animation: ${bounceAnimation} 2s infinite;
    }

    @media(max-width: 768px) {
        .title {
            transform: translateY(100%);
        }

        .lightCircle {
            width: 60vw;
            height: 60vw;
            bottom: -55px;
        }
        
        .heroImage {
            width: 56vw;
            bottom: 0;
        }
    }

    @media(max-width: 350px) {
        .title {
            transform: translateY(100%);
        }

        .lightCircle {
            width: 80vw;
            height: 80vw;
            bottom: -40px;
        }
        
        .heroImage {
            width: 74vw;
        }
    }
`