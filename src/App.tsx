import React from 'react';
import './App.css';
import {AuthenticatedApp} from "./authenticated-app";
import {UnauthenticatedApp} from "./unauthenticated-app";
import {ProjectListScreen} from "./screen/project-list";

function App() {
  return (
      <div className="App">
          <ProjectListScreen/>
      </div>
  );
}

export default App;
