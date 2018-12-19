package com.brownHouse.whereToEat;

import java.util.Objects;

/**
 * Location is a mutable class that stores the latitude and longitude
 * of a given place
 */
public class Location {

    /**Latitude of a location*/
    private double latitude;
    /**Longitude of a location*/
    private double longitude;

    /**
     * returns latitude of location
     *
     * @return latitude of location
     */
    public double getLatitude() {
        return latitude;
    }

    /**
     * set latitude of location
     *
     * @param latitude of location to be set
     */
    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    /**
     * returns longitude of location
     *
     * @return longitude of location
     */
    public double getLongitude() {
        return longitude;
    }

    /**
     * longitude of location to be set
     *
     * @param longitude of location to be set
     */
    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Location location = (Location) o;
        return Double.compare(location.getLatitude(), getLatitude()) == 0 &&
                Double.compare(location.getLongitude(), getLongitude()) == 0;
    }

    @Override
    public int hashCode() {
        return Objects.hash(getLatitude(), getLongitude());
    }

    public void checkRep(){
        // Todo finish rep invarient and AFs
    }
}
