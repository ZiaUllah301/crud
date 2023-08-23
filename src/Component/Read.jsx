import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Read = () => {
    const [data, setdata] = useState([]);
    function getData() {
        axios.get("https://6493f9050da866a95366f10a.mockapi.io/CRUD")
            .then((res) => {
                console.log(res.data);
                setdata(res.data);
            });
    };
    function handleDelete(id) {
        axios.delete(`https://6493f9050da866a95366f10a.mockapi.io/CRUD/${id}`
        ).then(() => {
            getData();
        });

    };
    const setLocalStorage = (id, name, email) => {
        localStorage.setItem("id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
    }


    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <div className="py-8 px-4">
                <h2 className="text-2xl font-semibold mb-4">User List</h2>
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50 broder border-b">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    #
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Name
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Email
                                </th>

                            </tr>
                        </thead>
                        {data.map((eachData) => {
                            return (
                                <>
                                    <tbody className="">
                                        <tr>
                                            <th className=' row'>{eachData.id}</th>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {eachData.name}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {eachData.email}
                                            </td>
                                            <td>
                                                <Link to="/update">
                                                    <button className='bg-green-500 px-4 py-2 text-white' onClick={() => setLocalStorage(eachData.id, eachData.name, eachData.email)}>Edit</button>
                                                </Link>
                                            </td>
                                            <td>
                                                <button className='bg-red-500 px-4 py-2 text-white' onClick={(() => handleDelete(eachData.id))}>Delete</button>
                                            </td>
                                        </tr>

                                    </tbody>
                                </>
                            )
                        })}

                    </table>
                </div>
            </div>
        </>
    )
}

export default Read