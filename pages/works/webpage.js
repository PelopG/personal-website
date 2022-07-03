import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return(
	<Layout title="webpage">
	   <Container>
	      <Title>
	       Website <Badge>2021</Badge>
	       </Title>
	       <P>
        	Personal Website   
	       </P>
	       <List ml={4} my={4}>
	       </List>
	    </Container>
	  </Layout>
	 )
}
export default Work
