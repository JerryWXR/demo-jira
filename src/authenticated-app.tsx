import React from "react";
import {ProjectListScreen} from "./screen/project-list";
import {useAuth} from "./context/auth-context";
import styled from "@emotion/styled";
import {Row} from "./components/lib";

export const AuthenticatedApp = () => {
    const {logout} = useAuth();
    return <Container>
        <Header>
            <HeaderLeft gap={true}>
                <h3>Logo</h3>
                <h3>项目</h3>
                <h3>用户</h3>
            </HeaderLeft>
            <HeaderRight>
            <button onClick={logout}>退出</button>
            </HeaderRight>
        </Header>
       <Main>
           <ProjectListScreen/>
       </Main>
    </Container>
}


const Container = styled.div`
  display:grid;
  height: 100vh;
  grid-template-rows:6rem 1fr 6rem;
`

const Header = styled(Row)`
`
const HeaderLeft = styled(Row)`
  display: flex;
  align-items: center;
`
const HeaderRight = styled.div``
const Main = styled.main``