import React from "react";
import Floater from "react-floater";

export default class WithTitleAndFooter extends React.Component {
  callback = (action, data) => {
    const { cb } = this.props;

    if (action === "close") {
      console.log("remove");
      document.body.removeEventListener("click", this.close);
    }

    cb(action, data);
  };

  close = e => {
    console.log("click", this.tooltip);
    if (this.tooltip) {
      this.tooltip.setState({ status: "close" });
    }
  };

  handleClick = () => {
    document.body.addEventListener("click", this.close);
  };

  render() {
    return (
      <div>
        <Floater
          callback={this.callback}
          ref={c => (this.tooltip = c)}
          title="Oi, I have a title!"
          content={
            <div>
              <p>
                My content can be anything that can be rendered: numbers,
                strings, elements.
              </p>
              <p>Also I have a custom long arrow.</p>
            </div>
          }
          footer="And I should move up on mobile"
          placement="left"
          styles={{
            arrow: {
              length: 64,
              spread: 12
            }
          }}
        >
          <button onClick={this.handleClick}>LEFT</button>
        </Floater>
      </div>
    );
  }
}
