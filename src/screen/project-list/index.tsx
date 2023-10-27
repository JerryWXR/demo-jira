import React, { useState} from 'react';
import {SearchPanel} from "./search-panel";
import List from "./list";
import {useDebounce, useDocumentTitle, useMount} from "../../utils";
import styled from "@emotion/styled";
import {Typography} from "antd";
import {useProjects} from "../../utils/project";
import {useUsers} from "../../utils/user";
import useUrlQueryParams from "../../utils/url";

export const ProjectListScreen = () => {
    const [param,setParam] = useUrlQueryParams(['name','personId'])
    const debouncedParam = useDebounce(param,1000)
    const {isLoading,error,data:list} = useProjects(debouncedParam)
    const {data : users} = useUsers()
    return <Container>
        <SearchPanel users={users || []} param={param} setParam={setParam}></SearchPanel>
        {error? <Typography.Text type={'danger'}>{error.message}</Typography.Text> : null}
        <List loading={isLoading} users={users || []} dataSource={list || []}></List>
        </Container>
};
ProjectListScreen.whyDidYouRender = true
const Container = styled.div`
  padding: 3.2rem`