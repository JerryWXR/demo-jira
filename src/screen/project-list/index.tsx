import React, {useEffect, useState} from 'react';
import {SearchPanel} from "./search-panel";
import List from "./list";
import {cleanObject, useDebounce, useMount} from "../../utils";
import qs from "qs";
import {useHttp} from "../../utils/http";

export const ProjectListScreen = () => {
    const [param,setParam] = useState({
        name:'',
        personId:''
    })
    const debouncedParam = useDebounce(param,2000)
    const [users,setUsers] = useState([])
    const [list,setList] = useState([])
    const client = useHttp()
    useEffect(() => {
        client('projects',{data:cleanObject(debouncedParam)}).then(setList)
    },[debouncedParam])
    useMount(() => {
        client('users').then(setUsers)
    })
    return <div>
        <SearchPanel users={users} param={param} setParam={setParam}></SearchPanel>
        <List users={users} list={list}></List>

        </div>
};