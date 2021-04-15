import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width:'100%',
    height:'90vh',
    marginTop:'0.5rem',
    borderRadius:'20px'
  },
  button: {
    display: 'flex',
    marginLeft:'5rem',
    marginTop:'2rem'
    
  },
  content: {
    flex: '1 0 auto',
    marginTop:'8rem'
  },
  cover: {
    width: '50%',
    marginLeft:'0rem'
  
  },
  controls: {
    display: 'flex',
    alignItems: 'center',

    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function MediaControlCard() {
  const classes = useStyles();
  
  return (
    <Card className={classes.root}>
     
        <CardContent className={classes.content}>
          <Typography component="h3" variant="h3" noWrap color="primary">
            Code Karona 3.O
          </Typography>
          <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        Register Now
      </Button>
      
        </CardContent>
       
          
      
       
    
      <CardMedia
        className={classes.cover}
        image="https://i.postimg.cc/GpbgkJd0/brgs222.png"
       
      />
    </Card>
  );
}
