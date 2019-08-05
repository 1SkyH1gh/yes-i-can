import * as React from "react";
import {FunctionComponent} from "react";

export interface CancelOrAccept {
    acceptClick:()=>void,
    cancelClick:()=>void
}


export const CancelOrAccept:FunctionComponent<CancelOrAccept>=(props)=>{
    return(
    <div className="footer">
        <button onClick={props.acceptClick}>Accept</button>
        <button onClick={props.cancelClick}>Cancel</button>
    </div>
    )
}