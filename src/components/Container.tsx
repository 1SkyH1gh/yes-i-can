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

export const wordsData: Word[] = _selected;



export interface ContainerProps {
amountKeywords:any,
    setSelectedAmount:any
}


export const Container: FunctionComponent<ContainerProps> = (props) => {
    const {amountKeywords}=props
    const {setSelectedAmount}=props



    const [words] = useState(wordsData);

    const handleSubmit = () => {
        for (let i = 0; i < words.length; i++) {

        }
    }



    return (

     <div className="container">
             <div className="preheader">
             <div className="Statictic">
                <h2 className="founded">founded :<span className="amount">{amountKeywords.length}/{wordsData.length}</span> words</h2>
            </div>
                 <h2  className="linkDeleteAll" onClick={() => setSelectedAmount([])}>
                     Delete All
                 </h2>



            {/*<MapSelected del={()=>delElem(SelectedElem.splice(,1))}/>*/}
           <div className="selectedWords">{
                amountKeywords.map((word: Word) =>
                    <Selected
                        key={word.id}
                        Selectword={word}

                        del={() => {
                            const index = amountKeywords.findIndex((x: { id: number; }) => x.id === word.id);
                            if (index >= 0) {
                                setSelectedAmount((amountKeywords: any) => {
                                    const buffer = [...amountKeywords];
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
                        addToSelected={() => setSelectedAmount((amountSelected: any) => ([...amountSelected, word]))}/>
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