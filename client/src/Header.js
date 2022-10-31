import React from "react";
import { Tag, Text, Box } from "flexibull-meme";
import { stringToHslColor } from "./utils";

const Header = ({ approvers, quorum }) => (
  <header>
    <Box align="center">
      {approvers.map((approver) => (
        <Tag
          solid
          small
          color={stringToHslColor(approver, 70, 80)}
          fontColor={stringToHslColor(approver, 50, 30)}
          spaceRight
          style={{ marginBottom: "10px" }}
          key={approver}
        >
          <Text bold uppercase size="12px" style={{ opacity: 0.8 }}>
            {approver}
          </Text>
        </Tag>
      ))}

      <Tag
        solid
        small
        color={stringToHslColor("Quorum", 70, 80)}
        fontColor={stringToHslColor("Quorum", 50, 30)}
        spaceRight
        style={{ marginBottom: "10px" }}
        key="Quorum"
      >
        <Text bold uppercase size="12px" style={{ opacity: 0.8 }}>
          Quorum: {quorum}
        </Text>
      </Tag>
    </Box>

  </header>
);

export default Header;
