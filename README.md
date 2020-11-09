# team39 - Amigo

## Purpose:
Canada is the land of immigrants.  The newcomers don’t have contacts when they arrive and as a result, have difficulty finding roommates to stay at shared rentals at affordable pricing. This issue is faced by professionals and students alike.  We aim to simplify the process of finding roommates.

## Usage & Current Functionality:
The **homepage** is located at localhost:3000. Here, you can click the posting button on the navbar to view the posting page and login button to login in as an admin or ordinary user. 

If you login as admin by using username: admin, password: admin, you will be taken to the admin dashboard, where you will be able to see recent activity - like new posts created, reported users and so on. You will be able to edit and delete the post as an admin once the backend is set up. Also other functionality like user management and post management will be handled once the backend is set up. (**Admin Dashboard Template**: http://localhost:3000/admindashboard)

If you login as an ordinary user by using username: user, password: user, you will be taken to the user dashboard, where you will be able to see recent notifications received from users who are interested in being your roommates. You will be able to view and edit your own post once the backend is set up, under User Activity. (**User Dashboard Template**: http://localhost:3000/userdashboard)

As a user you will be able to create a post by clicking on Make a Post on the postings page. (**Make a Post Template**: http://localhost:3000/makepost)

We plan on having filtering functionality based on preferences, price and location once we have our backend setup. You can switch between the Map View and Post View by clicking on the map/list button on the Postings Page. (**Postings Template**: http://localhost:3000/finder)

Once you click on a post, you will be taken to another page with post details and ability to contact the user who made the post. (**Post Template**: http://localhost:3000/post)

Note: You can view profile by clicking on View Profile link for any user. (**Profile Page Template**: http://localhost:3000/user)

We are also collecting information from forms (such as make a post, filter, login, contact) and storing it in a react state. When server functionality will be added, this same react state object will be sent to the server and no extra work will be needed.

## Current and Upcoming Features:
Users can view housing/roommate posts and filter based on preferences.
LoggedIn users will be able to create a new post and view their dashboard.
Users will be able to view other user’s profiles who have created a post or contacted them. 
A user can report posts to the admin which they deem inappropriate.
Integration with Maps. This will help the user to filter out roommates according to their locations of interest.
Users can see their own posts in dashboard

### Install dependencies and run

Clone the project onto your local machine.

Install all the npm packages. Go into the project folder and install all npm packages:

```bash
npm install
```

To run the application:

```bash
npm start
```

The application runs on **localhost:3000** on your local machine.

## External Libraries Used:
Bootstrap 4 (Very limited use. Only used for fonts and login page.)
	
