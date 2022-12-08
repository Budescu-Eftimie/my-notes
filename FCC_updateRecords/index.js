// Setup
const recordCollection = {
    2548: {
        albumTitle: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: ["Let It Rock", "You Give Love a Bad Name"],
    },
    2468: {
        albumTitle: "1999",
        artist: "Prince",
        tracks: ["1999", "Little Red Corvette"],
    },
    1245: {
        artist: "Robert Palmer",
        tracks: [],
    },
    5439: {
        albumTitle: "ABBA Gold",
    },
};

let id = 1245;

console.log(recordCollection[2548].hasOwnProperty("artist"));

// Only change code below this line
function updateRecords(records, id, prop, value) {
    if (value === "") {
        delete records[id][prop];
    } else if (prop !== "tracks") {
        records[id][prop] = value;
    } else {
        records[id][prop] = records[id][prop] || [];
        records[id][prop].push(value);
    }

    return records;
}

updateRecords(recordCollection, 2548, "tracks", "xxx");

console.log(recordCollection[2548]);
