import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcons } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
	  return(
	      <Layout title="game">
	        <Container>
	          <Title>
	              Unity 2D Game  <Badge>2021</Badge>
		  </Title>
		   <P>
		   Created a 2D unity game for learning puproses.
		   Learned how to use unity Game engine and C# to create a replica of the famous arcade Game Donkey-Kong
		  </P>
		  <WorkImage src ="/images/works/game.png" alt="game" />
		  <P>
		  Above this is the first level of my creation of the replica Donkey-Kong game.
		  I have also created a Level 2 and a Preload so that you can keep score and keep track of lifes.
		  </P>
	       </Container>
	     </Layout>
	 )
}
export default Work
