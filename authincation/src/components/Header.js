import React, { useState } from "react";
import { Box } from "@mui/system";
import { Tab, Tabs } from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";

const Header = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <TabContext>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="item one" value="1" />
        <Tab label="item two" value="2" />
        <Tab label="item three" value="3" />
      </Tabs>
      <TabPanel value="1"> {} </TabPanel>
      <TabPanel value="2"></TabPanel>
      <TabPanel value="3"></TabPanel>
    </TabContext>
  );
};

export default Header;
