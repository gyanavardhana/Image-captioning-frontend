import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import Springboard from '../../assets/Spring.png'; // Adjust path for image

const CardContainer = styled(Card)({
  maxWidth: 345,
  marginBottom: '1rem',
  backgroundColor: '#f0f0f0', // Light background color
  color: '#333', // Text color
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)', // Soft shadow
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out', // Smooth hover effect
  '&:hover': {
    transform: 'scale(1.03)', // Scale up on hover for a slight zoom effect
    boxShadow: '0 8px 16px rgba(0,0,0,0.2)', // Increase shadow on hover
  },
});

const CardHeaderTitle = styled(Typography)({
  fontSize: '1.5rem',
  fontWeight: 'bold',
});

const CardHeaderSubheader = styled(Typography)({
  fontSize: '1rem',
});

export default function UsecaseCard({ title, subheader, image, description, navigateTo }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(navigateTo);
  };

  return (
    <CardContainer>
      <CardHeader
        avatar={
          <Avatar alt="Springboard" src={Springboard} sx={{ width: 60, height: 60 }} />
        }
        title={<CardHeaderTitle>{title}</CardHeaderTitle>}
        subheader={<CardHeaderSubheader>{subheader}</CardHeaderSubheader>}
      />
      <div onClick={handleClick} style={{ cursor: 'pointer' }}>
        <CardMedia
          component="img"
          height="250" // Ensure all images are of equal height
          image={image}
          alt="Usecase Image"
        />
      </div>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </CardContainer>
  );
}
