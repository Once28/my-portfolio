'use client'
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import Gallery from '../components/Gallery';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Carousel />
      <Gallery />
    </div>
  );
}
