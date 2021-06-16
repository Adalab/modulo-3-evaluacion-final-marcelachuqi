import React from "react";
import Cartoon from "./Cartoon";

const CartoonList = (props) => {
  const cartoonElements = props.cartoons.map((cartoon) => {
    return <Cartoon key={cartoon.id} cartoon={cartoon} />;
  });
  return (
    <section>
      <ul>{cartoonElements}</ul>
    </section>
  );
};

export default CartoonList;
