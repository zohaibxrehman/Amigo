// Functions to help with user actions.


export const checkSession = (app) => {
    const url = "/api/users/check-session";

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
    const request = new Request("/api/users/login", {
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
    const url = "/api/users/logout"
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

    const request = new Request("/api/users/new", {
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
            window.location.href = '/login'
        })
        .catch(error => {
            console.log(error);
        })
}



export const getUserByIDForCard = (userCardComp, userid) => {
    const url = `/api/users/${userid}`;

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

    const request = new Request(`/api/users/${userid}/report`, {
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


export const getUserByIDForEdit = (editProfileComp, userid) => {
    const url = `/api/users/${userid}`;

    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            if (json) {
                editProfileComp.setState({
                    firstname: json.firstName,
                    lastname: json.lastName,
                    username: json.username,
                    email: json.email
                    }  
               );
            }
        })
        .catch(error => {
            console.log(error);
        });
};

// A function to send a PUT request with edit
export const editProfileInfo = (editProfileComp, photo) => {
    // the URL for the request
    const url = `/api/users/${editProfileComp.state.userid}`;
    const { firstname, lastname, email, username } = editProfileComp.state
    // The data we are going to send in our request
  
    const data = {
        email: email,
        username: username,
        firstName: firstname,
        lastName: lastname
    }


    const request = new Request(url, {
        method: "put",
        body: JSON.stringify(data),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    // Send the request with fetch()
    fetch(request)
        .then(function (res) {
            // Handle response we get from the API.
            // Usually check the error codes to see what happened.
            if (res.status === 200) {
                console.log('edit user sucessfully')
                if (photo==null) {
                    window.location.href = `/user/${editProfileComp.state.userid}`
                }
            } else {

                console.log('error loading')
            }
        })
        .catch(error => {
            console.log(error);
        });
};


export const editUserPhoto = (e,userid) => {
    // the URL for the request
    const url = `/api/users/${userid}/img`;

    // The data we are going to send in our request
    
    const data = new FormData()
    data.append('image', e.target.image.files[0])


    const request = new Request(url, {
        method: "put",
        body: data
    });

    // Send the request with fetch()
    fetch(request)
        .then(function (res) {
            // Handle response we get from the API.
            // Usually check the error codes to see what happened.
            if (res.status === 200) {
                // If student was added successfully, tell the user.
                console.log('edit user photo sucessfully')
                window.location.href = `/user/${userid}`
            } else {
                // If server couldn't add the student, tell the user.
                // Here we are adding a generic message, but you could be more specific in your app.
                console.log('error loading')
            }
        })
        .catch(error => {
            console.log(error);
        });
};


export const editUserPassword = (editPassComp) => {
    // the URL for the request
    const url = `/api/users/${editPassComp.state.userid}/password`;

    const request = new Request(url, {
        method: "put",
        body: JSON.stringify(editPassComp.state),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    // Send the request with fetch()
    fetch(request)
        .then(function (res) {
            // Handle response we get from the API.
            // Usually check the error codes to see what happened.
            if (res.status === 200) {
                console.log('changed password successfully')
                window.location.href = `/user/${editPassComp.state.userid}`
            } else {

                console.log('error loading')
            }
        })
        .catch(error => {
            console.log(error);
        });
};
