import React from "react";
import * as c from "./style";

function Button({ text, onClick, margin, width, height }) {
  return (
    <c.WrapperButton>
      <c.Button margin={margin} width={width} height={height} onClick={onClick}>
        {text}
      </c.Button>
    </c.WrapperButton>
  );
}

export default Button;
