import { faCartPlus, faCrown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"
import { theme } from "../../styles/style"

export const NavBar = () => {

    return (
        <Container style={{ color: theme.textColor }}>
            <h2 className="logo"><FontAwesomeIcon icon={faCrown} />Burguer</h2>
            <nav className="navigation">
                <ul className="items">
                    <li><button>Order online</button></li>
                    <li><button>Home</button></li>
                    <li><button>About us</button></li>
                </ul>
            </nav>
            <div className="callUs">
                <div>
                    <p className="text">Call and order in:</p>
                    <p className="number">(99)9999-9999</p>
                </div>
                <button className="cart">
                    <FontAwesomeIcon icon={faCartPlus} className="icon"/>
                    </button>
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
    position: absolute;
    z-index: 2;

    .logo {
        font-style: italic;
        width: min-content;
        text-align: center;
    }

    .navigation {
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
                    background: none;
                    font-size: 16px;
    
                    &:hover {
                        background-color: ${theme.highlightColor};
                        color: ${theme.backgroundColor};
                        border-color: ${theme.textColor};
                    }
                }
            }
        }
    }

    .callUs {
        text-align: center;
        display: flex;
        gap: 10px;

        .text {
            color: ${theme.highlightColor};
            font-weight: 600;
            font-size: 14px;
        }

        .number {
            font-size: 20px;
            font-weight: 800;
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

            &:hover > .icon {
                filter: drop-shadow(0 0 10px);
            }
        }
    }

`