import { faBars, faCartPlus, faCrown, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"
import { theme } from "@styles/style.tsx"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "@contexts/cartContext.tsx"
interface NavBarProps {
    currentPage: string,
}

export const NavBar: React.FC<NavBarProps> = ({ currentPage }) => {
    const [clicked, setClicked] = useState(false);
    const { cartItems } = useContext(CartContext);

    const handleClickButton = () => {
        setClicked(!clicked);
    }

    return (
        <Container style={{ color: theme.textColor }}>
            <Link to={"/"}>
                <h2 className="logo"><FontAwesomeIcon icon={faCrown} />Burguer</h2>
            </Link>
            <nav className="navigation">
                <button
                    className={`showMore ${clicked ? "clicked" : ''}`}
                    onClick={() => handleClickButton()}
                >
                    <FontAwesomeIcon className="barsIcon" icon={clicked ? faXmark : faBars} />
                </button>
                <ul className={`items ${clicked ? "clicked" : ''}`}>
                    <li>
                        <Link to={"/order"}>
                            <button
                                style={
                                    currentPage === "order-online"
                                        ? { backgroundColor: theme.highlightColor, filter: "none ", }
                                        : { background: "none" }
                                }
                            >
                                Order online
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/"}>
                            <button
                                style={
                                    currentPage === "home"
                                        ? { backgroundColor: theme.highlightColor, filter: "none", }
                                        : { background: "none" }
                                }
                            >
                                Home
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/about"}>
                            <button
                                style={
                                    currentPage === "about-us"
                                        ? { backgroundColor: theme.highlightColor, filter: "none", }
                                        : { background: "none" }
                                }
                            >
                                About us
                            </button>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="callUs">
                <div className="phoneData">
                    <p className="text">Call and order in:</p>
                    <p className="number">(99)9999-9999</p>
                </div>
                <Link to={"/chart"}>
                    <button className="cart">
                        <FontAwesomeIcon icon={faCartPlus} className="icon" />
                        <p className="cartSize">{cartItems.length}</p>
                    </button>
                </Link>
            </div>
        </Container>
    )
}

const Container = styled.section`
    width: 100%;
    max-width: 1080px;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
    position: absolute;

    .logo {
        font-style: italic;
        width: min-content;
        text-align: center;
        color: ${theme.textColor};
        transition: .3s;

        &:hover {
            filter: drop-shadow(0 0 3px);
        }
    }

    .navigation {
        .showMore {
            display: none;
        }

        .items {
            display: flex;
            gap: 20px;

            li {
                button {
                    border: 1px solid transparent;
                    color: ${theme.textColor};
                    font-weight: 600;
                    padding: 10px;
                    border-radius: 50px;
                    min-width: 100px;
                    text-align: center;
                    transition: .3s;
                    cursor: pointer;
                    font-size: 16px;
    
                    &:hover {
                        filter: drop-shadow(0 0 10px);
                    }
                }
            }
        }
    }

    .callUs {
        text-align: center;
        display: flex;
        gap: 10px;

        .phoneData {
            .text {
                color: ${theme.highlightColor};
                font-weight: 600;
                font-size: 14px;
            }
    
            .number {
                font-size: 20px;
                font-weight: 800;
            }
        }

        .cart {
            color: ${theme.textColor};
            background: none;
            height: 40px;
            width: 40px;
            border-radius: 50%;
            border: none;
            cursor: pointer;
            position: relative;

            .icon {
                transition: .3s;
                font-size: 20px;
            }

            .cartSize {
                position: absolute;
                background-color: ${theme.highlightColor};
                width: 20px;
                height: 20px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                bottom: 0;
                right: 0;
            }

            &:hover > .icon {
                filter: drop-shadow(0 0 10px);
            }
        }
    }

    @media(max-width: 768px) {
        align-items: flex-start;

        .logo {
            font-size: 20px;
            order: 2;
        }

        .navigation {
            display: flex;
            flex-direction: column;
            position: relative;
            order: 1;
            top: 10px;
            
            .showMore {
                display: block;
                font-size: 28px;
                padding: 5px;
                background: none;
                width: 40px;
                border: none;
                color: ${theme.textColor};
                cursor: pointer;
                transition: .3s;

                &.clicked {
                    transform: rotate(90deg);
                }
            }

            .items {
                flex-direction: column;
                gap: 5px;
                align-items: center;
                background-color: ${theme.textColor};
                position: absolute;
                width: 120px;
                border-radius: 8px;
                top: 45px;
                height: 0;       
                overflow: hidden;
                transition: .3s;
                z-index: 2;

                li {
                    width: 100%;
                    
                    button {
                        border: none;
                        color: ${theme.backgroundColor};
                        background: none;
                        font-size: 14px;
                        width: 100%;
                        border-radius: 0px;

                        &:hover {
                            background: none;
                            opacity: .6;
                            filter: drop-shadow(0 0 0);
                        }
                    }
                }

                &.clicked {
                    padding: 10px 0;
                    height: 144px;
                }
            }
        }

        .callUs {
            order: 3;
            flex-direction: column-reverse;
            align-items: flex-end;
            position: relative;
            top: 10px;

            .phoneData {
                position: absolute;
                width: max-content;
                bottom: -30px;

                .text {
                    font-size: 12px;
                }
    
                .number {
                    font-size: 14px;
                }
            }
        }
    }

    @media (max-width: 350px) {
        .navigation {
            .showMore {
                margin-top: 5px;
                font-size: 24px;
            }

            .items {
                gap: 0px;
                width: 100px;
                
                &.clicked {
                    padding: 0;
                    height: 110px;
                }

                li {
                    button {
                        padding: 10px 0;
                    }
                }
            }
        }

        .callUs {
            position: static;
            margin-top: 10px;

            .phoneData {
                position: absolute;
                left: 0;
                right: 0;
                top: 70px;
                margin: auto;
            }
        }
    }
`