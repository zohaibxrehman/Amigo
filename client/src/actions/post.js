export const getUserByIDForPosts = (userComp) => {

    fetch("/users/check-session")
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            if (json && json.currentUser) {
                const url = "/users/" + json.currentUserId;

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
                                },
                                posts: []
                            }
                            userComp.setState({ dashboardInfo: newData });
                            for (let i = 0; i < json["posts"].length; i++){
                                const post_url = "/posts/" + json.posts[i];
                                // Since this is a GET request, simply call fetch on the URL
                                fetch(post_url)
                                    .then(res => {
                                        if (res.status === 200) {
                                            // return a promise that resolves with the JSON body
                                            return res.json();
                                        } else {
                                            alert("Could not get posts");
                                        }
                                    })
                                    .then(json => {
                                        // the resolved promise with the JSON body
                                      newData["posts"].push(json)  
                                      userComp.setState({ dashboardInfo: newData });
                                    })
                                    .catch(error => {
                                        console.log(error);
                                    });

                            }
                            
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        })
        .catch(error => {
            console.log(error);
        });
};


export const getPosts = (postList) => {
    // the URL for the request
    const url = "/posts";

    // Since this is a GET request, simply call fetch on the URL
    fetch(url)
        .then(res => {
            console.log(res)
            if (res.status === 200) {
                // return a promise that resolves with the JSON body
                // console.log(res.json())
                return res.json();
            } else {
                alert("Could not get posts");
            }
        })
        .then(json => {
            // the resolved promise with the JSON body
            for (let i = 0; i < json.length; i++){
                const user_url = "/users/" + json[i]["creator"]

                fetch(user_url).then(resq => {
                    if (resq.status === 200){
                        return resq.json();
                    }
                    else{
                        alert("Could not get User");
                    }
                }).then(json_user => {
                    json[i]["creator"] = json_user.firstName + " " + json_user.lastName;
                    json[i]["creator_image_url"] = json_user.image_url;
                    postList.setState({ posts: json });
                    
                }).catch(error =>{
                    console.log(error)
                })
            }
            console.log(json)
            
            
        })
        .catch(error => {
            console.log(error);
        });
};


export const getPostsById = (post, id) => {
    // the URL for the request
    const url = "/posts/" + id;
    // Since this is a GET request, simply call fetch on the URL
    fetch(url)
        .then(res => {
            if (res.status === 200) {
                // return a promise that resolves with the JSON body
                return res.json();
            } else {
                alert("Could not get posts");
            }
        })
        .then(json => {
            // the resolved promise with the JSON body
            const user_url = "/users/" + json["creator"]

            fetch(user_url).then(resq => {
                if (resq.status === 200){
                    return resq.json();
                }
                else{
                    alert("Could not get User");
                }
            }).then(json_user => {
                json["creator"] = json_user.firstName + " " + json_user.lastName;
                json["creator_image_url"] = json_user.image_url;
                post.setState({ postData: json });  
            }).catch(error =>{
                console.log(error)
            })
            console.log(json)
            
        })
        .catch(error => {
            console.log(error);
        });
};

// A function to send a POST request with a new student
export const addPost = (makePost) => {
    // the URL for the request
    const url = "/posts/new";

    // The data we are going to send in our request
    const post = makePost.state

    // Create our request constructor with all the parameters we need
    const request = new Request(url, {
        method: "post",
        body: JSON.stringify(post),
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
                console.log('loaded post sucessfully')
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


export const reportPost = (id) => {
    // the URL for the request
    const url = "/posts/" + id + "/report";

    // Create our request constructor with all the parameters we need
    const request = new Request(url, {
        method: "post",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    // Send the request with fetch()
    fetch(request)
        .then(res => {
            // Handle response we get from the API.
            // Usually check the error codes to see what happened.
            if (res.status === 200) {
                // If student was added successfully, tell the user.
                console.log('reported post sucessfully')
            } else {
                // If server couldn't add the student, tell the user.
                // Here we are adding a generic message, but you could be more specific in your app.
                console.log('error reporting post')
            }
        })
        .catch(error => {
            console.log(error);
        });
};


// A function to send a POST request with a new student
export const deletePost = (id) => {
    // the URL for the request
    const url = "/posts/" + id;


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
                console.log('loaded post sucessfully')
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
