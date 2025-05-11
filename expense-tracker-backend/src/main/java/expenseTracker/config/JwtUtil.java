package expenseTracker.config;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import java.time.Duration;
import java.time.Instant;
import java.util.Date;
import java.util.stream.DoubleStream;

public class JwtUtil {
    private static final String SECRET = "u4Ge9fH+79lc6KeRvzOmNqejIBVdnHzFVk2Rke48kEo=";

    public static String generateToken(String email) {
        return Jwts.builder()
                .setSubject(email)
                .setIssuedAt(new Date())
                .setExpiration(Date.from(Instant.now().plus(Duration.ofHours(24))))
                .signWith(SignatureAlgorithm.HS256, SECRET)
                .compact();
    }

    public static String validateToken(String token) {
        return Jwts.parser()
                .setSigningKey(SECRET)
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }
}
