import React from "react";
import Floater from "react-floater";

export default function WithPosition({ cb }: any) {
  return (
    <div>
      <Floater
        callback={cb}
        content={<div>I live up here on large screens!</div>}
        disableAnimation
        placement="bottom-end"
        styles={{
          container: {
            padding: "4rem",
            fontSize: 24,
            textAlign: "center"
          },
          close: {
            right: "auto",
            left: 0
          }
        }}
      >
        <button style={{ position: "fixed", top: 15, right: 15, width: 75 }}>
          {"  ☗  "}︎
        </button>
      </Floater>
    </div>
  );
}
