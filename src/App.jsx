import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Navbar from "./components/Navbar"
import Model from "./components/Model"
import * as Sentry from '@sentry/react';

const App = () => {
  

  return (
    <main className="bg-black">
      {/* <Navbar />
      <Hero />
      <Highlights />
      <Model /> */}
      <button
      className="cursor-pointer"
      onClick={() => {
        throw new Error('This is your first error!');
      }}
    >
      Break the world
    </button>
    </main>
  )
}

export default App
