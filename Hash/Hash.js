class SimpleHashMap {
    constructor() {
        this.map = {};
    }

    set(key, value) {
        this.map[key] = value;
    }

    get(key) {
        return this.map[key];
    }

    has(key) {
        return key in this.map;
    }

    delete(key) {
        if (this.has(key)) {
            delete this.map[key];
            return true;
        }
        return false;
    }

    keys() {
        return Object.keys(this.map);
    }

    values() {
        return Object.values(this.map);
    }
}
