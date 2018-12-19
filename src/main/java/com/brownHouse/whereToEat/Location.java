package com.brownHouse.whereToEat;

import java.util.Objects;

/**
 * Location is a mutable class that stores the latitude and longitude
 * of a given place
 */
public class Location {

    /**
     * Rep invariant:
     * latitude <= 90 and >= -90
     * longitude <= 180 and >= -180
     */

    /**
     * AF:
     * Location can be thought of as coordinates of a point on a map
     */

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

    /**
     * Checks equality of this object with another object
     * @param o object to check for equality with this
     * @return true iff latitude and longitude of both objects are equal
     */
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Location location = (Location) o;
        return Double.compare(location.getLatitude(), getLatitude()) == 0 &&
                Double.compare(location.getLongitude(), getLongitude()) == 0;
    }

    /**
     * Computes hashcode of this object
     * @return hashcode of this object
     */
    @Override
    public int hashCode() {
        return Objects.hash(getLatitude(), getLongitude());
    }

    /**
     * Checking for violation of representative invariant
     */
    public void checkRep(){
        assert (getLatitude() <= 90 && getLatitude() >= -90): "Latitude range is incorrect, should be between -90 and 90";
        assert (getLongitude() <= 180 && getLatitude() >= -180): "Longitude range is incorrect, should be between -180 and 180";
    }
}
