"use client";

// pages/index.js
import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  MenuItem,
  Rating,
  TextField,
  InputAdornment,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import PeopleIcon from "@mui/icons-material/People";
import KingBedIcon from "@mui/icons-material/KingBed";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import Avatar from "@mui/material/Avatar";

// Hero Section with Framer Motion animations
function HeroSection() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        position: "relative",
        display: "flex",
        alignItems: "center",
        background:
          "linear-gradient(rgba(10, 35, 66, 0.4), rgba(10, 35, 66, 0.7))",
        overflow: "hidden",
      }}
    >
      {/* Background image with parallax effect */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      >
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <Image
            src="/hero-section.webp"
            alt="Luxury yacht on open waters"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </Box>

      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography
            variant="h1"
            component="h1"
            color="white"
            sx={{
              fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
              maxWidth: "700px",
              lineHeight: 1.2,
              mb: 3,
            }}
          >
            Experience Luxury on the Open Waters
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Typography
            variant="h6"
            color="white"
            sx={{
              maxWidth: "600px",
              fontWeight: 300,
              mb: 6,
              fontSize: { xs: "1rem", md: "1.3rem" },
              lineHeight: 1.6,
            }}
          >
            Discover unparalleled luxury aboard our exclusive fleet of premium
            yachts. Charter your perfect voyage and create memories that last a
            lifetime.
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}
        >
          <motion.div
            whileHover={{ y: -3, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
          >
            <Button
              variant="contained"
              color="secondary"
              size="large"
              sx={{
                py: 1.5,
                px: 4,
                fontSize: "1.1rem",
              }}
            >
              Browse Yachts
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ y: -3, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
          >
            <Button
              variant="outlined"
              sx={{
                color: "white",
                borderColor: "white",
                py: 1.5,
                px: 4,
                fontSize: "1.1rem",
                "&:hover": {
                  backgroundColor: "white",
                  color: theme.palette.primary.main,
                  borderColor: "white",
                },
              }}
            >
              Our Destinations
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
}

// Yacht Listings Section
function YachtListings() {
  const theme = useTheme();

  const yachts = [
    {
      id: 1,
      name: "Celestial Odyssey",
      length: "48m",
      capacity: 12,
      cabins: 6,
      speed: 22,
      price: "$25,000",
      image: "/yacht-1.jpg",
    },
    {
      id: 2,
      name: "Azure Horizon",
      length: "42m",
      capacity: 10,
      cabins: 5,
      speed: 18,
      price: "$19,500",
      image: "/yacht-2.jpg",
    },
    {
      id: 3,
      name: "Serene Voyager",
      length: "56m",
      capacity: 14,
      cabins: 7,
      speed: 24,
      price: "$32,000",
      image: "/yacht-3.jpg",
    },
  ];

  return (
    <Box sx={{ py: 15, bgcolor: "background.paper" }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center", mb: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              component="h2"
              color="primary"
              sx={{
                mb: 2,
                position: "relative",
                display: "inline-block",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  width: "70px",
                  height: "3px",
                  backgroundColor: theme.palette.secondary.main,
                  bottom: "-15px",
                  left: "50%",
                  transform: "translateX(-50%)",
                },
              }}
            >
              Our Luxury Fleet
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h6"
              color="primary.light"
              sx={{
                maxWidth: "700px",
                mx: "auto",
                mt: 5,
                fontWeight: 300,
              }}
            >
              Discover our curated collection of world-class yachts, each
              offering unparalleled luxury and performance on the water.
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={4}>
          {yachts.map((yacht, index) => (
            <Grid item xs={12} md={6} lg={4} key={yacht.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card sx={{ height: "100%" }}>
                  <Box sx={{ overflow: "hidden", height: 280 }}>
                    <CardMedia
                      component="img"
                      height="280"
                      image={yacht.image}
                      alt={yacht.name}
                      sx={{
                        transition: "transform 0.8s ease",
                        "&:hover": {
                          transform: "scale(1.05)",
                        },
                      }}
                    />
                  </Box>
                  <CardContent sx={{ p: 4 }}>
                    <Typography
                      variant="h4"
                      component="h3"
                      color="primary"
                      gutterBottom
                    >
                      {yacht.name}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 2,
                      }}
                    >
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                      >
                        <DirectionsBoatIcon fontSize="small" color="primary" />
                        <Typography variant="body2" color="text.secondary">
                          {yacht.length}
                        </Typography>
                      </Box>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                      >
                        <PeopleIcon fontSize="small" color="primary" />
                        <Typography variant="body2" color="text.secondary">
                          {yacht.capacity} Guests
                        </Typography>
                      </Box>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                      >
                        <KingBedIcon fontSize="small" color="primary" />
                        <Typography variant="body2" color="text.secondary">
                          {yacht.cabins} Cabins
                        </Typography>
                      </Box>
                    </Box>
                    <Typography
                      variant="h5"
                      color="secondary"
                      sx={{ mb: 3, fontWeight: 600 }}
                    >
                      {yacht.price} / day
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        component="a"
                        href="#"
                        color="primary"
                        sx={{
                          textDecoration: "none",
                          fontWeight: 600,
                          display: "flex",
                          alignItems: "center",
                          gap: 0.5,
                          transition: "all 0.3s ease",
                          "&:hover": {
                            color: "secondary.main",
                          },
                        }}
                      >
                        View Details
                        <ArrowForwardIcon fontSize="small" />
                      </Typography>
                      <Button variant="outlined" color="secondary" size="small">
                        Book Now
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: "center", mt: 8 }}>
          <motion.div
            whileHover={{ y: -3, scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              variant="contained"
              color="primary"
              endIcon={<ArrowForwardIcon />}
              size="large"
            >
              View All Yachts
            </Button>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}

// Experience Section
function ExperienceSection() {
  const theme = useTheme();

  const experiences = [
    {
      id: 1,
      title: "Personalized Itineraries",
      description:
        "Our expert crew will craft a bespoke journey tailored to your preferences, whether you seek serene hideaways or vibrant coastal hotspots.",
      image: "/api/placeholder/600/400",
    },
    {
      id: 2,
      title: "Gourmet Dining Experience",
      description:
        "Indulge in exquisite cuisine prepared by our private chefs, using fresh local ingredients and paired with fine wines.",
      image: "/api/placeholder/600/400",
    },
  ];

  return (
    <Box sx={{ py: 15, bgcolor: "background.default" }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center", mb: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              component="h2"
              color="primary"
              sx={{
                mb: 2,
                position: "relative",
                display: "inline-block",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  width: "70px",
                  height: "3px",
                  backgroundColor: theme.palette.secondary.main,
                  bottom: "-15px",
                  left: "50%",
                  transform: "translateX(-50%)",
                },
              }}
            >
              Unforgettable Experiences
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h6"
              color="primary.light"
              sx={{
                maxWidth: "700px",
                mx: "auto",
                mt: 5,
                fontWeight: 300,
              }}
            >
              From sunrise to sunset, every moment aboard our luxury yachts is
              designed to create memories that last a lifetime.
            </Typography>
          </motion.div>
        </Box>

        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Grid
              container
              spacing={8}
              sx={{
                mb: 12,
                flexDirection: index % 2 === 0 ? "row" : "row-reverse",
              }}
              alignItems="center"
            >
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    position: "relative",
                    height: { xs: "300px", md: "450px" },
                    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                    borderRadius: 2,
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h3"
                  color="primary"
                  gutterBottom
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    mb: 4,
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      width: "60px",
                      height: "3px",
                      backgroundColor: theme.palette.secondary.main,
                      bottom: "-15px",
                      left: 0,
                    },
                  }}
                >
                  {exp.title}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    mb: 4,
                    fontSize: "1.1rem",
                    lineHeight: 1.7,
                  }}
                >
                  {exp.description}
                </Typography>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Typography
                    component="a"
                    href="#"
                    color="primary"
                    sx={{
                      textDecoration: "none",
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                      width: "fit-content",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        color: "secondary.main",
                      },
                    }}
                  >
                    Discover More
                    <ArrowForwardIcon fontSize="small" />
                  </Typography>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        ))}
      </Container>
    </Box>
  );
}

