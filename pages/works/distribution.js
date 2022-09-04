import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcons } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
	          return(
	           <Layout title="distribution">
	            <Container>
		      <Title>
		      Boltzmann Distribution  <Badge>2021</Badge>
		      </Title>
		          <P>
		          Developed a simulation of free gas particles interaction in free space; approaching a skewed normal distribution
		          </P>
		          <WorkImage src ="/images/works/distribution.png" alt="distribution" />
		          <P>
		          Above can be found an animation of this simulation.
		         </P>
	            </Container>
		       </Layout>
		     )
}
export default Work
