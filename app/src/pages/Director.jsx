import React from 'react'

const Director = () => {
  return (
    <div className='bg-MainColor h-screen px-14 py-10'>
    
      <h1 className='text-white text-2xl font-Roboto '>Directores</h1>

<table className="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-800 text-gray-200">
  <tr className="text-left border-b border-gray-300">
    <th className="px-4 py-3">Firstname</th>
    <th className="px-4 py-3">Lastname</th>
    <th className="px-4 py-3">Age</th>
    <th className="px-4 py-3">Sex</th>
  </tr>
  <tr className="bg-gray-700 border-b border-gray-600">
    <td className="px-4 py-3">Jill</td>
    <td className="px-4 py-3">Smith</td>
    <td className="px-4 py-3">50</td>
    <td className="px-4 py-3">Male</td>
  </tr>    

  <tr className="bg-gray-700 border-b border-gray-600">
    <td className="px-4 py-3">Jill</td>
    <td className="px-4 py-3">Smith</td>
    <td className="px-4 py-3">50</td>
    <td className="px-4 py-3">Male</td>
  </tr>    

  <tr className="bg-gray-700 border-b border-gray-600">
    <td className="px-4 py-3">Jill</td>
    <td className="px-4 py-3">Smith</td>
    <td classNames="px-4 py-3">50</td>
    <td className="px-4 py-3">Male</td>
  </tr>    

</table>
    </div>
  )
}

export default Director