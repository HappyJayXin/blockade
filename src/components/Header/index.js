import React from 'react';
import useStyles from './styled'

const Header = () => {
  const { container } = useStyles();

  return (
    <header className={container}>
      <h1>Blockade 設定後台</h1>
    </header>
  )
}

export default Header;
