import "./UsersList.css";

const UsersList = ({ usersListData }) => {
  console.log(usersListData);
  let breweryListCart = usersListData.map((beer, id) => {
    return (
      <div className="users-list" key={id}>
        <h1 className="users-list-title">{beer.name}</h1>
        <p>
          {beer.street}, {beer.city}, {beer.state} {beer.postal_code}
        </p>
        <p>{beer.phone}</p>
        <p>{beer.website_url}</p>
      </div>
    );
  });

  return <div className="users-list-container">{breweryListCart}</div>;
};

export default UsersList;
