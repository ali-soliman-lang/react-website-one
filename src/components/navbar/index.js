import React from 'react';
import {NavbarSection , Logo , LogoText , UlList , LiList , ALink } from './style.js';
import { Link } from 'react-router-dom';



const Navbar = () => {
    return (
      <NavbarSection>
          <div className="container">
              <Logo>
                  <LogoText className="logo-text">Ultra Profile</LogoText>
              </Logo>
              <UlList>
                  <LiList className="list-item"><Link to="/">Home</Link></LiList>
                  <LiList className="list-item"><ALink href="#">Work</ALink></LiList>
                  <LiList className="list-item"><ALink href="#">Portfolio</ALink></LiList>
                  <LiList className="list-item"><ALink href="#">Resume</ALink></LiList>
                  <LiList className="list-item"><ALink href="#">About</ALink></LiList>
                  <LiList className="list-item"><Link to="/contact">Contact</Link></LiList>
              </UlList>
          </div>
      </NavbarSection>
    )
}

export default Navbar;
