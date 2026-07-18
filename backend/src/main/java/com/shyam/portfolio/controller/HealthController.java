package com.shyam.portfolio.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

/**
 * Simple liveness endpoint — handy for uptime checks and to confirm the API is up
 * (Render pings the service; a public health route also makes the root URL friendly).
 */
@RestController
public class HealthController {

    @GetMapping("/api/health")
    public Map<String, String> health() {
        return Map.of("status", "ok", "service", "portfolio-api");
    }
}
