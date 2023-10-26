import React from "react";
import {ProjectListScreen} from "./screen/project-list";
import {useAuth} from "./context/auth-context";
import styled from "@emotion/styled";
import {Row} from "./components/lib";
import {Button, Dropdown, Menu} from "antd";
import {Navigate, Route, Routes} from "react-router";
import {BrowserRouter as Router} from "react-router-dom";
import {ProjectScreen} from "./screen/project";
import {resetRoute} from "./utils";

export const AuthenticatedApp = () => {

    return <Container>
        <PageHeader></PageHeader>
       <Main>
           <Router>
               <Routes>
                   <Route path={'/projects'} element={<ProjectListScreen/>}/>
                   <Route path={'/projects/:projectId/*'} element={<ProjectScreen/>}/>
                   <Route path="*" element={<Navigate to="/projects" replace={true}/>} />
               </Routes>
           </Router>
       </Main>
    </Container>
}

const PageHeader= () => {
    const {logout,user} = useAuth();
    return <Header between={true}>
        <HeaderLeft gap={true}>
            {/*<img src={logo}></img>*/}
            {/*<Logo width={'18rem'} color={'rgb(38,132,255'}/>*/}
            <ButtonTop  onClick={()=>{resetRoute()}}>
                <h2>Logo</h2>
            </ButtonTop>
            <h2>项目</h2>
            <h2>用户</h2>
        </HeaderLeft>
        <HeaderRight>
            <Dropdown overlay={<Menu>
                <Menu.Item key={'logout'}>
                    <Button type={'link'} onClick={logout}>登出</Button>
                </Menu.Item>
            </Menu>}>
                <Button type={'link'} onClick={e => e.preventDefault()}>Hi~,{user?.name}</Button>
            </Dropdown>
        </HeaderRight>
    </Header>
}
const Container = styled.div`
  display:grid;
  height: 100vh;
  grid-template-rows:6rem 1fr 6rem;
`

const Header = styled(Row)`
  padding: 3.2rem;
  box-shadow: 0 0 5px 0 rgba(0,0,0,0.1);
  z-index: 1;
`
const HeaderLeft = styled(Row)`
  display: flex;
  align-items: center;
`
const HeaderRight = styled.div``
const Main = styled.main``
const ButtonTop=styled.button`
    text-align:center;`