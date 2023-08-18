import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignupPage";
import UsersCards from "./pages/UsersCards";
import UserCard from "./pages/UserCard";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="*" element={<LoginPage />} />
        <Route exact path="/signup" element={<SignUpPage />} />
        <Route exact path="/signin" element={<LoginPage />} />
        <Route exact path="/users" element={<UsersCards />} />
        <Route exact path="/users/:id" element={<UserCard />} />
      </Routes>
    </>
  );
}

export default App;
