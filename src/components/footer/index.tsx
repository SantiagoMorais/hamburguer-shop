import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"
import { theme } from "../../styles/style"
import { faArrowRight, faAt, faCircle } from "@fortawesome/free-solid-svg-icons"

export const Footer = () => {
    return (
        <Container style={{ color: theme.textColor }}>
            <div className="social">
                <p className="creator">Created by: <br /> <a href="https://github.com/SantiagoMorais" className="link">Felipe Santiago</a></p>
                <div className="icons">
                    <a href="https://github.com/SantiagoMorais" className="icon" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="https://www.linkedin.com/in/felipe-santiago-morais/" className="icon" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="mailto:contatofelipesantiago@gmail.com" className="icon" target="_blank"><FontAwesomeIcon icon={faAt} /></a>
                </div>
            </div>
            <div className="pages">
                <h2 className="placeYourOrder">Place your order</h2>
                <div className="currentPage">

                    <FontAwesomeIcon className="icon" icon={faCircle} />
                    <FontAwesomeIcon className="icon clicked" icon={faCircle} />
                    <FontAwesomeIcon className="icon" icon={faCircle} />
                </div>
            </div>
            <button className="seeMore">See more <FontAwesomeIcon icon={faArrowRight} /></button>
        </Container>
    )
}

const Container = styled.section`
    width: 100%;
    max-width: 1080px;
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 0;
    justify-content: space-between;
    z-index: 2;

    .social {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;

        .creator {
            text-align: center;
            
            .link {
                color: ${theme.textColor};
                transition: .3s;

                &:hover {
                    filter: drop-shadow(0 0 5px);
                }
            }
        }

        .icons {
            display: flex;
            gap: 15px;
            font-size: 30px;
            width: 180px;
            justify-content: center;
            
                .icon {
                    cursor: pointer;
                    transition: .3s;
                    color: ${theme.textColor};
                    padding: 5px;
        
                    &:hover {
                        filter: drop-shadow(0 0 10px);
                    }
                }
        }
    }

    .pages {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        bottom: 30px;
        gap: 20px;

        .placeYourOrder {
            text-transform: uppercase;
            position: relative;
        }

        .currentPage {
            display: flex;
            gap: 30px;
            align-items: center;

            .icon {
                font-size: 12px;
                opacity: .6;
                transition: .3s;

                &.clicked {
                    font-size: 22px;
                    opacity: 1;
                    filter: drop-shadow(0 0 3px);
                }
            }
        }
    }

    .seeMore {
        width: 180px;
        font-size: 16px;
        font-weight: 600;
        background: none;
        padding: 10px 0;
        display: flex;
        gap: 10px;
        justify-content: center;
        align-items: center;
        color: ${theme.textColor};
        opacity: .6;
        transition: .3s;
        border: none;
        border-radius: 50px;
        cursor: pointer;
        border: 1px solid transparent;

        &:hover {
            opacity: 1;
            background-color: ${theme.highlightColor};
            border-color: ${theme.textColor};
            color: ${theme.backgroundColor};
        }
    }
`