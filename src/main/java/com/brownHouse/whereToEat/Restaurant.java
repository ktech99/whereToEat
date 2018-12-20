package com.brownHouse.whereToEat;

import java.util.Objects;

/**
 * Class Restaurant is a mutable class that stores information
 * about a particular restaurant.
 */
public class Restaurant extends Location {

    /**
     * AF:
     * A restaurant specifies a real Restaurant in the world.
     * It contains it's name, and the coordinates of it's location
     */

    /**
     * Rep invariant:
     * name != null
     */

    /**
     * Name of restaurant
     */
    private String name;

    /**
     * Constructor to create a new restaurant
     *
     * @param name      name of restaurant
     * @param latitude  latitude of restaurant
     * @param longitude longitude of restaurant
     */
    public Restaurant(String name, double latitude, double longitude) {
        super(latitude, longitude);
        this.name = name;
        checkRep();
    }

    /**
     * Returns name of restaurant
     *
     * @return name of restaurant
     */
    public String getName() {
        checkRep();
        return name;
    }

    /**
     * Sets name of restaurant
     *
     * @param name of restaurant to be set
     */
    public void setName(String name) {
        this.name = name;
        checkRep();
    }

    /**
     * compute hashcode of restaurant
     *
     * @return hashcode of restaurant
     */
    @Override
    public int hashCode() {
        checkRep();
        return Objects.hash(getName(), getLatitude(), getLongitude());
    }

    /**
     * Checks for violation of rep invariant
     */
    public void checkRep() {
        super.checkRep();
        assert (this.getName() != null) : "Name of restaurant is null";
    }
}
