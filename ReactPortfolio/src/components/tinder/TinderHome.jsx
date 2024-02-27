import { useEffect, useState } from "react";
import { TinderUsers } from '../../assets/data.js';
import TinderCard from 'react-tinder-card'
import './tinderHome.css';

export default function TinderHome() {

  const [usersList, setUsersList] = useState([TinderUsers]);
  const [usersToList, setUsersToList] = useState([]);
  const [gender, setGender] = useState('male');

  console.log(TinderUsers)

  useEffect(() =>
    setUsersToList(TinderUsers)
    , [])

  return (
    <div className="cardContainer">
      <p className="mt-4 fw-bold">NO MORE ELEMENTS TO SHOW</p>
      {usersToList.map((user) => {
        return (
          <TinderCard
            key={user.id}
            className="swipe"
            preventSwipe={['up', 'down']}
          >
            <div
              className="tinderUserCard d-flex align-items-end"
              style={{ backgroundImage: `url(${user.pictureURL}` }}>
              <div>
                <p><b>Nombre: </b> {user.nombres}</p>
                <p><b> Gender:</b> {user.gender}</p>
              </div>
            </div>
          </TinderCard>
        )
      })}
    </div>
  )
}
