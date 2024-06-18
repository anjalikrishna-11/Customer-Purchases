// example.js
// Wait for the DOM content to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Use D3 to load the CSV file containing purchase order data
    d3.csv("data/purchase_orders.csv").then(function(data) {
        // Select the unordered list element with the ID 'order-list'
        var ul = d3.select("#order-list");

        
