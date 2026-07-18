package com.shyam.portfolio.model;

import java.time.LocalDate;
import java.util.List;

/**
 * A blog post.
 * Phase 1: served from hardcoded data. Phase 3: backed by PostgreSQL.
 * views/likes will move to Redis atomic counters in Phase 5.
 */
public record Post(
        Long id,
        String slug,
        String title,
        String summary,
        String contentMd,
        List<String> tags,
        LocalDate publishedAt,
        long views,
        long likes
) {
}
