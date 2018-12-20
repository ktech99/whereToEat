package com.brownHouse.whereToEat;

import org.junit.Before;
import org.junit.Test;

import java.util.Objects;

import static org.junit.Assert.*;

public class LocationTest {

    private Location currentLocation;

    /**
     * Initializing location for test
     */
    @Before
    public void init(){
        currentLocation = new Location(30.3742976, -97.92143360000001);
    }

    /**
     * Checking edge cases for setting latitude
     */
    @Test
    public void setLatitudeEdge() {
        currentLocation.setLatitude(-90);
        assertEquals(currentLocation.getLatitude(), -90, 3);
        currentLocation.setLatitude(90);
        assertEquals(currentLocation.getLatitude(), 90, 3);
    }

    /**
     * Checking positive error for setLatitude
     */
    @Test(expected=java.lang.AssertionError.class)
    public void setLatitudeInvalidPositive() {
        currentLocation.setLatitude(91);
    }

    /**
     * Checking negative error for setLatitude
     */
    @Test(expected=java.lang.AssertionError.class)
    public void setLatitudeInvalidNegative() {
        currentLocation.setLatitude(-91);
    }

    /**
     * Checking edge cases for set longitude
     */
    @Test
    public void setLongitudeEdge() {
        currentLocation.setLongitude(-180);
        assertEquals(currentLocation.getLongitude(), -180, 5);
        currentLocation.setLongitude(180);
        assertEquals(currentLocation.getLongitude(), 180, 5);
    }

    /**
     * Checking positive invalid error for setLongitude
     */
    @Test(expected=java.lang.AssertionError.class)
    public void setLongitudeInvalidPositive() {
        currentLocation.setLongitude(181);
    }

    /**
     * Checking negative invalid error for setLongitude
     */
    @Test(expected=java.lang.AssertionError.class)
    public void setLongitudeInvalidNegative() {
        currentLocation.setLongitude(181);
    }

    /**
     * Checking distance from test location to burger and kebob hut
     */
    @Test
    public void getDistance() {
        Location newLocation = new Location(47.658139, -122.313057);
        assertEquals(currentLocation.getDistance(newLocation), 1758.1816106543768, 5);
    }

    /**
     * Checking for equality of 2 locations with same coordinates
     */
    @Test
    public void equals() {
        Location newLocation = new Location(30.3742976, -97.92143360000001);
        assertTrue(currentLocation.equals(newLocation));
    }

    /**
     * Checking for equality of 2 locations with different coordinates
     */
    @Test
    public void notEquals() {
        Location newLocation = new Location(30.3742977, -97.92143360000002);
        assertFalse(currentLocation.equals(newLocation));
    }

    /**
     * Checking if hashcode is consistent
     */
    @Test
    public void hashCodeTest() {
        int hash = Objects.hash(currentLocation.getLatitude(), currentLocation.getLongitude());
        assertEquals(currentLocation.hashCode(), hash);
    }
}