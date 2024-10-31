export function addTile() {
    const tiles = []; // Create an array to hold tile elements
    for (let i = 0; i < 10; i++) {
        tiles.push(
            <div key={i} className={`tile ${i % 2 === 0 ? 'tile-black' : 'tile-white'}`}></div>
        );
    }
    return <div className="row">{tiles}</div>; // Return a div with all tile elements
}

export function addTile2() {
    const tiles = []; // Create an array to hold tile elements
    for (let i = 0; i < 10; i++) {
        tiles.push(
            <div key={i} className={`tile ${i % 2 === 0 ? 'tile-white' : 'tile-black'}`}></div>
        );
    }
    return <div className="row">{tiles}</div>; // Return a div with all tile elements
}

