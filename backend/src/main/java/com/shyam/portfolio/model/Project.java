package com.shyam.portfolio.model;

import java.util.List;

/**
 * A portfolio project card.
 * Phase 1: served from hardcoded data. Phase 3: backed by PostgreSQL.
 */
public record Project(
        Long id,
        String title,
        String description,
        List<String> techStack,
        String company,
        String repoUrl,
        String liveUrl,
        boolean featured
) {
}
