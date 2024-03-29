import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'

import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import thumbAnthos from '../public/images/works/anthos.png'
import thumblogo from '../public/images/works/PG.png'
import thumbgame from '../public/images/works/game.png'


const Works = () => {
  return (
 <Layout>	  
  <Container>
    <Heading as="h3" fontSize={20} mb={4}>
      Works
    </Heading>

   <SimpleGrid columns={[1,1,2]} gap={6}>
     <Section>
       <WorkGridItem id="anthos" title="Anthos" thumbnail={thumbAnthos}>
          Award winning bussiness model idea, created for a university module.
	  Bringing IoT to houseplants!
       </WorkGridItem>
     </Section>
     <Section>
       <WorkGridItem id="webpage" title="Website" thumbnail={thumblogo}>
	  Personal Website Project using Next.js, Chakra UI, Framer Motion and VIM editor.
       </WorkGridItem>
     </Section>
    <Section>
	<WorkGridItem id="game" title="Donkey-Kong" thumbnail={thumbgame}>
	  Donkey Kong replica using Unity 2D
	</WorkGridItem>
    </Section>
   </SimpleGrid>
  </Container>
 </Layout>
 )
}

export default Works
