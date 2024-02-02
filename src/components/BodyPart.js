import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';
import Back from '../assets/icons/back.png';
import Cardio from '../assets/icons/cardio.png';
import Chest from '../assets/icons/chest.png';
import Lower_Arms from '../assets/icons/lower arms.webp';
import Lower_Legs from '../assets/icons/lower legs.png';
import Neck from '../assets/icons/neck.png';
import Shoulders from '../assets/icons/shoulders.webp';
import Upper_Arms from '../assets/icons/upper arms.png';
import Upper_Legs from '../assets/icons/upper legs.webp';
import Waist from '../assets/icons/waist.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  // Define a mapping of body parts to icons
  const bodyPartIcons = {
    "all": Icon,
    "back": Back,
    "cardio": Cardio,
    "chest": Chest,
    "lower arms": Lower_Arms,
    "lower legs": Lower_Legs,
    "neck": Neck,
    "shoulders": Shoulders,
    "upper arms": Upper_Arms,
    "upper legs": Upper_Legs,
    "waist": Waist
    // ... add other body parts and their corresponding icons
  };

return (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={bodyPart === item ? { borderTop: '4px solid #001AFF', background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : { background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <img src={bodyPartIcons[item]} alt="dumbbell" style={{ width: '40px', height: '40px' }} /> 
    <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {item}</Typography>
  </Stack>
);
};
export default BodyPart;

