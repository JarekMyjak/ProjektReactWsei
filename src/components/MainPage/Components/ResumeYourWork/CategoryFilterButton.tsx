import React from 'react'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import styled from 'styled-components'
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';

interface filterButtonProps{
  value:string;
  handler(val:any):void;
}
const CategoryFilterButton = ({value, handler}:filterButtonProps) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (val:string) => {
    setAnchorEl(null);
    handler(val)
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} startIcon={<SettingsEthernetIcon />}>
        {value}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={()=>handleClose(value)}
      >
        <MenuItem onClick={()=>handleClose("All")}>All</MenuItem>
        <MenuItem onClick={()=>handleClose("Followed")}>Followed</MenuItem>
      </Menu>
    </div>
  );
}

export default CategoryFilterButton
