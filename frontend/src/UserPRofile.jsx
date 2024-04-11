import React from 'react';
// import { makeStyles } from '@mui/styles';
import { Avatar, Typography, Button, Grid, Paper } from '@mui/material';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     padding: theme.spacing(3),
//   },
//   avatar: {
//     width: theme.spacing(15),
//     height: theme.spacing(15),
//   },
//   bio: {
//     marginTop: theme.spacing(2),
//   },
// }));

const ProfilePage = () => {
//   const classes = useStyles();

  // Static user data
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    avatar: "https://via.placeholder.com/150", // Placeholder image URL
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo faucibus nulla, sit amet commodo mi tincidunt non. Nullam ultrices pharetra turpis, nec sollicitudin lorem lacinia vel.",
  };

  return (
    <Paper >
      <Grid container spacing={3}>
        <Grid item xs={12} md={4} align="center">
          <Avatar alt={user.name} src={user.avatar} />
          <Typography variant="h5" gutterBottom>{user.name}</Typography>
          <Typography variant="subtitle1" color="textSecondary">{user.email}</Typography>
          <Button variant="contained" color="primary" fullWidth>Edit Profile</Button>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="h6" gutterBottom>About Me</Typography>
          <Typography variant="body1" >{user.bio}</Typography>
          {/* Additional profile details */}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProfilePage;
