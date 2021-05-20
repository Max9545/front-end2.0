import { gql } from '@apollo/client';

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