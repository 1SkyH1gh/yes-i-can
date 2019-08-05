import * as React from "react";
import {FunctionComponent} from "react";

export interface AllKeywordsProps {
    word:{
        id:number,
        keyword:string
    },
    addToSelected:()=>void


}

export const AllKeywords:FunctionComponent<AllKeywordsProps>=(props)=>{

    return(
        <h3 onClick={props.addToSelected} className="examplair">{props.word.keyword}</h3>
    )
}