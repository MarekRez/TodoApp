//package com.example.todo;
//
//import com.example.todo.entity.Todo;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//@RequestMapping("/api/todos")
//public class TodoController {
//
//    @PostMapping
//    public ResponseEntity<Todo> createTodo(@RequestBody Todo todo) {
//        // Log the incoming Todo object
//        System.out.println("Received Todo: ");
//        System.out.println("Name: " + todo.getName());
//        System.out.println("Description: " + todo.getDescription());
//        System.out.println("Completed: " + todo.isCompleted());
//
//        // Return the received Todo for testing purposes
//        return ResponseEntity.ok(todo);
//    }
//}
