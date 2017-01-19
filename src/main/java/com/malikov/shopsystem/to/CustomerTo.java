package com.malikov.shopsystem.to;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.io.Serializable;

public class CustomerTo implements Serializable {

    private Integer id;

    private String firstName;

    private String lastName;

    private String phone;

    private String city;

    private String novaPoshta;

    private String email;

    public CustomerTo(@JsonProperty("id") Integer id,
                      @JsonProperty("firstName") String firstName,
                      @JsonProperty("lastName") String lastName,
                      @JsonProperty("phone") String phone,
                      @JsonProperty("city") String city,
                      @JsonProperty("novaPoshta") String novaPoshta,
                      @JsonProperty("email") String email
    ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.city = city;
        this.novaPoshta = novaPoshta;
        this.email = email;
    }

    public CustomerTo() {
    }

    public boolean isNew() {
        return id == null;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getNovaPoshta() {
        return novaPoshta;
    }

    public void setNovaPoshta(String novaPoshta) {
        this.novaPoshta = novaPoshta;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "CustomerTo{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", phone='" + phone + '\'' +
                ", city='" + city + '\'' +
                ", novaPoshta='" + novaPoshta + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
