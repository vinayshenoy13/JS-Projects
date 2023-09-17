// Replace Feather Icons

        feather.replace();
        
        /* Todays date and day*/ 
        const today = new Date();

        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        const dayOfWeek = daysOfWeek[today.getDay()];
        const month = monthsOfYear[today.getMonth()];
       
        const date = today.getDate();
        const year = today.getFullYear();
        /* Todays date and day*/ 


        // Construct the date and day string
        const dateToday = `${date} ${month}, ${year}`;
        const DayString = `${dayOfWeek}`;
        // Display the date and day in an HTML element
        const dateElement = document.querySelector('.date-day');
        const dayElement = document.querySelector('.date-dayname')
        dateElement.textContent = dateToday;
        dayElement.textContent = DayString;

        // Add an event listener to the "Change location" button
        const changeLocationButton = document.getElementById('change-location-button');
        changeLocationButton.addEventListener('click', () => {
            // Prompt the user to enter a new location
            const newLocation = prompt('Enter a new location:');
            if (newLocation !== null) {
                
            }else{
                alert("please enter a city")
            }
       


        const apiUrl = 'https://api.weatherapi.com/v1/forecast.json?'
        const key ='58b6a2d6f2be49e6bf745743231709'
        const imageElement = document.querySelector('weather-icon');
       fetch(apiUrl+'key='+key+'&q='+newLocation+'&days=4')
        .then((res)=> res.json())
        
        .then((data)=>{
            console.log(data);
            const city = document.getElementById('city-location');
            const temp = document.querySelector('.weather-temp');
            const desc = document.querySelector('.weather-desc');
            const icon = document.querySelector('.weather-icon');
            const preci = document.querySelector('.precipitation .value')
            const humi = document.querySelector('.humidity .value')
            const wind = document.querySelector('.wind .value');
            if (data.location.name) {
                city.textContent = data.location.name +', '+ data.location.country;
                temp.textContent =data.current.temp_c + '°C';
                desc.textContent = data.current.condition.text;
                icon.textContent =data.current.condition.icon;
                preci.textContent =' '+ data.current.precip_mm;
                humi.textContent=data.current.humidity +'%';
                wind.textContent=data.current.wind_kph+'kph';
            }else{
                 city.textContent = 'City not found';
            }
        })
        .then(response => {
                if (response.ok) {
                    // If the response is successful, set the src attribute of the img element
                    return response.blob();
                } else {
                    throw new Error('Failed to fetch image');
                }
            })
        .then(blob => {
                // Create a blob URL from the fetched image data
                const imageUrl = URL.createObjectURL(blob);

                // Set the src attribute of the img element to the blob URL
                imageElement.src = imageUrl;
            })
        .catch(error => {
            // alert('Error:', error);
            console.log(error);
            // city.textContent = 'City not found';
        })
         ;
    });