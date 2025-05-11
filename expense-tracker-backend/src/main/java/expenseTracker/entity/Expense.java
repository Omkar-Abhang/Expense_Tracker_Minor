package expenseTracker.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Data
@Table(name = "expenses")

public class Expense {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private Double amount;
    private LocalDate date;

    @Column(nullable = false)
    private String userEmail;

    // Constructors
    public Expense() {}

    public Expense(String title, Double amount, LocalDate date, String userEmail) {
        this.title = title;
        this.amount = amount;
        this.date = date;
        this.userEmail = userEmail;
    }


}

