## Project title
BREWERY SCOPE | This application focuses on providing users with information about breweries in close proximity or a new location. Users will input there city or zip code and will be provided a list of breweries with there location and the breweries website. 

## Motivation

The motivation behind the creation of this project is to add accessibility to information about breweries that users are unaware of.

## Build status
Build status of continus integration i.e. travis, appveyor etc. Ex. - 

[![Build Status](https://travis-ci.org/akashnimare/foco.svg?branch=master)](https://travis-ci.org/akashnimare/foco)
[![Windows Build Status](https://ci.appveyor.com/api/projects/status/github/akashnimare/foco?branch=master&svg=true)](https://ci.appveyor.com/project/akashnimare/foco/branch/master)

## Code style
If you're using any code style like xo, standard etc. That will help others while contributing to your project. Ex. -

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
 
## Screenshots
Include logo/demo screenshot etc.

## Tech/framework used
Ex. -

<b>Built with</b>
- [Electron](https://electron.atom.io)

## Features
What makes your project stand out?

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
Provide step by step series of examples and explanations about how to get a development env running.

## API Reference

- [https://www.openbrewerydb.org/documentation/01-listbreweries]()

## Tests
Describe and show how to run the tests with code examples.

## How to use?
If people like your project they’ll want to learn how they can use it. To do so include step by step guide to use your project.

## Contribute

Let people know how they can contribute into your project. A [contributing guideline](https://github.com/zulip/zulip-electron/blob/master/CONTRIBUTING.md) will be a big plus.

## Credits
Give proper credits. This could be a link to any repo which inspired you to build this project, any blogposts or links to people who contrbuted in this project. 

#### Anything else that seems useful

## License
A short snippet describing the license (MIT, Apache etc)

MIT © [Jerry Sea]()