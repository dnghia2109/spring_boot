package com.example.exam01.repository;


import com.example.exam01.database.FakeDB;
import com.example.exam01.model.Supporter;
import org.springframework.stereotype.Repository;


@Repository
public class UserRepository {
    public Supporter getSupporter(int id){
        return FakeDB.supporters.stream()
                .filter(supporter -> supporter.getId()==id)
                .findFirst().get();
    }
}
