TuneIn Web Project
===


###Your mission
Hey Front End developer. Welcome. Your mission, should you chose to accept it, is to complete as many of the objectives below as you can within 2 hours.

> **Hey this is important:**  
> We hope you can spend about two hours on this project. If you can finish faster -- great! If not,  limit yourself and don't spend much longer than 2 hours MAX.

**_Objective 1_**: Follow the [steps](#running-the-site) below to get the project running locally. You should see a pretty basic webpage rendered.

**_Objective 2_**: Walk through the code starting at server.js. 

Some things to think through as you browse:

-	How does routing work?
-	Where does the initial data that loads on the root page come from?
-	What happens when I navigate to http://localhost:8080

**_Objective 3_**: Convert this site to a single page app (SPA). 

- Use any framework or technology you wish. Feel free to keep it lightweight.
- Modify the index view file to return basic html that will bootstrap your single page app. 
- Pull data into your SPA clientside using the station API
- Follow the TODOs in view.js

**_Objective 4_**: Make it pretty.
Spend some time styling the root page and the station page. Don't go overboard. Add some care to style it as you see fit.

**_Objective 5_**: Extra credit. Enhance functionality. Now the MVP is working and looks pretty decent. Extend it if you have extra time. Don't stress it if you didn't get to this step. We don't mind :)

- Follow the TODOs in stationApi.js. Add functionality to filter by tags.
- Update the home screen to include a tag filter feature. If a user wants to see sports talk in san francisco, they can filter by tags to only see stations that match.
- Add functionality to add new stations
- Add functionality to edit stations
- Add functionality to delete stations
- Choose your own adventure -- add what you think is missing.

Feel free to use any frameworks or npm packages. Update the flow/architecture as you see fit.

Be ready to talk through your decisions.

###Running the site
####Install Node
(if you haven't already)   
		
	https://nodejs.org/en/   
or you can install with Brew

    brew install node

####Clone the repo locally
	
	git clone https://github.com/andosw/web-project.git

#### Install dependencies with NPM
From within the project directory 

	npm install

#### Start the site

	nodemon server.js
> **Note:** Feel free to just launch the server with node. No need to use nodemon.

#### Does it work?
Open a browser and test the site http://localhost:8080
