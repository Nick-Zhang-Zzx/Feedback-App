// import {useState} from 'react'
import Card from "./Shared/Card"
import {useContext} from "react"
import PropTypes from 'prop-types'
import { FaTimes, FaEdit } from 'react-icons/fa'
import FeedbackContext from "../context/FeedbackContext"

function FeedbackItem({item}) {
    const {deleteFeedback, editFeedback} = useContext(FeedbackContext)

    return (
        <Card reverse = {false}> 
            <div className="num-display">{item.rating}</div>
            <button onClick={() => deleteFeedback(item.id)} className="close">
                <FaTimes color='purple' />
            </button>
            <button onClick={() => editFeedback(item)} className="edit">
                <FaEdit color='puple' />
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default FeedbackItem
