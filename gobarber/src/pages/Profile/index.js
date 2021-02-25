import React from 'react';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';

function Profile() {
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {}

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />

        <hr />

        <Input
          name="password"
          type="oldPassword"
          placeholder="Sua senha atual"
        />

        <Input name="password" type="password" placeholder="Nova senha" />

        <Input
          name="password"
          type="confirmPassword"
          placeholder="confirmação"
        />

        <button type="submit"> Atualizar perfil</button>
      </Form>
      <button type="button"> Sair do GoBarber </button>
    </Container>
  );
}

export default Profile;
