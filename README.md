# Searchle React Frontend

Basically a Wordle x Where's Waldo fusion

##About

Originally part of the coursework for The Odin Project to make a Where's Waldo website to learn Firebase and practice React, I thought making it a Wordle clone would be more interesting and fun.

##Frontend

This frontend is built with React (bootstrapped with Create-React-App) and React-Router, with some react-bootstrap and other css for styling. I have some experience using React but this is the first real example of trying to make a simple website. Originally I used React-router to have multiple pages, but it's now a one-pager with a error screen if you try to access another page.

##Backend

The frontend pulls the image for the day (currently updating every 30 minutes for testing/beta) from a Node.js api backend, which is connected to a MongoDB

##PROJECT TODO

Check image zoom

Host frontend and backend

Possibly rewrite selecting new image/character logic to create a random list of every possibility with assigned days, and automatically do it again when the list is done

Cookies Integration with User Stats

Add lots more images and characters
