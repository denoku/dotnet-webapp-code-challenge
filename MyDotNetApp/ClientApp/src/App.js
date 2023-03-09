import Users from "./components/users/Users";
import SiteNav from "./components/SiteNav";
import { Routes, Route } from "react-router-dom";
import FavoriteUsers from "./components/users/FavoriteUsers";
import UserPage from "./components/users/UserPage";

function App() {
  return (
    
    <div className="App">
       <SiteNav  />
       <Routes>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/user/:name" element={<UserPage />}></Route>
        <Route path="/favorites" element={<FavoriteUsers />}></Route>
       </Routes>
    </div>
  );
}

export default App;
