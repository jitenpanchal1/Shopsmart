import React, { useState } from 'react'

export default function usefetch(url) {
    const [data, setdata] = useState([])

    const fetchdata = async () => {
        try {
            const call = await fetch(url)
            if (call.ok) {
                const read = await call.json()
                if (read) {
                    setdata(read)
                }
            }

        } catch (error) {
          console.log("Error fetching data:", error);  
        }
    }

    return { data, fetchdata }
}
