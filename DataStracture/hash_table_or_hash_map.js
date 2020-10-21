class Dictionary {
    constructor() {
        this.dictionary = {};
    }
    add(key, value) {
        this.dictionary[key] = value
    }
    get(key) {
        return this.dictionary[key];
    }
}

const phoneBook = new Dictionary();
phoneBook.add("Mamun", "09876543")
phoneBook.add("Rahim", "23476543")
phoneBook.add("Karim", "75434856")
phoneBook.add("Jolil", "53455543");
phoneBook.add("Akbor", "00000000");
phoneBook.add("Samad", "892572894");

const mamun = phoneBook.get("Mamun")
console.log(mamun)