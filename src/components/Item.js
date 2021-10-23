import React from "react";

const Item = ({gist, onClick}) => {

    {/* This procces needs to be done in order to take all file name available from files object */}
    const { fType, oType } = Object.entries(gist.files).reduce(
        ({ fType, oType }, [fileType, objectType]) => ({
          fType: [...fType, fileType],
          oType: [...oType, objectType]
        }),
        {
          fType: [],
          oType: []
        }
      );

    return (
        <div className="flex flex-col items-center m-1 cursor-pointer hover:bg-gray-800 rounded-md p-1">
            <div 
                className="flex flex-col items-center border border-gray-300 rounded-lg bg-gray-500"
                >
                <h2>{gist.url}</h2>
                <p>Description :{gist.description}</p>
                <div className="flex flex-row aligns-center jusify-center">
                    <h2 className="p-2 m-1">File type (extension): </h2>
                    {fType.map(ft => (
                        <span onClick={onClick} 
                        className="p-2 m-1 bg-blue-100 border border-blue-150 rounded-md hover:bg-blue-300">
                        {ft.toString().split('.')[1]}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Item;