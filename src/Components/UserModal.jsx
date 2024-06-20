import React, { useState } from "react";

import { Backdrop, Box, Button, Fade, Modal } from "@mui/material";

import UserForm from "./UserForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  textAlign: "center",
  p: 4,
};

const UserModal = ({ isOpen, onClose, setUserData, userData }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const onCreateUser = () => {
    setUserData([
      ...userData,
      { id: userData.length + 1, name: name, email: email, phone: phone },
    ]);
    onClose();
  };

  const handleChange = (value, field) => {
    if (field === "name") {
      setName(value);
    } else if (field === "email") {
      setEmail(value);
    } else {
      setPhone(value);
    }
  };
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isOpen}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={isOpen}>
        <Box sx={style}>
          <UserForm
            name={name}
            email={email}
            phone={phone}
            handleChange={handleChange}
            handleSubmit={onCreateUser}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button variant="outlined" onClick={onCreateUser}>
              Create
            </Button>
            <Button onClick={onClose} variant="outlined" color="error">
              Close
            </Button>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
};

export default UserModal;
