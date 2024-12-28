import React from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
const HomeLoader = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-black">
      <AiOutlineLoading3Quarters className="w-1/4 h-1/6 animate-spin" />
      {/* <Image src={logo} width={150} alt={"App Logo"} /> */}
    </div>
  )
}

export default HomeLoader