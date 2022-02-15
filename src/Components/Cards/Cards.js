import './Cards.css'

const Cards = ({apiCallData, handleUsersData}) => {




    const breweryList = apiCallData.map((brewery, index) => {
        return (
          <div className="cards-container" key={index}>
            <h1 className="brewery-title">{brewery.name}</h1>

            <p>
              {brewery.street}, {brewery.city}, {brewery.state}{" "}
              {brewery.postal_code}
            </p>
            <p>{brewery.phone}</p>
            <button className="cards-btn" onClick={() => handleUsersData(brewery)} >Add to List</button>
          </div>
        );
      });
      return <div className="brewery-list">{breweryList}</div>;
    };

export default Cards;
