import React from "react";
import PropTypes from "prop-types";
import Floater from "react-floater";

export default class Target extends React.Component<any, any> {
  static propTypes = {
    innerRef: PropTypes.func
  };

  render() {
    const { innerRef } = this.props;

    return (
      <div className="target" ref={innerRef}>
        <Floater
          event="hover"
          content="I have a click event to my repo!"
          placement="top"
        >
          <a
            href="https://github.com/gilbarbara/react-floater"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.svgporn.com/logos/github-icon.svg"
              alt="GitHub"
              className="github"
            />
          </a>
        </Floater>
      </div>
    );
  }
}
