import Container from "@/components/Container"
import CTA from "@/components/CTA"
import DBRTInfo1 from "@/components/DVRTInfo1"
import DBRTInfo2 from "@/components/DVRTInfo2"
import DVRTInfo3 from "@/components/DVRTInfo3"
import DVRTInfo4 from "@/components/DVRTInfo4"
import DVRTInfo5 from "@/components/DVRTInfo5"
import DVRTInfo6 from "@/components/DVRTInfo6"
import Hero from "@/components/Hero"
import Logos from "@/components/Logos"
import Section from "@/components/Section"

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Logos />
      <Container>
        <DBRTInfo1 />
        <DBRTInfo2 />
        <Section id="culriculum1" title="DVRT L1" description="">
          <DVRTInfo3 />
        </Section>
        <Section id="culriculum2" title="DVRT L2" description="">
          <DVRTInfo4 />
        </Section>
        <Section id="culriculum3" title="DVRT RESTORATION" description="">
          <DVRTInfo5 />
        </Section>
        <DVRTInfo6 />
        <CTA />
      </Container>
    </>
  )
}

export default HomePage
