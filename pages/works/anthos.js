import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcons } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () => {
  return (
   <Layout title="Anthos">
     <Container>
     <Title>
      Anthos <Badge>2021</Badge>
    </Title>
	<P>
	  Anthos is a start-up technology company planning to bring the Internet of Things (IoT) to the
	  household plant market.
	</P>
	<WorkImage src="/images/works/anthos-pot.png" alt="anthos" /> 
	 <P>
	 The figure above shows the product. Anthos will teach the user to take perfect care of theri houseplants,
	 saving them the time and effort. Anthos will make the task of helping house plants thrive much simpler and provide advice on the location and soil content of the plant pot. Using a variety of sensors to measure temperature,light,PH and soil nutrients, our team wll create an app associated with a plant database. The USP of Anthos will be the data driven nutrient pack recommendations, that will be given to the user thoughout the app and be available for purchase. All of this data will also give the user an understanding of their plants that they could otherwise never archieve. We also plan to allow users to save this data locally, meaning the Anthos could still function without our servers in the future.
	 </P>
	  <P>
	  This idea has been awarded the Second prize in the course competition.
	  </P>
     </Container>
     </Layout>
  )
}

export default Work
