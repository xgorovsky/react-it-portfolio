import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import Hamburger from "./Hamburger";
import { withRouter, Link } from "react-router-dom";

function Header(props) {
  const [state, setState] = useState({
    firstOpen: false,
    clicked: null
  });

  const handleMenu = () => {
    disableHamburger();
    if (state.firstOpen === false) {
      setState({
        firstOpen: null,
        clicked: true
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked
      });
    } else {
      setState({ clicked: !state.clicked });
    }
  };

  const [disabled, setDisabled] = useState(false);
  const disableHamburger = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 850);
  };

  useEffect(() => {
    //listen to page change on which hide menu
    props.history.listen(() => {
      setState({ clicked: false });
    });
  });

  return (
    <header>
      <div className="header-container">
        <div
          style={
            state.clicked
              ? { transition: ".1s ease-in" }
              : {
                  transition: "0 ease-in",
                  transitionDelay: ".53s",
                  backgroundColor: "rgba(255,255,255,0.8)"
                }
          }
          className="inner-header"
        >
          <div className="header__logo">
            <Link to="/">IGOR BIEDRAWA</Link>
          </div>
          <div className="menu">
            <Hamburger
              disabled={disabled}
              show={state.clicked}
              click={handleMenu}
            />
          </div>
        </div>
      </div>
      <Navigation show={state} />
    </header>
  );
}

export default withRouter(Header);
