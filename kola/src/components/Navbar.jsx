import styled from "@emotion/styled"
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography } from "@mui/material"
import PetsIcon from '@mui/icons-material/Pets';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useState } from "react";

const StyledTooBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})

const Search = styled("div")({
    backgroundColor: "white",
    width: "40%",
    padding: "0px 10px",
    borderRadius: "10px"
})
const Icons = styled(Box)({
    display:"none",
    alignItems: "center",
    gap: "20px",

})
const UserBox = styled(Box)({
    display:"flex",
    alignItems: "center",
    gap: "20px"

})




const Navbar = () => {
    const [open, setOpen] = useState(false)
  return (
    <AppBar position={"sticky"}>
        <StyledTooBar>
            <Typography variant="h6" sx={{display: {xs: "none", sm: "block"}}} >i LETSELANE</Typography>
            <PetsIcon sx={{display: {xs: "block", sm: "none"}}}/>
            <Search><InputBase placeholder="Search..."/></Search>
            <Icons sx={{display: {sm:"flex"}}}>
            <Badge badgeContent={4} color="error">
                    <  MailIcon />
                </Badge>
                <Badge badgeContent={9} color="error">
                    <NotificationsIcon />
                </Badge>
                <Avatar onClick={()=>setOpen(true)} sx={{ bgcolor: "orange" , width: "30px", height: "30px"}}>IL</Avatar>
            </Icons>
            <UserBox onClick={()=>setOpen(true)} sx={{display: {sm: "none"}}}>
            <Avatar sx={{ bgcolor: "orange" , width: "30px", height: "30px"}}>IL</Avatar>
            <Typography variant="span">IZAYA</Typography>
            </UserBox>
        </StyledTooBar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open} 
        onClose={()=> setOpen(false)}  
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar
