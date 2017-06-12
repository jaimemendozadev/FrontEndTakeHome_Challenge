TuneIn's Front End SPA Project
===

# Your mission

Hey Front End developer. Welcome. Your mission, should you choose to accept it, is to carve out 2 hours and create a single page app (SPA) using the mini TuneIn station API defined below.

> **Hey this is important!**
> We hope you can spend about two hours on this project. If you can finish faster -- great! If not, limit yourself and don't spend much longer than 2 hours MAX.

# Your Tasks

* Be creative with this. We want to see a functional site that uses the api. When in doubt, make an executive decision. *Functionality is more important than the look and feel*. If you finish early, feel free to polish it up.
* The home page of your app shows a list of available stations to play. You decide how you want to order the stations and how they are displayed.
* A user should be able to click on a station in the list.  When a station is clicked, the page shows details about the station and begins playing the stream.
* Be creative with tags. Can you help a user decide what to listen to based on tags?
* Once finished, send your solution files to jpena@tunein.com

# Some tips

* We've provided a lot of code for you to get up and running fast!  We encourage you to use it if you think it will help, but feel free to roll your own solution if you like.
* Use any languages, frameworks, or libraries you like. Pick something you are comfortable with.
* Assume you only need to support modern evergreen browsers.
* Assume streams can be played with the html <audio> tag. Don't worry about styling this (unless you want to)

# Mini TuneIn API

All API requests are made to:

    http://frontend-tunein.herokuapp.com/api/{version}

## GET Stations
List all available stations

    GET /api/v1/stations

## GET Station
 Get station by id

    GET /api/v1/station/:id