import React from 'react'

const Clientdetails = ({clientAddress, clientName}) => {
  return (
    <>
      <section className="mt-5">
        <h2 className="text-xl font-bold">{clientName}</h2>
        <p className="text-xl">{clientAddress}</p>
      </section>
    </>
  )
}

export default Clientdetails
