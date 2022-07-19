package vn.techmaster.crud_rest.controller;

import org.springframework.web.bind.annotation.*;
import vn.techmaster.crud_rest.dto.BookRequest;
import vn.techmaster.crud_rest.dto.JobRequest;
import vn.techmaster.crud_rest.model.Book;
import vn.techmaster.crud_rest.model.ELocation;
import vn.techmaster.crud_rest.model.Job;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

@RestController
@RequestMapping("/job")
public class JobController {
    private HashMap<String, Job> jobs;
    public JobController() {
        jobs = new HashMap<>();
        jobs.put("id1", new Job("id1" ,"Dev Java", "Dang thieu nguoi", "HN", 10000000, 30000000, "nghia@gmail.com"));
        jobs.put("id2", new Job("id2" ,"Dev PHP", "Dang thieu rat nguoi", "DN", 80000000, 20000000, "nghia@gmail.com"));
    }

    @GetMapping
    public List<Job> getJobs() {
        return jobs.values().stream().toList();
    }

    @PostMapping(value="/id")
    public Job createNewJob(@RequestBody JobRequest jobRequest) {
        String randomId = UUID.randomUUID().toString();
        Job newJob = new Job(randomId, jobRequest.title(), jobRequest.description(), jobRequest.locaction(), jobRequest.min()
        , jobRequest.max(), jobRequest.email());
        jobs.put(randomId, newJob);
        return newJob;
    }

    @PutMapping(value="/{id}")
    public Job updateJobById(@PathVariable("id") String id, @RequestBody JobRequest jobRequest) {
        Job updateJob = new Job(id, jobRequest.title(), jobRequest.description(), jobRequest.locaction(), jobRequest.min()
                , jobRequest.max(), jobRequest.email());

        jobs.replace(id, updateJob);
        return updateJob;
    }

    @DeleteMapping(value="/{id}")
    public Job deleteJobById(@PathVariable("id") String id) {
        Job removedJob = jobs.remove(id);
        return removedJob;
    }
}
