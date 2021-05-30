import React, { FC } from "react";
import DropdownSelector from "./DropdownSelector/DropdownSelector";
import TopNavLogo from "./TopNavLogo.tsx/TopNavLogo";


export const TopNav: FC = () => {
    return (
      <div>
        {/* tu będzie TopNav*/}
        <TopNavLogo></TopNavLogo>
        <DropdownSelector></DropdownSelector>
      </div>
    )
  }