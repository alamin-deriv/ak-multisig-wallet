import React, { useState } from "react";
import { Input, Button, Box, Text } from "flexibull-meme";

const NewTransfer = ({ createTransfer }) => {
  const [transfer, setTransfer] = useState(undefined);

  const updateTransfer = (e, field) => {
    const value = e.target.value;
    setTransfer({ ...transfer, [field]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    createTransfer(transfer);
  };

  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "5px",
        position: "relative",
        backgroundColor: "#fff",
        width: "30%",
        margin: "40px 0",
      }}
    >
      <Box align="center" margin="20px">
        <Text bold uppercase size="15px">
          Create Transfer
        </Text>
      </Box>
      <form>
        <Input
          width="100%"
          id="amount"
          type="text"
          style={{ margin: "10px 0" }}
          label="Amount"
          onChange={(e) => updateTransfer(e, "amount")}
        />

        <Input
          id="to"
          spaceTop
          type="text"
          width="100%"
          label="To"
          style={{ margin: "10px 0" }}
          onChange={(e) => updateTransfer(e, "to")}
        />
        <Box align="right">
          <Button
            disabled={!transfer?.to || !transfer?.amount}
            onClick={(e) => submit(e)}
          >
            Submit
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default NewTransfer;
