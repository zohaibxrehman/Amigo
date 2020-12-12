export const checkSession = (admin) => {
    const url = "/api/users/check-session";

    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            if (json && json.currentUser) {
                admin.setState({ userName: json.currentUser, userId: json.currentUserId});
            }
        })
        .catch(error => {
            console.log(error);
        });
};

export const getPosts = (postList) => {
    // the URL for the request
    const url = "/api/posts";

    // Since this is a GET request, simply call fetch on the URL
    fetch(url)
        .then(res => {
            if (res.status === 200) {
                // return a promise that resolves with the JSON body
                // console.log(res.json())
                return res.json();
            } else {
                console.log('unable to get posts')
            }
        })
        .then(json => {
            // the resolved promise with the JSON body
            for (let i = 0; i < json.length; i++){
                const user_url = "/api/users/" + json[i]["creator"]

                fetch(user_url).then(resq => {
                    if (resq.status === 200){
                        return resq.json();
                    }
                    else{
                        console.log('unable to get users')
                    }
                }).then(json_user => {
                    json[i]["creator_name"] = json_user.firstName + " " + json_user.lastName;
                    json[i]["creator_image_url"] = json_user.image_url;
                    postList.setState({ posts: json });
                    
                }).catch(error =>{
                    console.log(error)
                })
            }
            postList.setState({ posts: json });
        })
        .catch(error => {
            console.log(error);
        });
};

export const getUsers= (userList) => {
    const url = "/api/users";

    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            if (json) {
                userList.setState({ users: json });
            }
        })
        .catch(error => {
            console.log(error);
        });
};


export const deleteUser = (id, updateInfo) => {
    // the URL for the request
    const url = "/api/users/" + id;


    // Create our request constructor with all the parameters we need
    const request = new Request(url, {
        method: "delete",
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
                // If student was added successfully, tell the user.
                console.log('deleted sucessfully')
                updateInfo();
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