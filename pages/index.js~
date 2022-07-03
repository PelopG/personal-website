import { Container, Box, Heading, Image, useColorModeValue, Button, SimpleGrid,List, ListItem,Link } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection , BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import { IoLogoGithub } from 'react-icons/io5'
import { GridItem } from '../components/grid-item'

const Page = () => {
	return (
	 <Layout>
	  <Container>
	   <Box 
		borderRadius="lg"
		bg={useColorModeValue('whiteAlpha.500','whiteAlpha.200')}
		p={3}
		mb={6}
		align="center" >
	     Hello, I&apos;m an Electronic Engineer with Nanotechnology specialization from Surrey!
	   </Box>
	   
	   <Box display={{ md: 'flex' }}>
	      <Box flexGrow={1}>
		<Heading as="h2" variant="page-title">
		  Pelopidas Georgiades
		</Heading>
		<p> Engineer / Developer </p>
       	      </Box>
          <Box 
	     flexShrink={0}
	     mt={{base: 4, md:0}}
	     ml={{md: 6}}
	     align="center"
        >
    <Image 
	borderColor="whiteAlpha.800"
	borderWidth={2}
	borderStyle="solid"
	maxWidth="100px"
	display="inline-block"
	borderRadius="full"
	src="/images/profile.jpg"
	alt="Profile Image"
	/>
    </Box>
   </Box>
<Section delay={0.1}>
  <Heading as="h3" variant="section-title">
    Work
   </Heading>
   <Paragraph>
     I am an ethusiastic and hard-working individual persuing a degree in
     Electronic Engineering with Nanotechnology from the University of Surrey, UK.
     I enjoy working on different projects both hardware and software.
     When I am not online I like working out in the gym or practicing my Judo skills.
     I am always looking for my next opportunity to expand my knowledge and practice my skills.
  </Paragraph>
    <Box
	align = "center" my={4}>
      <NextLink href="/works">
    <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
    My portfolio
   </Button>
   </NextLink>
   </Box>
 </Section>
 
 <Section delay={0.2}>
   <Heading as="h3" variant="section-title" >
     Bio
   </Heading>
   <BioSection>
       <BioYear>2017</BioYear>
       Internship at KIOS Research Center,University of Cyprus
   </BioSection>
   <BioSection>
       <BioYear>2018-2019</BioYear>
	First Sergeant in the Armed Forces
   </BioSection>
   <BioSection>
      <BioYear>2021-2022</BioYear>
	Work-placement at Analog Devices
   </BioSection>
   <BioSection>
      <BioYear>2022</BioYear>
	ML internship at 5G/6G Center,University of Surrey
   </BioSection>
   <BioSection>
	<BioYear>2019-Present</BioYear>
	Electronic Engineering with Nanotechnology
   </BioSection>
 </Section>
 <Section delay={0.3}>
   <Heading as="h3" variant="section-title">
    I love
   </Heading>
   <Paragraph>
	Gym, Judo, DIY, Cars
   </Paragraph>
  </Section>
  <Section delay={0.3}>
    <Heading as="h3" variant="section-title">
	On the web
    </Heading>
    <List>
       <ListItem>
	 <Link href="https://github.com/PelopG" target="_blank">
	   <Button variant="ghost" colorScheme="teal" >
		@PelopG
	   </Button>
	 </Link>
       </ListItem>
    </List>
  </Section>  
 </Container>
</Layout>
     )
}

export default Page
