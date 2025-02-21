// components/Layout/Footer.tsx

"use client";

import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Button, Divider, TextField, useTheme } from "@mui/material";

export const Footer: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ bgcolor: "primary.main", color: "white", pt: 12, pb: 6 }}>
      <Container maxWidth="xl">
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
              Ocean
              <span style={{ color: theme.palette.secondary.main }}>
                Cruiser
              </span>
            </Typography>
            <Typography
              variant="body2"
              sx={{ mb: 4, opacity: 0.8, maxWidth: "300px" }}
            >
              Redefining luxury yacht charter experiences with our meticulously
              curated fleet and exceptional service.
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              {["Facebook", "Instagram", "Twitter", "LinkedIn"].map(
                (social) => (
                  <IconButton key={social} sx={{ color: "white" }}>
                    <Box
                      component="span"
                      sx={{
                        width: 24,
                        height: 24,
                        display: "block",
                        bgcolor: "white",
                        opacity: 0.2,
                      }}
                    />
                  </IconButton>
                )
              )}
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ mb: 3 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {[
                "Home",
                "About Us",
                "Our Fleet",
                "Destinations",
                "Contact Us",
              ].map((link) => (
                <Typography
                  key={link}
                  component="a"
                  href="#"
                  sx={{
                    color: "grey.300",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: "secondary.light",
                      pl: 0.5,
                    },
                  }}
                >
                  {link}
                </Typography>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ mb: 3 }}>
              Our Services
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {[
                "Yacht Charters",
                "Luxury Experiences",
                "Corporate Events",
                "Special Occasions",
                "Customized Itineraries",
              ].map((service) => (
                <Typography
                  key={service}
                  component="a"
                  href="#"
                  sx={{
                    color: "grey.300",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: "secondary.light",
                      pl: 0.5,
                    },
                  }}
                >
                  {service}
                </Typography>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 3 }}>
              Newsletter
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, opacity: 0.8 }}>
              Subscribe to receive the latest news and exclusive offers from
              Ocean Cruiser.
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <TextField
                placeholder="Your Email Address"
                variant="outlined"
                size="small"
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    bgcolor: "rgba(255,255,255,0.1)",
                    color: "white",
                    "& fieldset": {
                      borderColor: "rgba(255,255,255,0.3)",
                    },
                    "&:hover fieldset": {
                      borderColor: "secondary.light",
                    },
                  },
                }}
              />
              <Button
                variant="contained"
                color="secondary"
                sx={{ minWidth: "100px" }}
              >
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ borderColor: "rgba(255,255,255,0.1)", my: 6 }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            textAlign={"center"}
            sx={{ opacity: 0.7 }}
          >
            © {new Date().getFullYear()} Ocean Cruiser Yacht Charters.
            <br /> All rights reserved.
          </Typography>
          <Box sx={{ display: "flex", gap: 3 }}>
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (policy) => (
                <Typography
                  key={policy}
                  component="a"
                  href="#"
                  variant="body2"
                  sx={{
                    color: "grey.400",
                    textDecoration: "none",
                    "&:hover": {
                      color: "secondary.light",
                    },
                  }}
                >
                  {policy}
                </Typography>
              )
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
