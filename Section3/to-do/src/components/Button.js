const Button = ({ text, onClick, className, src }) => {
  return (
    <button onClick={onClick} className={className}>
      {src && <img width="18px" height="18px" src={src} />}
      {text}
    </button>
  );
};
export default Button;
