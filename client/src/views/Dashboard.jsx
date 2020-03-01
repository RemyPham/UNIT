import React, { useContext, useEffect, useState } from "react";
import UserContext from "../auth/UserContext"
import apiHandler  from '../api/apiHandler'

import "../styles/Dashboard.css"

import FooterUser from '../components/FooterUser'
import Empty from '../components/Empty'
import AddData from '../components/AddData'
import Graph from '../components/Graph'
import UserProfile from '../components/UserProfile'

const api = new apiHandler();

export default function Dashboard(props) {
    const userContext = useContext(UserContext);
    const { setCurrentUser } = userContext;

    const [iconSelect, setIconSelect] = useState("chart")
    const [exercises, setExercises] = useState(null)

    useEffect(() => {
        api
        .get("/dashboard")
        .then(userExercise => {
            setExercises(userExercise.data);
        })
        .catch(err => console.log(err))
    }, [])
    

    const redirectToAddData = () => {
        setIconSelect("add")
    }


    return iconSelect === "chart" ? (
        exercises ? (
            <div className="page">
                {exercises.map((exercise,i) => (
                    <div key={i}>
                        <p className="graphTitle">{exercise.title}</p>
                        <Graph exercisesInfos={exercise} />
                    </div>
                    
                ))}
                
                
                <FooterUser selection={iconSelect} handleIconState={e => setIconSelect(e)} />
            </div>
        ) : (
            <div className="page">
                <Empty addFirstExercise={redirectToAddData} />
            
                <FooterUser selection={iconSelect} handleIconState={e => setIconSelect(e)} />
            </div>
        )


    ) : iconSelect === "add" ? (
        <div className="page">
            <AddData />
            <FooterUser selection={iconSelect} handleIconState={e => setIconSelect(e)} />
        </div>




    ) : (
        <div className="page">
            <UserProfile />
            <FooterUser selection={iconSelect} handleIconState={e => setIconSelect(e)} />
        </div>
    )

}
