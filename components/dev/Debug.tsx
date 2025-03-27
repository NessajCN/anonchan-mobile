"use client";

import { Button, Text } from "rsuite";
import { invoke } from "@tauri-apps/api/core";
import { useState } from "react";

const Debug = () => {
  const [text, setText] = useState("");
  return (
    <>
      <Button
        appearance="primary"
        onClick={async () => {
          try {
            const answer: string = await invoke("greet");
            setText(answer);
          } catch (err) {
            setText(`${err}`);
          }
        }}
      >
        Greet
      </Button>
      <Text>{text}</Text>
    </>
  );
};

export default Debug;
