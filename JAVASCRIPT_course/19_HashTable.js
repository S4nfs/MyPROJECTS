/*A Hash table also known as Hash map is a Data Structure that is used to store Key-Value pairs. A hash table uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.

-Hash Table Avg Time Complexity: O(1)
-Set,Get,Find: O(n)
*/
class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size
    }

    //Hash Function(the Brain):  ----------
    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i) //The charCodeAt() method returns the Unicode of the character at a specified index (position) in a string.
        }
        console.log(total)
        return total % this.size
    }
    //--------------------------------------

    set(key, value) {
        const index = this.hash(key)
        const bucket = this.table[index]
        if (!bucket) {
            this.table[index] = [[key, value]]  //prevent hash collision by chaining 
        } else {
            const sameKeyItem = bucket.find((item) => item[0] === key)  //checking in key[0]:value[1] pairs
            if (sameKeyItem) {
                sameKeyItem[1] = value
            } else {
                bucket.push([key, value])
            }
        }
    }

    get(key) {
        const index = this.hash(key)
        const bucket = this.table[index]
        if (bucket) {
            const sameKeyItem = bucket.find((item) => item === key[0])
            if (sameKeyItem) {
                return sameKeyItem[1]
            }
        }
        return undefined
    }

    remove(key) {
        const index = this.hash(key)
        const bucket = this.table[index]
        if (bucket) {
            const sameKeyItem = bucket.find((item) => item === key[0])
            if (sameKeyItem) {
                bucket.splice(bucket.indexOf(sameKeyItem), 1)
            }
        }
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, ":", this.table[i])
            }
        }
    }
}

const table = new HashTable(50)
table.set("sagar", "Cloud enthusiast")
table.set("age", 24)
table.set("ragas", "Product Manager")   //similar key size
table.get("sagar")
table.display()