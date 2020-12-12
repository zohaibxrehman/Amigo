export const getUserByIDForPosts = (userComp) => {

    fetch("/api/users/check-session")
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            if (json && json.currentUser) {
                const url = "/api/users/" + json.currentUserId;

                fetch(url)
                    .then(res => {
                        if (res.status === 200) {
                            return res.json();
                        }
                    })
                    .then(json => {
                        if (json) {
                            const newData = {
                                _id: json._id,
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
                                const post_url = "/api/posts/" + json.posts[i];
                                // Since this is a GET request, simply call fetch on the URL
                                fetch(post_url)
                                    .then(res => {
                                        if (res.status === 200) {
                                            // return a promise that resolves with the JSON body
                                            return res.json();
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


export const getPostsById = (post, id) => {
    // the URL for the request
    const url = "/api/posts/" + id;
    // Since this is a GET request, simply call fetch on the URL
    fetch(url)
        .then(res => {
            if (res.status === 200) {
                // return a promise that resolves with the JSON body
                return res.json();
            } else {
                console.log('unable to get posts')
            }
        })
        .then(json => {
            // the resolved promise with the JSON body
            const user_url = "/api/users/" + json["creator"]

            fetch(user_url).then(resq => {
                if (resq.status === 200){
                    return resq.json();
                }
                else{
                    console.log('unable to get users')
                }
            }).then(json_user => {
                json["creator_email"] = json_user.email;
                json["creator_name"] = json_user.firstName + " " + json_user.lastName;
                json["creator_image_url"] = json_user.image_url;
                post.setState({ postData: json });  
            }).catch(error =>{
                console.log(error)
            })
        })
        .catch(error => {
            console.log(error);
        });
};

// A function to send a POST request with a new student
export const addPost = (makePost,e) => {
    // the URL for the request
    const url = "/api/posts/new";
    const { inputTitle, inputPrice, inputLocation, inputDescription, preferences } = makePost.state
    // The data we are going to send in our request
    // const post = makePost.state
    const data = new FormData()
    data.append('title', inputTitle)
    data.append('location', inputLocation)
    data.append('price', inputPrice)
    data.append('description', inputDescription)
    preferences.forEach((item) => data.append("preferences[]", item))
    data.append('image', e.target.image.files[0])


    const request = new Request(url, {
        method: "post",
        body: data,

    });

    // Send the request with fetch()
    fetch(request)
        .then(function (res) {
            // Handle response we get from the API.
            // Usually check the error codes to see what happened.
            if (res.status === 200) {
                // If student was added successfully, tell the user.
                console.log('loaded post sucessfully')
                window.location.href = '/finder'
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
    const url = "/api/posts/" + id + "/report";

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
export const deletePost = (id, updateInfo) => {
    // the URL for the request
    const url = "/api/posts/" + id;


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



// A function to send a PUT request with edit
export const editPostInfo = (editPost, photo) => {
    // the URL for the request
    const url = `/api/posts/${editPost.state.postid}`;
    const { inputTitle, inputPrice, inputLocation, inputDescription, preferences } = editPost.state

    const data = { 
        title: inputTitle , 
        location: inputLocation, 
        price: inputPrice, 
        preferences: preferences, 
        description: inputDescription
    }

    const request = new Request(url, {
        method: 'put',
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
                // If student was added successfully, tell the user.
                console.log('edit post sucessfully')
                if (photo == null) {
                    window.location.href = `/post/${editPost.state.postid}`
                }
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

export const editPostPhoto = (e,postid) => {
    // the URL for the request
    const url = `/api/posts/${postid}/img`;

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
                console.log('edit post sucessfully')
                window.location.href = `/post/${postid}`
            } else {
                console.log('error loading')
            }
        })
        .catch(error => {
            console.log(error);
        });
};

export const getPostByIDForEdit = (editPost, postid) => {
    const url = `/api/posts/${postid}`;


    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            if (json) {
                editPost.setState(
                    {
                    inputTitle: json.title,
                    inputPrice: json.price, 
                    inputLocation: json.location, inputDescription: json.description, preferences: json.preferences
                    }
                )
            }
        })
        .catch(error => {
            console.log(error);
        });
};



