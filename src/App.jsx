import "./App.css";
import Counter from "./Counter.jsx";
import Batsman from "./Batsman.jsx";
import Users from "./Users.jsx";
import { Suspense } from "react";
import Friends from "./Friends.jsx";
import Posts from "./Posts.jsx";

// const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (res) => res.json()
// );

// const fetchFriends = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   return res.json();
// };

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

function App() {
  const allPosts = fetchPosts();
  // const friendsPromise = fetchFriends();
  // const handleClick = (num) => {
  //   const newNum = num + 5;
  //   alert(newNum);
  // };
  return (
    <>
      <h1>Exploring React Core Concepts</h1>
      <Suspense fallback={<p>Loading the posts...</p>}>
        <Posts allPosts={allPosts}></Posts>
      </Suspense>

      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}
      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense> */}
      {/* <Batsman></Batsman>
      <Counter></Counter> */}

      {/* <button onClick={() => handleClick(10)}>Click On Five</button> */}
    </>
  );
}

export default App;
//
