package com.example.day13.exception;

public class UnauthorizeException extends RuntimeException{
    public UnauthorizeException(String message) {
        super(message);
    }
}
