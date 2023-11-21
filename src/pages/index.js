import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { ChakraProvider, HStack, Wrap, WrapItem } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, Button, Text, Heading } from '@chakra-ui/react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'


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
      <Wrap >
        {
          data.allMdx.nodes.map(node => (
            <WrapItem>
              <Card margin={5} width={250}>
                <CardHeader>
                  <HStack>
                    <GatsbyImage
                      image={getImage(node.frontmatter.hero_image_small)}
                      imgStyle={{ borderRadius: '100%' }}
                    />
                    <Heading size='md'>{node.frontmatter.title}</Heading>
                  </HStack>
                </CardHeader>
                <CardBody>
                  <Text>{node.frontmatter.hero_image.hero_image_credit_text}</Text>
                  <Link to={`/cachorros/${node.frontmatter.slug}`}>
                    <Button variant='solid' colorScheme='blue'>
                      Saiba mais
                    </Button>
                  </Link>
                </CardBody>
              </Card>
            </WrapItem>
          ))
        }
      </Wrap>
    </ChakraProvider >
  )
}

export const Head = () => <title>Posts</title>

export default BlogPage