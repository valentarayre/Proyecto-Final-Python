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
const DirectorClass = "bg-SecondaryColor mx-2 my-8 p-2 border rounded-md border-LigthBlueText w-32 mdl:mx-8 md:w-48  md:mx-16 "
const Director = () => {
  return (
    <div className='bg-MainColor px-5 py-16 min-h-screen'>
    
      <h1 className='text-white text-2xl font-Roboto mb-4 mdl:mx-8 md:mx-16'>Directores</h1>
      <div className='grid grid-cols-2 ssm:grid-cols-3 mdl:grid-cols-3 gap-3 md:gap-0 md:px-12 lg:grid-cols-6'>

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