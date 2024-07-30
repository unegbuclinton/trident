import DetailCard from '@/components/detail-card/DetailCard'
import FlipClock from '@/components/flip-clock/FlipClock'
import Navbar from '@/components/nav/Navbar'

export default function Home() {
  return (
    <main className=''>
      <div
        style={{
          backgroundImage: "url('hero-img.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '80vh',
        }}
        className='p-4 flex flex-col justify-between pb-20'
      >
        <Navbar />
        <FlipClock />
      </div>
      <div className='bg-primaryColor py-6 px-5 mb-7'>
        <DetailCard />
        <DetailCard />
        <DetailCard />
      </div>
    </main>
  )
}
