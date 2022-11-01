import React from "react";

const Fileira = (props) => {
  return (
    <div>
      {[0, 1, 2, 3].map((pos, index) => (
        <AssentoClass key={index} pos={props.de + pos} />
      ))}
    </div>
  );
};

class AssentoClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ocupado: false,
    };
  }

  handleClick = () => {
    this.setState({ ocupado: true });
  };

  render() {
    return (
      <button disabled={this.state.ocupado} onClick={this.handleClick}>
        {this.state.ocupado ? "x" : this.props.pos}
      </button>
    );
  }
}

export const AssentosOnibus = () => {
  return (
    <div>
      {[1, 5, 9, 13, 17].map((pos, index) => (
        <Fileira key={index} de={pos} />
      ))}
    </div>
  );
};
