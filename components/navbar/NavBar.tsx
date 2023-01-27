import { Container } from "@mui/material"
import {
    AppBar,
    Box,
    IconButton,
    InputBase,
    Paper,
    Toolbar,
    Typography,
  } from "@mui/material";
  import { Home as HomeIcon } from "@mui/icons-material";
  import { Search } from "@mui/icons-material";
  import FaceIcon from '@mui/icons-material/Face';
  import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
  import FlagIcon from '@mui/icons-material/Flag';
  
const NavBar = () => {
  return (
    <Box sx={{m: 0, p: 0}}>
        <AppBar sx={{ background: "white", m: 0, p: 0 }}>
          <Toolbar
            sx={{ display: { xs: "flex" }, justifyContent: "space-around", alignItems: "center" }}
          >
            <Box sx={{ position: {xs:"static", sm: "inherit"},}}>
              <Typography
                variant="h4"
                sx={{ fontFamily: "inherit", color: "#F1641E" }}
              >
                Etsy
              </Typography>
            </Box>
            <Box sx={{ display: {xs: "none", sm: "flex"}, position: "relative", left: "20px", flex: "1", justifySelf: "center"}}>
              <Paper
                component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: 400,
                  boxShadow: "0px 0px 0px",
                  justifyContent: "center",
                  backgroundColor: "transparent",
                }}
              >
                <InputBase
                  sx={{
                    border: "3px solid black",
                    borderRadius: "30px",
                    background: "#eee",
                    height: "50px",
                    flex: "1",
                    width: "20%"
                  }}
                  placeholder="Search..."
                />
                <IconButton
                  type="button"
                  sx={{ p: "10px", position: "relative", right: "45px" }}
                  aria-label="search"
                >
                  <Search />
                </IconButton>
              </Paper>
            </Box>
            <Box sx={{maxWidth: {xs: "150px", sm: "200px"}, m: 0, p: 0,display: "flex", position: "relative", right: "20px", justifyContent: "space-evenly",alignItems: "center", gap: {xs: "0px", sm:"10px"}}}>
                 <Typography sx={{display: { xs: "none", sm: "none", md: "inline"},color: "black", width: "50px"}}>sign in</Typography>
                 <IconButton>
                <FlagIcon />
              </IconButton>
              <IconButton>
                <FaceIcon />
              </IconButton>
              <IconButton>
                <ShoppingBasketIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
    </Box>
  )
}

export default NavBar