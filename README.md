# Dynamic Twitter Project

For this project, the task was to build a Dynamic Twitter App

# Mock JSON
Instead of using a real API (due to rate limiting issues, credentials, and APIs changing over time...) I used a mock JSON response to build a Twitter timeline.

What is mock JSON? Simply put, it's a JavaScript object that's the same shape (key and value properties) as a real response would be.

In the Index.js there are two user objects, which are mock JSON -- both of these user objects contain an array of tweets
 
# "Rendering" JSON to HTML

So with the mock JSON which represents a user's timeline that we want to render as HTML.

The goal is to create these HTML Elements from mock JSON dynamically, using JavaScript. 
