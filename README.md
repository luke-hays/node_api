# SparkPost Coding Excercise

Thank you for taking the time to look over my code. I believe I've included all files necessary to run this app. Please let me know if you have any questions or issues.

## Running
The package.json file contains several scripts for running - standard npm start or npm run dev.

### In browser
You should be able to use `http://localhost:3001/sparkpost` to make GET requests easily. You may also query by names (case shouldnt matter). Please see the data/persons.json for the initial names and ages. All payloads will be stored in this file as well.

### Test Framework
I used Jest to create and run test cases while developing the controller. A quick run can be done using "npm run test" and you can find the test cases within the tests directory.

### Dev environment
If you use Visual Studio Code, I have a directory with requests you may run and modify to quickly test if you can hit the endpoints for the server. These will require the [REST Client extension](https://marketplace.visualstudio.com/items?itemName=humao.rest-client). I like using these to quickly sending requests without having to switch to a tool like Postman while in running in dev. It works nicely while running nodemon

You could also make the requests on a preferred tool.

## Other notes
I have a linter set up, config file is .eslintrc.js in root so you can see the configuration I ran with. Jest also has a config file in the root directory if you would like to see that.

utils contains a couple of things that I think are helpful including a logger and middleware file for handling logging and errors. They are barebones because there isn't much to handle here. person_helper.js is the file responsible for actually modifying the data stored while the server is running.

An error occurs when the data/persons.json file is empty. This can be fixed by placing an empty array in the file. The file should normally reconstruct itself on each run, and this shouldn't occur at all. But it's something to be aware of.
