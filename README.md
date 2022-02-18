## Project title
BREWERY SCOPE | This application focuses on providing users with information about breweries in close proximity or a new location. Users will input there city or zip code and will be provided a list of breweries with there location and the breweries website. 

## Motivation

The motivation behind the creation of this project is to add accessibility to information about breweries that users are unaware of.

## Code style

React and Javascript
 
## Screenshots
[https://ibb.co/j5StfnC]

## Tech/framework used
<b>Built with</b>
- [Visual Studio Code & React]

## Features
By allowing users to choose a zip code versus a city they can narrow down there search to their nearest location. 
## Code Example
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

## Installation
 React 
- npx create-react-app filename 
- npm i react-router
- npm i react-router dom
- npm i --save @fortawesome/fontawesome-svg-core
- npm start


## API Reference

- [https://www.openbrewerydb.org/documentation/01-listbreweries]()


## How to use?

On the home page of the application there's a form were the user can input a zip code, which will return a list of breweries within that zip code. Once the data is displayed on the screen the user has the option to add individual or multiple breweries to there personal list for later viewing. 

## Contribute

Adding a ranking system and review form for users personal lists to remember their experience at the specific brewery, which can be broadcasted publicly or just remain private for the user. 

## Credits

- React Docs
- Ethan Averbukh, Helped with logic for developing users lists. 


## License


 © [Jerry Sea]()