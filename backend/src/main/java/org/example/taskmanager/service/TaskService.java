package org.example.taskmanager.service;

import org.example.taskmanager.model.Task;
import org.example.taskmanager.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {
    private final TaskRepository repo;

    public TaskService(TaskRepository repo) {
        this.repo = repo;
    }

    public List<Task> getAllTasks() {
        return repo.findAll();
    }

    public Task createTask(Task task) {
        return repo.save(task);
    }

    public Task updateTask(String id, Task task) {
        task.setId(id);
        return repo.save(task);
    }

    public void deleteTask(String id) {
        repo.deleteById(id);
    }
}
