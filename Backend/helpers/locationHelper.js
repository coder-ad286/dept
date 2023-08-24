exports.checkLocation = (latitudude, longtitude) => {

    // Set the desired location and radius
    //college latitude and longitude
    const desiredLatitude = 9.865221489551008 ;
    const desiredLongitude = 78.12399450513153;
    const radius = 0.12; // in km

    //user latitude
    const userLatitude = latitudude;
    const userLongitude = longtitude;

    // Calculate the distance between the user's location and the desired location using the Haversine formula
    const R = 6371; // Earth's radius in km
    const dLat = (userLatitude - desiredLatitude) * (Math.PI / 180);
    const dLon = (userLongitude - desiredLongitude) * (Math.PI / 180);
    const lat1 = desiredLatitude * (Math.PI / 180);
    const lat2 = userLatitude * (Math.PI / 180);

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;

    // Check if the user is within the desired location or not
    if (distance <= radius) {
        return true
    } else {
        return false
    }
}