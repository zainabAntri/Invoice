import React from 'react'

const Main = ({name1,name2,contact1,contact2}) => {
  return (
    <section className="flex flex-col items-start justify-start relative">
        <h2 className="text-xl font-bold">{name1}</h2>
        <p className="text-xl">{contact1}</p>
        <h2 className="text-xl font-bold">{name2}</h2>
        <p className="text-xl">{contact2}</p>
      </section>
  )
}

export default Main

