import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Search } from 'lucide-react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='h-screen w-screen flex flex-col items-center justify-center gap-5'>
        <h1 className='text-3xl font-semibold'>Search Devs</h1>
        <div className='flex items-center gap-1'>
          <input type="text" className='rounded border px-5 text-lg font-medium py-2' placeholder='Type the username here' />
          <button className='bg-slate-700 flex items-center gap-1 text-white py-2 px-3 text-lg font-semibold rounded '> <Search/> Buscar</button>
        </div>
    </main>
      
  )
}

export default App
