I will add some information about what I realized in this project.
Firstly, I want to mention that I used tailwind css framework which is like a "shorthand" for basic css. Basically, I used short version of basic css.
I configured this css framework adding tailwind.config.js and craco.config.js and I modified the .css file of index.css

I wanted to design the application as following:
  Main app:
            -header
            -body of app
            -information about selected file

In order to work with api's provided by git I used axios to get the data.
I also tried to have the application a bit responsive and I added some conditional rendering logic.

Obviously the design could be better but I wanted to do a mix among functionality and design.

Short structure: - services
                 - components
                 - main -> App.js


I tried to create different components as following : List of Gists, Item ( Gist item having some information inside) , Header
![gists](https://user-images.githubusercontent.com/57367539/138570846-07dbf35e-72c1-49f1-bcaf-c93ddb2a68da.png)
