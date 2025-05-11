package expenseTracker.repository;



import expenseTracker.entity.Budget;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;


public interface BudgetRepository extends JpaRepository<Budget, Long> {
    Optional<Budget> findByUserEmail(String userEmail);
    void deleteByUserEmail(String userEmail);
}
