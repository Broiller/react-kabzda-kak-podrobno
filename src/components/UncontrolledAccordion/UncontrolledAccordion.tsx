import React, {useReducer, useState} from "react";
import {action} from "@storybook/addon-actions";
import {reducer, TOGGLE_COLLAPSED} from "./reduser";

type AccordionPropsType = {
    titleValue: string;
}


export function UncontrolledAccordion(props: AccordionPropsType) {
    // let [collapsed, setCollapsed] = useState(false);
    let [state, dispatch] = useReducer(reducer, {collapsed: false});

    return (
        <div>
            {/*<AccordionTitle title={props.titleValue}*/}
            {/*                onClick={ () => {setCollapsed(!collapsed)} }/>*/}

            <AccordionTitle title={props.titleValue}
                            onClick={() => {
                                dispatch({
                                    type: TOGGLE_COLLAPSED
                                })
                            }}/>

            {!state.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string;
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div>
            <h3 onClick={() => props.onClick()}>{props.title}</h3>
        </div>
    )
}

function AccordionBody() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}
