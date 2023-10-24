import React from "react";
import {ProjectListScreen} from "./screen/project-list";
import {useAuth} from "./context/auth-context";
export const AuthenticatedApp = () => {
    const {logout} = useAuth()
    return <div>
        <button>退出</button>
        <ProjectListScreen/>
    </div>
}