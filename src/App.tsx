import React, {useState} from 'react';
import './App.css';
import {OnOff} from "./components/OnOff/OnOff";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";


function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    let [accordionCollapsed, setaccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn]= useState<boolean>(false)
    return (
        <div className={"App"}>
            <OnOff on={switchOn}
                   onChange= {setSwitchOn}/>


            <UncontrolledOnOff onChange={setSwitchOn}/>
            {switchOn.toString()}
            {/*<Accordion titleValue={"Menu"} collapsed={accordionCollapsed}*/}
            {/*           onChange={ () => {setaccordionCollapsed(!accordionCollapsed)} }/>*/}
            {/*<UncontrolledAccordion titleValue={"Users"} />*/}
            {/*<UncontrolledRating/>*/}
            {/*<PageTitle title={"This is APP component"}/>*/}
            {/*<PageTitle title={"My friends"}/>*/}
            {/*Article 1*/}


            {/*<Rating value={0}/>*/}
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
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
