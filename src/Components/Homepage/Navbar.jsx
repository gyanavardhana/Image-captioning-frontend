import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Infosys from "../../assets/Infosys.jpg";
import Springboard from "../../assets/Spring.png";
import { useNavigate } from 'react-router-dom';

const Icons = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };
    return (
        <Stack direction="row" spacing={2} className="justify-start">
            <Avatar alt="Infosys" onClick={handleClick} style={{ cursor: 'pointer' }} src={Infosys} sx={{ width: 56, height: 56 }} />
            <Avatar alt="Springboard" src={Springboard} sx={{ width: 60, height: 60 }} />
        </Stack>
    );
}

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center shadow-md">
      <div className="mr-6">
        <Icons />
      </div>
      <div className="text-center flex-grow">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-sans">
          Image Captioning Project
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
