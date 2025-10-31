import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-purple-900">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            RaveGods
          </div>
          <div className="flex gap-6">
            <button className="text-white hover:text-purple-400 transition-colors">Collection</button>
            <button className="text-white hover:text-purple-400 transition-colors">About</button>
            <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all">
              Connect Wallet
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
            Welcome to RaveGods
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Own unique digital collectibles in the metaverse. Join the revolution of digital art and ownership.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105">
              Explore Collection
            </button>
            <button className="px-8 py-4 border-2 border-purple-500 rounded-full text-purple-400 font-semibold text-lg hover:bg-purple-500 hover:text-white transition-all">
              Learn More
            </button>
          </div>
        </div>

        {/* NFT Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all transform hover:scale-105">
              <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl mb-4 flex items-center justify-center">
                <div className="text-6xl">🎭</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">RaveGod #{item * 100}</h3>
              <p className="text-gray-400 mb-4">Legendary Collection</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">Price</p>
                  <p className="text-purple-400 font-bold">0.5 ETH</p>
                </div>
                <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">10K</div>
            <div className="text-gray-400">Total Items</div>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 text-center">
            <div className="text-3xl font-bold text-pink-400 mb-2">8.5K</div>
            <div className="text-gray-400">Owners</div>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">2.4K</div>
            <div className="text-gray-400">Volume</div>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 text-center">
            <div className="text-3xl font-bold text-pink-400 mb-2">1.2 ETH</div>
            <div className="text-gray-400">Floor Price</div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-16 border-t border-purple-500/20">
        <div className="text-center text-gray-400">
          <p>© 2025 RaveGods. All rights reserved.</p>
          <div className="flex gap-6 justify-center mt-4">
            <a href="#" className="hover:text-purple-400 transition-colors">Twitter</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Discord</a>
            <a href="#" className="hover:text-purple-400 transition-colors">OpenSea</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
