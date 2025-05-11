package expenseTracker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ExpenseTrackerBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(ExpenseTrackerBackendApplication.class, args);
	}

	@Controller
     	@GetMapping("/health")
    	 public String health(){
		 Systemou.println("All Endpoints Are Working");
	 }

}
