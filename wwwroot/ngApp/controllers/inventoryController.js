class InventoryController {
    constructor() {
        this.message = "hello from inventory";
        let cars = this.getInventory();
    }
    getInventory(){
         return [{Year: 2015, Make: "Nissan", Model: "Rouge", Price: 201545}];
        
        
    }
}