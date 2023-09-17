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
       


        const apiUrl = 'https://api.weatherapi.com/v1/forecast.json?'
        const key ='58b6a2d6f2be49e6bf745743231709'
       
        // let city =prompt("Enter the city name")
        let p=fetch(apiUrl+'key='+key+'&q='+newLocation+'&days=7')
        
        p.then((value)=>{
            return value.json()
        }).then((value1)=>{
            console.log(value1)
        })

 });