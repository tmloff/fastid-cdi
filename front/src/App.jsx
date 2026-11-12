import { useState } from 'react'
import Modal from 

function Button({ children }) {
  return <button className="bg-black/80 cursor-pointer text-white p-2 px-3 rounded-lg" >{children}</button>
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Modal></Modal>
      <div className="flex items-center justify-center w-full h-screen flex-col gap-10" >
        <h1 className="font-bold text-5xl" >Fast Id</h1>
        <div className="flex flex-row gap-2">
          <Button>Première entrée au CDI</Button>
          <Button>M'enregistrer</Button>
        </div>
      </div>
    </>
  )
}

export default App
