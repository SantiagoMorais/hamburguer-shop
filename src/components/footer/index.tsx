import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"
import { theme } from "../../styles/style"
import { faAt, faCircle } from "@fortawesome/free-solid-svg-icons"

interface IFooterProps {
    currentPage: string,
}

export const Footer: React.FC<IFooterProps> = ({currentPage}) => {
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
                    <FontAwesomeIcon className={`icon ${currentPage === "order-online" ? "clicked" : ""}`} icon={faCircle} />
                    <FontAwesomeIcon className={`icon ${currentPage === "home" ? "clicked" : ""}`} icon={faCircle} />
                    <FontAwesomeIcon className={`icon ${currentPage === "about-us" ? "clicked" : ""}`} icon={faCircle} />
                </div>
            </div>
        </Container>
    )
}

const Container = styled.section`
    width: 100%;
    max-width: 1080px;
    display: flex;
    align-items: center;
    bottom: 0;
    z-index: 2;
    position: absolute;

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
                transition: .3s;
                cursor: pointer;
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
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
        bottom: 5vh;
        gap: 20px;

        .placeYourOrder {
            text-transform: uppercase;
            position: relative;
        }
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

    @media (max-width: 768px) {
        .social {
            flex-direction: column-reverse;
            align-items: flex-start;
            padding: 10px;

            .creator {
                text-align: start;
                font-size: 14px;
            }

            .icons {
                flex-direction: column;
                gap: 5px;
                font-size: 25px;
            }
        }

        .pages {
            bottom: 15vh;

            .changePage {
                position: relative;
                justify-content: center;
                width: 100%;

                .placeYourOrder {
                    max-width: 60%;
                    text-align: center;
                }
            }
        }
    }

    @media (max-width: 350px) {
        .pages {
            .placeYourOrder {
                font-size: 16px;
                width: 150px;
                text-align: center;
            }
        }
    }
`