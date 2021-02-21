import React from "react";
import Rectangle from "./Rectangle.jsx";

export default class RectEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rectHeight: 100,
      rectWidth: 100,
    };
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={(e) => {
            console.log(e);
            this.setState({ rectHeight: +e.target.value });
          }}
          value={this.state.rectHeight}
        />
        <input
          type="text"
          onChange={(e) => {
            this.setState({ rectWidth: +e.target.value });
          }}
          value={this.state.rectWidth}
        />
        <Rectangle
          height={this.state.rectHeight}
          width={this.state.rectWidth}
          color={"red"}
        />
      </div>
    );
  }
}
