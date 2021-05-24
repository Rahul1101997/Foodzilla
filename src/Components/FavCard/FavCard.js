import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';

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
    height: 0,
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

//function to delete favrouite cards 
export default function FavCard(props) {
  const classes = useStyles();

  function onDeleteHandler(id) {
    props.deleteData(id);
  }

  return (
    //Favrouite Card Design
    <div className=" col-lg-4 col-md-6 col-sm-12 col-xs-12  cardHome">
      <Card className={classes.root}>
        <CardHeader
          style={{ minHeight: '100px' }}
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}></Avatar>
          }
          title={
            <h3 className="text-white mt-2">{props.resname}</h3>
          }
        />
        <CardMedia
          className={classes.media}

          image={props.image}
        />
        <CardContent className="bg-card " style={{ minHeight: '250px' }}>
          <Typography variant="body2" component="div">
            <h5 data-testid="cuisine" className="text-white">Cuisines: {props.cuisines}</h5>
          </Typography>

          <Typography variant="body2" color="textSecondary" component="div">
            <h5 data-testid="average" className="text-white">Average cost : Rs. {props.average}</h5>
          </Typography>

          <Typography variant="body2" color="textSecondary" component="div">
            <h5 data-testid="address" className="text-white">Address:   {props.address} </h5>
          </Typography>

          <Typography variant="body2" component="div" color="textSecondary" className={classes.rating}>
            <Rating name="half-rating-read" defaultValue={props.rating} precision={0.5} size="large" readOnly />

          </Typography>
        </CardContent>

        <CardActions disableSpacing className="bg-card" style={{ minHeight: '50px' }}>
          <div className="w-100">
            <div className="float-start mt-4 pt-1 w-25 text-center">
              <abbr title="Delete from favourites" style={{ cursor: "pointer" }}> <i className="fas fa-trash-alt fa-2x" onClick={onDeleteHandler.bind(this, props.ids)} style={{ color: "white" }}></i></abbr>
            </div>
            <div className="float-end mt-4 pt-2 w-25 " >
              <abbr title="More Details" style={{ cursor: "pointer" }}> <Link to={`/resdetail/${props.id}`}><i className="fas fa-angle-double-right text-light fa-2x pr-2"></i></Link></abbr>
            </div>
          </div>
        </CardActions>
      </Card>
    </div>
  )
}
