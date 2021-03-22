import React from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const MyButton = styled(Button)({
  height: 48,
  color: 'rgb(251, 186, 83)',
  margin: '0 -5px',
  paddingRight: 30,
  fontStyle: '"Open Sans", sans-serif',
  fontWeight: 600,
  fontSize: '16px',
  letterSpacing: 4,
});

function ButtonM() {
  return (
    <MyButton>READ MORE</MyButton>
  )
}

export default ButtonM;