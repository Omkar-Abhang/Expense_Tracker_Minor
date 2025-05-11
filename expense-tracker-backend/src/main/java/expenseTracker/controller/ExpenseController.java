package expenseTracker.controller;


import expenseTracker.entity.Expense;
import expenseTracker.service.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/expenses")
//@CrossOrigin(origins = "http://localhost:3000") // Allow frontend requests
public class ExpenseController {

    @Autowired
    private ExpenseService expenseService;

    @GetMapping
    public List<Expense> getExpensesByUser(@RequestParam String email) {
        return expenseService.getExpensesByUser(email);
    }

//    @GetMapping("/{id}")
//    public Optional<Expense> getExpenseById(@PathVariable Long id) {
//        return expenseService.getExpenseById(id);
//    }

    @GetMapping("/total")
    public Double getTotalAmount() {
        return expenseService.getTotalSum(); // A custom query to sum all expenses
    }

    @PostMapping
    public Expense addExpense(@RequestBody Expense expense) {
        return expenseService.addExpense(expense);
    }



    @PutMapping("/{id}")
    public ResponseEntity<Expense> updateExpense(@PathVariable Long id, @RequestBody Expense updatedExpense) {
        Optional<Expense> existingExpense = expenseService.getExpenseById(id);

        if (existingExpense.isPresent()) {
            Expense expense = existingExpense.get();
            expense.setTitle(updatedExpense.getTitle());
            expense.setAmount(updatedExpense.getAmount());


            Expense savedExpense = expenseService.addExpense(expense);
            return ResponseEntity.ok(savedExpense);
        } else {
            return ResponseEntity.notFound().build();
        }
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteExpense(@PathVariable Long id) {
        Optional<Expense> existingExpense = expenseService.getExpenseById(id);
        if (existingExpense.isPresent()) {
            expenseService.deleteExpense(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }



}

