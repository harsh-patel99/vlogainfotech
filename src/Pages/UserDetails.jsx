import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

const UserDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Box>
      <Typography variant="h4">User Details</Typography>
      <Box
        sx={{ marginTop: "30px", display: "flex", justifyContent: "center" }}
      >
        <Card sx={{ width: "80%" }}>
          <CardActionArea sx={{ backgroundColor: "#42a5f5", color: "white" }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {location.state.userData.name}
              </Typography>
              <Typography variant="body2" color="white">
                Email: {location.state.userData.email}
              </Typography>
              <Typography variant="body2" color="white">
                Phone: {location.state.userData.phone}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              size="small"
              variant="contained"
              onClick={() => navigate(-1)}
            >
              Back
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
};

export default UserDetails;
