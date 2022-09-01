External packages installed 
    -> react logo
    -> react-router-dom
    -> MUI - for Avatar

                                SHORT EXPLINATION

Every component in connected with React Router Dom to avoid the refreshing of the pages 

Sidebar Code -> ./components/SideBar.jsx (contains the data of the Sidebar)
& ./components/SidebarMenu.jsx (contains the animation and functionality of the sidebar)

App.js is the main page where all the Route are connected

Home componet is the only componet of the project
Rest of the logos are for the better UI

Go deeper : Every news has postId which is unique , useParams() of reacr-router-dom has been used here to go into the inner page with verifying the postId

<Link> tag is used instead of <a> tag because <a> tag brings a refresh which <Link> avoids

React Router Dom has been used to make an one page website
Main Component -> Dashboard 

Includes the useParams() function to open the inner page of that particular news

All the data has been taken provided API
API Link - https://api.facthunt.in/fostergem/v1/post/list/public