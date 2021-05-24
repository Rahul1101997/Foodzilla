import React from 'react';
import { useHistory } from "react-router-dom";
import authentication from '../../Service/authentication';

export default function Logout(props) {
    let history = useHistory();
    //logging out service
    authentication.Logout();
    props.loginHandler(false);
    history.push('/login');
    return (
        <div>    
        </div>
    )
}
