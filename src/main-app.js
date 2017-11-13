import React from "react";
import UserDataForm from "./user-form/container-user-form";
import UserDataTable from "./user-data/container-user-data";
import  './app-styles/app-style.css';

export const MainApp = () =>  {
    return (
        <div>
        <UserDataForm />
        <UserDataTable />
        </div>
    )
}