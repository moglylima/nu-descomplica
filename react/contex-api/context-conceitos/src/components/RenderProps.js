const Consumer = ({ children }) => {
  const style = { color: "red", fontSize: "1.5rem", fontWeight: "bold" };
  return <div>{children(style)}</div>;
};

// const Ola = (style) => (
//   <div style={{ color: style.color }}>Ola Galerinha!!!</div>
// );

export const RenderProps = () => {
  return (
    // <Consumer render={<span>Olá Galera</span>} />;
    <Consumer>
      {(style) => <div style={{ color: style.color }}>Olá Galera</div>}
    </Consumer>
  );
};
