import React, {useState} from 'react'
import '../styles/AddData.css'

import ExoName from './Exo/ExoName'
// import ExoTags from './Exo/ExoTags'
import ExoUnitType from './Exo/ExoUnitType'

export default function AddData() {
    const [justAState, setJustAState] = useState(true) // change here
    // const [addTagState, setAddTagState] = useState(false)
    const [addTypeState, setAddTypeState] = useState(false) // change here

    const [exerciseTitle, setExerciseTitle] = useState(null);
    

    const [userDataChoice, setUserDataChoice] = useState("exercice")

    // const triggerAddTag = () => {
    //     setJustAState(false);
    //     setAddTagState(true);
    //     setAddTypeState(false);
    // }

    const triggerAddType = (exoNameInputValue) => {
        console.log(exoNameInputValue.exerciseName)
        setExerciseTitle(exoNameInputValue);
        setJustAState(false);
        // setAddTagState(false);
        setAddTypeState(true);
    }



    return (
        <div className="addDataPage">
            <div className="dataHeader">
                <div className="whatToAdd">
                    <p
                    className={"home-link " + (userDataChoice === 'exercice' && "userChoice")}
                    onClick={() => setUserDataChoice("exercice")}>
                        Exercice
                    </p>
                    <p
                    className={"home-link " + (userDataChoice === 'data' && "userChoice")}
                    onClick={() => setUserDataChoice("data")}>
                        Data
                    </p>
                </div>
            </div>
            <div className="dataForms">
                <div>
                   {(userDataChoice === "exercice" && justAState) && <ExoName addType={triggerAddType}/>}
            
                   {/* {(userDataChoice === "exercice" && addTagState) && <ExoTags addType={triggerAddType}/>} */}

                   {(userDataChoice === "exercice" && addTypeState && exerciseTitle) && <ExoUnitType siblingInfo={exerciseTitle} />}
                </div>
                
            </div>
        </div>
    )
}
