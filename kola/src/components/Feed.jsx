import { Box } from "@mui/material"
import Posts from "./Posts"

const Feed = () => {
  return (
    <Box ml={"20px"}  flex={3} p={2} >
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
    </Box>
  )
}

export default Feed
