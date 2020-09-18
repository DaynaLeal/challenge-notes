import { Express } from 'express'

import fetchSongs from '../helpers/fetchSongs'

const routeHandler = (app: Express): void => {
  app.get('/songs', (req, res) => {
    fetchSongs(req, res)
  })
  /**
   * any additional routes would be declared here with the same style:
   * do the code logic somewhere else - keep this area clean to see which routes are available.
   * if this grows to include users/ and other categories, separate them into sub-route handler functions
   * For example, if you have 3 routes pertaining to users, do this style logic but for each of the
   * user routes in it's own file called userRouteHandler or something.
   * After doing that for each of the sub categories call all the sub handlers here.
   */
}

export default routeHandler
