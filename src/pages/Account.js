import axios from 'axios'
import React, { useEffect, useState, useContext } from 'react'
import { BACKEND } from '../utils/utils'
import AuthContext from '../context/AuthProvider'

export default function AccountPage() {

    //const [approved, setApproved] = useState()
        const dataContext = useContext(AuthContext)

    // useEffect(() => {
    //     axios.get(BACKEND, '/user/login')
    //     .then((res) => {
    //         console.log(res.data)
    //         setApproved(res.user)
    //     }).catch((error) => console.log(error))
    // })
 console.log("AuthContext", dataContext)
    return (
        <>
        <h2>Account</h2>
        </>
    )
}