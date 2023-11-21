import * as React from 'react'
import { HStack, Wrap, WrapItem } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, Button, Text, Heading } from '@chakra-ui/react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link  } from 'gatsby'



export const GridRacas = (data) => {
    return (
        <>
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
        </>
    )
}