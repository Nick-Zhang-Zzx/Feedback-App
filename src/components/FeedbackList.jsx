import FeedbackItem from "./FeedbackItem"
import PropTypes from 'prop-types'
import {motioin, AnimatedPresence, motion} from 'framer-motion'

function FeedbackList({feedback, handleDelete}) {
    if (!feedback || feedback.lenth === 0) {
        return <p>No Feedback Yet</p>
    }

    return (
        <div className="feedback-list">
            <AnimatedPresence>
                {feedback.map((item) => (
                    <motion.div
                        key={item.id}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity:0}}
                    >
                        <FeedbackItem key={item.id} item={item} 
                        handleDelete={handleDelete} />
                    </motion.div>
                ))}
            </AnimatedPresence>
        </div>
    )

// no animation
    // return (
    //     <div className="feedback-list">
    //         {feedback.map(
    //             (item) => (<FeedbackItem key={item.id} item={item} 
    //             handleDelete={handleDelete} />)
    //         )}
    //     </div>
    // )
}

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            // id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired
        })
    )
}

export default FeedbackList
