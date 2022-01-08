import {v4 as uuidv4} from "uuid"
import Header from "./components/header.jsx"
import {useState} from "react"
import FeedbackData from "./data/FeedbackData.js"
import FeedbackList from "./components/FeedbackList.jsx"
import FeedbackStats from "./components/FeedbackStats.jsx"
import FeedbackForm from "./components/FeedbackForm.jsx"

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }
    
    const deleteFeedback = (id) => {
        if(window.confirm('Are you srue you want to delete')){
            setFeedback(feedback.filter((item) => (item.id !== id)))
        }
    }

    return (
        <>
            <Header />
            <div className="container">
                <FeedbackForm handleAdd={addFeedback}/>
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback}
                 handleDelete={deleteFeedback}/>
            </div>
        </>

    )
}

export default App
