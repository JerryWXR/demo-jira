import React, { useState} from 'react';
import {SearchPanel} from "./search-panel";
import List from "./list";
import {useDebounce, useDocumentTitle, useMount} from "../../utils";
import styled from "@emotion/styled";
import {Typography} from "antd";
import {useProjects} from "../../utils/project";
import {useUsers} from "../../utils/user";
import {Helmet} from "react-helmet";
import Title from "antd/es/skeleton/Title";

export const ProjectListScreen = () => {
    const [param,setParam] = useState({
        name:'',
        personId:''
    })
    const debouncedParam = useDebounce(param,2000)
    const {isLoading,error,data:list} = useProjects(debouncedParam)
    const {data : users} = useUsers()
    useDocumentTitle('项目列表',false)
    return <Container>
        <SearchPanel users={users || []} param={param} setParam={setParam}></SearchPanel>
        {error? <Typography.Text type={'danger'}>{error.message}</Typography.Text> : null}
        <List loading={isLoading} users={users || []} dataSource={list || []}></List>
        </Container>
};
const Container = styled.div`
  padding: 3.2rem`