import React, {useState} from "react";
import { action } from '@storybook/addon-actions'
import {OnOff} from "./OnOff";


export default {
    title: 'OnOff',
    component: OnOff,
};

const callback = action('on or off clicked')

export const OnMode = () => <OnOff onChange={callback} on={true} />;
export const OFFMode = () => <OnOff onChange={callback} on={false} />;


export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <OnOff onChange={setValue} on={value}/>
};