import styled from "styled-components"
import { theme } from "../../styles/style"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faAt, faCartPlus } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../contexts/cartContext"

export const OrderFooter = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <Container>
            <div className="social">
                <p className="creator">Created by: <br /> <span className="creatorName">Felipe Santiago</span></p>
                <div className="icons">
                    <a href="https://github.com/SantiagoMorais" className="icon" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="https://www.linkedin.com/in/felipe-santiago-morais/" className="icon" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="mailto:contatofelipesantiago@gmail.com" className="icon" target="_blank"><FontAwesomeIcon icon={faAt} /></a>
                </div>
            </div>
            <div className="seeCart">
                <Link to={"/chart"}>
                    <p className="message">({cartItems.length}) <span>See your cart</span></p>
                    <button className="cart">
                        <FontAwesomeIcon icon={faCartPlus} className="icon" />
                    </button>
                </Link>
            </div>
        </Container>
    )
}

const Container = styled.footer`
    max-width: 100vw;
    width: 100%;
    height: 50px;
    background-color: ${theme.highlightColor};
    position: fixed;
    bottom: 0;
    display:flex;
    padding: 0 20px;
    align-items: center;

    .social {
        display: flex;
        align-items: center;

        .creator {
            text-align: center;
            font-weight: 500;
            
            .creatorName {
                color: ${theme.textColor};
            }
        }

        .icons {
            display: flex;
            gap: 5px;
            font-size: 20px;
            margin-left: 10px; 
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

    .seeCart {
        position: absolute;
        right: 50%;
        transform: translateX(50%);
        display: flex;
        align-items: center;
        transition: .3s;
        color: ${theme.textColor};

        .message {
            display: inline;
            color: ${theme.textColor};
        }

        .cart {
            color: ${theme.textColor};
            background: none;
            height: 40px;
            width: 40px;
            border-radius: 50%;
            border: none;
            cursor: pointer;

            .icon {
                transition: .3s;
                font-size: 20px;
            }
        }

        &:hover {
            filter: drop-shadow(0 0 10px);
        }
    }

    @media(max-width: 768px) {
        justify-content: space-evenly;
        height: 50px;

        .social {
            display: flex;
            flex-direction: column;

            .creator {
                font-size: 12px;
                display: flex;
                gap: 5px;
            }
    
            .icons {
                font-size: 20px;
                margin-left: 0px; 
                
                .icon {
                    transition: .3s;
                    cursor: pointer;
                    color: ${theme.textColor};
                    padding: 0 5px;
                
                    &:hover {
                        filter: drop-shadow(0 0 10px);
                    }
                }
            }
        }

        .seeCart {
            position: static;
            transform: translateX(0%);
    
            .message {
                span {
                    display: none;
                }
            }
    
            .cart {
                width: 20px;
            }        
        }
    }
`