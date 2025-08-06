//Build a Simple HashMap
class SimpleHashMap {
    /*Constructor Method to Create an EMPTY HashMap*/
    constructor() {
        this.map = {}; //Object to Hold Key-Value (KV) Pairs
    }

    //Method to Add or Update a KV Pair
    set(key, value) {
        //Add the Key and Assign Its Value
        this.map[key] = value;
    }

    //Method to Retrieve the Value for a Given Key
    get(key) {
        //Return the Value Associated with the Key
        return this.map[key];
    }

    //Method to Check if a Key Exists
    has(key) {
        //Check if the Key Exists in the Object
        return key in this.map;
    }

    //Method to Delete a Key-Value Pair
    delete(key) {
        //If Key Exists, Delete and Return True
        if (this.has(key)) {
            delete this.map[key];
            return true;
        }
        //If Key Does Not Exist, Return False
        return false;
    }

    //Method to Get All Keys
    keys() {
        //Return Array of All Keys
        return Object.keys(this.map);
    }

    //Method to Get All Values
    values() {
        //Return Array of All Values
        return Object.values(this.map);
    }
}
