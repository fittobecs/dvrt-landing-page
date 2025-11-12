import Container from "@/components/Container"
import CTA from "@/components/CTA"
import DBRTInfo1 from "@/components/DVRTInfo1"
import DBRTInfo2 from "@/components/DVRTInfo2"
import DVRTInfo3 from "@/components/DVRTInfo3"
import DVRTInfo4 from "@/components/DVRTInfo4"
import DVRTInfo5 from "@/components/DVRTInfo5"
import DVRTInfo6 from "@/components/DVRTInfo6"
import DVRTInfo_certificate from "@/components/DVRTInfo_certificate"
import Hero from "@/components/Hero"
import HeroMobile from "@/components/HeroMobile"
import Logos from "@/components/Logos"

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <HeroMobile />
      <Logos />
      <Container>
        <DBRTInfo1 />
        <DBRTInfo2 />
        <DVRTInfo3 />
        <DVRTInfo4 />
        <DVRTInfo5 />
        <DVRTInfo_certificate />
        <DVRTInfo6 />
        <CTA />
      </Container>
    </>
  )
}

export default HomePage
