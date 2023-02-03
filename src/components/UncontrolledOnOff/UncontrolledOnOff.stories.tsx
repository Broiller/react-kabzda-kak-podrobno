import React, {useState} from "react";
import { action } from '@storybook/addon-actions'
import {UncontrolledOnOff} from "./UncontrolledOnOff";



export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
};

const callback = action('on or off clicked')


export const OnMode = () => <UncontrolledOnOff onChange={callback} defaultOn={true} />;
export const OFFMode = () => <UncontrolledOnOff onChange={callback} defaultOn={false} />;

// export const ModeChanging = () => {
//     return <UncontrolledOnOff onChange={}/>
// };