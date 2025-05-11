package expenseTracker.controller;

import expenseTracker.entity.Budget;
import expenseTracker.service.BudgetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/budget")
//@CrossOrigin(origins = "http://localhost:3000") // Allow frontend requests
public class BudgetController {

    @Autowired
    private BudgetService budgetService;

    // ✅ Get current user's budget using email as request param
    @GetMapping
    public Budget getBudget(@RequestParam("email") String email) {
        return budgetService.getBudgetForUser(email);
    }

    // ✅ Set or update budget using email as request param
    @PostMapping
    public Budget setBudget(@RequestParam("email") String email,
                            @RequestBody Budget budgetRequest) {
        return budgetService.setBudgetForUser(email, budgetRequest.getAmount());
    }
}
