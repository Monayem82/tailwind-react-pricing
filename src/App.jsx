import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/Navbar/Navbar'
import PricingOptions from './components/PricingOptions/PricingOptions';

const PricingPromise=fetch('pricingData.json').then(res=>res.json())


function App() {

  return (
    <>
      <header>
        <Navbar></Navbar>
        {/* <DaisyNav></DaisyNav> */}
      </header>

      <main className='my-6'>
        <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
          <PricingOptions PricingPromise={PricingPromise}></PricingOptions>
        </Suspense>
      </main>

      <footer>

      </footer>
    </>
  )
}

export default App
