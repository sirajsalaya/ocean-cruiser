// components/Layout/Header.tsx

"use client";

import React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Hidden,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useScrollTrigger,
  useTheme,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { motion } from "framer-motion";
import Image from "next/image";

export const Header: React.FC = () => {
  const theme = useTheme();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Navigation items array for cleaner code
  const navItems: string[] = [
    "Home",
    "Yachts",
    "Destinations",
    "Experiences",
    "About",
    "Contact",
  ];

  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{
        bgcolor: trigger ? "rgba(10, 35, 66, 0.95)" : "transparent",
        transition: "all 0.4s ease",
        boxShadow: trigger ? "0 5px 20px rgba(0, 0, 0, 0.1)" : "none",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ py: trigger ? 1 : 2 }}>
          <Box sx={{ flexGrow: 1, fontWeight: 700 }}>
            <Image
              src={"/ocyachts.png"}
              width={100}
              height={40}
              alt="Ocean Cruiser Yachts"
            />
          </Box>

          <Hidden mdDown>
            <Box sx={{ display: "flex", gap: 4 }}>
              {navItems.map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Typography
                    component="a"
                    href="#"
                    color="white"
                    sx={{
                      position: "relative",
                      textDecoration: "none",
                      "&:hover": {
                        color: theme.palette.secondary.light,
                      },
                      "&:hover::after": {
                        width: "100%",
                      },
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        width: 0,
                        height: 2,
                        bottom: -5,
                        left: 0,
                        backgroundColor: theme.palette.secondary.main,
                        transition: "width 0.3s ease",
                      },
                    }}
                  >
                    {item}
                  </Typography>
                </motion.div>
              ))}
            </Box>
            <Button
              variant="outlined"
              color="secondary"
              sx={{ ml: 4 }}
              component={motion.button}
              whileHover={{
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.primary.main,
                y: -2,
              }}
            >
              Book Now
            </Button>
          </Hidden>

          <Hidden mdUp>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              keepMounted
              marginThreshold={0}
              slotProps={{
                paper: {
                  sx: {
                    width: "100%",
                    maxWidth: "100%",
                    height: "100%",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  },
                },
              }}
            >
              {navItems.map((item) => (
                <MenuItem key={item} onClick={handleClose}>
                  {item}
                </MenuItem>
              ))}
              <Divider />
              <MenuItem>
                <Button variant="contained" color="secondary" fullWidth>
                  Book Now
                </Button>
              </MenuItem>
            </Menu>
          </Hidden>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
