// Functions to help with user actions.


export const checkSession = (app) => {
    const url = "/users/check-session";

    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            if (json && json.currentUser) {
                app.setState({ currentUser: json.currentUser,
                    isLoggedIn: true });

            }
        })
        .catch(error => {
            console.log(error);
        });
};




export const login = (loginComp, loginUser) => {
    // Create our request constructor with all the parameters we need
    // console.log(JSON.stringify(loginComp.state))
    const request = new Request("/users/login", {
        method: "post",
        body: JSON.stringify(loginComp.state),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    // Send the request with fetch()
    fetch(request)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            if (json.currentUser !== undefined) {
                loginUser(json.currentUser);
                window.location.href = '/finder'

            }
        })
        .catch(error => {
            console.log(error);
        });
};


export const logout = (logoutUser) => {
    const url = "/users/logout"
    fetch(url)
        .then(res => {
            if (res.status === 200){
                logoutUser()
            }
        })
        .catch(error => {
            console.log(error);
        })

}



export const registerUser = (registerComp, e) => {
    const data = new FormData()
    data.append('email', registerComp.state.email)
    data.append('firstName', registerComp.state.firstname)
    data.append('lastName', registerComp.state.lastname)
    data.append('password', registerComp.state.password)
    data.append('username', registerComp.state.username)
    data.append('image', e.target.image.files[0])
    console.log(e.target.image.files[0])
    const request = new Request("/users/new", {
        method: "post",
        body: data,

    });

    fetch(request)
        .then(res => {
            if (res.status === 200){
            // register successful
            // decide what to do after user clicks register
                console.log("User registered")
            }
        })
        .catch(error => {
            console.log(error);
        })
}



export const getUserByIDForCard = (userCardComp, userid) => {
    const url = `/users/${userid}`;

    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            if (json) {
                const newData = {
                    userName: json.firstName+ ' '+json.lastName,
                    location: json.location,
                    aboutMe: json.aboutMe,
                    userPhoto: json.image_url,
                    contact: {
                        email: json.email,
                        phone: json.phone
                    }
                }
                userCardComp.setState({ userData: newData });
            }
        })
        .catch(error => {
            console.log(error);
        });
};

export const reportUserByID = (userid) => {

    const request = new Request(`/users/${userid}/report`, {
        method: "post",
    });
    fetch(request)
        .then(res => {
            if (res.status === 200){
            // register successful
            // decide what to do after user clicks register
                console.log("User reported!")
            }
        })
        .catch(error => {
            console.log(error);
        })
}