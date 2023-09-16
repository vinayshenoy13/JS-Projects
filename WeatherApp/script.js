// Replace Feather Icons
        feather.replace();

        // Add an event listener to the "Change location" button
        const changeLocationButton = document.getElementById('change-location-button');
        changeLocationButton.addEventListener('click', () => {
            // Prompt the user to enter a new location
            const newLocation = prompt('Enter a new location:');
            if (newLocation !== null) {
                // Update the location display
                const locationElement = document.querySelector('.location');
                locationElement.textContent = newLocation;
            }
        });
