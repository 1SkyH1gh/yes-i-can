import * as React from 'react'
import {FunctionComponent, useState} from 'react'
import {AllKeywords} from "./AllKeywords";
import _selected from '../RenoJson.json'
import {Selected} from "./Selected";
import "./Styles.css"
import krestik from '../krestik.png'

export interface Word {


        id: number

    keyword: string

}

const wordsData: Word[] = _selected;



export interface ContainerProps {

}


export const Container: FunctionComponent<ContainerProps> = () => {


    const [selected, setSelected] = useState<ReadonlyArray<Word>>(wordsData);

    const [words] = useState(wordsData);

    const handleSubmit = () => {
        for (let i = 0; i < words.length; i++) {

        }
    }



    return (

     <div className={"containerNone"}>
             <div className="preheader">
             <div className="Statictic">
                <h2 className="founded">founded :<span className="amount">27/47</span> words</h2>
            </div>
                 <h2  className="linkDeleteAll" onClick={() => setSelected([])}>
                     Delete All
                 </h2>



            {/*<MapSelected del={()=>delElem(SelectedElem.splice(,1))}/>*/}
           <div className="selectedWords">{
                selected.map(word =>
                    <Selected
                        key={word.id}
                        Selectword={word}
                        del={() => {
                            const index = selected.findIndex(x => x.id === word.id);
                            if (index >= 0) {
                                setSelected(selected => {
                                    const buffer = [...selected];
                                    buffer.splice(index, 1);
                                    return buffer;
                                })
                            }
                        }}/>
                )

            }
           </div>


            <div className="formStyles">
                <form onSubmit={handleSubmit}>
                    <input placeholder="search" className="search"/>
                </form>
            </div>
             </div>

            {/*<MapAllKeyword addToSelected={() => PushElem(elem.splice(elem.length - 1, 0, elem.word))*/}
            {/*}/>*/}

          <div className="All">  {
                words.map(word =>
                    <AllKeywords
                        key={word.id}
                        word={word}
                        addToSelected={() => setSelected(selected => ([...selected, word]))}/>
                )
            }
          </div>
            <div className='footer'>


                <h2 className="cancel"><span className="krestikCont"><img src={krestik} className="krestik"/></span>Cancel</h2>
                <h2 className="accept" >Accept</h2>
            </div>
        </div>
    )
}