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

    /**
     * Latitude of a location
     */
    private double latitude;
    /**
     * Longitude of a location
     */
    private double longitude;

    /**
     * Constructor to create a new location
     *
     * @param latitude  latitude of new location
     * @param longitude longitude of new location
     */
    public Location(double latitude, double longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
        checkRep();
    }

    /**
     * returns latitude of location
     *
     * @return latitude of location
     */
    public double getLatitude() {
        checkRep();
        return latitude;
    }

    /**
     * set latitude of location
     *
     * @param latitude of location to be set
     */
    public void setLatitude(double latitude) {
        this.latitude = latitude;
        checkRep();
    }

    /**
     * returns longitude of location
     *
     * @return longitude of location
     */
    public double getLongitude() {
        checkRep();
        return longitude;
    }

    /**
     * longitude of location to be set
     *
     * @param longitude of location to be set
     */
    public void setLongitude(double longitude) {
        this.longitude = longitude;
        checkRep();
    }

    /**
     * Gets distance between 2 locations in miles
     *
     * @param l location to find distance from
     * @return the distance between 2 locations in miles
     */
    public double getDistance(Location l) {
        double pi = Math.PI;
        double radiansLat1 = pi * this.getLatitude() / 180;
        double radiansLat2 = pi * l.getLatitude() / 180;
        double theeta = this.getLongitude() - l.getLongitude();
        double theetaRads = pi * theeta / 180;
        double dist =
                Math.sin(radiansLat1) * Math.sin(radiansLat2) + Math.cos(radiansLat1) *
                        Math.cos(radiansLat2) * Math.cos(theetaRads);
        dist = Math.acos(dist);
        dist *= 180/pi;
        dist *= 60*1.1515;
        return dist;
    }


    /**
     * Checks equality of this object with another object
     *
     * @param o object to check for equality with this
     * @return true iff latitude and longitude of both objects are equal
     */
    @Override
    public boolean equals(Object o) {
        checkRep();
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Location location = (Location) o;
        return Double.compare(location.getLatitude(), getLatitude()) == 0 &&
                Double.compare(location.getLongitude(), getLongitude()) == 0;
    }

    /**
     * Computes hashcode of this object
     *
     * @return hashcode of this object
     */
    @Override
    public int hashCode() {
        checkRep();
        return Objects.hash(getLatitude(), getLongitude());
    }

    /**
     * Checking for violation of representative invariant
     */
    public void checkRep() {
        assert (getLatitude() <= 90 && getLatitude() >= -90) : "Latitude range is incorrect, should be between -90 and 90";
        assert (getLongitude() <= 180 && getLatitude() >= -180) : "Longitude range is incorrect, should be between -180 and 180";
    }

}
