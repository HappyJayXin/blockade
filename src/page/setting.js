import React from 'react';

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

import Content from '../containers/Content';
import Header from '../components/Header';

const Setting = () => {
  return (
    <Container maxWidth="sm">
      <CssBaseline />
      <Header />
      <Content />
    </Container>
  );
};

export default Setting;
