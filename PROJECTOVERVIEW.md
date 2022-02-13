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
- [https://lucid.app/lucidchart/1acfd24a-5e2d-4802-afd9-56706a7ad77b/edit?invitationId=inv_e14f5467-1d63-4a9f-ac3a-21ef64ea93af]()
- [https://lucid.app/lucidchart/c0a1de5a-da69-488d-bc5b-a46562e01a6b/edit?invitationId=inv_4892c080-3367-4322-9263-e2cf96554eb1]()



#### MVP 
- Find and use external api 
- Render data on page 
- Allow user to interact with the page
- Place data into cards with brewery information
- create a navigation with a menu
- create a carousel to display images of brewery 
- create a responsive grid layout
- create components to get to each individual brewery once clicked on
  

#### PostMVP 

- Add styling


## Components

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header include the nav and form | 
| Main | This will render the image carousel along with the list of breweries |
| Individual Card| This will be the card or "page" that includes the specific breweries information |
| Cards | This will render the users information request of the specific breweries |
| Footer | This will render the header include the nav | 




| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| |  |
| Working with API | H | 4hrs|  |  |
| Displaying Data | 4-5hrs| | |
| NavBar functionality | 3hrs | | |
| Image Carousel| 2-3hrs | | |
| Responsive Layout | 4hrs | | |
| Designing and Building Components | 10 hrs | | |

| Total | H | 32 hrs|  | |

## Additional Libraries
 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```