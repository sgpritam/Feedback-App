import { useState } from "react"
import Header from "./components/Header"
import FeedbackItem from "./components/FeedbackItem"
import FeedbackData from "./components/data/FeedbackData"
import Card from "./components/shared/Card"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import Button from "./components/shared/Button"
function App() {

    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }

    }

    return (
        <>
            <Header />
            <div className="container">
                <FeedbackForm />
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback}
                    handleDelete={deleteFeedback} />
            </div>
        </>
    )
}


export default App