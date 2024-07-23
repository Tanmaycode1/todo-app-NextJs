"use client"
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

const Navbar1 = () => {
    const searchParams = useSearchParams()
    const todosFilter = searchParams.get("todos")
    
  return (
    <nav className='flex items-center justify-between w-[50%] border-b  border-[#ccc]'>
      <Link href="/" className=  { todosFilter === null ? "active": " "}>
        <button className=' active:text-[#68B984] text-md font-extrabold text-gray-500 
        font-mono px-4 focus:border-b border-10 focus:border-b-[#68B984] '>All</button>
      </Link>

      <Link href="/?todos=active" className=  { todosFilter === "active" ? "active": ""}>
        <button className=' active:text-[#68B984] text-md font-extrabold text-gray-500 
        font-mono px-4 focus:border-b border-10 focus:border-b-[#68B984] '>Active</button>
      </Link>
      
      <Link href="/?todos=completed" className=  { todosFilter === "completed" ? "active": ""}>
        <button className=' active:text-[#68B984] text-md font-extrabold text-gray-500 
        font-mono px-4 focus:border-b border-10 focus:border-b-[#68B984] '>Completed</button>
      </Link>
    </nav> 
  )
}

export default Navbar1
