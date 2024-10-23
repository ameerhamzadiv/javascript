
        let map, directionsService, directionsRenderer;

        function initMap() {
            directionsService = new google.maps.DirectionsService();
            directionsRenderer = new google.maps.DirectionsRenderer();
            
            map = new google.maps.Map(document.getElementById("airportmap"), {
                center: { lat: 30.267028994768097, lng: -97.72698536588805 }, // Default center (e.g., Austin)
                zoom: 13
				
            });
            directionsRenderer.setMap(map);

            const pickupInput = document.getElementById("pickup_address");
            const dropoffInput = document.getElementById("drop_off_address");
            
            const pickupAutocomplete = new google.maps.places.Autocomplete(pickupInput);
            const dropoffAutocomplete = new google.maps.places.Autocomplete(dropoffInput);

            pickupAutocomplete.addListener("place_changed", calculateRouteIfReady);
            dropoffAutocomplete.addListener("place_changed", calculateRouteIfReady);
        }
	
	

        function calculateRouteIfReady() {
			//"input[name='direction']"
			 const pickupAddress = document.getElementById("pickup_address").value;
            const dropoffAddress = document.getElementById("drop_off_address").value;
			
			//Austin-Bergstrom International Airport (AUS), Presidential Boulevard, Austin, TX, USA
           // const pickupAddress = document.getElementById("pickup_address").value;
           // const dropoffAddress = document.getElementById("drop_off_address").value;
			
			

            // Trigger calculation only if both fields have values
            if (pickupAddress && dropoffAddress) {
                calculateRoute(pickupAddress, dropoffAddress);
            }
        }

        function calculateRoute(pickupAddress, dropoffAddress) {
            const request = {
                origin: pickupAddress,
                destination: dropoffAddress,
                travelMode: google.maps.TravelMode.DRIVING
            };

            directionsService.route(request, (result, status) => {
                if (status == google.maps.DirectionsStatus.OK) {
                    directionsRenderer.setDirections(result);
                    const distance = result.routes[0].legs[0].distance.value / 1609.34; // meters to miles
                    const duration = result.routes[0].legs[0].duration.text;
                    let cost = (distance * 2).toFixed(2);
                    var car = document.getElementById("car");
                    if(car.value == 'Sedan'){
                         cost = (distance * 2.10).toFixed(2); // $2.10 per mile
                    }
                    if(car.value == 'SUV'){
                         cost = (distance * 2.42).toFixed(2); // $2.42 per mile
                    } 
                    document.getElementById("airportdistance").innerText = distance.toFixed(2) + " miles";
                    document.getElementById("airportduration").innerText = duration;
                    document.getElementById("airportcost").innerText = "$" + cost;
                    
					
					
                } else {
                    alert("Could not retrieve distance: " + status);
                }
            });
        }

        window.onload = initMap;
        
        

