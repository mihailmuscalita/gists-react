import React from 'react';

import Item from './Item';

function ListGists({gists, onClick}) {

    return (
        <div>
            <ul className="items-center justify-center grid grid-cols-2 gap-2 place-content-center">
            {gists.map(gist => (
                    <Item 
                        key={gist.id} 
                        gist={gist}
                        onClick={() => onClick(gist.files)}
                    />
                ))}
            </ul>
        </div>
    );
}

export default ListGists;