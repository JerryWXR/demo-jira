import React from 'react';
import './App.css';
import {AuthenticatedApp} from "./authenticated-app";
import {UnauthenticatedApp} from "./unauthenticated-app";
import {ProjectListScreen} from "./screen/project-list";
import {useAuth} from "./context/auth-context";

function App() {
    const {user} = useAuth()
  return (
      <div className="App">
          {user ? <AuthenticatedApp/> : <UnauthenticatedApp/>}
      </div>
  );
}

export default App;
