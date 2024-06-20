import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Box, Button, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

import { UserTable } from "../Components/UserTable";
import { sampleData } from "../sampleData";
import UserModal from "../Components/UserModal";

const Home = () => {
  const [userData, setUserData] = useState(() => {
    const storedUsers = localStorage.getItem('users');
    return storedUsers ? JSON.parse(storedUsers) : sampleData;
  });
  const [filteredData, setFilteredData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState("");
  
  const navigate = useNavigate();

  const onDelete = (userId) => {
    setUserData(userData.filter((user) => user.id !== userId));
  };

  const onDetails = (user) => {
    navigate("/details", { state: { userData: user } });
  };

  const onSearch = (value) => {
    setSearch(value);
    const filterUser = userData.filter((user) => user.email.includes(value));
    setFilteredData(filterUser);
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(userData));
  }, [userData]);

  return (
    <Box m={5}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <TextField
          size="small"
          id="outlined-basic"
          label="Search by Email"
          variant="outlined"
          value={search}
          onChange={(e) => onSearch(e.target.value)}
        />
        <Button variant="contained" onClick={() => setIsModalOpen(true)} endIcon={<AddIcon />}>
          Create User
        </Button>
      </Box>
      <UserTable
        rowData={filteredData.length ? filteredData : userData}
        onDelete={onDelete}
        onDetails={onDetails}
      />
      {isModalOpen && (
        <UserModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          setUserData={setUserData}
          userData={userData}
        />
      )}
    </Box>
  );
};

export default Home;
