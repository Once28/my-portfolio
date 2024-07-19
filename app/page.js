'use client'
import Carousel from '../components/Carousel';
import Gallery from '../components/Gallery';
import '../styles/globals.css';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Carousel />
      <Gallery />
    </div>
  );
}
