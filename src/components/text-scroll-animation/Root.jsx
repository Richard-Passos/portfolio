import Char from './Char';

const TextScrollAnimation = ({ text, ...props }) => {
  const chars = text.split('');

  return chars.map((char, i) => (
    <Char
      index={i}
      key={i}
      {...props}
    >
      {char}
    </Char>
  ));
};

export default TextScrollAnimation;
