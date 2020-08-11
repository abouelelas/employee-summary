# Unit 10 OOP Homework: Template Engine - Employee Summary

One of the most important aspects of programming is writing code that is readable, reliable, and maintainable. Oftentimes, *how* we design our code is just as important as the code itself. In this homework assignment, your challenge is to build a Node CLI that takes in information about employees and generates an HTML webpage that displays summaries for each person. Since testing is a key piece in making code maintainable, you will also be ensuring that all unit tests pass.


## Description

I built a software engineering team generator command line application. The application will prompt the user for information about the team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers and interns. This application also passed all unit tests. When the user has completed building the team, the application will create an HTML file that displays a nicely formatted team roster based on the information provided by the user. We can frame this challenge as follows:

```
As a manager
I want to generate a webpage that displays my team's basic info
so that I have quick access to emails and GitHub profiles
```

How do you deliver this? Here are some guidelines:

* I usedthe  [Inquirer npm package](https://github.com/SBoudrias/Inquirer.js/) to prompt the user for their email, id, and specific information based on their role with the company. For instance, an intern may provide their school, whereas an engineer may provide their GitHub username.

* The application will run as a Node CLI to gather information about each employee.

* Below is an example of what the application looks like. 

![Employee Summary 1](/assets/employee ss.png)
![Employee Summary 2](/assets/Employee Summary SS2.png)
![Employee Summary 3](/assets/Employee Summary SS test run.png)


The project will prompt the user to build an engineering team. An engineering
team consists of a manager, and any number of engineers and interns.

### Roster output

The project must generate a `team.html` page in the `output` directory, that displays a nicely formatted team roster. 
  * Name

  * Role

  * ID

  * Role-specific property (School, link to GitHub profile, or office number)

Videos of the application's functionality:
(Employee Summary Video)[https://drive.google.com/file/d/1ZGV4P8pJGxTI9R6E2tyrxCpojU9ScrYI/view]
(Test run)[https://drive.google.com/file/d/1gONsGJkS6ndf-yYOdu8asTX6G879bvsy/view]

Links to GitHub:
(Employee Summary)[]
(Employee Summary)[]




- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
