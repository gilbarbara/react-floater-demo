import React from "react";
import Floater from "react-floater";

import Target from "./Target";

export default class ProxyMode extends React.Component {
  setRef = c => {
    this.target = c;
    this.forceUpdate();
  };

  render() {
    const { cb } = this.props;

    return (
      <div>
        <Target innerRef={this.setRef} />
        {this.target && (
          <Floater
            callback={cb}
            content={
              <div>
                <p>
                  Another instance is using me as a target for a new tooltip.
                </p>
                <p>
                  Btw, I'm using the <b>auto</b> placement which can have
                  unexpected behaviour. Be aware.{" "}
                </p>
                <p>
                  <span role="img" aria-label="Emoji" style={{ fontSize: 42 }}>
                    😎
                  </span>
                </p>
              </div>
            }
            event="hover"
            placement="auto"
            target={this.target}
            style={{ marginTop: 20 }}
          >
            <span style={{ textDecoration: "underline" }}>Proxy mode</span>
          </Floater>
        )}
      </div>
    );
  }
}
