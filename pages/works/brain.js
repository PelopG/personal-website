import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcons } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
          return(
              <Layout title="brain">
                  <Container>
                 <Title>
                 Brain Tumor Detection  <Badge>2021</Badge>
                </Title>
                    <P>
                     Brain Tumor Detector , developed using TensorFlow to identify brain-tumors from a given kaggle dataset
                    </P>
                   <WorkImage src ="/images/works/brain.png" alt="brain" />
                   <P>
                    Above this a brain tumor identification but it utilised Flask to create an interactive interface.
                  </P>
               </Container>
             </Layout>
           )
}
export default Work
