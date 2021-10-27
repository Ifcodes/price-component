import React from 'react'

function App() {
  const pricingContentMonthly = [
    {
      name: "Basic",
      price: "$19.99",
      storage: "500 GB Storage",
      userAllowed: "2 Users Allowed", 
      transferable: "Send up to 3 GB"
    },
    {
      name: "Professional",
      price: "$24.99",
      storage: "1 TB Storage",
      userAllowed: "5 Users Allowed", 
      transferable: "Send up to 10 GB"
    },
    {
      name: "Master",
      price: "$39.99",
      storage: "2 TB Storage",
      userAllowed: "10 Users Allowed", 
      transferable: "Send up to 20 GB"
    },
  ]
  return (
   <div className='theHolder w-3/4 flex my-40 mx-auto justify-center'>
    {pricingContentMonthly.map((priceContent,index)=> 
      <div key={`c${index}`} className='w-80 mx-1 bg-white rounded-md p-8 text-center shadow-md'>
        <h3>{priceContent.name}</h3>
        <h1 className='font-bold text-5xl'>{priceContent.price}</h1>
        <p>{priceContent.storage}</p>
        <p>{priceContent.userAllowed}</p>
        <p>{priceContent.transferable}</p>
        <button>LEARN MORE</button>
      </div>
    )}
   </div>
  );
}

export default App;
