import { gql } from '@apollo/client';

export const GET_SINGLE_ALBUM = () => gql`
query album($title: String!) {
  album(title: $title) {
    id
        title
        artists {
            name
        }
        year
        genres
        coverImage
  }
}
`