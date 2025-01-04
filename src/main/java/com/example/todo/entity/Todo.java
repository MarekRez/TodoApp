package com.example.todo.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "todo")

public class Todo {

    public Todo() {}

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "completed", nullable = false)
    private boolean completed = false;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "date_created", nullable = false, updatable = false)
    @org.hibernate.annotations.CreationTimestamp
    @JsonProperty("dateCreated")  // Explicitly expose this field
    private Date dateCreated;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "last_updated", nullable = false)
    @org.hibernate.annotations.UpdateTimestamp
    @JsonProperty("lastUpdated") // Explicitly expose this field
    private Date lastUpdated;

    // Add getters and setters manually

    public Date getLastUpdated() {
        return lastUpdated;
    }
    public int getId() {
        return id;
    }
    public Date getDateCreated() {
        return dateCreated;
    }
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }
}
