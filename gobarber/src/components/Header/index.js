import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/images/logo-interna.svg';

import adorable from '~/assets/images/AA_icon.png';

import { Container, Content, Profile } from './styles';

function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong> Gabriel de Oliveira</strong>
              <Link to="/profile"> Meu perfil</Link>
            </div>
            <img src={adorable} alt="Gabriel Oliveira" />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;
