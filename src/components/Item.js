import axios from "axios";
import React, {useState, useEffect} from "react";
import { FaPaintBrush } from "react-icons/fa";


const Item = ({gist, onClick}) => {

    {/* Item component should render last 3 forked users*/}
    const [forkUsers, setForkUsers] = useState([]);

    useEffect(()=>{
        {/** in useEffect hook we are calling the api to take last 3 username who have forked it */}
 //       getLastForkedUsers();
    }, [])

    const getLastForkedUsers = async () => {
        const result = await axios.get(`https://api.github.com/gists/${gist.id}/forks`);
        setForkUsers(result.data);
    }

    let pairs = [];
    Object.entries(gist.files).map(([key, value]) => ({ [key]: pairs.push([value.filename, value.raw_url]) }));

    return (
        <div className="flex flex-col items-center m-1 cursor-pointer hover:bg-gray-800 rounded-md p-1">
            <div 
                className="flex flex-col items-center border border-gray-300 rounded-lg bg-gray-500 m-2 p-3">
                <h2>{gist.url}</h2>
                <p>Description :{gist.description}</p>
                <div className="flex flex-row aligns-center jusify-center">
                    <h2 className="p-2 m-1">File type (extension): </h2>
                    {pairs.map(pair => (
                        <span onClick={() => onClick(pair[1])} 
                            className="p-2 m-1 bg-blue-100 border border-blue-150 rounded-md hover:bg-blue-300">
                        {pair[0].toString().split('.')[1] != null ? pair[0].toString().split('.')[1] : pair[0].toString()}
                        </span>
                    ))}
                    {/** We are splitting the name file in order to get the extension */}
                    {/** We are rendering either the extension either the file which doesn't have any extension*/}
                </div>
            </div>
        </div>
    );
}

export default Item;