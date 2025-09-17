import { use } from "react";
import Friend from "./Friend";

export default function Friends({ friendsPromise }) {
  const myFriends = use(friendsPromise);
  return (
    <div className="card">
      <h3>Friends: {myFriends.length} </h3>
      {myFriends.map((friend) => (
        <Friend key={friend.id} friend={friend}></Friend>
      ))}
    </div>
  );
}
