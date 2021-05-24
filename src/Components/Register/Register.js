import React, { useState } from 'react';
import { Link,useHistory } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import '../../App.css';

//display snackbar alert
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

//styles of elements
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function Register() {
    //states of components
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [age, setage] = useState('');
    const [city, setcity] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [error, seterror] = useState("");
    const [color, setcolor] = useState("");

    let history=useHistory();
    //snackbar event handler 
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    //function for  user registeration 
    function registerUser() {
        if (firstname.trim() !== "" && email.trim() !== "" && password.trim() !== "") {
            if (firstname.length < 3) {
                seterror("Firstname length is too short");
                setOpen(true);
                setcolor("error");

            }
            else if (password.length < 6) {
                seterror("Password length sholud be greater then 6 character");
                setOpen(true);
                setcolor("error");
            }
            else if (email.match(mailformat) === null) {
                seterror("invalid email format");
                setOpen(true);
                setcolor("error");
            }
            else {
                //posting user data to server
                fetch(`http://localhost:9000/auth/register`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        firstname: firstname,
                        lastname: lastname,
                        city: city,
                        age: age,
                        email: email,
                        password: password
                    })
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.status === 200) {
                            setcolor("success");
                            setOpen(true);
                            seterror(data.message);
                            history.push("/login");
                        } else if (data.status === 409) {
                            setcolor("error");
                            setOpen(true);
                            seterror(data.message);
                        }
                    })
            }
        }
        else {
            seterror("Please filled firstname,email and password");
            setcolor("error");
            setOpen(true);
        }
    }

    return (
        //register section implementation 
        <div className="container d-flex align-items-center justify-content-center align-center my-auto " style={{ minHeight: "800px" }}>
            <div className="card main my-5" >
                <div className="row" style={{ minHeight: "600px" }}>
                    <div className=" col-lg-5 col-md-5 col-sm-12 col-xs-12">
                        <img src="images/signup1.jpg" alt="Paris" className=" imgLogin" width="100%" height="100%" />
                    </div>
                    <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 d-flex  justify-content-center align-items-center">
                        <div className="d-flex w-100  justify-content-center align-self-center">
                            <form className="text-center">
                                <h2 data-testid="registerheading" id="registerhead" className="my-4 header">Create New Account</h2>
                                
                                <div className="form-group  mb-2">
                                    <i className="fas fa-user fa-lg fa-lg px-2 mt-2"></i>
                                   <input className="text-center rounded-pill px-lg-5 px-4 p-1 bg-input text-center" type="text" id="firstname" placeholder="* Firstname" onChange={(e) => setfirstname(e.target.value)} required />
                                </div>
                                <div className="form-group mb-2">
                                    <i className="fas fa-user fa-lg fa-lg px-2 mt-2"></i>
                                    <input className="text-center rounded-pill px-lg-5 px-4 p-1 bg-input text-center" type="text" id="lastname" placeholder="Lastname" onChange={(e) => setlastname(e.target.value)} required />
                                </div>
                                <div className="form-group mb-2">
                                    <i className="fas fa-birthday-cake fa-lg fa-lg px-2 mt-2"></i>
                                    <input className="text-center rounded-pill p-1 px-lg-5 px-4 bg-input text-center" type="text" id="age" placeholder="Age" onChange={(e) => setage(e.target.value)} />
                                </div>
                                <div className="form-group mb-2">
                                    <i className="fas fa-city  px-2 mt-2"></i>
                                    <input className="text-center rounded-pill p-1 px-lg-5 px-4 bg-input text-center" type="text" id="city" placeholder="City" onChange={(e) => setcity(e.target.value)} />
                                </div>
                                <div className="form-group mb-2">
                                    <i className="fas fa-envelope fa-lg px-2 mt-2"></i>
                                    <input className="text-center rounded-pill px-lg-5 px-4 p-1 bg-input text-center" type="text" id="registeremail" placeholder="* Email" onChange={(e) => setemail(e.target.value)} required />
                                </div>
                                <div className="form-group mb-2">
                                    <i className="fas fa-lock fa-lg fa-lg px-2 mt-2"></i>
                                    <input className="text-center rounded-pill px-lg-5 px-4 p-1 bg-input text-center" type="password" id="registerpassword" placeholder="* Password" onChange={(e) => setpassword(e.target.value)} required />
                                </div>
                                <button className="butt text-center" type="button" id="btnRegister" onClick={registerUser}>CREATE ACCOUNT</button>
                                <p data-testid="registerpara" className="text-center my-4 mb-5">Already have an account?<Link to="/login" id="refertologin" className="px-1">Login</Link> </p>
                            </form>
                        </div>
                    </div>
                </div>
                <Snackbar className={classes.root} open={open} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} autoHideDuration={5000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity={color}>
                        {error}
                    </Alert>
                </Snackbar>
            </div>
        </div>
    )
}
