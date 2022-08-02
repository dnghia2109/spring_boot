package vn.techmaster.day08.Interface;

import vn.techmaster.day08.model.Car;

import java.util.List;

public interface ICar {
    void readCSV(String csvFile);
    void addCar(Car car);
    List<Car> getAll();

    void sortCarByModel(List<Car> list);

    void sortCarByBrand(List<Car> list);

    void updateCar(Car car);

    public Car findCarById(int id);
    public void deleteCarById(int id);
}
