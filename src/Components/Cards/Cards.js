import './Cards.css'

const Cards = ({apiCallData}) => {

    const breweryList = apiCallData.map((brewery, index) => {
        return (
          <div className="cards" key={index}>
            <h1>{brewery.name}</h1>
            <p>
              {brewery.street}, {brewery.city}, {brewery.state}{" "}
              {brewery.postal_code}
            </p>
            <p>{brewery.phone}</p>
            <button>Add to List</button>
          </div>
        );
      });
      return <div className="brewery-list">{breweryList}</div>;
    };

export default Cards;
