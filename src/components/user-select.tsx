import React from 'react';
import {useUsers} from "../utils/user";
import idSelect from "./id-select";
import IdSelect from "./id-select";

const UserSelect = (props:React.ComponentProps<typeof idSelect>) => {
    const {data : users} = useUsers()
    return <IdSelect options={users || []} {...props} />
};

export default UserSelect;