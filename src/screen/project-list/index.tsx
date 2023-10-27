import React, { useState} from 'react';
import {SearchPanel} from "./search-panel";
import List from "./list";
import {useDebounce, useDocumentTitle, useMount} from "../../utils";
import styled from "@emotion/styled";
import {Typography} from "antd";
import {useProjects} from "../../utils/project";
import {useUsers} from "../../utils/user";
import useUrlQueryParams from "../../utils/url";
import {useProjectSearchParams} from "./utils";

export const ProjectListScreen = () => {
    const [param,setParam]=useProjectSearchParams()
    const {isLoading,error,data:list} = useProjects(useDebounce(param,200))
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