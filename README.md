# team39 - Amigo

## Purpose:
Canada is the land of immigrants.  The newcomers don’t have contacts when they arrive and as a result, have difficulty finding roommates to stay at shared rentals at affordable pricing. This issue is faced by professionals and students alike.  We aim to simplify the process of finding roommates.

## Usage & Current Functionality:

### Homepage - https://dry-spire-46880.herokuapp.com/
The home page displays information and acts as the landing page for our project. On the homepage, you can click the posting button on the navbar to view the posting page, login button to login in as an admin or an user, dashboard button for viewing your dashboard once logged in. 

<img src='./screenshots/homepage.png' width=70%>

### Login and Register View - https://dry-spire-46880.herokuapp.com/login
The login page is easily accessible from the navbar. It has functionality for logging in and registering a new account. Upon entering the correct credentials, the user is redirected to user dashboard and the admin is redirected to the admin dashboard. 

<img src='./screenshots/login.png' width=45%> <img src='./screenshots/register.png' width=45%>

### Admin Dashboard View - https://dry-spire-46880.herokuapp.com/admindashboard
<ins>username</ins>: admin

<ins>password</ins>: admin

Once logged in as admin, you will be able to view the admin dashboard. When you click the dashboard button on the Navbar you will be taken to the admin dashboard page. This page allows you to see all users under User Management and all posts under Post Management. You can switch between both User Mangement and Post Management by clicking on their respective button. Reported users and reported posts will appear with a large red flag. You will be able to edit and delete any post and user as an admin. 

<img src='./screenshots/admindashboard1.png' width=45%> <img src='./screenshots/admindashboard2.png' width=45%>

### User Dashboard View - https://dry-spire-46880.herokuapp.com/userdashboard

Users:

<ins>username</ins>: user
<ins>password</ins>: user

<ins>username</ins>: user1
<ins>password</ins>: user1

<ins>username</ins>: user2
<ins>password</ins>: user2

<ins>username</ins>: user3
<ins>password</ins>: user3

Once logged in as a user, you will be able to view the user dashboard. When you click the dashboard button on the Navbar you will be taken to the user dashboard page. Here, you will be able to see all the posts made by the user ( that is you ). You will be able to view, edit and delete your own post under User Activity. Clicking on View Profile next to the Profile image takes you to your Profile Page. You will be able to edit your profile information as well as password under Settings.

<img src='./screenshots/userdashboard.png' width=70%>

### Postings View - https://dry-spire-46880.herokuapp.com/finder
Here, you will be able to view all the postings made on Amigo. You will be able to filter based on preferences, location and price. You can switch between the **Map View** and **Postings View** by clicking on the map/list button on the Postings Page. Once logged in as a user, you will be able to make a post.


<img src='./screenshots/finder1.png' width=45%>   <img src='./screenshots/finder2.png' width=45%>

### Make a New Post View - https://dry-spire-46880.herokuapp.com/makepost
Once logged in as a user you will be able to create a post by clicking on Make a Post on the postings page. 

<img src='./screenshots/makepost.png' width=70%>

### Post View - https://dry-spire-46880.herokuapp.com/post/<:postid>
Once you click on a post in postings page, you will be taken to another page with post details and ability to contact the user who made the post by filling the form, which will prefill email with information based on your form input with the post creator's email as the sender. 

<img src='./screenshots/postpage.png' width=70%>

### Edit Post View - https://dry-spire-46880.herokuapp.com/editpost/<:userid>
As an admin or as the post creator user, you will be able to edit the post in this form.

<img src='./screenshots/editpost.png' width=70%>

### Profile Page View - https://dry-spire-46880.herokuapp.com/user/<:userid>
You can view profile by clicking on View Profile link for a user. 

<img src='./screenshots/userprofile.png' width=70%>


### Edit Profile View - https://dry-spire-46880.herokuapp.com/edituser/<:userid>
As an admin or as the user, you will be able to edit your respective profile and password in this form.

<img src='./screenshots/editprofile.png' width=70%>


#### Note:
Authentication is added to secure views and editing/deleting  posts and users. 


## API Documentation

If testing on deployed website then:
```
Base URL = https://dry-spire-46880.herokuapp.com/
```
Otherwise, if testing on localhost then:
```
Base URL = http://localhost:5000
```
The base URL will precede all the routes listed below.

### Routes

```
POST /api/users/login

Expected Type: raw JSON

Expected Data: {
    "username": "user"
    "password": "user"
}

Returns:

1) If admin not in database:
code: 404, message: Admin does not exist
2) If user not in database:
code: 404, message: User does not exist
3) If MongoDB error:
code: 500, message: Internal Server Error
4) Otherwise:
code: 400, message: Bad Request. Could not login user
```

```
POST /api/users/new

Expected Type: form-data

Expected Data:

| key       | type | value            |
|-----------|------|------------------|
| image     | File | profilePhoto.jpg |
| username  | Text | user             |
| email     | Text | user@mail.com    |
| firstName | Text | Zohaib           |
| lastName  | Text | Rehman           |
| password  | Text | user             |

```
```
POST /api/create-admin

This route exists to initialise an admin with 
username of admin and password of admin.

```
```
POST /api/posts/new

Expected Type: form-data

Expected Data:

| key         | type | value                                         |
|-------------|------|-----------------------------------------------|
| image       | File | housePhoto.jpg                                |
| title       | Text | Seeking two roommates                         |
| location    | Text | Waterloo                                      |
| price       | Text | $330-$600                                     |
| description | Text | Let's look for a nice place close to campus.  |
|             |      | I found one place. Look at the photo.         |


```
```
POST /api/posts/:id/report



```
```
POST /api/users/:id/report

Expected Type: raw JSON


```
```
PUT /api/users/:id

Expected Type: raw JSON

Expected Data: {
    "username": "user",
    "email": "user@mail.com",
    "firstName": "Zohaib",
    "lastName": "Rehman"
}


```
```
PUT /api/users/:id/password

Expected Type: raw JSON

Expected Data: {
    "password": "dino123"
}


```
```
PUT /api/users/:id/img

Expected Type: form-data

Expected Data: 




```
```
PUT /api/posts/:id

Expected Type: raw JSON


```
```
PUT /api/posts/:id/img

Expected Type: raw JSON


```
```
PUT /api/users/:id

Expected Type: raw JSON


```
```
PUT /api/posts/:id

Expected Type: raw JSON


```
```
GET /api/users/logout

Expected Type: raw JSON


```
```
GET /api/posts

Expected Type: raw JSON


```
```
GET /api/users/:id

Expected Type: raw JSON


```
```
GET /api/users

Expected Type: raw JSON


```
```
GET /api/posts/:id

Expected Type: raw JSON


```
```
GET /api/users/check-session

Expected Type: raw JSON


```



### Install dependencies and run

Clone the project onto your local machine.
```bash
git clone https://github.com/csc309-fall-2020/team39.git
```

Install all the npm packages. Go into the project folder and install all npm packages:

```bash
cd team39/amigo/
npm install
```

To run the application:

```bash
npm start
```

The application runs on **localhost:3000** on your local machine.

## External Libraries Used:
React

Leafleft (Maps)

Bootstrap 4 (Very limited use. Only used for fonts and login page.)

**The pictures are taken from prexel which are free for commercial use and no attribution is required. The icons are taken from Icons8.**
