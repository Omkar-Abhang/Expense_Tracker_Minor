package expenseTracker.entity   ;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "budget")
@Data
public class Budget {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private double amount;

    @Column(name = "user_email", nullable = false)
    private String userEmail;

    public Budget() {}

    public Budget(double amount, String userEmail) {
        this.amount = amount;
        this.userEmail = userEmail;
    }


}
