import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from "react"
import Header from "./components/Header"
import FeedbackItem from "./components/FeedbackItem"
import FeedbackData from "./components/data/FeedbackData"
import Card from "./components/shared/Card"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import Button from "./components/shared/Button"
import AboutPage from './pages/AboutPage'
function App() {

    const [feedback, setFeedback] = useState(FeedbackData)

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }

    }

    return (
        <Router>
            <Header />
            <div className="container">
                <Routes>
                    <Route exact path='/'>
                        element={
                            <>
                                <FeedbackForm />
                                <FeedbackStats />
                                <FeedbackList />
                            </>
                        }
                    </Route>
                    <Route path='/about' element={<AboutPage />} />
                </Routes>
                {/* <AboutIconLink /> */}
            </div>
        </Router>
    )
}


export default App