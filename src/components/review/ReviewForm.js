import React, { useState } from "react"
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { createReview } from "./ReviewManager"



export const ReviewForm = () => {
    const { gameId } = useParams()
    const [review, setReview] = useState({})
    const history = useHistory()
// once initialized the review render the form for the review, 
//then post the info to the DB on the backend (these items will be rendered in another module)

    return (
        <>
        <form className="reviews">
            <h2 className="review__form">Leave a Review</h2>
            <fieldset>
                <div className="form__group">
                    <label htmlFor="review">Review:</label>
                    <textarea name="review" required autoFocus className="form__control" onChange={(e) => {
                        const copy = {...review}
                        copy.content = e.target.value
                        setReview(copy)
                    }}/>
                </div>
            </fieldset>
            <button onClick={(e) => {
                e.preventDefault()

                const newReview = {} 
                //create the variable newReview initialized as an obj
                newReview.content = review.content
                //adding the value of content to the obj
                newReview.game_id = gameId
                //adding the value of gameId to the obj
                // these will be posted to the api and database

                createReview(newReview)
                .then(() => history.push(`/games/${gameId}`))
                
            }}>Submit Review</button>

        </form>
        </>
    )

}