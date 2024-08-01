import DetailCard from '@/components/detail-card/DetailCard'
import FlipClock from '@/components/flip-clock/FlipClock'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/nav/Navbar'
import { detailsInfo } from '@/lib/resueableJson'

export default function Home() {
  return (
    <main className=''>
      <div className='cover relative bg-hero-img-sm lg:bg-hero-img-lg bg-cover bg-center h-[80vh] p-4 flex flex-col justify-between pb-20 lg:px-[80px]'>
        <Navbar />
        <FlipClock />
      </div>
      <div className='bg-primaryColor py-5 px-5 pb-7 lg:flex gap-14 lg:px-[100px]'>
        {detailsInfo.map(({ subTitle, title }, index) => (
          <DetailCard subtitle={subTitle} title={title} key={index} />
        ))}
      </div>
      <Footer />
    </main>
  )
}
