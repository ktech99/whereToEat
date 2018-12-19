package com.brownHouse.whereToEat;

import java.util.Objects;

/**
 * Class Restaurant is a mutable class that stores information
 * about a particular restaurant.
 */
public class Restaurant extends Location{

    /**
     * AF:
     * A restaurant specifies a real Restaurant in the world.
     * It contains it's name, and the coordinates of it's location
     */

    /**
     * Rep invariant:
     * name != null
     */

    /**Name of restaurant*/
    private String name;

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
     * compute hashcode of restaurant
     * @return hashcode of restaurant
     */
    @Override
    public int hashCode() {
        return Objects.hash(getName(), getLatitude(), getLongitude());
    }

    public void checkRep(){
        super.checkRep();
        assert (this.getName() != null):"Name of restaurant is null";
    }
}
