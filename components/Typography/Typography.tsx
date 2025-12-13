interface propTypes {
  text: string;
  className?: string;
}

export const H1Title = ({ text, className = "" }: propTypes) => {
  return <h1 className={`text-6xl font-extrabold ${className}`}>{text}</h1>;
};

export const H2Title = ({ text, className = "" }: propTypes) => {
  return <h1 className={`text-4xl font-extrabold  ${className}`}>{text}</h1>;
};

export const H4Text = ({ text, className = "" }: propTypes) => {
  return <h4 className={`text-2xl ${className}`}>{text}</h4>;
};
