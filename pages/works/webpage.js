import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcons } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return(
	<Layout title="website">
	   <Container>
	      <Title>
	       Website <Badge>2021</Badge>
	       </Title>
	       <P>
        	This project is to built a portfolio ,Personal Website, where I can demonstrate the skills that I have aquired of the different project.
	       </P>
	    </Container>
	  </Layout>
	 )
}
export default Work
