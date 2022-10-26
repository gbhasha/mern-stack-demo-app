import {
    addNewPlayer,
    getPlayers,
    getPlayerWithID,
    updatePlayer,
    deletePlayer
} from '../controllers/playerControllers'

const routes = (app) => {
    app.route('/players')
        // POST endpoint
        .post(addNewPlayer)

        // GET endpoint
        .get(getPlayers);

    app.route('/player/:PlayerId')
        // GET a specific player
        .get(getPlayerWithID)

        // UPDATE a specific palyer
        .put(updatePlayer)

        // DELETE a specific palyer
        .delete(deletePlayer);

}

export default routes;