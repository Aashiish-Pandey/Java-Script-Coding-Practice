'use strict';

this.table = "window table"

const cleanTable = function(soap) {

    console.log(`cleaning ${this.table} using ${soap}`)
}


this.garage = {

    table: "garage table"
}


let ashishRoom = {

    table: 'ashish table',
    cleanTable() {
        console.log(`cleaning ${this.table}`)
    }
}

cleanTable.call(this,'some soap')
cleanTable.call(window.garage,'some soap')
cleanTable.call(ashishRoom,'some soap')
