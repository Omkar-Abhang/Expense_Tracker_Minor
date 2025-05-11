package expenseTracker.repository;


import expenseTracker.entity.Expense;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


@Repository
public interface ExpenseRepository extends JpaRepository<Expense, Long> ,CrudRepository<Expense, Long> {

    // Using JPQL to sum the amount field
    @Query(value = "SELECT SUM(amount) FROM expenses", nativeQuery = true)
    Double sumTotalAmount();

    List<Expense> findByUserEmail(String userEmail);


}