// Booking Form Section
function BookingFormSection() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: 15,
        bgcolor: "primary.main",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background pattern */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.05,
          backgroundImage: `url('/api/placeholder/1920/1080')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={8}>
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h2"
                color="white"
                sx={{
                  mb: 3,
                  position: "relative",
                  display: "inline-block",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    width: "60px",
                    height: "3px",
                    backgroundColor: theme.palette.secondary.main,
                    bottom: "-15px",
                    left: 0,
                  },
                }}
              >
                Begin Your Journey
              </Typography>
              <Typography
                variant="h6"
                color="grey.300"
                sx={{
                  mt: 4,
                  mb: 4,
                  fontWeight: 300,
                  lineHeight: 1.7,
                }}
              >
                Ready to experience unparalleled luxury on the water? Book your
                dream yacht charter today and let us create an unforgettable
                voyage tailored just for you.
              </Typography>
              <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap", mt: 6 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box
                    sx={{
                      bgcolor: "secondary.main",
                      width: 50,
                      height: 50,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <PhoneIcon sx={{ color: "primary.main" }} />
                  </Box>
                  <Box>
                    <Typography variant="body2" color="grey.400">
                      Contact Us
                    </Typography>
                    <Typography variant="h6" color="white">
                      +1 (800) 123-4567
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box
                    sx={{
                      bgcolor: "secondary.main",
                      width: 50,
                      height: 50,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <EmailIcon sx={{ color: "primary.main" }} />
                  </Box>
                  <Box>
                    <Typography variant="body2" color="grey.400">
                      Email Us
                    </Typography>
                    <Typography variant="h6" color="white">
                      bookings@ocyachts.com
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Card sx={{ p: 4 }}>
                <Typography variant="h4" color="primary" gutterBottom>
                  Book Your Charter
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 4 }}
                >
                  Fill out the form below and our team will get back to you
                  within 24 hours.
                </Typography>

                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Destination"
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LocationOnIcon color="primary" />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        label="Departure Date"
                        slotProps={{
                          textField: {
                            fullWidth: true,
                            variant: "outlined",
                            InputProps: {
                              startAdornment: (
                                <InputAdornment position="start">
                                  <CalendarTodayIcon color="primary" />
                                </InputAdornment>
                              ),
                            },
                          },
                        }}
                      />
                    </LocalizationProvider> */}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        label="Return Date"
                        slotProps={{
                          textField: {
                            fullWidth: true,
                            variant: "outlined",
                            InputProps: {
                              startAdornment: (
                                <InputAdornment position="start">
                                  <CalendarTodayIcon color="primary" />
                                </InputAdornment>
                              ),
                            },
                          },
                        }}
                      />
                    </LocalizationProvider> */}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Number of Guests"
                      variant="outlined"
                      type="number"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PersonIcon color="primary" />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      select
                      label="Yacht Size"
                      variant="outlined"
                      defaultValue=""
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <DirectionsBoatIcon color="primary" />
                          </InputAdornment>
                        ),
                      }}
                    >
                      <MenuItem value="">Select Size</MenuItem>
                      <MenuItem value="30-40m">30-40m</MenuItem>
                      <MenuItem value="40-50m">40-50m</MenuItem>
                      <MenuItem value="50m+">50m+</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Special Requests"
                      variant="outlined"
                      multiline
                      rows={4}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        fullWidth
                        sx={{ py: 1.5 }}
                      >
                        Submit Inquiry
                      </Button>
                    </motion.div>
                  </Grid>
                </Grid>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const theme = useTheme();

  const testimonials = [
    {
      id: 1,
      name: "Alexander Thompson",
      position: "CEO, Global Industries",
      quote:
        "Our charter with Ocean Cruiser exceeded all expectations. The yacht was immaculate, the crew professional, and the experience truly unforgettable.",
      rating: 5,
      image: "/api/placeholder/80/80",
    },
    {
      id: 2,
      name: "Sophia Rodriguez",
      position: "Travel Influencer",
      quote:
        "The attention to detail aboard was exceptional. From the gourmet dining to the carefully planned itinerary, everything was perfect.",
      rating: 5,
      image: "/api/placeholder/80/80",
    },
    {
      id: 3,
      name: "James Harrison",
      position: "Finance Director",
      quote:
        "The most exclusive yacht experience I've had. The crew anticipated our every need, and the destinations were stunning.",
      rating: 5,
      image: "/api/placeholder/80/80",
    },
  ];

  return (
    <Box sx={{ py: 15, bgcolor: "background.paper" }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center", mb: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              component="h2"
              color="primary"
              sx={{
                mb: 2,
                position: "relative",
                display: "inline-block",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  width: "70px",
                  height: "3px",
                  backgroundColor: theme.palette.secondary.main,
                  bottom: "-15px",
                  left: "50%",
                  transform: "translateX(-50%)",
                },
              }}
            >
              Client Testimonials
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h6"
              color="primary.light"
              sx={{
                maxWidth: "700px",
                mx: "auto",
                mt: 5,
                fontWeight: 300,
              }}
            >
              Hear what our distinguished clients have to say about their
              experiences with OC Yacht Charters.
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={testimonial.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: "100%",
                    p: 4,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <FormatQuoteIcon
                    sx={{
                      fontSize: 60,
                      color: "secondary.main",
                      opacity: 0.3,
                      mb: 2,
                    }}
                  />
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      fontSize: "1.1rem",
                      fontStyle: "italic",
                      mb: 4,
                      flexGrow: 1,
                    }}
                  >
                    "{testimonial.quote}"
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar
                      alt={testimonial.name}
                      src={testimonial.image}
                      sx={{ width: 64, height: 64 }}
                    />
                    <Box>
                      <Typography variant="h6" color="primary">
                        {testimonial.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        gutterBottom
                      >
                        {testimonial.position}
                      </Typography>
                      <Rating
                        value={testimonial.rating}
                        readOnly
                        size="small"
                      />
                    </Box>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

// Map Section
function MapSection() {
  return (
    <Box sx={{ position: "relative", height: "600px" }}>
      <Box
        component="iframe"
        src="about:blank" // Placeholder - in a real app, replace with actual map embed
        title="Our Yacht Charter Locations"
        sx={{
          border: "none",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", md: "500px" },
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" color="primary" gutterBottom>
          Our Charter Locations
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Ocean Cruiser operates in the most exclusive destinations worldwide.
          From the Mediterranean to the Caribbean, we offer unparalleled yacht
          charter experiences.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          endIcon={<ArrowForwardIcon />}
        >
          Explore Destinations
        </Button>
      </Box>
    </Box>
  );
}

// Home Page Component
export default function Home() {
  useEffect(() => {
    // This would be where you'd initialize any animation libraries or global effects
    // For example, initializing GSAP ScrollTrigger or other third-party animation libraries
  }, []);

  return (
    <>
      <HeroSection />
      <YachtListings />
      {/* <ExperienceSection /> */}
      <BookingFormSection />
      <TestimonialsSection />
      <MapSection />
    </>
  );
}
