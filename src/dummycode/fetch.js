import React, { useEffect, useState } from 'react'

export default function App() {

  const [alldata, setalldata] = useState([])
  const [loading, setloading] = useState(false)
  const [error, seterror] = useState(null)


  const calldata = async () => {
    try {
      const call = await fetch("https://fakestoreapi.com/products")
      if (!call.ok) {
        seterror("something wrong at the server side")
      } else if (call.ok) {
        setloading(true)
        const read = await call.json()
        if (!read.length) {
          seterror("no data found")
        } else {
          setalldata(read)
          setloading(false)
        }
      }
    } catch (error) {
      seterror("network error")
    }
  }

  useEffect(() => {
    calldata()
  }, [])

  return (
    <div className="p-6">
      {loading && (
        <h1 className="text-center text-xl font-semibold text-gray-600">
          Loading data...
        </h1>
      )}

      {error && (
        <h1 className="text-center text-xl font-semibold text-red-600">
          {error}
        </h1>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {alldata.map((item, index) => (
            <div
              key={index}
              className="border rounded-xl shadow-md p-4 bg-white hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-contain mb-4"
              />

              <h2 className="text-lg font-bold">{item.title}</h2>

              <p className="text-gray-600 mt-1">{item.description}</p>

              <p className="text-blue-600 font-semibold mt-2">₹{item.price}</p>

              <p className="text-sm text-gray-500">{item.category}</p>

              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>

  )
}
