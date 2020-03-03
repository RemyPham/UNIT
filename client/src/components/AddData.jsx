import React, {useState} from 'react'
import '../styles/AddData.css'
import {useAuth} from "../auth/useAuth";

import ExoName from './Exo/ExoName'
// import ExoTags from './Exo/ExoTags'
import ExoUnitType from './Exo/ExoUnitType'
import ExoSelection from './Data/ExoSelection'
import DataValue from './Data/DataValue'
import DataMood from './Data/DataMood'

export default function AddData() {
    const {currentUser} = useAuth();
    console.log(currentUser)
    //STATE FOR EXERCISE
    const [justAState, setJustAState] = useState(true)
    // const [addTagState, setAddTagState] = useState(false)
    const [addTypeState, setAddTypeState] = useState(false)


    //STATE FOR DATA
    const [dataState, setDataState] = useState(true);
    const [addExoValueState, setAddExoValueState] = useState(false);
    const [addMoodState, setAddMoodState] = useState(false);


    //STOCK FORM INFORMATION
        //EXERCISE
    const [exerciseTitle, setExerciseTitle] = useState(null);

        //DATA
    const [exoSelectedID, setExoSelectedID] = useState(null);
    const [exoValue1, setExoValue1] = useState(null);
    const [exoValue2, setExoValue2] = useState(null);
    

    const [userDataChoice, setUserDataChoice] = useState("data") //change here in default : "exercise"

    // const triggerAddTag = () => {
    //     setJustAState(false);
    //     setAddTagState(true);
    //     setAddTypeState(false);
    // }

    //FUNCTION EXERCISE TO SWITCH PAGE
    const triggerAddType = (exoNameInputValue) => {
        console.log(exoNameInputValue.exerciseName)
        setExerciseTitle(exoNameInputValue);
        setJustAState(false);
        // setAddTagState(false);
        setAddTypeState(true);
    }



    //FUNCTION DATA TO SWITCH PAGE
    const triggerValueState = (exoSelect) => {
        console.log(exoSelect);
        setExoSelectedID(exoSelect)
        setDataState(false);
        setAddExoValueState(true);
        setAddMoodState(false);
    }


    return (
        <div className="addDataPage">
            <div className="dataHeader">
                <div className="whatToAdd">
                    <p
                    className={"home-link " + (userDataChoice === 'exercice' && "userChoice")}
                    onClick={() => setUserDataChoice("exercise")}>
                        Exercise
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
                    {/* COMPONENT FOR EXERCISE */}
                    {(userDataChoice === "exercise" && justAState) && <ExoName addType={triggerAddType}/>}
            
                    {/* {(userDataChoice === "exercice" && addTagState) && <ExoTags addType={triggerAddType}/>} */}

                    {(userDataChoice === "exercise" && addTypeState && exerciseTitle) && <ExoUnitType userInfo={currentUser} siblingInfo={exerciseTitle} />}



                    {/* COMPONENT FOR DATA */}
                    {(userDataChoice === "data" && dataState) && <ExoSelection addValue={triggerValueState} userInfo={currentUser}/>}

                    {(userDataChoice === "data" && addExoValueState) && <DataValue exoID={exoSelectedID} />}

                    {(userDataChoice === "data" && addMoodState) && <DataMood />}
                </div>
                
            </div>
        </div>
    )
}
