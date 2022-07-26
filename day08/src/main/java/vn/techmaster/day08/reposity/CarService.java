package vn.techmaster.day08.reposity;

import com.fasterxml.jackson.databind.MappingIterator;
import com.fasterxml.jackson.databind.ObjectReader;
import com.fasterxml.jackson.dataformat.csv.CsvMapper;
import com.fasterxml.jackson.dataformat.csv.CsvSchema;
import org.springframework.util.ResourceUtils;
import vn.techmaster.day08.Interface.ICar;
import vn.techmaster.day08.model.Car;
import vn.techmaster.day08.model.Employee;

import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.io.Reader;
import java.util.ArrayList;
import java.util.List;

public class CarService implements ICar {
    private List<Car> carList = new ArrayList<>();

    public CarService(String csvFile) {
        this.readCSV(csvFile);
    }
    @Override
    public void readCSV(String csvFile) {
        try {
            File file = ResourceUtils.getFile("classpath:static/" + csvFile);
            CsvMapper mapper = new CsvMapper(); // Dùng để ánh xạ cột trong CSV với từng trường trong POJO
            CsvSchema schema = CsvSchema.emptySchema().withHeader(); // Dòng đầu tiên sử dụng làm Header
            ObjectReader oReader = mapper.readerFor(Car.class).with(schema); // Cấu hình bộ đọc CSV phù hợp với kiểu
            Reader reader = new FileReader(file);
            MappingIterator<Car> mi = oReader.readValues(reader); // Iterator đọc từng dòng trong file
            while (mi.hasNext()) {
                Car car = mi.next();
                this.addCar(car);
            }
        } catch (IOException e) {
            System.out.println(e);
        }
    }

    @Override
    public void addCar(Car car) {
        int id;
        if (carList.isEmpty()) {
            id = 1;
        } else {
            Car lastCar = carList.get(carList.size() - 1);
            id = lastCar.getId() + 1;
        }
        car.setId(id);
        carList.add(car);
    }

    @Override
    public List<Car> getAll() {
        return carList;
    }
}
