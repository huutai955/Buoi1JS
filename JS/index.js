/* 
Bài 1: Tính tiền lương nhân viên
Input: Lương một ngày, số ngày làm

Process: 1.Tính tổng số lương nhận được: Tổng lương = lương một
ngày * số ngày làm;
2. Console log tổng lương ra màn hình

Output: Tổng lương
*/

var salaryPerDay = 100000;
var workingDays = 30;

var totalSalary = salaryPerDay * workingDays;

console.log("Bài 1")
console.log("Tổng lương trong tháng là: ", totalSalary);


/* 
Bài 2: Tính giá trị trung bình
Input: 5 giá trị số thực

Process: 1.Tính tổng của 5 số thực sau đó chia cho 5
2. Console log giá trị trung bình của 5 số thực

Output: Gía trị trung bình của 5 số thực
*/

var firstNumber = 9.4;
var secondNumber = 6.7;
var thirdNumber = 2.5;
var fourthNumber = 7.8;
var fifthNumber = 8.7;
var mediumNumber = (fifthNumber + secondNumber + thirdNumber + fourthNumber + fifthNumber) / 5;

console.log("Bài 2");
console.log("Giá trị trung bình của 5 số thực là: ", mediumNumber);



/* 
Bài 3: Quy đổi tiền 
Input: Tiền USD

Process: 1.Tính tổng số tiền USD nhập vào: Tổng tiền VND = Tiền USD * 23.500
2. Console log tổng số tiền quy đổi

Output: Tổng tiền VND
*/

var USD = 500;
var VietNamDong = USD * 23500;

console.log("Bài 3");
console.log("Tổng tiền quy đổi từ USD sang Việt Nam Đồng là: ", VietNamDong, " Đồng");


/* 
Bài 4: Diện tích, chu vi hình chữ nhật
Input: Chiều dài, chiều rồng

Process: 1.Tính diện tích  = dài * rộng, chu vi = (dài + rộng) * 2
2. Console log diện tích và chu vi hình chữ nhật

Output: Diện tích, chu vi hình chữ nhật
*/

var chieuDai = 8.4;
var chieuRong = 4.3;

var dienTich = chieuDai * chieuRong;
var chuVi  = (chieuDai + chieuRong) * 2;

console.log("Bài 4");
console.log("Diện tích hình chữ nhật: ", dienTich);
console.log("Chu vi hình chữ nhật: ", chuVi);


/* 
Bài 5: Tính tổng 2 ký số
Input: Số có 2 chữ số

Process: 1. Lấy số hàng đơn vị = số % 10, lấy số hàng chục = số / 10
2. Tổng của 2 ký số = số hàng đơn vị + số hàng chục
3. Console.log tổng 2 ký số

Output: Tổng 2 ký số
*/

var number = 28;
var soHangDV = number % 10;
var soHangChuc = number / 10;
var tongHaiKySo = soHangDV + soHangChuc;

console.log("Bài 5");
console.log("Tổng 2 ký số là: ",  parseInt(tongHaiKySo));
 

