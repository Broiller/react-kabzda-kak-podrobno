import React, {useState} from "react";
import { action } from '@storybook/addon-actions'
import {Accordion} from "./Accordion";


export default {
    title: 'Accordion',
    component: Accordion,
};

const callback = action('accordion mode change event fired')
const onClickCallback = action('some item vas clicked')

export const MenuCollapsedMode = () => <Accordion onChange={callback} collapsed={true} titleValue={'Menu'} items={[]} onClick={onClickCallback}/>;
export const UsersUnCollapsedMode = () => <Accordion onChange={callback} collapsed={false} titleValue={'Users'} items={[{title:"Dimych", value:1}, {title:"Valera", value:2}, {title:"Artem", value: 3},{title:"Viktor", value: 4}]} onClick={onClickCallback}/>;


export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion onChange={()=>setValue(!value)} collapsed={value} titleValue={'Users'} items={[{title:"Dimych", value:1}, {title:"Valera", value:2}, {title:"Artem", value: 3},{title:"Viktor", value: 4}]}
                      onClick={(id) => {alert(`user vith ID ${id} should be happy`)} }/>
};