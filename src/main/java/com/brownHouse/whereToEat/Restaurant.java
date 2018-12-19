package com.brownHouse.whereToEat;

import java.util.Objects;

/**
 * Class Restaurant is a mutable class that stores information
 * about a particular restaurant.
 * @param <E> type for latitude and longitude
 */
public class Restaurant<E> {

    /**
     * AF:
     * A restaurant specifies a real Restaurant in the world.
     * It contains it's name, and the coordinates of it's location
     */

    /**
     * Rep invariant:
     * name != null
     * latitude != null
     * longitude != null
     */

    /**Name of restaurant*/
    private String name;
    /**Latitude of Restaurant of a given type*/
    private E latitude;
    /**Longitude of a restaurant of a given type*/
    private E longitude;

    /**
     * Returns name of restaurant
     * @return name of restaurant
     */
    public String getName() {
        return name;
    }

    /**
     * Sets name of restaurant
     * @param name of restaurant to be set
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * latitude of restaurant
     * @return latitude of restaurant
     */
    public E getLatitude() {
        return latitude;
    }

    /**
     * set latitude of restaurant
     * @param latitude of restaurant to be set
     */
    public void setLatitude(E latitude) {
        this.latitude = latitude;
    }

    /**
     * longitude of restaurant
     * @return longitude of restaurant
     */
    public E getLongitude() {
        return longitude;
    }

    /**
     * longitude of restaurant to be set
     * @param longitude of restaurant to be set
     */
    public void setLongitude(E longitude) {
        this.longitude = longitude;
    }

    /**
     * Checks for equality of 2 restaurants
     * @param o object to be compared to this for equality
     * @return true iff 2 restaurants have same name, lat, and long
     */
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Restaurant<?> that = (Restaurant<?>) o;
        return Objects.equals(getName(), that.getName()) &&
                Objects.equals(getLatitude(), that.getLatitude()) &&
                Objects.equals(getLongitude(), that.getLongitude());
    }

    /**
     * compute hashcode of restaurant
     * @return hashcode of restaurant
     */
    @Override
    public int hashCode() {
        return Objects.hash(getName(), getLatitude(), getLongitude());
    }
}
