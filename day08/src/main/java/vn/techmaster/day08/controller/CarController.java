package vn.techmaster.day08.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import vn.techmaster.day08.Interface.ICar;
import vn.techmaster.day08.model.Car;
import vn.techmaster.day08.reposity.CarService;

import java.util.List;

@Controller
@RequestMapping("")
public class CarController {
    @Autowired
    private ICar service;

    @GetMapping("/car")
    public String getAllCar(Model model) {
        List<Car> cars = service.getAll();
        model.addAttribute("allCar", cars);
        return "list_car";
    }

    @GetMapping("/sort/model")
    public String sortByModel(Model model){
        List<Car> listCar = service.getAll();
        service.sortCarByModel(listCar);
        model.addAttribute("allCar", listCar);
        return "list_car";
    }

    @GetMapping("/sort/brand")
    public String sortByBrand(Model model){
        List<Car> listCar = service.getAll();
        service.sortCarByBrand(listCar);
        model.addAttribute("cars", listCar);
        return "list_car_sort_by_brand";
    }

//    @GetMapping("/delete")
//    public String deleteCar(@RequestParam int id, Model model){
//        service.deleteById(id);
//        return "redirect:/car";
//    }


}
