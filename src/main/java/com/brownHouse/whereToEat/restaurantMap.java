package com.brownHouse.whereToEat;

/**
 * Immutable class which is not an ADT
 * A restaurant map is used as access point to the API of the program
 */
public class restaurantMap {
// todo

    public int getCode(double latitude, double longitude){
        Location personLocation = new Location(latitude, longitude);
        Long currTime = System.nanoTime();
        int hash = currTime.hashCode() + personLocation.hashCode();
        // Add hash as key, latLong as value to DB
        return hash;
    }
}
