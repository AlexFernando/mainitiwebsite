import React from "react";
import { styled, connect } from "frontity";
import Image from "@frontity/components/image";

const description404 = (
  <>
    That page is still underconstruction. We'll get back to you soon.{" "}
    <span role="img" aria-label="confused face">
      😕
    </span>
  </>
);

const description = (
  <>
    Don&apos;t panic! Seems like you encountered an error. If this persists,
    <a href="https://community.frontity.org"> let us know </a> or try refreshing
    your browser.
  </>
);

// The 404 page component
const Page404 = ({ state }) => {
  const data = state.source.get(state.router.link);

  const title = "Oops! Something went wrong";
  const title404 = "Oops! 404";

  return (
    <Container>
      <Title>{data.is404 ? title404 : title}</Title>
      <Description>{data.is404 ? description404 : description}</Description>
      <ImageStyledHome src="https://www.lakeshoreunitedfc.org/_uploads/5ddebe3b2c7d9a590abcc565/underconstruction.png" />
    </Container>
  );
};

export default connect(Page404);

const Container = styled.div`
  width: 800px;
  margin: 0;
  padding: 24px;
  text-align: center;
  margin-top: 10rem;
`;

const Title = styled.h1`
  margin: 0;
  margin-top: 24px;
  margin-bottom: 8px;
  color: rgba(12, 17, 43);
  font-size: 4em;
`;

const Description = styled.div`
  line-height: 1.6em;
  color: rgba(12, 17, 43, 0.8);
  margin: 24px 0;
`;


const ImageStyledHome = styled(Image)`
    display: flex;
    justify-content: center;
    align-self: center;
    margin-top: 3rem;
    max-height: 100%;
    max-width: 100%;

    @media(max-width: 768px) {
        margin-top: 2rem;
    }
`