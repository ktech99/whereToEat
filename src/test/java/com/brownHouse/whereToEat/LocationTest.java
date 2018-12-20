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

    @Test
    public void setLatitudeEdge() {
        currentLocation.setLatitude(-90);
        assertEquals(currentLocation.getLatitude(), -90, 3);
        currentLocation.setLatitude(90);
        assertEquals(currentLocation.getLatitude(), 90, 3);
    }

    @Test(expected=java.lang.AssertionError.class)
    public void setLatitudeInvalidPositive() {
        currentLocation.setLatitude(91);
    }

    @Test(expected=java.lang.AssertionError.class)
    public void setLatitudeInvalidNegative() {
        currentLocation.setLatitude(-91);
    }

    @Test
    public void setLongitudeEdge() {
        currentLocation.setLongitude(-180);
        assertEquals(currentLocation.getLongitude(), -180, 5);
        currentLocation.setLongitude(180);
        assertEquals(currentLocation.getLongitude(), 180, 5);
    }

    @Test(expected=java.lang.AssertionError.class)
    public void setLongitudeInvalidPositive() {
        currentLocation.setLongitude(181);
    }

    @Test(expected=java.lang.AssertionError.class)
    public void setLongitudeInvalidNegative() {
        currentLocation.setLongitude(181);
    }

    @Test
    public void getDistance() {
        Location newLocation = new Location(47.658139, -122.313057);
        assertEquals(currentLocation.getDistance(newLocation), 1758.1816106543768, 5);
    }

    @Test
    public void equals() {
        Location newLocation = new Location(30.3742976, -97.92143360000001);
        assertTrue(currentLocation.equals(newLocation));
    }

    @Test
    public void hashCodeTest() {
        int hash = Objects.hash(currentLocation.getLatitude(), currentLocation.getLongitude());
        assertEquals(currentLocation.hashCode(), hash);
    }
}