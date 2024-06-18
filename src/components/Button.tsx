import { FC } from 'react';

export interface ButtonProps {
  label: string;
}

const Button: FC<ButtonProps> = ({ label }) => {
  const onClick = () => {
    console.log("plugin button was clicked");
  }
  return <button onClick={onClick}>{label}</button>;
};

export default Button;
