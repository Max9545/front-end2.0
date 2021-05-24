import { gql } from '@apollo/client';

export const typeDefs = gql`
  extend type Album {
    isFavorite: Boolean!
  }
`

export const GET_SINGLE_ALBUM = gql`
  query ($title: String!) {
    album(title: $title) {
      id
      title
      artists {
        name
      }
      year
      genres
      coverImage
      uri
      isFavorite @client
    }
  }
`

export const GET_SPOTIFY = gql`
query ($title: String!) {
  spotifyAlbumId(title: $title) {
      id
    }
}
`


export const GET_RANDOM_ALBUMS = gql`
query {
  randomAlbum {
          id
          title
          artists {
            name
           }
          year
          genres
          coverImage
          resourceUrl
          styles
          year
          tracklist {
            position
            title
            duration
           }
          uri
          }
        }
        
`