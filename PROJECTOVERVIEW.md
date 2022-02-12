# Project Overview

## Project Links

- [https://github.com/SeaJerry/musicapplication]()
- [add your deployment link]()

## Project Description


This application focuses on providing users with information about breweries in close proximity or a new location. Users will input there city or zip code and will be provided a list of breweries with there location and the breweries website. 

## API

- [https://www.openbrewerydb.org/documentation/01-listbreweries]()


        const [data, setData] = useState([]);
        const [zipCode, setZipCode] = useState("");
        const [zipCodeInput, setZipCodeInput] = useState("");

        useEffect(() => {
          // declare the async data fetching function
          const fetchData = async () => {
            const url = (`https://api.openbrewerydb.org/breweries?by_postal=${zipCode}`)
            // get the data from the api
            const response = await fetch(url);
            // convert the data to Json
            const data = await response.json();
            // set state with the result
            console.log(data)
            setData(data);
          };
          // call the function

          fetchData()
            // make sure to catch any error
            .catch(console.error);
        }, [zipCode]);


```

```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.
Mobile & Tablet Wireframe
- [https://lucid.app/lucidchart/f7b1d8c5-3520-4875-8595-bac4c5248df6/edit?invitationId=inv_968d448d-156d-4f4d-9c73-d57c81fc94d1]()
- []()
- [add link to your react architecture]()


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE
- Find and use external api 
- Render data on page 
- Allow user to interact with the page

#### PostMVP EXAMPLE

- Add localStorage or firebase for storage

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header include the nav | 
| Footer | This will render the header include the nav | 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```