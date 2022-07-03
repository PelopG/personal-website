import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => { 
  return(
    <Layout title="Anthos">
      <Container>
	<Title>
	  Anthos <Badge>2021</Badge>
	</Title>
     	<P>
	   A group enterprise Project business report, about Anthos, a Internet of Things(IoT) smart plant pot.
	</P>
	<List ml={4} my={4}>
	</List>
      </Container>
    </Layout>
  )
}
export default Work
