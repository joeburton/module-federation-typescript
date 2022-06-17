interface CounterProps {
  counter: number;
  onIncrease: () => void;
}

declare module 'dashboard/Counter' {
  const Counter: React.ComponentType<CounterProps>;
  export default Counter;
}

interface ButtonProps {
  text: string;
}

declare module 'dashboard/Button' {
  const Button: React.ComponentType<ButtonProps>;
  export default Button;
}
