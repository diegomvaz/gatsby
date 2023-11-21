import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Card, Heading, Button} from '@chakra-ui/react'

const Cachorro = ({ data, children }) => {

  const image = getImage(data.mdx.frontmatter.hero_image)

  return (

    <Card
      margin={5}
      width={400}
      padding={3}
    >
      <Heading padding={3}>{data.mdx.frontmatter.title}</Heading>
      <GatsbyImage
        image={image}
        alt={data.mdx.frontmatter.hero_image_alt}
      />
      {children}
      <Link to={'/'}>
        <Button marginTop={3} variant='solid' colorScheme='blue'>
          Voltar
        </Button>
      </Link>
    </Card>

  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData(
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`

export const Head = ({ data }) => <title>{data.mdx.frontmatter.title}</title>

export default Cachorro