import React from "react"
import { Route } from "react-router-dom"
import { GameList } from "./game/GameList.js"
import { GameForm } from "./game/GameForm"
import { GameDetails } from "./game/GameDetails.js"
import { ReviewForm } from "./review/ReviewForm.js"
import { EditGame } from "./game/EditGame.js"


export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            backgroundColor: "lightgoldenrodyellow",
            lineHeight: "1.75rem"
        }}>
            <Route exact path='/games'>
                <GameList />
            </Route>
            <Route exact path='/games/new'>
                <GameForm />
            </Route>
            <Route exact path='/games/:gameId(\d+)'>
                <GameDetails />
            </Route>
            <Route exact path='/games/:gameId(\d+)/review'>
                <ReviewForm />
            </Route>
            <Route exact path='/games/:gameId(\d+)/edit'>
                <EditGame />
            </Route>
            


        </main>
    </>
}