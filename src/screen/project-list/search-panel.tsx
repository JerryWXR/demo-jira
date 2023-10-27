import React from 'react';
import {Form, Input, Select} from "antd";
import {Project} from "./list";

export interface User {
    id:string,
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
            <Select value={param.personId} onChange={value =>setParam({
                ...param,
                personId:value
            })}>
                <Select.Option value={''}>负责人</Select.Option>
                {
                    users.map(user => <Select.Option key={user.id} value={user.id}>{user.name}</Select.Option> )
                }
            </Select>
        </Form.Item>
    </Form>
};