import React, { useState } from "react";
import PackageContext from "./Context";

const Provider = (props) => {
  const [mission, setMission] = useState({
    mname: "Go to russia",
    agent: "007",
    accept: "not accepted",
  });

  return (
    <PackageContext.Provider
      value={{
        data: mission,
        isMissionAccepted: () => {
          setMission({ ...mission, accept: "ACCEPTED" });
        },
      }}
    >
      {props.children}
    </PackageContext.Provider>
  );
};

export default Provider;
