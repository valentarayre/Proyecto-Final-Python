import React from "react";

const Message = ({ msg, bgColor }) => {
  const styles = {
    padding: "1rem",
    marginBottom: "1rem",
    textAlign: "center",
    color: "#fff",
    fontWeight: "semi-bold",
    backgroundColor: bgColor,
    with: "100%",
    position : "absolute",
    zindex : "999",
    left: "0",
    right : "0",
    bottom : "0"
  };
  return (
    <div style={styles}>
      <p>{msg}</p>
    </div>
  );
};

export default Message;
