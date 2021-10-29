import React, { useState } from 'react'


function App() {
  const pricingContentMonthly = [
    {
      id: 0,
      name: "Basic",
      monthlyPrice: "$19.99",
      yearlyPrice: "$199.99",
      storage: "500 GB Storage",
      userAllowed: "2 Users Allowed", 
      transferable: "Send up to 3 GB"
    },
    {
      id: 1,
      name: "Professional",
      monthlyPrice: "$24.99",
      yearlyPrice: "249.99",
      storage: "1 TB Storage",
      userAllowed: "5 Users Allowed", 
      transferable: "Send up to 10 GB"
    },
    {
      id: 2,
      name: "Master",
      monthlyPrice: "$39.99",
      yearlyPrice: '399.99',
      storage: "2 TB Storage",
      userAllowed: "10 Users Allowed", 
      transferable: "Send up to 20 GB"
    },
  ]
  const [toggle, setToggle] = useState(false)

  // const hoverChange = 
  return (
    <div>
      <h1 className='text-gray-800 text-4xl text-center mt-8'>Our Pricing</h1>
      <div className='w-80 flex justify-between mx-auto mt-4 items-center'>
        <span className=''>Annually</span>
        <span 
        onClick={() => setToggle(() => toggle === false ? true : false)} 
        className={`${toggle ? 'justify-end': 'justify-start'} bg-primary toggle w-10 h-6 rounded-full 
        border-2 flex  items-center`}></span>
        <span>Monthly</span>
      </div>
      <div className='theHolder h-[80%] w-3/4 flex my-20 mx-auto justify-center'>

        {pricingContentMonthly.map((priceContent,index)=> 
          <div key={`c${index}`} className={`theHoverChange w-80 mx-1 bg-white rounded-md px-8 py-12 text-center shadow-md text-xs transition-all`}>
            <h3 className='border-b-0 text-sm'>{priceContent.name}</h3>
            <h1 className='text-5xl py-4 border-b'>{toggle ?priceContent.monthlyPrice : priceContent.yearlyPrice}</h1>
            <p>{priceContent.storage}</p>
            <p>{priceContent.userAllowed}</p>
            <p>{priceContent.transferable}</p>
            <button className={`w-64 border-2 border-solid my-8 px-4 py-2 rounded text-xs text-bold `}>
              LEARN MORE
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;
