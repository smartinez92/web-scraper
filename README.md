# Mongoose-Webscraper

#Technologies used:

HTML, CSS, JQuery, Nodejs, MongoDB, Mongoose, Cheerio

#Comments

This app uses Cheerio (NPM package) to scrape the TOP STORIES off of the CNN homepage. It then stores the data using Mongoose as a model into the MongoDB (cloud Mongo at MongoLab (ML)). The app also allows the user to add comments (annotation) to articles and then saves the notes in MongoDB. To refresh the articles, click the CNN logo. Only articles with notes will be kept persistent and other articles may be replaced by any new TOP STORIES on the CNN site if there are changes on that site under TOP STORIES.