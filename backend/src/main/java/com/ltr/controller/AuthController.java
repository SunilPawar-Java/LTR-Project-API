package com.ltr.controller;

import com.ltr.model.security.LoginRequest;
import com.ltr.model.security.RefreshToken;
import com.ltr.model.security.UserSecurityDetails;
import com.ltr.service.security.JwtService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.time.Duration;
import java.util.Map;
import java.util.Objects;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthenticationManager authManager;
    private final JwtService jwt;

    public AuthController(AuthenticationManager authManager, JwtService jwt) {
        this.authManager = authManager;
        this.jwt = jwt;
    }

    // JWT Authentication

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest, HttpServletResponse response) {
        Authentication auth = authManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword())
        );
        UserSecurityDetails userSecurityDetails = (UserSecurityDetails) Objects.requireNonNull(auth.getPrincipal());
        String jwtToken = jwt.generateToken(userSecurityDetails);
        String refreshToken = jwt.generateRefreshToken(userSecurityDetails.getUsername());
        ResponseCookie cookie = ResponseCookie.from("refreshToken", refreshToken)
                .httpOnly(true)
                .secure(false)
                .sameSite("None")
                .path("/auth/refreshtoken")
                .maxAge(Duration.ofDays(7))
                .build();
        response.addHeader("Set-Cookie", cookie.toString());
        return ResponseEntity.ok(Map.of(
                "message", "Login Successful",
                "JToken", jwtToken
        ));
    }

    @PostMapping("/refreshtoken")
    public ResponseEntity<?> refreshToken(@CookieValue("refreshToken") String refreshToken, HttpServletResponse response) {
        System.out.println(refreshToken);
        RefreshToken refreshToken1 = jwt.verifyRefreshToken(refreshToken);
        String jwtToken = jwt.generateToken(new UserSecurityDetails(refreshToken1.getUser()));
        refreshToken = jwt.generateRefreshToken(refreshToken1.getUser().getUsername());
        ResponseCookie cookie = ResponseCookie.from("refreshToken", refreshToken)
                .httpOnly(true)
                .secure(false)
                .sameSite("None")
                .path("/auth/refreshtoken")
                .maxAge(Duration.ofDays(7))
                .build();
        response.addHeader("Set-Cookie", cookie.toString());
        return ResponseEntity.ok(Map.of(
                "jwtToken", jwtToken
        ));
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout(@CookieValue("refreshToken") String refreshToken, HttpServletResponse response) {
        String delMessage = "";
        if (refreshToken != null)
            delMessage = jwt.deleteRefreshToken(refreshToken);
        ResponseCookie cookie = ResponseCookie.from("refreshToken", "")
                .httpOnly(true)
                .secure(false)
                .path("/")
                .maxAge(0)
                .build();
        response.setHeader("Set-Cookie", cookie.toString());
        return ResponseEntity.ok(Map.of(
                "message", "Logged Out successful",
                "token message", delMessage
        ));
    }
}