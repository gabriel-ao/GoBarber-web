import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';

import logo from '~/assets/images/logo-interna.svg';
import adorable from '~/assets/images/AA_icon.png';

import { Container, Content, Profile } from './styles';

function Header() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />

          <Profile>
            <div>
              <strong> Gabriel de Oliveira</strong>
              <Link to="/profile"> Meu perfil</Link>
            </div>
            <img src={profile.avatar.url || adorable} alt="Gabriel Oliveira" />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;
