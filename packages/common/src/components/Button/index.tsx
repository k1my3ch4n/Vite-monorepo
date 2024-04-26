interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'l' | 'm';
  variant?: 'primary' | 'outlined' | 'danger';
  className?: string;
  hasIcon?: boolean;
}

export const Button = ({ ...props }: ButtonProps) => {
  return <button {...props}>{props.children}</button>;
};
