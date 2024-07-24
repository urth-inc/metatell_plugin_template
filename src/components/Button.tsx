import { FC } from 'react';

const Button: FC = () => {
  const onClick = () => {
    console.log("plugin button was clicked");
  }

  return <button onClick={onClick}>🐙Remote Button🐙</button>;
};

export default Button;
