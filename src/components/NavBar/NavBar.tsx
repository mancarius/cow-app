import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
//import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { Avatar } from "@mui/material";
import { useSelector } from 'react-redux'
import { RootState } from "../../store";
import { useAppDispatch } from '../../store'
import { customerLogout, requireAuth } from "../../store/features/customer/slice";


const pages = ["About", "contacts"];
const settings = ["Account", "Dashboard"];

const NavBar = () => {
  const dispatch = useAppDispatch();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const { info: customer } = useSelector((state: RootState) => state.customer);

  const handleCustomerLogout = async () => {
    const resultAction = await dispatch(customerLogout());
    if (customerLogout.fulfilled.match(resultAction)) {
      handleCloseUserMenu()
    } else {
      alert("Impossible to sign out");
    }
  }

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    customer
      ? setAnchorElUser(event.currentTarget)
      : dispatch(requireAuth());
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    /* Problems position fixed with search result */
    <AppBar elevation={0} sx={{ backgroundColor: "white"}} position="static">
      <Container
        maxWidth="xl"
        sx={{
          m: "20px",
          bgcolor: "#9BE3DE",
          borderRadius: "30px",
          alignSelf: "center",
          width: "97%",
        }}
      >
        <Toolbar>
          <Link href="/">
            <Box
              component="img"
              sx={{
                height: 84,
              }}
              alt="Your logo."
              src="../../../assets/logo-full.png"
            />
          </Link>
          
          <Box
            sx={{
              justifyContent: "flex-end",
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: "black" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            LOGO
          </Typography> */}
          <Box
            sx={{
              justifyContent: "flex-end",
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  mr: 4,
                  color: "black",
                  display: "block",
                  textTransform: "lowercase",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Language */}
          {/* <Box sx={{ flexGrow: 0, mr: 4 }}>
            <Tooltip title="Open settings">
              <Button
                sx={{ color: "black" }}
                variant="text"
                endIcon={<KeyboardArrowDownRoundedIcon />}
              >
                ITA
              </Button>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}

          {/* Account */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title={customer ? "Open settings" : "Sign In"}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {
                  customer?.uid
                    ? <Avatar
                        alt={customer.displayName || undefined}
                        src={customer.photoURL || undefined}
                        />
                    : <PersonOutlineIcon sx={{ color: "black", fontSize: 30 }} />
                }
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClick={handleCloseUserMenu}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
              <MenuItem onClick={handleCustomerLogout}>
                <Typography textAlign="center">
                  {"Logout"}
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
