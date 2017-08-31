class InventoryController {
    constructor() {
        this.getInventory()
        this.message = "hello from inventory";
        let cars = this.getInventory();
    }
    getInventory() {
        return[{Year:2017, Make:"Ford", Model:"F-150", Price:23295},
        {Year:2017, Make:"Ford", Model:"Focus", Price:14950},
        {Year:2017, Make:"Ford", Model:"Escape", Price:22195},
        {Year:2017, Make:"Toyota", Model:"Corolla", Price:12950},
        {Year:2017, Make:"Toyota", Model:"Camry", Price:18763},
        {Year:2017, Make:"Nissan", Model:"Altima", Price:19503}];       
                
    }
} 