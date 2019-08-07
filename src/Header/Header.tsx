import * as React from 'react'
import {FunctionComponent, useState} from "react";
import {Container, Word, wordsData} from "../components/Container";
import Popover from "react-tiny-popover";
import './HeaderStyle.css'
import folder from '../folder-outline.png'
import chart from '../chart-timeline.png'
import search from '../magnify.png'
import messages from '../android-messages.png'
import tag from '../tag-plus.png'
import arrow from '../chevron-down.png'
import _selected from '../RenoJson.json'
export interface HeaderInt {

}




export const Header:FunctionComponent<HeaderInt>=()=>{
    const [popover,setPopover]=useState(false)


    const [selected, setSelected] = useState<ReadonlyArray<Word>>(wordsData);


    return(
        <div className="headerAPP">
            <div className="allProject">
                <img src={folder}/><p>All project 43</p> <img src={arrow}/>
            </div>

            <div className="createDate">
                <img src={chart}/><p>create date</p>
            </div>

            <div className="statusTask">
                <p>Task status</p> <img src={arrow}/>
            </div>

            <div className="projectNumber">
                <p>project number</p> <img src={arrow}/>
            </div>

            <form className="searchFormHeader">
                <input className="inputSearchHeader" placeholder="search..." src={search}/>
            </form>
            <div className="messages">
                <img src={messages}/>
            </div>


            <Popover
                isOpen={popover}
                position={'top'}
                content={(

                       <Container amountKeywords={selected} setSelectedAmount={setSelected}/>

                )}
            >
                <div onClick={() => setPopover(!popover)} className="openPopover">
                    <img src={tag}/> <h3 className="amountKeywords">{selected.length>1?selected.length:""}</h3>
                </div>
            </Popover>


        </div>
    )
}