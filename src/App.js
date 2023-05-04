import './App.scss';
import Header from "./components/header/Header";
import React from "react";
import {Route, Routes} from "react-router-dom";
import AllProjects from "./pages/all-projects/AllProjects";
import MyProjects from "./pages/my-projects/MyProjects";
import Teams from "./pages/teams/Teams";
import Messages from "./pages/messages/Messages";
import Statistics from "./pages/statistics/Statistics";
import Search from "./pages/search/Search";
import NotFoundPage from "./pages/not-founnd-page/NotFoundPage";

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
            <Route path={"/all-projects"} element={<AllProjects/>} />
            <Route path={"/my-projects"} element={<MyProjects/>} />
            <Route path={"/teams"} element={<Teams/>} />
            <Route path={"/messages"} element={<Messages/>} />
            <Route path={"/statistics"} element={<Statistics/>} />
            <Route path={"/search"} element={<Search/>} />
            <Route path={"*"} element={<NotFoundPage/>} />
        </Routes>
    </div>
  );
}

export default App;
