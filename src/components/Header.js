import React from 'react'

const header = ({handlePrint}) => {
  return (
    <>
     <header 
    //  className="flex flex-col items-center justify-center mb-5 xl:flex-row
    //  xl:justify-between relative mr-15"
     >
       <div>
       <div >
             <h2 className=" flex font-bold item-center justify-center  text-2xl mb-3  ">
              Bright Star </h2>
              <p className="flex justify-center font-bold">Tailoring Accesories</p> 
      
             </div> 
          <div>

          <ul className="flex items-center justify-center flex-wrap ">
         {/* Print Btn */}
        <li><button onClick={handlePrint}
        className="btn btn-print  bg-blue-500 text-white font-bold py-1 px-3 rounded shadow border-2
        border-blue-500 hover:bg-transparent hover:text-blue-500
        transition-all duration-300 mt-5 ">Print
</button></li>

{/* Download button */}
<li><button 
className="btn btn-download  bg-yellow-500 text-white font-bold py-1 px-2 rounded shadow border-2
border-yellow-500 hover:bg-transparent hover:text-yellow-500
transition-all duration-300 mt-5 ml-2 mr-2"
>Download
</button></li>

{/* Send Button */}
<li><button 
className="btn btn-send bg-green-500 text-white font-bold py-1 px-3 rounded shadow border-2
border-green-500 hover:bg-transparent hover:text-green-500
transition-all duration-300 mt-5">Send
</button></li>
</ul>
          </div>
       
        
       </div>
      
        
      </header> 
    </>
  )
}

export default header
