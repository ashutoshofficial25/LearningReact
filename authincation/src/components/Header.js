import React, { useState } from "react";
import { Box } from "@mui/system";
import { Tab, Tabs } from "@mui/material";

const Header = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="item one" />
        <Tab label="item two" />
        <Tab label="item three" />
      </Tabs>
      <TabPanel></TabPanel>
    </Box>
  );
};

export default Header;
