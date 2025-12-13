'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Home() {
  const nftContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Hero floating NFTs (only 3 in hero section)
  const heroNFTs = [
    { id: 42, rarity: 'Legendary', delay: 0, image: '/nft-teasers/teaser-1.png' },
    { id: 133, rarity: 'Epic', delay: 200, image: '/nft-teasers/teaser-2.png' },
    { id: 247, rarity: 'Rare', delay: 400, image: '/nft-teasers/teaser-3.png' },
  ];

  // Additional floating NFTs that appear on scroll (5 more - will be unique once you add images)
  const scrollNFTs = [
    { id: 369, rarity: 'Epic', delay: 0, image: '/nft-teasers/teaser-4.png' },
    { id: 512, rarity: 'Legendary', delay: 300, image: '/nft-teasers/teaser-5.png' },
    { id: 689, rarity: 'Rare', delay: 600, image: '/nft-teasers/teaser-6.png' },
    { id: 777, rarity: 'Legendary', delay: 900, image: '/nft-teasers/teaser-7.png' },
    { id: 888, rarity: 'Epic', delay: 1200, image: '/nft-teasers/teaser-8.png' },
  ];

  const carouselNFTs = [
    { id: 100, rarity: 'Legendary', image: '/nft-teasers/teaser-1.png' },
    { id: 187, rarity: 'Epic', image: '/nft-teasers/teaser-2.png' },
    { id: 274, rarity: 'Rare', image: '/nft-teasers/teaser-3.png' },
    { id: 361, rarity: 'Common', image: '/nft-teasers/teaser-1.png' },
    { id: 448, rarity: 'Epic', image: '/nft-teasers/teaser-2.png' },
    { id: 535, rarity: 'Legendary', image: '/nft-teasers/teaser-3.png' },
    { id: 622, rarity: 'Rare', image: '/nft-teasers/teaser-1.png' },
    { id: 709, rarity: 'Epic', image: '/nft-teasers/teaser-2.png' },
    { id: 796, rarity: 'Legendary', image: '/nft-teasers/teaser-3.png' },
    { id: 883, rarity: 'Rare', image: '/nft-teasers/teaser-1.png' },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Background Texture */}
      <div 
        className="fixed inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage: 'url(/background-texture.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.3
        }}
      ></div>
      
      {/* Paper Texture Base */}
      <div className="paper-texture"></div>
      
      {/* Pen Sketch Texture - Behind floating cards */}
      <div className="pen-sketch-texture"></div>
      
      {/* Psychedelic Background Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-5 z-[2]">
        <div className="absolute inset-0 rave-pattern"></div>
      </div>

      {/* Floating Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10">
        <nav className="container mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <div className="text-2xl md:text-3xl font-bold">
            <span className="psy-text" data-text="RaveGods">RaveGods</span>
          </div>
          <div className="flex gap-6 md:gap-8 items-center text-sm md:text-base">
            <a href="#collection" className="hover:text-pink-500 transition-colors">Collection</a>
            <a href="#about" className="hover:text-cyan-500 transition-colors">About</a>
            <a href="#utilities" className="hover:text-yellow-500 transition-colors">Utilities</a>
            <a href="https://launchmynft.io/collections/ELdjUdNVSNFGDrw5SK6DDaMry1bkGnRqpVwRyUiVbm6k/cY4HjBj3zaHepHiq9MiC" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white text-black hover:bg-gray-100 transition-all">
              MINT HERE
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20 px-4 z-10">
        <div className="text-center z-20 relative fade-in-section max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6">
            <span className="psy-text drip" data-text="RaveGods">RaveGods</span>
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl mb-4 font-light">
            1000 Unique NFTs on Solana
          </p>
          <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-2xl mx-auto">
            Connected to merch drops, discounted rave access, and a thriving cultural ecosystem in the Rave/House scene
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://launchmynft.io/collections/ELdjUdNVSNFGDrw5SK6DDaMry1bkGnRqpVwRyUiVbm6k/cY4HjBj3zaHepHiq9MiC" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-black font-semibold text-lg hover:bg-gray-100 transition-all inline-block">
              MINT HERE
            </a>
            <a href="#about" className="px-8 py-4 border-2 border-white text-white font-semibold text-lg hover:bg-white hover:text-black transition-all inline-block">
              Learn More
            </a>
          </div>
        </div>

        {/* Floating NFT Teasers - Background (Only 3 in hero) */}
        <div ref={nftContainerRef} className="absolute inset-0 overflow-hidden pointer-events-none z-10">
          {heroNFTs.map((nft, index) => {
            // Position NFTs away from center (avoid 30-70% horizontal, 30-70% vertical)
            const positions = [
              { left: '5%', top: '10%' },
              { left: '85%', top: '15%' },
              { left: '8%', top: '80%' },
            ];
            const pos = positions[index] || { left: '90%', top: '75%' };
            return (
              <div
                key={nft.id}
                className={`absolute nft-float-${index % 4}`}
                style={{
                  animationDelay: `${nft.delay}ms`,
                  left: pos.left,
                  top: pos.top,
                }}
              >
                <div className="bg-white rounded-lg p-2 border-3 border-black shadow-2xl transform hover:scale-110 transition-all duration-500 w-24 md:w-32 psych-border" style={{ 
                  borderWidth: '3px',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
                }}>
                  <div className="aspect-square rounded mb-2 overflow-hidden border-2 border-black relative" style={{ borderWidth: '2px' }}>
                    <Image
                      src={nft.image}
                      alt={`RaveGod #${nft.id}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 96px, 128px"
                      unoptimized
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-black font-bold text-xs" style={{ textShadow: '0 1px 2px rgba(255, 255, 255, 0.5)' }}>#{nft.id}</p>
                    <p className="text-xs mt-0.5">
                      <span className="psy-text" data-text={nft.rarity} style={{ fontSize: 'inherit' }}>{nft.rarity}</span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* MINT HERE Section */}
      <section className="relative py-20 md:py-32 flex items-center justify-center z-10 fade-in-section">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-black rounded-lg p-8 md:p-16 border border-white/20 psych-border-light text-center" style={{ backgroundColor: '#000000', opacity: 1 }}>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8">
              <span className="psy-text drip" data-text="MINT HERE">MINT HERE</span>
            </h2>
            <a 
              href="https://launchmynft.io/collections/ELdjUdNVSNFGDrw5SK6DDaMry1bkGnRqpVwRyUiVbm6k/cY4HjBj3zaHepHiq9MiC" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block transform hover:scale-105 transition-all duration-300"
              style={{ textDecoration: 'none', display: 'block' }}
            >
              <div className="bg-white rounded-lg p-6 md:p-8 border-3 border-black shadow-2xl psych-border mb-6" style={{ 
                borderWidth: '3px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
              }}>
                <div className="text-center">
                  <div className="w-40 md:w-64 h-20 md:h-32 mx-auto mb-4 flex items-center justify-center">
                    <img
                      src="/launchmynft-logo.svg"
                      alt="LaunchMyNFT Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-black font-bold text-lg md:text-xl" style={{ textShadow: '0 1px 2px rgba(255, 255, 255, 0.5)' }}>
                    Click to Mint
                  </p>
                </div>
              </div>
            </a>
            <p className="text-lg md:text-xl text-gray-300 mt-6">
              Click above to mint your RaveGod NFT
            </p>
          </div>
        </div>
      </section>

      {/* Spinning Logo Section */}
      <section className="relative py-32 flex items-center justify-center z-10">
        <div className="bg-black rounded-lg p-8 md:p-12 border border-white/20 psych-border-light" style={{ backgroundColor: '#000000', opacity: 1 }}>
          <div className="relative z-30">
            <div className="spin-logo">
              <Image
                src="/logo.png"
                alt="RaveGods Logo"
                width={400}
                height={400}
                className="w-64 md:w-80 lg:w-96 h-auto"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Floating NFTs Section - Appears on Scroll */}
      <section className="min-h-screen relative overflow-hidden fade-in-section z-10 flex items-center justify-center">
        <div className="text-center z-20 relative fade-in-section max-w-4xl mx-auto px-4">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-center">
            <span className="psy-text" data-text="The Vision">The Vision</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Dive deeper into the RaveGods ecosystem. Learn about our roadmap, tokenomics, and how we're building the future of rave culture on the blockchain.
          </p>
          <div className="flex justify-center">
            <a 
              href="/whitepaper.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 py-4 bg-white text-black font-semibold text-lg hover:bg-gray-100 transition-all inline-block rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              style={{ backgroundColor: '#ffffff', opacity: 1, background: '#ffffff' }}
            >
              View White Paper
            </a>
          </div>
        </div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
          {scrollNFTs.map((nft, index) => {
            // Position NFTs away from center text area
            // Avoid center region (30-70% horizontal, 30-70% vertical)
            const getPosition = (idx: number) => {
              const positions = [
                { left: '3%', top: '12%' },
                { left: '88%', top: '18%' },
                { left: '5%', top: '82%' },
                { left: '92%', top: '75%' },
                { left: '2%', top: '45%' },
              ];
              return positions[idx % positions.length];
            };
            const pos = getPosition(index);
            return (
            <div
              key={nft.id}
              className={`absolute nft-float-${index % 4}`}
              style={{
                animationDelay: `${nft.delay}ms`,
                left: pos.left,
                top: pos.top,
              }}
            >
              <div className="bg-white rounded-lg p-2 border-3 border-black shadow-2xl transform hover:scale-110 transition-all duration-500 w-24 md:w-32 psych-border" style={{ 
                borderWidth: '3px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
              }}>
                <div className="aspect-square rounded mb-2 overflow-hidden border-2 border-black relative" style={{ borderWidth: '2px' }}>
                  <Image
                    src={nft.image}
                    alt={`RaveGod #${nft.id}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 96px, 128px"
                    unoptimized
                  />
                </div>
                <div className="text-center">
                  <p className="text-black font-bold text-xs" style={{ textShadow: '0 1px 2px rgba(255, 255, 255, 0.5)' }}>#{nft.id}</p>
                  <p className="text-xs mt-0.5">
                    <span className="psy-text" data-text={nft.rarity} style={{ fontSize: 'inherit' }}>{nft.rarity}</span>
                  </p>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center py-20 px-4 fade-in-section relative z-10">
        <div className="container mx-auto max-w-4xl relative z-20">
          <div className="bg-black rounded-lg p-8 md:p-12 border border-white/20 fade-in-section psych-border-light" style={{ backgroundColor: '#000000', opacity: 1 }}>
            <h2 className="text-5xl md:text-7xl font-bold mb-12 text-center">
              <span className="psy-text" data-text="Welcome to the Rave">Welcome to the Rave</span>
            </h2>
            <div className="space-y-8 text-lg md:text-xl text-gray-300 leading-relaxed">
            <p className="fade-in-section">
              RaveGods is more than just an NFT collection—it's a cultural movement connecting digital art with the real-world rave and house music scene. Each of the 1000 unique NFTs on Solana represents your membership into an exclusive community.
            </p>
            <p className="fade-in-section">
              We're building a thriving ecosystem where NFT holders gain access to exclusive merch drops, discounted tickets to real rave events, and participate in a community that celebrates the intersection of blockchain technology and dance culture.
            </p>
            <p className="fade-in-section">
              Our vision extends beyond the digital realm. We're hosting real events where profits flow back into the NFT collection and our native token, creating a sustainable ecosystem that rewards our community while supporting the rave culture we love.
            </p>
          </div>
          </div>
        </div>
      </section>

      {/* Utilities Section */}
      <section id="utilities" className="min-h-screen flex items-center py-20 px-4 fade-in-section text-white relative z-10">
        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-16 text-center">
            <span className="psy-text" data-text="Real-World Utilities">Real-World Utilities</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Merch & Loot Drops',
                description: 'Exclusive access to limited edition merchandise and loot drops reserved for RaveGod holders.',
                icon: '🎁',
              },
              {
                title: 'Discounted Rave Access',
                description: 'Get special discounts on tickets to curated rave and house music events in your area.',
                icon: '🎵',
              },
              {
                title: 'Cultural Ecosystem',
                description: 'Join a thriving community connected to the real rave/house scene with networking opportunities.',
                icon: '🌐',
              },
              {
                title: 'Real Events',
                description: 'We host actual rave events where profits are reinvested into the NFT and token ecosystem.',
                icon: '🎪',
              },
              {
                title: 'Token Rewards',
                description: 'Earn native tokens from events and activities that drive value back to holders.',
                icon: '💰',
              },
              {
                title: 'Community Benefits',
                description: 'Access exclusive perks, early announcements, and voting rights on community decisions.',
                icon: '👥',
              },
            ].map((utility, index) => (
              <div
                key={index}
                className="bg-black rounded-lg p-8 border border-white/20 hover:border-white/40 transition-all transform hover:scale-105 fade-in-section psych-border-light"
                style={{ backgroundColor: '#000000', opacity: 1 }}
              >
                <div className="text-5xl mb-4">{utility.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{utility.title}</h3>
                <p className="text-gray-300 leading-relaxed">{utility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collection Preview */}
      <section id="collection" className="min-h-screen flex items-center py-20 px-4 fade-in-section relative overflow-hidden z-10">
        <div className="container mx-auto max-w-6xl z-10">
          <div className="bg-black rounded-lg p-8 md:p-12 border border-white/20 fade-in-section psych-border-light" style={{ backgroundColor: '#000000', opacity: 1 }}>
            <h2 className="text-5xl md:text-7xl font-bold mb-16 text-center">
              <span className="psy-text" data-text="The Collection">The Collection</span>
            </h2>
            <p className="text-xl text-gray-300 text-center mb-12 max-w-2xl mx-auto">
              1000 unique RaveGods, each with distinct traits and rarities. Minting on Magic Eden.
            </p>
            
            {/* Sliding NFT Carousel */}
            <div className="relative overflow-hidden py-8">
            <div className="flex gap-6 animate-slide-left" style={{ width: 'max-content' }}>
              {[...carouselNFTs, ...carouselNFTs].map((nft, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-64 md:w-80 bg-white rounded-lg p-6 border-2 border-black shadow-lg hover:scale-105 transition-transform psych-border"
                >
                  <div className="aspect-square rounded mb-4 overflow-hidden border-2 border-black relative">
                    <Image
                      src={nft.image}
                      alt={`RaveGod #${nft.id}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 256px, 320px"
                      unoptimized
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-black font-bold text-lg">RaveGod #{nft.id}</p>
                    <p className="text-gray-700 mt-2">
                      <span className="psy-text" data-text={nft.rarity} style={{ fontSize: 'inherit' }}>{nft.rarity}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

            <div className="text-center mt-12">
              <a href="https://launchmynft.io/collections/ELdjUdNVSNFGDrw5SK6DDaMry1bkGnRqpVwRyUiVbm6k/cY4HjBj3zaHepHiq9MiC" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-black font-semibold text-lg hover:bg-gray-100 transition-all inline-block">
                MINT HERE
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 fade-in-section text-white" style={{ position: 'relative', zIndex: 10 }}>
        <div className="container mx-auto max-w-4xl" style={{ position: 'relative', zIndex: 10 }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '1,000', label: 'Total NFTs' },
              { value: 'Solana', label: 'Blockchain' },
              { value: 'Magic Eden', label: 'Marketplace' },
              { value: 'Active', label: 'Community' },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-black rounded-lg p-6 border border-white/20 text-center stats-box psych-border-light"
                style={{ 
                  backgroundColor: '#000000',
                  background: '#000000',
                  opacity: 1,
                  position: 'relative',
                  zIndex: 10
                }}
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  <span className="psy-text" data-text={stat.value} style={{ fontSize: 'inherit' }}>{stat.value}</span>
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t border-white/10 fade-in-section bg-black">
        <div className="text-center">
          <div className="text-3xl font-bold mb-4">
            <span className="psy-text" data-text="RaveGods">RaveGods</span>
          </div>
          <p className="text-gray-300 mb-6">Join the revolution. Feel the beat. Own the culture.</p>
          <div className="flex gap-4 justify-center mb-6 flex-wrap">
            <a 
              href="https://www.x.com/Rave_Gods" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 bg-white text-black font-semibold text-base hover:bg-gray-100 transition-all inline-block rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              style={{ backgroundColor: '#ffffff', opacity: 1, background: '#ffffff' }}
            >
              Follow on X
            </a>
            <a 
              href="https://discord.gg/ZYJ3nQ8Je" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 bg-white text-black font-semibold text-base hover:bg-gray-100 transition-all inline-block rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              style={{ backgroundColor: '#ffffff', opacity: 1, background: '#ffffff' }}
            >
              Discord
            </a>
            <a 
              href="https://t.me/RaveGodsSol" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 bg-white text-black font-semibold text-base hover:bg-gray-100 transition-all inline-block rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              style={{ backgroundColor: '#ffffff', opacity: 1, background: '#ffffff' }}
            >
              Telegram
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors px-4 py-2">Instagram</a>
            <a href="https://magiceden.io" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors px-4 py-2">Magic Eden</a>
          </div>
          <p className="text-gray-400 text-sm">© 2025 RaveGods. All rights reserved.</p>
          <p className="text-gray-400 text-xs mt-2">Minting on LaunchMyNFT</p>
        </div>
      </footer>
    </div>
  );
}
