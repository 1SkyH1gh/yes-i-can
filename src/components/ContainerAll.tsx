import * as React from 'react'
import {FunctionComponent} from "react";
import {Header} from "../Header/Header";
import {Container, Word} from "./Container";
import {useState} from "react";
import _selected from "../RenoJson.json";


export interface ContainerAllProps {

}
export const wordsData: Word[] = _selected;
export const ContainerAll:FunctionComponent<ContainerAllProps>=()=>{
    const [selected, setSelected] = useState<ReadonlyArray<Word>>(wordsData);
    return(
        <div className="containerFullApp">

            <Header/>
            <Container amountKeywords={selected} setSelectedAmount={setSelected}/>
            
        </div>
    )
}