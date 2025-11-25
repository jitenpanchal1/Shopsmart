import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Login, Logout } from '../reduxslices/user'

function Header() {

    const { isauth, userdetail } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const [detail, setdetail] = useState({
        username: "",
        password: ""
    })
    const [error, seterror] = useState(null)
    const [loading, setloading] = useState(false)

    console.log(detail)

    const handchange = (e) => {
        setdetail({ ...detail, [e.target.name]: e.target.value })
    }

    const adduser = async (e) => {
        e.preventDefault()
        setloading(true)
        seterror(null)
        try {
            const call = await fetch('https://691c6d5e3aaeed735c90cb31.mockapi.io/userlogin', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    username: detail.username,
                    password: detail.password
                })
            })

            if (!call.ok) {
                seterror("invalid inputs")
                setloading(false)
                return;
            }

            const read = await call.json()
            setloading(false)

            dispatch(Login(read))

        } catch (error) {
            seterror("network error")
        }
    }


    return (
        <div>
            {loading && <h1>Loading...</h1>}
            {error && <h1 className='text-red-600'>{error}</h1>}
            {isauth ? (
                <div>
                    logout
                </div>) : (
                <div>
                    <form onSubmit={adduser}>
                        <input type="text" placeholder='Enter name' value={detail.username} name='username' onChange={handchange} />
                        <input type="password" name="password" value={detail.password} placeholder='enter password' onChange={handchange} />
                        <input type="submit" value="login" />
                    </form>
                </div>
            )}
            <header>

            </header>
        </div>
    )
}

export default Header
