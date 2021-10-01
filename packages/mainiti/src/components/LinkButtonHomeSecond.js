import React from "react";
import { connect, styled } from "frontity";

const Anchor = styled.a`

    color: white;
    line-height: inherit;
    cursor: pointer;
    text-align: center;
    letter-spacing: 1px;
    margin-right: 1rem;
    margin-bottom: 1rem;
    box-shadow: 0px 2px 5px 0px rgb(0 0 0 / 40%);
    transition: all 0.3s ease;
    margin-right: 0.5rem;
    display: inline-block;
    font-size: 18px;
    padding: 12px 24px;
    text-decoration: none;
    overflow-wrap: break-word;
    border-radius: 5px;
    background: transparent;
    border-color: var(--brand);
    color: var(--brand);
    border: 1px solid transparent;

    &:hover {
      color:var(--black);
    }
`;

const Link = ({ href, actions, children }) => {
  return (
    <div>
      <Anchor
        href={href}
        onClick={event => {
          event.preventDefault();
          actions.router.set(href); 
          window.scrollTo(0, 0);
        }}
      >
        {children}
      </Anchor>
    </div>
  );
};

export default connect(Link);