import React from 'react';
import './App.css';
import {OnOff} from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";


function App() {
    return (
        <div className={"App"}>
            <OnOff/>
            <OnOff />
            <OnOff />
            <UncontrolledAccordion titleValue={"Menu"}  />
            <UncontrolledAccordion titleValue={"Users"} />
            <UncontrolledRating/>
            {/*<PageTitle title={"This is APP component"}/>*/}
            {/*<PageTitle title={"My friends"}/>*/}
            {/*Article 1*/}


            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}

        </div>
    );
}
    type PageTitlePropsType = {
        title: string;
    }
function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return <h1>{ props.title }</h1>
}

export default App;
