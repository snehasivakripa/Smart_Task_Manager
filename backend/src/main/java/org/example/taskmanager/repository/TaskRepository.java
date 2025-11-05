package org.example.taskmanager.repository;

import org.example.taskmanager.model.Task;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TaskRepository extends MongoRepository<Task, String> {
}
