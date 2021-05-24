//Dhiraj.Kumar@stackroute.in
import React, { useState } from 'react'
import authentication from '../../Service/authentication';
import { Link, useHistory } from 'react-router-dom';
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

export default function Login(props) {
    let history = useHistory();
    //states of components
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const classes = useStyles();
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

    //function for checking user login credentials
    async function Login() {
        if (email.trim() !== "" && password.trim() !== "") {
            const res = await fetch('http://localhost:9000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            const data = await res.json();
            //logging in service
            localStorage.setItem('token', data.access_token);
            await authentication.Login();
            if (authentication.isLoggedInfun() && data.status === 200) {
                localStorage.setItem('email', email);
                localStorage.setItem('username', `${data.userData.firstname} ${data.userData.lastname}`);
                props.loginHandler(true);
                setcolor("success");
                setOpen(true);
                seterror("Login Successfully");
                history.push('/');
            } else if (data.status === 401) {
                setcolor("error");
                setOpen(true);
                seterror(data.message);
            }
        }
        else {
            setcolor("error");
            setOpen(true);
            seterror("Please Enter Email and Password");
        }
    }

    return (
        //login section implementation 
        <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: "800px" }}>
            <div className="card main">
                <div className="row" style={{ minHeight: "600px" }}>
                    <div className=" col-lg-5 col-md-5 col-sm-12 col-xs-12">
                        <img className="imgLogin" src="images/signup1.jpg" alt="Paris" width="100%" height="100%" />
                    </div>
                    <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 d-flex  justify-content-center align-items-center">
                        <form className="text-center">
                            <h2 data-testid="loginheader" id="loginhead" className="my-4 header ">Login</h2>
                            <div className="form-group d-flex mb-2">
                                <i className="fas fa-envelope fa-lg px-2 mt-2"></i>
                                <input id="loginuser" className="text-center rounded-pill px-4 p-1 bg-input" value={email} type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <i className="fas fa-lock fa-lg px-2 mt-2"></i>
                                <input className="text-center rounded-pill px-4 p-1 bg-input" id="loginpassword" value={password} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="text-center ">
                                <button className="butt" type="button" id="btnLogin" onClick={Login} >Login</button>
                            </div>
                            <p data-testid="loginpara" className="text-center my-4 mb-5">Don't have an account?<Link to="/register" className="px-1">Register</Link> </p>
                        </form>
                    </div>
                </div>
            </div>
            <Snackbar className={classes.root} open={open} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={color}>
                    {error}
                </Alert>
            </Snackbar>
        </div>
    )
}





