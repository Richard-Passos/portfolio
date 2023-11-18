import Line from './Line';

const TextScrollAnimation = ({ lines = [], ...props }) => {
  return (
    <span
      aria-label={lines.join(' ')}
      {...props}
    >
      {lines.map((line, i) => (
        <Line key={i}>{line}</Line>
      ))}
    </span>
  );
};

export default TextScrollAnimation;
