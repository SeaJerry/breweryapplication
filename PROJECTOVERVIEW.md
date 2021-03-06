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
- create a personal favorite list
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
| Users List| This will hold the users personal "favorite" lists |
| Cards | This will render the users information request of the specific breweries |
| Footer | This will render the header include the nav | 




| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 2.5hr | 2.5hrs  |
| Working with API | H | 4hrs| 4-5hr | 5hrs  |
| Displaying Data | H| 4-5hrs| 6hrs | 6hrs  |
| Users favorite list | H |4-5hrs | 4hrs | 4hrs |
| NavBar functionality | H |3hrs |2hrs | 2hrs  |
| Responsive Layout | H | 4hrs | 3-4hrs | 5-6hrs |
| Designing and Building Components | H |10 hrs | 5hrs | 7hrs |

| Total | H | 37 hrs|  | |

## Additional Libraries
 - React
 - React Icons
 - Boot Strap 
 - Font Awesome
 - Google Fonts

## Code Snippet

      const handleUsersData = (brewery) => {
        if (usersListData === []) {
          setUsersListData(brewery);
        } else {
          setUsersListData([...usersListData, brewery]);
        }
      };
      console.log(usersListData);

This Code block allow me to add the users choice of brewery to their personal list. This took some trial and error and i thought i had a bug but was later informed it was just were my console log was. Good lesson in understanding not to place a console.log where there is a state change. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```