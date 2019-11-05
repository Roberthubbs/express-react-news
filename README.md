# Newsy App
* [Link to deployment](https://newsy-app.herokuapp.com/)
* Newsy-App is a Node/Express/React/postgreSQL app that allows users to aggregate news based on their political leaning or interests.  It does this through selecting sources/topics.  They are able to choose an affiliation which automatically redirects them to their chosen afflilations sources, or they can choose to not identify which will bring them to an all page.  Regardless of their choice, users are allowed to view all sources or other sources.  Some other functionality is the ability to comment and like post, as well as remove those likes.  They can follow users whose comments they like and view this is in a feed. 

![Home Screen](https://user-images.githubusercontent.com/46801755/68242109-beb95280-ffc4-11e9-9f2e-12a93d3a1ced.png)

# Challenges 
### There were a variety of challenges in creating this app, listed below. 
* Decing what to add to the database
* Saving Articles from a remote API to the database and then presenting those to the user
* Using seperate remote API's on the frontend as the backend and getting around cors, and mixed-content issues
* Doing all of this accurately, safely and performantly


# Features
* User Auth
* Comments
* Likes 
* Follows 
* Feeds 
* Weather Widget
* Twitter Widget 
* Categories

# Technologies Used 
* React
* Redux
* Axios
* font-awesome
* b-crypt
* cookie-parse 
* pg-hstore
* body-parser
* cookie-parser
* sequelize
* dotenv
* node-fetch
* Express
