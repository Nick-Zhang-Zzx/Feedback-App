import Card from "./Shared/Card"
import Button from "./Shared/Button"
import RatingSelect from "./RatingSelect"
import {useState, useContext, useEffect} from "react"
import FeedbackContext from "../context/FeedbackContext"


function FeedbackForm() {
    const [text, setText] = useState("")
    const [rating, setRating] = useState(10)
    const [btnDisabled, setbtnDisabled] = useState(true)
    const [message, setMessage] = useState("")

    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

    useEffect(() => {
        if(feedbackEdit.edit === true) {
            setbtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    const handleTextChange = (e) => {
        const text = e.target.value
        setText(e.target.value)
        if (text === "") {
            setbtnDisabled(true)
            setMessage(null)
            // console.log("empty")
        } else if(text !== "" && text.trim().length <= 10) {
            setMessage("Text must be at least 10 characters")
            setbtnDisabled(true)
            // console.log("<=10")
        } else {
            setbtnDisabled(false)
            setMessage(null)
            // console.log("gogogo")
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 10) {
            const newFeedback = {
                text: text,
                rating: rating
            }

            if (feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedback)
            } else {
                addFeedback(newFeedback)
            }
            
            setText("")
        }
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect select={(rating) => {setRating(rating)}}/>
                <div className="input-group">
                    <input 
                        onChange={handleTextChange}
                        type="text" 
                        placeholder="Write a review"
                        value={text} 
                    />
                    <Button type="submit" isDisabled={btnDisabled}>
                        Send
                    </Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm