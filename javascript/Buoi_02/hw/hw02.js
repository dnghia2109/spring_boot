const grades = [
    {name: 'John', grade: 8, sex: 'M'},
    {name: 'Sarah', grade: 12, sex: 'F'},
    {name: 'Bob', grade: 16, sex: 'M'},
    {name: 'Johnny', grade: 2, sex: 'M'},
    {name: 'Ethan', grade: 4, sex: 'M'},
    {name: 'Paula', grade: 18, sex: 'F'},
    {name: 'Donald', grade: 5, sex: 'M'},
    {name: 'Jennifer', grade: 13, sex: 'F'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F'}
   ]

//    1. Viết function tính thứ hạng trung bình của cả lớp
function hangTrungBinh(list) {
    let key = Object.keys(list);
    let count = 0;
    let sum = 0;
    for (let i = 0; i < key.length; i++) {
        sum += list[key[i]].grade;
        count++;
    }
    return sum/count;
}
console.log(hangTrungBinh(grades))


//    2. Viết function tính thứ hạng trung bình của nam trong lớp
function hangTrungBinhNam(list) {
    let key = Object.keys(list);
    let count = 0;
    let sum = 0;
    for (let i = 0; i < key.length; i++) {
        if (list[key[i]].sex == 'M') {
            sum += list[key[i]].grade;
            count++;
        }
    }
    return sum/count;
}
console.log(hangTrungBinhNam(grades));


//    3. Viết function tính thứ hạng trung bình của Nữ trong lớp
function hangTrungBinhNu(list) {
    let key = Object.keys(list);
    let count = 0;
    let sum = 0;
    for (let i = 0; i < key.length; i++) {
        if (list[key[i]].sex == 'F') {
            sum += list[key[i]].grade;
            count++;
        }
    }
    return sum/count;
}
console.log(hangTrungBinhNu(grades));


//    4. Viết function tìm học viên Nam có thứ hạng cao nhất trong lớp
function maxGradeMale(list) {
    let key = Object.keys(list);
    // let maxGrade = list[key[0]].grade;
    let maxGrade = Number.MIN_VALUE;
    let maxStudent = list[key[0]];
    for (let i = 0; i < key.length; i++) {
        if (list[key[i]].grade > maxGrade  && list[key[i]].sex == "M") {
            maxGrade = list[key[i]].grade;
            maxStudent = list[key[i]];
        }
    }
    return maxStudent;
}
console.log(maxGradeMale(grades))


//    5. Viết function tìm học viên Nữ có thứ hạng cao nhất trong lớp
function maxGradeFemale(list) {
    let key = Object.keys(list);
    // let maxGrade = list[key[0]].grade;
    let maxGrade = Number.MIN_VALUE;
    let maxStudent = list[key[0]];
    for (let i = 0; i < key.length; i++) {
        if (list[key[i]].grade > maxGrade  && list[key[i]].sex == "F") {
            maxGrade = list[key[i]].grade;
            maxStudent = list[key[i]];
        }
    }
    return maxStudent;
}
console.log(maxGradeFemale(grades))


//    6. Viết function tìm học viên Nam có thứ hạng thấp nhất trong lớp
function minGradeMale(list) {
    let key = Object.keys(list);
    // let minGrade = list[key[0]].grade;
    let minGrade = Number.MAX_VALUE
    let minStudent = list[key[0]];
    for (let i = 0; i < key.length; i++) {
        if (list[key[i]].grade < minGrade && list[key[i]].sex == "M") {
            minGrade = list[key[i]].grade;
            minStudent = list[key[i]];
        }
    }
    return minStudent;
}
console.log(minGradeMale(grades))


//    7. Viết function tìm học viên Nữ có thứ hạng thấp nhất trong lớp
function minGradeFemale(list) {
    let key = Object.keys(list);
    // let minGradeFemale = list[key[0]].grade;
    let minGrade = Number.MAX_VALUE
    let minStudent = list[key[0]];
    for (let i = 0; i < key.length; i++) {
        if (list[key[i]].grade < minGrade && list[key[i]].sex == "F") {
            minGrade = list[key[i]].grade;
            minStudent = list[key[i]];
        }
    }
    return minStudent;
}
console.log(minGradeFemale(grades))


//    8. Viết function thứ hạng cao nhất của cả lớp
function maxGrade(list) {
    let key = Object.keys(list);
    let maxGrade = list[key[0]].grade;
    let maxStudent = list[key[0]];
    for (let i = 0; i < key.length; i++) {
        if (list[key[i]].grade > maxGrade) {
           maxGrade = list[key[i]].grade;
           maxStudent = list[key[i]];
        }
    }
    return maxStudent;
}
console.log(maxGrade(grades))


//    9. Viết function thứ hạng thấp nhất của cả lớp
function minGrade(list) {
    let key = Object.keys(list);
    let minGrade = list[key[0]].grade;
    let minStudent = list[key[0]];
    for (let i = 0; i < key.length; i++) {
        if (list[key[i]].grade < minGrade) {
            minGrade = list[key[i]].grade;
            minStudent = list[key[i]];
        }
    }
    return minStudent;
}
console.log(minGrade(grades))


//    10. Viết function lấy ra danh sách tất cả học viên Nữ trong lớp
function findFemale(list) {
    let key = Object.keys(list);
    let rs = [];
    for (let i = 0; i < key.length; i++) {
        if (list[key[i]].sex == 'F') {
            rs.push(list[key[i]]);
        }
    }
    return rs;
}
console.log(findFemale(grades))


//    11. Viết function sắp xếp tên học viên theo chiều tăng dần của bảng chữ cái
function sortByName(list) {
    list.sort(function (o1, o2) {
        if (o1.name < o2.name) {
            return -1;
        }
        
        if (o1.name > o2.name) {
            return 1;
        }
        return 0;
    })
    return list;
}
console.log(sortByName(grades));


//    12. Viết function sắp xếp thứ hạng học viên theo chiều giảm dần
function sortByGradeDescending(list) {
    list.sort(function (o1, o2) {
        return o2.grade - o1.grade;
    })
    return list;
}
console.log(sortByGradeDescending(grades))


//    13. Viết function lấy ra học viên Nữ có tên bắt đầu bằng “J”
function getFemaleNameStartByJ(list) {
    let rs = [];
    let key = Object.keys(list);
    for (let i = 0; i < list.length; i++) {
        if (list[key[i]].sex == "F" && list[key[i]].name.charAt(0) == "J") {
            rs.push(list[key[i]]);
        }
    }
    return rs;
}
console.log(getFemaleNameStartByJ(grades))

//    14. Viết function lấy ra top 5 người có thứ hạng cao nhất trong lớp
function getTop5(list, num) {
    let key = Object.keys(list);
    let rs = sortByGradeDescending(list);
    let rs1 = [];
    for (let i = 0; i < num; i++) {
        rs1.push(rs.shift(list[key[i]]))
    }
    return rs1;
}
console.log(getTop5(grades, 5))