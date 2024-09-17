import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography } from "@mui/material"
import {Add as AddIcon, CalendarMonth, EmojiEmotions, InsertPhoto, PersonAdd, VideoCameraBack} from '@mui/icons-material'
import { useState } from "react"
import styled from "@emotion/styled"

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})
const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
   gap: "10px",
   marginBottom: "20px"
})

const Add = () => {
    const [open, setOpen] = useState(false)
  return (
    <>
    <Tooltip onClick={(e)=>setOpen(true)} title="Add Post" sx={{position: "fixed", bottom: 20, left:{xs: "calc(50%-25px)", md: 30}}}>
    <Fab color="primary" aria-label="add">
        <AddIcon />
    </Fab>
  
    </Tooltip>
    <StyledModal
  open={open}
  onClose={e=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={300} bgcolor={"background.default"} color={"text.primary"} height={250} p={4} borderRadius={5}>
   <Typography variant="h6" textAlign={'center'} color={"grey"}>Create Post</Typography>
   <UserBox>
   <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
   <Typography fontWeight={500} variant="span">John doe</Typography>
   
   </UserBox>
   <TextField
          id="standard-multiline-static"
          multiline
          rows={3}
          sx={{width: "100%"}}
          placeholder="what's on your mind?"
          variant="standard"
        />
        <Stack direction={"row"} mt={1} mb={2} gap={1}>
        <EmojiEmotions color="primary"/>
        <InsertPhoto color="secondary"/>
        <PersonAdd color="success"/>
        <VideoCameraBack color="error"/>

        </Stack>
        <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
  <Button>Post</Button>
  <Button sx={{width:"100px"}}><CalendarMonth/></Button>
  
</ButtonGroup>
       
  </Box>
</StyledModal>
    </>
  )
}

export default Add
