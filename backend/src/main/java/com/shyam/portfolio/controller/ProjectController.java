package com.shyam.portfolio.controller;

import com.shyam.portfolio.model.Project;
import com.shyam.portfolio.service.ContentService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {

    private final ContentService content;

    public ProjectController(ContentService content) {
        this.content = content;
    }

    @GetMapping
    public List<Project> list() {
        return content.allProjects();
    }
}
