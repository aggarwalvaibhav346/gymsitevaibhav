import React from 'react';
import {Box,Stack,Typography,Button} from'@mui/material';
import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box sx={{
        mt:{lg: '212px',xs:'70px'},
        ml:{sm:'50px'}
    }}position="relative" p="20px" >
        <Typography color="#FF2625" fontWeight="600" fontsize="26px">
            Fitness club
        </Typography>
        <Typography fontWeight={700} sx={{fontsize:{lg: '44px',xs: '40px'}}}>
            Sweat,Smile<br/> and Repeat
        </Typography>
        <Typography fontsize="22px" LineHeight="35px">
            check out the most effective exercises
        </Typography>
        <Button variant="contained" color="error" href="#exercises">Explore Exercises</Button>
        <Typography
            fontWeight={600}
            color='#ff2625'
            sx={{
                opacity:0.1,
                dispaly:{lg:'block',xs:'none'}
            }}
            fontSize="200px"
        >
            Exercise
        </Typography>
        <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  )
}

export default HeroBanner