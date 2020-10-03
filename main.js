this.table = "window table"

console.log(window.table)

this.garage = {

    table: "garage table"
}

console.log(window.garage.table)

let ashishRoom = {

    table: 'ashish table',
    cleanTable() {
        console.log(`cleaning ${this.table}`)
    }
}

console.log(ashishRoom.cleanTable())