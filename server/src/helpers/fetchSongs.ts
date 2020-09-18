import { Request, Response } from 'express'

import songs from '../../static-data/songs.json'

const fetchSongs = (req: Request, res: Response): void => {
  console.log('request', req.path)
  res.json(songs)
}

export default fetchSongs
