package vn.techmaster.crud_rest.dto;

public record JobRequest(String title, String description, String locaction, int min, int max, String email) {

}
