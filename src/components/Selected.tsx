import * as React from "react";
import {FunctionComponent} from "react";
import {Word} from "./Container";
import krestik from '../krestik.png'
export interface SelectedProps {
    Selectword: Word,
    del:()=>void,
}

export const Selected:FunctionComponent<SelectedProps>=(props)=>{
    return(
        <h3 onClick={props.del}  className="selected">{props.Selectword.keyword} <span className='selectedKrestik'>
            <img src={krestik} className="krestikSel"/>
        </span></h3>
    )
}