import React, { useState} from 'react';
import {SearchPanel} from "./search-panel";
import List from "./list";
import {useDebounce, useDocumentTitle, useMount} from "../../utils";
import styled from "@emotion/styled";
import {Button, Row, Typography} from "antd";
import {useProjects} from "../../utils/project";
import {useUsers} from "../../utils/user";
import {useProjectSearchParams} from "./utils";
import {ButtonNoPadding} from "../../components/lib";

export const ProjectListScreen = (props:{setProjectModalOpen:(isOpen:boolean) => void}) => {
    const [param,setParam]=useProjectSearchParams()
    const {isLoading,error,data:list,retry} = useProjects(useDebounce(param,200))
    const {data : users} = useUsers()
    // @ts-ignore
    return <Container>
        <Row>
            <h1>项目列表</h1>
            <ButtonNoPadding onClick={() => props.setProjectModalOpen(true)}>创建项目</ButtonNoPadding>
        </Row>
        <SearchPanel users={users || []} param={param} setParam={setParam}></SearchPanel>
        {error? <Typography.Text type={'danger'}>{error.message}</Typography.Text> : null}
        <List setProjectModalOpen={props.setProjectModalOpen} refresh={retry} loading={isLoading} users={users || []} dataSource={list || []}></List>
        </Container>
};
ProjectListScreen.whyDidYouRender = true
const Container = styled.div`
  padding: 3.2rem`