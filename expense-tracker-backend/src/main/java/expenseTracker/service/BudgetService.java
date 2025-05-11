package expenseTracker.service;


import expenseTracker.entity.Budget;
import expenseTracker.repository.BudgetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class BudgetService {
    @Autowired
    private BudgetRepository budgetRepository;


//    get budget
    public Budget getBudgetForUser(String email) {
        return budgetRepository.findByUserEmail(email).orElse(null);
    }


//    set budget
    public Budget setBudgetForUser(String email, double amount) {
        Optional<Budget> optionalBudget = budgetRepository.findByUserEmail(email);
        Budget budget;

        if (optionalBudget.isPresent()) {
            budget = optionalBudget.get();
            budget.setAmount(amount);
        } else {
            budget = new Budget(amount, email);
        }

        return budgetRepository.save(budget);
    }

}

