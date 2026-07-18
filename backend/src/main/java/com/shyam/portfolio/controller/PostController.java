package com.shyam.portfolio.controller;

import com.shyam.portfolio.model.Post;
import com.shyam.portfolio.service.ContentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/posts")
public class PostController {

    private final ContentService content;

    public PostController(ContentService content) {
        this.content = content;
    }

    @GetMapping
    public List<Post> list() {
        return content.allPosts();
    }

    @GetMapping("/{slug}")
    public ResponseEntity<Post> bySlug(@PathVariable String slug) {
        return content.postBySlug(slug)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
