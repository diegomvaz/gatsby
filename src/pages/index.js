import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { ChakraProvider} from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { ModalCadastrar } from '../../components/ModalCadastrar'
import { GridRacas } from '../../components/GridRacas'

const BlogPage = () => {

  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { frontmatter: { date: DESC } }) {
        nodes {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            slug
            hero_image {
              childImageSharp {
                gatsbyImageData(
                  width: 600
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
            hero_image_small {
              childImageSharp {
                gatsbyImageData(
                  width: 50
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
          id
          excerpt
        }
      }
    }
  `)

  return (
    <ChakraProvider>
      <Heading margin={5}>
        Raças de Cachorro
      </Heading>
      <ModalCadastrar/>
      <GridRacas {...data} />
    </ChakraProvider >
  )
}

export const Head = () => <title>Raças de Cachorro</title>

export default BlogPage