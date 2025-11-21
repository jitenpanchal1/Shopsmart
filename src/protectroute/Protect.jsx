import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router';

function Protect({ children }) {

    const navigate = useNavigate();

    const islogin = useSelector((state) => state.auth.isauth);
    useEffect(() => {
        if (!islogin) {
            window.open("/login", "_blank")
            navigate("/", { replace: true })
        }
    }, [navigate, islogin])

    return children

}

export default Protect
