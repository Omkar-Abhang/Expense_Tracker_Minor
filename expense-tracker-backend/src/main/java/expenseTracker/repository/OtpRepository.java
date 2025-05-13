package expenseTracker.repository;

import expenseTracker.entity.Otp;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.Optional;

public interface OtpRepository extends JpaRepository<Otp, Long> {
    Optional<Otp> findByEmail(String email);

    void deleteAllByExpiryTimeBefore(LocalDateTime expiryTime);
}
