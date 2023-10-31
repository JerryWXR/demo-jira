import React from 'react';
import {Button, Drawer} from "antd";
import {ButtonNoPadding} from "../../components/lib";

export  const ProjectModal = (props:{projectModalOpen:boolean,onClose:() =>void}) => {
    return <Drawer onClose={props.onClose} visible={props.projectModalOpen} width={'100%'}>
        <h1>Project Modal</h1>
        <ButtonNoPadding onClick={props.onClose}>关闭</ButtonNoPadding>
    </Drawer>
};