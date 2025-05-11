package expenseTracker.service;

import expenseTracker.config.JwtUtil;
import expenseTracker.entity.Otp;
import expenseTracker.entity.User;
import expenseTracker.repository.OtpRepository;
import expenseTracker.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Random;

@Service
public class AuthService {
    @Autowired
    private JavaMailSender mailSender;

    @Autowired
    private OtpRepository otpRepository;

    @Autowired
    private UserRepository userRepository;

    public void sendOtp(String email) {
        String otp = String.valueOf(new Random().nextInt(900000) + 100000); // 6-digit OTP
        LocalDateTime expiry = LocalDateTime.now().plusMinutes(5);

        Otp otpEntity = otpRepository.findByEmail(email)
                .orElse(new Otp());
        otpEntity.setEmail(email);
        otpEntity.setOtp(otp);
        otpEntity.setExpiryTime(expiry);
        otpRepository.save(otpEntity);

        // Send email
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(email);
        message.setSubject("OTP for login on Expense Tracker Web App");
        message.setText("Hello User,\n" +
                "Welcome to Expense Tracker App.\n \n" +
                "Your OTP is: " + otp);
        mailSender.send(message);
    }

    public String verifyOtp(String email, String otp) {
        Otp storedOtp = otpRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("No OTP found for email"));

        if (!storedOtp.getOtp().equals(otp) || storedOtp.getExpiryTime().isBefore(LocalDateTime.now())) {
            throw new RuntimeException("Invalid or expired OTP");
        }

        // Save user if not present
        User user = userRepository.findByEmail(email)
                .orElseGet(() -> {
                    User newUser = new User();
                    newUser.setEmail(email);
                    newUser.setVerified(true);
                    return userRepository.save(newUser);
                });

        return JwtUtil.generateToken(email); // Return JWT
    }
}

