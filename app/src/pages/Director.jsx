import React from 'react'
const DirectorList = [
  {
    Nombre: "Ruben Fleischer",
    Peliculas: 10,
  },
  {
    Nombre: "Christopher Nolan",
    Peliculas: 4,
  },
  {
    Nombre: "Seth MacFarlane",
    Peliculas: 3,
  },
  {
    Nombre: "Peter Mortimer",
    Peliculas: 1,
  },
  {
    Nombre: "Ruben Fleischer",
    Peliculas: 10,
  },
  {
    Nombre: "Christopher Nolan",
    Peliculas: 4,
  },
  {
    Nombre: "Seth MacFarlane",
    Peliculas: 3,
  },
  {
    Nombre: "Peter Mortimer",
    Peliculas: 1,
  },
]
const DirectorClass = "bg-SecondaryColor mx-8 my-8 p-2 border rounded-md border-LigthBlueText"
const Director = () => {
  return (
    <div className='bg-MainColor h-screen px-20 py-16'>
    
      <h1 className='text-white text-2xl font-Roboto mb-4'>Directores</h1>
      <div className=' grid grid-cols-4'>

      {DirectorList.map(({ Nombre, Peliculas}) => (
        <div className={DirectorClass}>
          <div key={Nombre} className="font-medium text-white mb-2  text-center pt-1.5 ">{Nombre}<span className='text-LigthBlueText'> ({Peliculas})</span></div>
        </div>
      ))}

      </div>

    </div>
  )
}

export default Director