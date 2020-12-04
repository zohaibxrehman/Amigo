export const getPosts = (postList) => {
    // the URL for the request
    const url = "http://localhost:5000/posts";
    // Since this is a GET request, simply call fetch on the URL
    fetch(url)
        .then(res => {
            console.log(res)
            if (res.status === 200) {
                // return a promise that resolves with the JSON body
                // console.log(res.json())
                console.log(">>")
                return res.json();
            } else {
                alert("Could not get posts");
            }
        })
        .then(json => {
            // the resolved promise with the JSON body
            postList.setState({ posts: json });
            console.log(json)
            
        })
        .catch(error => {
            console.log(error);
        });
};


export const getPostsById = (id) => {
    // the URL for the request
    const url = "http://localhost:5000/posts/" + id;
    // Since this is a GET request, simply call fetch on the URL
    fetch(url)
        .then(res => {
            // console.log(res)
            console.log(">>")
            if (res.status === 200) {
                
                // return a promise that resolves with the JSON body
                console.log(">>" + res.json())
                
                return res.json();
            } else {
                alert("Could not get posts");
            }
        })
        .then(json => {
            // the resolved promise with the JSON body
            // postList.setState({ postData: json });
            console.log(json)
            
        })
        .catch(error => {
            console.log(error);
        });
};

// A function to send a POST request with a new student
export const addPost = (makePost) => {
    // the URL for the request
    const url = "http://localhost:5000/posts/new";

    // The data we are going to send in our request
    const post = makePost.state

    // Create our request constructor with all the parameters we need
    const request = new Request(url, {
        credentials: "include",
        method: "post",
        mode: 'no-cors',
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
    const url = "http://localhost:5000/posts/" + id + "/report";

    // Create our request constructor with all the parameters we need
    const request = new Request(url, {
        credentials: "include",
        method: "post",
        mode: 'no-cors',
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
    const url = "http://localhost:5000/posts/" + id;


    // Create our request constructor with all the parameters we need
    const request = new Request(url, {
        credentials: "include",
        method: "delete",
        mode: 'no-cors',
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
