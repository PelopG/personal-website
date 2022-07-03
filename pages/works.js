import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'

import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import thumbAnthos from '../public/images/works/anthos.png'
import thumblogo from '../public/images/works/PG.png'



const Works = () => {
  return (
 <Layout>	  
  <Container>
    <Heading as="h3" fontSize={20} mb={4}>
      Works
    </Heading>

   <SimpleGrid columns={[1,1,2]} gap={6}>
     <Section>
       <WorkGridItem id="Anthos" title="Anthos" thumbnail={thumbAnthos}>
          Award winning bussiness model idea, created for a university module.
	  Bringing IoT to houseplants!
       </WorkGridItem>
     </Section>
     <Section>
       <WorkGridItem id="Website" title="Personal Website" thumbnail={thumblogo}>
	  Personal Website Project using Next.js, Chakra UI, Framer Motion and VIM editor.
       </WorkGridItem>
     </Section>
   </SimpleGrid>
  </Container>
 </Layout>
 )
}

export default Works
