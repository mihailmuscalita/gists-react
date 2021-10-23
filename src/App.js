import { useState } from 'react';
import './App.css';

import Header from './components/Header';
import ListGists from './components/ListGists';
import httpServices from './services/httpServices';

function App() {

  const [gists, setGists]                   = useState([]);
  const [userSelected, setUserSelected]     = useState([]);
  const [dataAvailable, setDataAvailable]   = useState(false);
  const [innerText, setInnerText]           = useState('');

  const getGistsByUser = async () =>{
    const endPoint = `https://api.github.com/users/${userSelected}/gists`;

    setDataAvailable(true);
    setInnerText('');
    const response = await httpServices.get(endPoint);

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

    const result = await httpServices.get(rawUrl);
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
      <div className="aligns-center justify-center bg-gray-200">
        <div className="flex items-center justify-center mt-3">
          {!dataAvailable && <p className="aligns-center justify-center italic">You should search for some users</p>}
          <ListGists 
            gists={gists}
            onClick={getContentOfFile}  
          />
        </div>
      </div>

      {/* Information about selected item */}
      <div className="relative flex flex-col relative aligns-center justify-center border border-gray-300 p-3 m-5">
        <h2 className="p-2 m-2 mt-2 border border-gray-300 italic">The content of file selected will be displayed bellow</h2>
        <span className="mt-10">{innerText}</span>
      </div>
    </div>
  );
}

export default App;
