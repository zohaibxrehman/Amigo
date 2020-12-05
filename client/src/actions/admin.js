export const checkSession = (admin) => {
    const url = "/users/check-session";

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
                    json[i]["creator_name"] = json_user.firstName + " " + json_user.lastName;
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

export const getUsers= (userList) => {
    const url = "/users";

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