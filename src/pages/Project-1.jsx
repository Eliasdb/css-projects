import styled from "styled-components";
import { FaAngleRight, FaGlassCheers, FaLayerGroup } from "react-icons/fa";
import { RxMagnifyingGlass } from "react-icons/rx";
import { MdLocationPin } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";

const Project1 = () => {
  return (
    <Wrapper>
      <div className="container-project1">
        {/* <img
          src="https://bytegrad.com/course-assets/youtube/bg.png"
          alt="Background"
          className="bg"
        /> */}
        <header className="header">
          <FaLayerGroup className="logo" />
          <nav className="nav">
            <ul className="links">
              <li className="link-item">
                <a href="#here" className="link">
                  Login
                </a>
              </li>
              <li className="link-item">
                <a href="#there" className="link link--btn">
                  Join as artist
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <main className="main">
          <section className="intro">
            <section className="search">
              <h1 className="first-heading">
                Book the <i>ideal</i> artist for your event
              </h1>
              <form className="form">
                <RxMagnifyingGlass className="input-icon" />
                <input
                  type="text"
                  className="input"
                  placeholder="Type (e.g. DJ, Band, Singer)"
                />
                <MdLocationPin className="input-icon" />
                <input type="text" className="input" placeholder="Zip code" />
                <button className="btn">Search</button>
              </form>
            </section>
            <section className="photos">
              <img
                src="https://iili.io/H8JZlV9.jpg"
                alt="Singer"
                className="photo-1"
              />
              <img
                src="https://iili.io/H8JZ0Pe.jpg"
                alt="Guitar player"
                className="photo-2"
              />
            </section>
          </section>
          <section className="credentials">
            <p className="seen-text">Seen on</p>
            <img
              src="https://i.ibb.co/Jv8Hcnv/Artist-Papers.png"
              alt="Artist Papers logo"
              className="credential"
            />
            <img
              src="https://i.ibb.co/dcSmf5Y/events-seas.png"
              alt="Event Seas logo"
              className="credential"
            />
            <img
              src="https://i.ibb.co/yVY4vFQ/Creter-s.png"
              alt="Creter's logo"
              className="credential"
            />
          </section>
          <section className="how">
            <h2 className="second-heading">How it works</h2>
            <section className="steps">
              <section className="step">
                <div className="step-icon">
                  <RxMagnifyingGlass size="25" />
                </div>
                <h3 className="third-heading">Find your artist</h3>
                <p className="text">
                  Use our search engine to find any artist easily
                </p>
              </section>
              <section className="step">
                <div className="step-icon">
                  <FaCalendarAlt size="25" />
                </div>
                <h3 className="third-heading">Book and pay</h3>
                <p className="text">Schedule your artist and pay safely here</p>
              </section>
              <section className="step">
                <div className="step-icon">
                  <FaGlassCheers size="25" />
                </div>
                <h3 className="third-heading">Enjoy the show!</h3>
                <p className="text">Sit back and relax knowing it's all done</p>
              </section>
            </section>
            <a href="#" className="more">
              More info <FaAngleRight className="more-icon" />
            </a>
          </section>
        </main>
        <footer className="footer">
          <small className="copyright">
            &copy; 2025. Copyright by ArtistFinder.
          </small>
          <ul className="legal-list">
            <li className="legal-item">
              <a href="#" className="legal-link">
                Terms & conditions
              </a>
            </li>
            <li className="legal-item">
              <a href="#" className="legal-link">
                Privacy policy
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

  /* reset and base styles */

  body {
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: "Poppins", sans-serif;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  i {
    font-weight: 700;
  }

  input,
  button {
    border: none;
    font: inherit;
  }

  /* KEYFRAMES */

  @keyframes fade-in {
    0% {
      opacity: 0;
      transform: translateY(15px);
    }

    100% {
      opacity: 100%;
      transform: translateY(0);
    }
  }

  .container-project1 {
    color: #292c33;
    background-color: #eeeff3;
    width: 100vw;
    overflow: hidden;
    --accent-color: #11a2f3;
    --accent-color-dark: #0d8fda;
    background-image: url("https://iili.io/H8JZEKu.jpg");
    position: relative;
    background-size: cover;
  }

  /* header  */

  .header {
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    padding: 25px;
    animation: fade-in 0.4s;
  }

  .logo {
    color: rgba(255, 255, 255, 0.7);
    font-size: 30px;
  }

  .links {
    display: flex;
    column-gap: 45px;
  }

  .link {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.7);
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: all 0, 2s;
  }

  .link:hover {
    color: rgba(255, 255, 255, 1);
  }

  .link--btn {
    color: #fff;
    background-color: var(--accent-color);
    transition: all 0, 2s;
    padding: 10px 28px;
    border-radius: 3px;
  }

  .link--btn:hover {
    background-color: var(--accent-color-dark);
  }

  /* main */

  .main {
    max-width: 1150px;
    background-color: #fff;
    margin: 0 auto;
    border-radius: 5px;
    margin-bottom: 35px;
    box-shadow: 0 4px 44px rgba(0, 0, 0, 0.07);
    animation: fade-in 0.4s 0.1s backwards;
  }

  /* intro section */

  .intro {
    display: flex;
    background-color: #000;
  }

  .search {
    flex: 1;
    background-color: #f3f5fa;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 15px;
  }

  .first-heading {
    font-size: 38px;
    font-weight: 500;
    margin-bottom: 30px;
    line-height: 1.1;
    max-width: 383px;
  }

  .form {
    width: 383px;
    position: relative;
  }

  .input {
    height: 61px;
    width: 100%;
    padding-left: 53px;
    font-size: 17px;
    border-radius: 2px;
    margin-bottom: 12px;
  }

  .input-icon {
    font-size: 30px;
    color: #adb4c2;
    position: absolute;
  }

  .input-icon:nth-of-type(1) {
    top: 16px;
    left: 15px;
  }

  .input-icon:nth-of-type(2) {
    top: 87px;
    left: 14px;
  }

  .btn {
    width: 100%;
    height: 61px;
    font-size: 17px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 500;
    color: #fff;
    border-radius: 2px;
    background: var(--accent-color);
    transition: all 2s;
  }

  .btn:hover {
    cursor: pointer;
    background: var(--accent-color-dark);
  }

  .photos {
    display: flex;
  }

  .photo-1 {
    display: block;
  }

  .photo-2 {
    display: block;
  }

  /* CREDENTIALS */

  .credentials {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 35px 0;
    border-bottom: 1px solid #f2f3f8;
  }

  .seen-text {
    font-size: 20px;
    font-weight: 500;
    color: #ccd0d9;
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }

  .credential {
  }

  /* how section */

  .how {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 65px 0 85px;
  }

  .second-heading {
    font-size: 32px;
    color: #292c33;
    text-transform: capitalize;
    font-weight: 500;
    position: relative;
  }

  .second-heading::after {
    content: "";
    height: 3px;
    width: 54px;
    display: block;
    background: var(--accent-color);
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    margin-top: 10px;
  }

  .steps {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    padding: 80px 0;
  }

  .step {
    max-width: 215px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .step-icon {
    height: 64px;
    width: 64px;
    background: black;
    border-radius: 5000px;
    color: white;
    margin-bottom: 21px;
    font-size: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .step:nth-child(1) .step-icon {
    background-color: #fdf6de;
    color: #f5ca36;
  }

  .step:nth-child(2) .step-icon {
    background-color: #ffdeec;
    color: #da196a;
  }

  .step:nth-child(3) .step-icon {
    background-color: #e9e5ff;
    color: #4d31e4;
  }

  .third-heading {
    font-size: 23px;
    color: #3d4048;
    font-weight: 500;
    margin-bottom: 10px;
  }

  .text {
    color: #74777d;
    font-size: 18px;
  }

  .more {
    color: var(--accent-color);
    font-size: 18px;
    padding-bottom: 5px;
    border-bottom: 1px solid var(--accent-color);
    transition: all 0.2s;
  }

  .more:hover {
    color: var(--accent-color-dark);
  }

  .more-icon {
    font-size: 14px;
    transition: all 0.2s;
    display: inline;
  }

  .more:hover .more-icon {
    transform: translateX(3px);
  }

  /* footer */

  .footer {
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    color: #a1a4b0;
    padding: 0 25px;
    padding-bottom: 50px;
  }

  .copyright {
    font-size: 14px;
  }

  .legal-list {
    display: flex;
    column-gap: 35px;
  }

  .legal-item {
  }

  .legal-link {
    font-size: 14px;
    text-transform: capitalize;
  }

  /* MEDIA QUERIES */

  @media (max-width: 1200px) {
    .main {
      margin-left: 25px;
      margin-right: 25px;
    }

    .photo-1 {
      display: none;
    }
  }

  @media (max-width: 965px) {
    .search {
      padding: 40px 0 50px;
    }

    .photo-2 {
      display: none;
    }

    .credentials {
      justify-content: space-evenly;
    }

    .credential:nth-of-type(1) {
      display: none;
    }

    .how {
      padding: 50px 0 65px;
    }

    .steps {
      padding: 60px 0;
      max-width: 500px;
      flex-wrap: wrap;
      row-gap: 35px;
    }
  }

  @media (max-width: 600px) {
    .main {
      margin-left: 0;
      margin-right: 0;
      border-radius: 0;
    }

    .credential:nth-of-type(2) {
      display: none;
    }

    .steps {
      flex-direction: column;
      align-items: center;
    }

    .footer {
      flex-direction: column;
      align-items: center;
      row-gap: 20px;
    }
  }

  @media (max-width: 470px) {
    .header {
      flex-direction: column;
      align-items: center;
      row-gap: 35px;
      margin-bottom: 15px;
    }

    .first-heading {
      max-width: initial;
      padding: 0 20px;
      font-size: 34px;
    }

    .form {
      width: 100%;
    }

    .input,
    .btn {
      border-radius: 0;
    }
  }
`;
export default Project1;
