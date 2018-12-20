package com.brownHouse.whereToEat;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * Immutable class which is not an ADT
 * A restaurant map is used as access point to the API of the program
 */
@RestController
@CrossOrigin("http://localhost:3000")
public class restaurantMap {

    /**
     * Gets hashcode for the call, and adds latitude, longitude to DB with
     * hashcode as the key.
     * This is used to create a different code for every time a person makes a
     * new form to share
     * @param latitude Latitude of the person
     * @param longitude Longitude of the person
     * @return Hashcode for the given API call
     */
    @GetMapping("/getCode")
    public int getCode(@RequestParam(value = "latitude") double latitude,@RequestParam(value = "longitude") double longitude){
        Location personLocation = new Location(latitude, longitude);
        Long currTime = System.nanoTime();
        int hash = currTime.hashCode() + personLocation.hashCode();
        // TODO Add hash as key, latLong as value to DB
        return hash;
    }
}
