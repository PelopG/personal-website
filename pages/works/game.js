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
	              Unity 2D Game  <Badge>2021</Badge>
		  </Title>
		   <P>
		   Created a 2D unity game for learning puproses.
		   Learned how to use unity Game engine and C# to create a replica of the famous arcade Game Donkey-Kong
		  </P>
	       </Container>
	     </Layout>
	 )
}
export default Work
