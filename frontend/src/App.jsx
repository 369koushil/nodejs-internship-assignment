import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Button from "./components/Button";
import AddSchool from "./components/AddSchool";
import ListSchool from "./components/ListSchool";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">School Management App</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-md">
       
        <Button color={"bg-red"} content={"Git Source Code Repo"} path={"https://github.com/369koushil/nodejs-internship-assignment"}></Button>
        <Button color={"bg-green"} content={"Postman Collection"} path={"https://web.postman.co/workspace/My-Workspace~4de7ad93-3c6e-45af-88fd-d573d7e896e0/collection/37753169-b81acbf0-6eea-41bb-a3c3-208373a2b951"}></Button>
        <Link to="/add-school">
          <button className="w-full py-2 px-4 bg-purple-500 text-white rounded shadow hover:bg-purple-600">
            Add School
          </button>
        </Link>
        <Link to="/list-schools">
          <button className="w-full py-2 px-4 bg-yellow-500 text-white rounded shadow hover:bg-yellow-600">
            List Schools
          </button>
        </Link>
      </div>
    </div>
  );
};



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-school" element={<AddSchool />} />
        <Route path="/list-schools" element={<ListSchool />} />
      </Routes>
    </Router>
  );
};

export default App;
