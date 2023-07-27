import React from "react";
import { Text as OriginalText, TextProps } from "react-native";

const Text: React.FC<TextProps> = ({ children, ...restProps }) => {
  return (
    <OriginalText style={{ color: "white" }} {...restProps}>
      {children}
    </OriginalText>
  );
};

export default Text;
