import { gql } from '@apollo/client';

export const GET_SINGLE_ALBUM = gql`
query ($title: String!) {
  album(title: $title) {
    id
    title
    artists {
      name @include(if: $title)
    }
    year
    genres
    coverImage
  }
}
`