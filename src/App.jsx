import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/Navbar/Navbar'
import PricingOptions from './components/PricingOptions/PricingOptions';
import ResultChart from './components/ResultChart/ResultChart';
import axios from 'axios';
import MarksChar from './components/MarksChart/MarksChar';

const PricingPromise=fetch('pricingData.json').then(res=>res.json())
const marksChartpromize=axios.get('resultData.json')


function App() {
  console.log(marksChartpromize)
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


        <Suspense>
          <MarksChar marksChartpromize={marksChartpromize}></MarksChar>
        </Suspense>

      <ResultChart></ResultChart>

      </main>

      <footer>

      </footer>
    </>
  )
}

export default App
