package expenseTracker.service;

import expenseTracker.entity.Expense;
import expenseTracker.repository.ExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.Optional;

@Service
public class ExpenseService {

    @Autowired
    private ExpenseRepository expenseRepository;

    public List<Expense> getAllExpenses() {
        return expenseRepository.findAll();
    }

    public Optional<Expense> getExpenseById(Long id) {
        return expenseRepository.findById(id);
    }

    public List<Expense> getExpensesByUser(String userEmail) {
        return expenseRepository.findByUserEmail(userEmail);
    }


    public Expense addExpense(Expense expense) {
        return expenseRepository.save(expense);
    }

    public Expense updateExpense(Long id, Expense newExpense) {
        return expenseRepository.findById(id).map(expense -> {
            expense.setTitle(newExpense.getTitle());
            expense.setAmount(newExpense.getAmount());
            expense.setDate(newExpense.getDate());
            return expenseRepository.save(expense);
        }).orElseThrow(() -> new RuntimeException("Expense not found"));
    }

    public void deleteExpense(Long id) {
        expenseRepository.deleteById(id);
    }

    // Method to get the total sum of expenses
    public Double getTotalSum() {
        return expenseRepository.sumTotalAmount(); // Calls the custom query defined in the repository
    }


}

