import React from 'react';
import {Box, Stack, Typography} from '@mui/material';

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#C4E7FF" sx={{ opacity: 0.5 }}>
        <Stack gap="40px" alignItems='center' px='40px' pt='24px'>
          <Typography variant = 'h5' pb='40px' mt='20px'>
            Made by Sean Xu
          </Typography>
        </Stack>
    </Box>
  )
}

export default Footer