class InventoryController {
    constructor() {
        
        this.message = "hello from inventory";
        this.cars = [{Year:2017, Make:"Ford", Model:"F-150", Price:23295},
            {Year:2017, Make:"Ford", Model:"Focus", Price:14950},
            {Year:2017, Make:"Ford", Model:"Escape", Price:22195},
            {Year:2017, Make:"Toyota", Model:"Corolla", Price:12950},
            {Year:2017, Make:"Toyota", Model:"Camry", Price:18763},
            {Year:2017, Make:"Nissan", Model:"Altima", Price:19503}]; 

        this.getInventory()
    }
    getInventory() {
        return this.cars;     
                
    }
    myFunction() {
        // Declare variables 
        var input, filter, table, tr, td, i;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
      
        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[2];
          if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          } 
        }
      }
} 