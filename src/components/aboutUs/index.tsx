import styled from "styled-components"
import { NavBar } from "../navBar"
import { Footer } from "../footer"
import { theme } from "@styles/style";


export const AboutUs = () => {
    return (
        <Container>
            <NavBar currentPage="about-us" />
            <div className="image"></div>
            <div className="about">
                <h1 className="aboutUs">About Us</h1>
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet facilis quos blanditiis maiores voluptatem, beatae rem, velit adipisci molestiae est a commodi cupiditate eos excepturi. Vel animi magnam ad cum.</p>
                <p className="adress"><span className="label">Adress:</span> Random street, Unknown neighborhood, number 58, Happy Burger city.</p>
            </div>
            <Footer currentPage="about-us" />
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

    .image {
        width: 100vw;
        height: 100vh;
        top: 0;
        right: 0;
        background-size: cover;
        position: absolute;
        opacity: .4;
        background: url("https://media.istockphoto.com/id/599144736/pt/foto/coffee-shop-entrepreneur.jpg?s=2048x2048&w=is&k=20&c=TmclxFi4No5DV_yAl7zTI9U4q6HwlV8l2uR-rIHvvwk=") no-repeat right center;
        background-size: cover;
    }
    
    .about {
        width: 400px;
        height: fit-content;
        position: absolute;
        left: 10vw;
        top: 0;
        bottom: 0;
        margin: auto;
        color: ${theme.textColor};
        display: flex;
        flex-direction: column;
        gap: 20px;

        .aboutUs {
            font-size: 30px;
            text-transform: uppercase;
        }

        .text {
            font-size: 20px;
            font-weight: 500;
        }

        .adress {
            .label {
                font-weight: 600;
            }
        }
    }

    @media(max-width: 768px) {
        .image {
            background-position: calc(100% + 150px) center;
        }

        .about {
            width: 80%;
            left: 50%;
            transform: translateX(-50%);
            margin: auto;
            top: -10%;
    
            .aboutUs {
                font-size: 24px;
            }

            .text {
                font-size: 18px;
            }
        }
    }

    @media(max-width: 350px) {
        .image {
            background-position: calc(100% + 200px) center;
        }

        .about {
            width: 90%;
    
            .aboutUs {
                font-size: 20px;
            }
    
            .text {
                font-size: 14px;
            }
        }
    }
`