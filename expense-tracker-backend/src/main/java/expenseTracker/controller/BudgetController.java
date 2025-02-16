package expenseTracker.controller;

import expenseTracker.entity.Budget;
import expenseTracker.service.BudgetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/budget")
@CrossOrigin(origins = "http://localhost:3000") // Allow frontend requests
public class BudgetController {

    @Autowired
    private BudgetService budgetService;

    // ✅ Get current budget
    @GetMapping
    public Budget getBudget() {
        return budgetService.getBudget();
    }

    // ✅ Set or update budget
    @PostMapping
    public Budget setBudget(@RequestBody Budget budget) {
        return budgetService.setBudget(budget.getAmount());
    }

    // ✅ Delete budget (optional)
    @DeleteMapping
    public void deleteBudget() {
        budgetService.deleteBudget();
    }
}
