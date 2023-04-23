import { RxHamburgerMenu } from "react-icons/rx";
import reactLogo from "../assets/react.svg";
import styled from "styled-components";

const LandingPage = () => {
  return (
    <Wrapper>
      <div className="container-lp">
        <header className="header">
          <div className="right-side">
            <div className="logo">
              <img className="logo" src={reactLogo} alt="idk" />
            </div>

            <nav>
              <ul className="links">
                <li className="link-item">
                  <a className="link" href="css-project-1">
                    CSS project 1
                  </a>
                </li>
                <li className="link-item">
                  <a className="link" href="css-project-2">
                    CSS project 2
                  </a>
                </li>
                {/* <li className="link-item">
                  <a className="link" href="#live">
                    CSS project 3
                  </a>
                </li>
                <li className="link-item">
                  <a className="link" href="#live">
                    CSS project 4
                  </a>
                </li> */}
              </ul>
            </nav>
          </div>

          <div className="left-side">
            <ul className="links">
              <li className="link-item">
                <a className="link" href="#live">
                  Live
                </a>
              </li>
              <li className="link-item">
                <a className="link" href="#live">
                  Push
                </a>
              </li>
              <li className="link-item">
                <a className="link" href="#live">
                  Link
                </a>
              </li>
            </ul>
            <div>
              <RxHamburgerMenu size={20} className="hamburger" />
            </div>
          </div>
        </header>
        <main className="main">
          <h1 className="heading">CSS Practice</h1>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            <span className="text--bold"></span>rem nostrum illum nobis
            temporibus aspernatur doloremque explicabo ut fugit modi.
          </p>
          <form className="form">
            <input className="input" placeholder="Please type something" />
            <button className="btn">Search</button>
          </form>
        </main>

        <footer className="footer">
          <p className="copyright">&copy; 2025. Copyright by me.</p>
          <p className="stats">5 projects, looking for a job</p>
        </footer>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* global styles */
  .container-lp {
    font-family: "Lato", sans-serif;
    color: #fff;
    background-color: #36454f;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;

    overflow-x: hidden;
    overflow-y: hidden;
  }

  * {
    box-sizing: border-box;
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
      transform: translateY(15px);
    }
    100% {
      opacity: 1;
      transform: translate(0);
    }
  }

  /* header */

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3rem;
    width: 56rem;
    margin-left: auto;
    margin-right: auto;
    padding-top: 10px;
    animation: fade-in 0.5s;
  }

  .logo {
    width: 3.75em;
    height: 1.75em;
    align-self: center;
  }

  .links {
    list-style: none;
    display: flex;
  }

  .link-item {
    margin-right: 0.625rem;
    margin-left: 0.625rem;
  }

  .link {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.75);
    transition: color 0.4s;
  }

  .link:hover {
    color: rgba(255, 255, 255, 1);
  }

  .right-side {
    display: flex;
  }

  .left-side {
    display: flex;
    align-items: center;
  }

  /* main */

  .main {
    text-align: center;
    margin-top: 110px;
    animation: fade-in 0.5s 0.1s backwards;
  }

  .heading {
    font-size: 64px;
    font-weight: 800;
    margin-bottom: 25px;
  }

  .text {
    max-width: 50rem;
    margin-left: auto;
    margin-right: auto;

    font-size: 24px;
    margin-bottom: 20px;
    opacity: 0.8;
    line-height: 1.4;
  }

  .form {
    height: 4rem;
    display: flex;
    justify-content: center;
  }

  .input {
    width: 14rem;
    height: 4rem;
    border: none;
    border-radius: 3px;
    padding: 0;
    opacity: 0.8;
    padding-left: 30px;
    font-size: 17px;
    font: inherit;
    outline: none;
    transition: all 0.4s;
  }

  .input:focus {
    opacity: 1;
  }

  .input::placeholder {
    color: black;
  }

  .btn {
    border: none;
    padding: 0;
    background-color: #000;
    height: 4rem;
    width: 8.3125rem;
    color: white;
    font: inherit;
    border-radius: 3px;
    margin-left: 5px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 14px;
    font-weight: 500px;
    transition: all 0.4s;
  }

  .btn:hover {
    cursor: pointer;
    background-color: #161616;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    margin-top: auto;
    font-size: 0.8rem;
    padding-bottom: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    padding-top: 10px;
    color: rgba(255, 255, 255, 0.5);
    animation: fade-in 0.5s 0.2s backwards;
    overflow: hidden;
  }

  .copyright {
    margin-left: 10px;
  }

  .stats {
    margin-right: 10px;
  }

  @media (max-width: 687px) {
    .footer {
      display: flex;
      justify-content: space-between;
      margin-left: auto;
      margin-right: auto;
      margin-top: auto;
      width: 100vw;
      font-size: 0.8rem;
    }

    .copyright {
      margin-left: 12px;
    }

    .stats {
      margin-right: 12px;
    }

    .links {
      display: none;
    }
    .header {
      width: 100vw;
    }
  }

  .hamburger {
    margin-right: 16px;
    cursor: pointer;
  }
  @media screen and (min-width: 687px) {
    .hamburger {
      display: none;
    }
  }
`;
export default LandingPage;
