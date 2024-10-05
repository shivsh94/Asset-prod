import './App.css'
import {lazy, Suspense} from 'react'
import { Toaster } from 'react-hot-toast';
import Spinner from './components/Spinner';
const ComingSoon = lazy(() => import('./ComingSoon'))
function App() {

  return (
    <div className="w-screen overflow-x-hidden">
      <Suspense fallback={
        <div className='w-screen h-screen flex justify-center items-center'>
          <div class="loader"></div>
        </div>
      }>
        <ComingSoon />
      </Suspense>
      <Toaster />
    </div>
  )
}

export default App
