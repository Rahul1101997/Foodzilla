import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import authentication from '../../Service/authentication';
import { Link } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import '../../App.css';

//display snackbar alert
function Alert(prop) {
  return <MuiAlert elevation={6} variant="filled" {...prop} />;
}

//styles of elements
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    minHeight: '700px',
    border: '1px solid #000',
    margin: 'auto',
    background: 'linear-gradient(90deg, #232526 0%,#414345  100%);',
    fontFamily: 'poppins'
  },
  media: {
    height: "0",
    width: "100%",
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: 'rgb(22,185,178)',
    fontWeight: 600
  },

  rating: {
    display: 'flex',
    flexDirection: 'column',
    color: 'white',
    '& > * + *': {
      marginTop: theme.spacing(1)
    },
  },
}));

export default function HomeCard(prop) {
  const classes = useStyles();
  let history = useHistory();
  //states of components
  const [data, setData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [error, seterror] = useState("");
  const [color, setcolor] = useState("");

  //snackbar event handler 
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  //useeffect fetching data of favrouites from db.json 
  useEffect(() => {
    fetch('http://localhost:3001/favrouites')
      .then(res => res.json())
      .then(data => {
        setData(data);
      });
  });

  //finding favrouites data based on specific user account
  let favres = data.find(f => {
    return (f.Rid === prop.id && f.Email === localStorage.getItem('email'));
  });

  //adding restaurant into favrouites section 
  function addFav(id) {
    //check restaurant is already exists in favrouites section
    let favstatus = data.find(f => {
      return (f.Rid === id && f.Email === localStorage.getItem('email'));
    });

    if (authentication.isLoggedIn) {
      if (favstatus === undefined) {
        fetch('http://localhost:3001/favrouites', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
          body: JSON.stringify({
            Rid: prop.id,
            ResName: prop.resName,
            ResImage: prop.image,
            ResCuisines: prop.cuisines,
            ResRating: prop.rating,
            ResAverage: prop.average,
            ResAddress: prop.address,
            Email: localStorage.getItem('email')
          })
        })
          .then(
            setcolor("success"),
            setOpen(true),
            seterror("Added Successfully")
          )
      }
      else {
        setcolor("error");
        setOpen(true);
        seterror("Resturant already added to favrouite");
      }
    }
    else {
      history.push('/login')
    }
  }
  return (
    <div className=" col-lg-4 col-md-6 col-sm-12 col-xs-12  cardHome">
      <Card className={classes.root}>
        <CardHeader
          style={{ minHeight: '100px' }}
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}></Avatar>
          }
          title={
            <h3 className="text-white mt-2">{prop.resName}</h3>
          }
        />
        <CardMedia
          className={classes.media}
          image={prop.image}
        />
        <CardContent className="bg-card " style={{ minHeight: '300px' }}>

          <Typography variant="body2" component="div">
            <h5 data-testid="cuisine" className="text-white">Cuisines: {prop.cuisines}</h5>
          </Typography>

          <Typography variant="body2" color="textSecondary" component="div">
            <h5 data-testid="average" className="text-white">Average cost : Rs. {prop.average}</h5>
          </Typography>

          <Typography variant="body2" color="textSecondary" component="div">
            <h5 data-testid="address" className="text-white">Address:   {prop.address} </h5>
          </Typography>
          <Typography variant="body2" component="div" color="textSecondary" className={classes.rating}>
            <Rating name="half-rating-read" defaultValue={prop.rating} precision={0.5} size="large" readOnly />

          </Typography>
        </CardContent>

        <CardActions disableSpacing className="bg-card  position-relative bottom-0 d-flex border-1  justify-content-center align-items-center" style={{ height: '50px' }}>
          {
            (favres !== undefined) ?
              <div className="d-inline-block text-center pl-4 w-50 text-center">
                <abbr title="Add to favourites" style={{ cursor: "pointer" }}> <i className="fas fa-heart text-danger fa-2x" onClick={addFav.bind(this, prop.id)} style={{ color: "white" }}></i></abbr>
              </div> : <div className="d-inline-block text-center pl-4 w-50 text-center">
                <abbr title="Add to favourites" style={{ cursor: "pointer" }}> <i className="fas fa-heart text-white fa-2x" onClick={addFav.bind(this, prop.id)} style={{ color: "white" }}></i></abbr>
              </div>
          }
          <div className="d-inline-block text-center pr-4 w-50 " >
            <abbr title="More Details" style={{ cursor: "pointer" }}> <Link to={`/resdetail/${prop.id}`}><i className="fas fa-angle-double-right text-light fa-2x pr-2"></i></Link></abbr>
          </div>
        </CardActions>
      </Card>

      <Snackbar open={open} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} autoHideDuration={800} onClose={handleClose}>
        <Alert onClose={handleClose} severity={color}>
          {error}
        </Alert>
      </Snackbar>
    </div>
  )
}
