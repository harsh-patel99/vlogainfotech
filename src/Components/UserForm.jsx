import React from "react";
import { Box, TextField, Typography } from "@mui/material";

const UserForm = ({ name, email, phone, handleChange }) => {
  return (
    <Box sx={{ marginBottom: "30px" }}>
      <Typography variant="h6" component="h2">
        Create New User
      </Typography>
      <Box sx={{ mt: 2 }}>
        <TextField
          label="Name"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => handleChange(e.target.value, "name")}
          required
        />
        {!name && (
          <Typography color="red" sx={{ textAlign: "left" }}>
            Name is required!
          </Typography>
        )}
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => handleChange(e.target.value, "email")}
          required
        />
        {!email && (
          <Typography color="red" sx={{ textAlign: "left" }}>
            Email is required!
          </Typography>
        )}
        <TextField
          label="Phone"
          type="number"
          fullWidth
          margin="normal"
          value={phone}
          onChange={(e) => handleChange(e.target.value, "phone")}
          required
        />
        {!phone && (
          <Typography color="red" sx={{ textAlign: "left" }}>
            Phone is required!
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default UserForm;
