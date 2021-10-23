import axios from 'axios';
import { useState } from 'react';
import './App.css';

import Header from './components/Header';
import ListGists from './components/ListGists';

function App() {

  const [gists, setGists]                   = useState([]);
  const [userSelected, setUserSelected]     = useState([]);
  const [dataAvailable, setDataAvailable]   = useState(false);
  const [innerText, setInnerText]           = useState('');

  const getGistsByUser = async () =>{
    const endPoint = `https://api.github.com/users/${userSelected}/gists`;
    setDataAvailable(true);
    const response = await axios.get(endPoint);

    if(userSelected == undefined || userSelected == "")
      return setDataAvailable(false);

    setGists(response.data);
  }

  const getText = (event) =>{
    setUserSelected(event.target.value);
  }

  const getContentOfFile = async (file) =>{
    let rawUrl="";
    {/** Getting raw_url from selected file */}
    Object.entries(file).map(([key, value]) => ({ [key]: rawUrl = value.raw_url }));

    const result = await axios.get(rawUrl);
    setInnerText(result.data);
    
  }
  return (
    <div className="App">
      {/* Header of current app */}
      <Header 
        onSearchClick={getGistsByUser}
        onChangeText={getText}
      />

      {/* Body of current app */}
      <div className="">
        <div className="flex items-center justify-center mt-3">
          {!dataAvailable && <p>You should search for some users</p>}
          <ListGists 
            gists={gists}
            onClick={getContentOfFile}  
          />
        </div>
      </div>
      {/* Information about selected item */}
      <div className="flex flex-col relative aligns-center justify-center border border-gray-300 p-3 m-3">
        <h2 className=" relative p-2 m-2 mt-2 border border-gray-300">The content of file selected will be displayed bellow</h2>
        {innerText}
      </div>
    </div>
  );
}

export default App;
