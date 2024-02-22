import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function HttpDemo8() {
    let [githubData, setGithubdata] = useState([])

    const userNames = ['sanjaysamantra1', 'defunkt', 'evanphx'];

    const fetchGithubData = async () => {
        let promiseArr = [];
        for (let userName of userNames) {
            let promise = axios.get(`https://api.github.com/users/${userName}`)
            promiseArr.push(promise);
        }
        try {
            let responseArr = await axios.all(promiseArr);
            console.log(responseArr);
            responseArr = responseArr.map(resp => resp.data)
            setGithubdata(responseArr)
        } catch (err) {
            console.log('SOmething went wrong')
        }
    }

    useEffect(() => {
        fetchGithubData()
    }, [])


    return (
        <>
            <h2 className='text-center'>GitHub Data using axios.all</h2>
            <table className='table table-bordered table-striped'>
                <tbody>
                    {githubData.map(row => {
                        return <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>{row.login}</td>
                            <td>{row.name}</td>
                            <td>{row.email}</td>
                            <td>{row.followers}</td>
                            <td>{row.location}</td>
                            <td>{row.public_repos}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </>

    )
}
