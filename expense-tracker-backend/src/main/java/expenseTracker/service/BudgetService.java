package expenseTracker.service;


import expenseTracker.entity.Budget;
import expenseTracker.repository.BudgetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class BudgetService {
    @Autowired
    private BudgetRepository budgetRepository;

    // Get the latest budget (assuming only one budget record)
    public Budget getBudget() {
        List<Budget> budgets = budgetRepository.findAll();
        return budgets.isEmpty() ? null : budgets.getFirst();
    }

    // Set or update budget
    public Budget setBudget(double amount) {
        List<Budget> budgets = budgetRepository.findAll();
        Budget budget;

        if (!budgets.isEmpty()) {
            // Update existing budget
            budget = budgets.getFirst();
            budget.setAmount(amount);
        } else {
            // Create new budget
            budget = new Budget(amount);
        }

        return budgetRepository.save(budget);
    }

    // Delete budget (optional)
    public void deleteBudget() {
        budgetRepository.deleteAll();
    }
}

