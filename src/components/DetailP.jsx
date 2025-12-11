import { useParams } from 'react-router';
import usefetch from './usefetch';
import { useEffect, useState } from 'react';
import axios from 'axios';
// import { error } from 'three';

function DetailP() {

    const { id } = useParams();
    const [data, setdata] = useState({})
    useEffect(() => {
        axios.get(`https://691c6d5e3aaeed735c90cb31.mockapi.io/products/${id}`)
            .then((call) => call.data)
            .then((res) => setdata(res))
            .catch((error) => console.log(error))
    }, [])

    console.log(data);
    return (
        <div>
            <div className="p-4 bg-gray-900 text-white rounded-xl">
                <img
                    src={data.image}
                    alt={data.name}
                    className="w-full h-40 object-cover rounded-lg"
                />
                <h3 className="font-bold mt-2">{data.name}</h3>
                <p className="text-gray-300">₹{data.price}</p>

                <p className="text-sm text-gray-400 mt-1 line-clamp-2">
                    {data.description}
                </p>
            </div>
        </div>
    )
}

export default DetailP
