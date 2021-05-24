const authentication = {
    isLoggedIn: false,

    isLoggedInfun() {
        //check that token is present in localstorage or not
        if (localStorage.getItem('token') !== null ) {
            return (this.isLoggedIn = true)
        }
        else {
            return (this.isLoggedIn = false)
        }
    },
    async Login() {
        //ckeck for authentication for login
        await fetch('http://localhost:9000/auth/isAuthenticated ', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => res.json())
            .then(data => {
                this.isLoggedIn = data.isAuthenticated;
            });
    },

    async Logout() {
        //ckeck for authentication for logout
        await fetch('http://localhost:9000/auth/isAuthenticated', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => res.json())
            .then(data=>{
                localStorage.removeItem('token');
                localStorage.removeItem('email');
                localStorage.removeItem('username');
                this.isLoggedIn =  data.isAuthenticated
            });
    }
}
export default authentication;