import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {NavLink} from "react-router-dom";




const Home = () => {

    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
            •
        </Box>
    );

    const card = (
        <React.Fragment>
            <CardContent sx={{ fontSize: 14 }}>

                <Typography variant="h5" component="div">
                    Todo List
                </Typography>

                <Typography variant="body2" sx={{ mb: 5.5 }} >

                    <br />
                    {'This program can be used to plan your week or month. Once completed, you can delete the plan. Click here to get started!!'}
                </Typography>
            </CardContent>
            <CardActions>
               <NavLink to='/todo'> <Button size="small">Learn More</Button></NavLink>
            </CardActions>
        </React.Fragment>
    );
    return (
        <div>

            <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined">{card}</Card>
            </Box>

        </div>
    );
};

export default Home;