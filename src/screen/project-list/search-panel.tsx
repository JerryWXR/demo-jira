import React from 'react';
import {Form, Input, Select} from "antd";
import {Project} from "./list";
import UserSelect from "../../components/user-select";

export interface User {
    id:number,
    name:string,
    email:string,
    title:string,
    organization:string,
    token:string,
    personId:number
}
interface SearchPanelProps {
    users: User[],
    param:Partial<Pick<Project,"name"|"personId">>,
    setParam:(param:SearchPanelProps['param'])=> void
}
export const SearchPanel = ({users,param,setParam}:SearchPanelProps) => {

    return <Form style={{marginBottom:'2rem'}} layout={"inline"}>
        <Form.Item>
            <Input placeholder={'项目名'} type='text' value={param.name}
                onChange={evt => {
                setParam({
                ...param,
                name:evt.target.value
            })
                console.log(users)
            }} />
        </Form.Item>
        <Form.Item>
            <UserSelect
                defaultOptionName={'负责人'}
                value={param.personId} onChange={ (value) =>setParam({
                ...param,
                personId:value
            })} />
        </Form.Item>
    </Form>
};