import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewAll = () => {
    const [info, changeInfo] = useState([])
    const getinfofromAPI=()=>{
        axios.get("http://35.170.103.9:4057/getvistors").then(
            (response)=>{
                changeInfo(response.data)
            }
        ).catch()
    }
useEffect(()=>{getinfofromAPI()},[])
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Purpose</th>
                                    <th scope="col">Whom To Meet</th>
                                    <th scope="col">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    info.map(
                                        (value,index)=>{
                                            return <tr>
                                            <td>{value.firstname}</td>
                                            <td>{value.lastname}</td>
                                            <td>{value.purpose}</td>
                                            <td>{value.whomToMeet}</td>
                                            <td>{value.date}</td>
                                        </tr>
                                        }
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll
