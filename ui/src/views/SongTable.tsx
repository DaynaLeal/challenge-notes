import React, { useEffect, useState } from 'react'
import { RouteProps } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import client from 'client'

// import { Song } from 'interfaces/songs'
// import sortData from '../components/SortSongs'
import styles from './styles/song-table.module.sass'

const SongTable = ({ routeProps }: Props) => {
  console.log('route props', routeProps)
  const [songs, setSongs] = useState<Song[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // const [sortedProperty, setSortedProperty] = useState('artist')

  useEffect(() => {
    /**
     * inside of useEffect functions that need to use async / await syntax, you have to declare
     * it inside of the use effect. It's weird, but React is quirky
     * This function will run exactly once when the component first mounts.
     * It will only run again if something inside the dependency array
     * (second arg of the useEffect function) changes.
     */
    const fetchSongs = async (): Promise<void> => {
      try {
        const { data } = (await client.get('/songs')) as SongApiResponse
        // update the state with the result of the API call.
        setSongs(data)
      } catch (error) {
        console.error('error', error)
        // something went wrong with the request. Show the error page, or something.
      } finally {
        setIsLoading(false)
      }
    }
    fetchSongs()

  }, [])

  type SortKey = 'title' | 'artist' | 'album' | 'genre' | 'year'
  const sortData = (property: SortKey) => {
    let sortedSongs = [...songs]
  
    sortedSongs.sort((a, b) => {
      if(a[property] < b[property]) { return -1 }
      if(a[property] > b[property]) { return 1 }
      return 0;
    })
    setSongs(sortedSongs)
  }
  
  // if isLoading is true, it will only return the h1 that says loading
  return isLoading ? (
    <h1>Loading..</h1>
  ) : (
    <>
      <h1>Songs</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th onClick={() => sortData('title')}>Title</th>
            <th onClick={() => sortData('artist')}>Artist</th>
            <th onClick={() => sortData('album')}>Album</th>
            <th onClick={() => sortData('genre')}>Genre</th>
          </tr>
        </thead>
        <tbody>
          {songs.map(song => (
            <tr key={uuid()}>
              <td>{song.title}</td>
              <td>{song.artist}</td>
              <td>{song.album}</td>
              <td>{song.genre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

/**
 * In each component that has props passed down, you can make an interface that declares
 * the expected types of the props. This will give you editor support in this file, as well as when you
 * use the component elsewhere in the code
 */
interface Props {
  routeProps: RouteProps
}

// This types the return from the API. You don't always know what it will be,
// but when it's your own, it's safe to do so
interface SongApiResponse {
  data: Song[]
}

interface Song {
  [key: string]: any
  artist: string
  title: string
  genre: 'pop' | 'rock' | 'rap'
  album: string
  year: number
}

export default SongTable
