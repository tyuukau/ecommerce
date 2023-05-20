import React from "react";

import { Alert } from "react-bootstrap";

/**
 * The function returns an Alert component with a specified variant and children.
 * @returns The function `Message` is returning an `Alert` component with the `variant` and `children`
 * props passed as arguments.
 */
function Message({ variant, children }) {
  return <Alert variant={variant}>{children}</Alert>;
}

export default Message;
