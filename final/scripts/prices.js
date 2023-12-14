
document.addEventListener("DOMContentLoaded", function() {
  // Hacemos una solicitud HTTP para obtener el archivo JSON
  fetch("data/prices.json")
      .then(response => response.json())
      .then(data => displayRentals(data.rentals))
      .catch(error => console.error("Error fetching rentals data:", error));

  // Función para mostrar los alquileres en la página
  function displayRentals(rentals) {
      const rentalsContainer = document.querySelector(".rentals-container");

      // Iteramos sobre cada objeto de alquiler en el JSON
      rentals.forEach(rental => {
          const rentalCard = document.createElement("article");
          rentalCard.innerHTML = `
              <img src="${rental.image}" alt="${rental.type}">
              <h4>${rental.type}</h4>
              <p>Max Persons: ${rental.maxPersons}</p>
              <p>Half Day (Reservation): $${rental.halfDayReservation}</p>
              <p>Full Day (Reservation): $${rental.fullDayReservation}</p>
              <p>Half Day (Walk-In): $${rental.halfDayWalkIn}</p>
              <p>Full Day (Walk-In): $${rental.fullDayWalkIn}</p>
          `;
          rentalsContainer.appendChild(rentalCard);
      });
  }
});
