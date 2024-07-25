import React from 'react';

const Button: React.FC = () => {
  const onClick = () => {
    console.log("crab button was clicked");
  }

  return <button onClick={onClick}>🦀Remote Button🦀</button>;
};

export default Button;
