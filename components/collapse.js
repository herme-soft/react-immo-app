import React, { useState } from 'react'
import { MDBCollapse, MDBIcon } from "mdbreact"

export const Collapse = ({ titre, children }) => {

    const [collapseID, setCollapseID] = useState("");

    const toggleCollapse = collapseID => () => {
        setCollapseID(prevState => (
            collapseID = prevState !== collapseID ? collapseID : ""
        ))
    }

    const styles = {
        colapse: {
            backgroundColor: "#e0e0e0",
            padding: 10,
            fontSize: 20,
        },
        icon: {
            padding: 10
        }
    }

    return (
        <>
            <div className="mb-4">
                <div style={styles.colapse} onClick={toggleCollapse("basicCollapse")}>
                    {titre}
                    { collapseID && <MDBIcon icon="angle-down" style={styles.icon} className="float-right" /> }
                    { !collapseID && <MDBIcon icon="angle-up" style={styles.icon} className="float-right" /> }
                </div>

                <MDBCollapse id="basicCollapse" isOpen={collapseID}>
                    {children}
                </MDBCollapse>
            </div>
        </>
    )
}

