const url = './data/prices.json';
document.addEventListener('DOMContentLoaded', function () {
    const url = './data/rentals.json';
    const rentalsTable = document.getElementById('rentals-table');
  
    async function getRentalsInfo() {
      const response = await fetch(url);
      const rentalsData = await response.json();
  
      displayRentals(rentalsData.rentals);
    }
  
    function displayRentals(rentals) {
      const tbody = document.getElementById('rentals-tbody');
      tbody.innerHTML = '';
  
      rentals.forEach((rental) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${rental.type}</td>
          <td>${rental.maxPersons}</td>
          <td>${rental.halfDayReservation}</td>
          <td>${rental.walkInHalfDay}</td>
          <td>${rental.fullDayReservation}</td>
          <td>${rental.walkInFullDay}</td>
          <td><img src="${rental.image}" alt="${rental.type}"></td>
        `;
  
        tbody.appendChild(row);
      });
    }
  
    getRentalsInfo();
  });