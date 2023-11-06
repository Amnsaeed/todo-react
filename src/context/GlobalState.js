import React, { createContext, useReducer} from "react";
import AppReducer from "./AppReducer";


const initialState = {

    tasks: []


}

export const GlobalContext = createContext(initialState);

// Global Provider


export const GlobalProvider = ( { children}  ) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    function deleteTasks ( id ) {

        dispatch({

            type: "DELETE_TASKS",
            payload: id

        })


    }

    function addTasks ( task ) {

        dispatch({

            type: "ADD_TASKS",
            payload: task

        })


    }

    return (

        <GlobalContext.Provider value={{tasks: state.tasks,
        deleteTasks,
        addTasks
        }}>

          {children}

        </GlobalContext.Provider>


    )


}