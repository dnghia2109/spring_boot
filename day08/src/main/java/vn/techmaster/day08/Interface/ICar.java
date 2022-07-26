package vn.techmaster.day08.Interface;

import vn.techmaster.day08.model.Car;

import java.util.List;

public interface ICar {
    void readCSV(String csvFile);
    void addCar(Car car);
    List<Car> getAll();
}
