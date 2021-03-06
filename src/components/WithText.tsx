import React from "react";
import Floater from "react-floater";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 500px;
  line-height: 1.5;
`;

const Highlight = styled.span`
  display: inline-block;
  position: relative;

  &:before {
    background-color: #f04;
    bottom: -2px;
    content: "";
    display: block;
    height: 2px;
    position: absolute;
    width: 100%;
  }
`;

const FloaterFactory = ({
  cb,
  content = "I'm called from a large body of text!",
  text
}: any) => (
  <Floater callback={cb} content={content} placement="top" event="hover">
    <Highlight>{text}</Highlight>
  </Floater>
);

export default function WithText({ cb }: any) {
  const away = <FloaterFactory cb={cb} text="away" />;

  const semantics = (
    <FloaterFactory
      cb={cb}
      text="Semantics"
      content={
        <div>
          <p>
            Semantics (from Ancient Greek: σημαντικός sēmantikos,
            "significant")[1][2] is the linguistic and philosophical study of
            meaning, in language, programming languages, formal logics, and
            semiotics.
          </p>
        </div>
      }
    />
  );

  return (
    <Wrapper>
      Far far {away}, behind the word mountains, far from the countries Vokalia
      and Consonantia, there live the blind texts. Separated they live in
      Bookmarksgrove right at the coast of the {semantics}, a large language
      ocean. A small river named Duden flows by their place and supplies it with
      the necessary regelialia. It is a paradisematic country, in which roasted
      parts of sentences fly into your mouth.
    </Wrapper>
  );
}
