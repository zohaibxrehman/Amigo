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
    console.log(JSON.stringify(loginComp.state))
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
            }
        })
        .catch(error => {
            console.log(error);
        });
};