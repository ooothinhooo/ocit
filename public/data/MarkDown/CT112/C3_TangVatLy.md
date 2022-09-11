#Chương 3: Tầng vật lý
##Bài 1. Giới thiệu
Về cơ bản, một hệ thống mạng truyền dữ liệu đơn giản nhất được mô tả như sau:
<note>
Trong mô hình trên, dữ liệu gồm có văn bản, hình ảnh, âm thanh, phim ảnh cần được số hóa dưới dạng nhị phân (bit 0, 1) để dễ dàng cho xử lý và truyền tải. Thiết bị truyền được nối với thiết bị nhận bằng một đường truyền hữu tuyến hoặc vô tuyến. H3.1 Hệ thống truyền dữ liệu đơn giản Truyền tin là quá trình thiết bị truyền gởi đi lần lượt các bit của dữ liệu lên kênh truyền để nó lan truyền sang thiết bị nhận và như thế là dữ liệu đã được truyền đi. Các thiết bị truyền và nhận là các máy tính. Để cho hệ thống này có thể hoạt động được thì các vấn đề sau cần phải được xem xét:
</note>


 1.Cách thức mã hóa thông tin thành dữ liệu số.

2.Các loại kênh truyền dẫn có thể sử dụng để truyền tin.

3.Sơ đồ nối kết các thiết bị truyền và nhận lại với nhau.

4.Cách thức truyền tải các bit từ thiết bị truyền sang thiết bị nhận.

<br />

Hệ thống trên là hệ thống cơ bản nhất cho các hệ thống truyền dữ liệu. Nó thực hiện đầy đủ các chức năng mà tầng vật lý trong mô hình OSI qui định.

<br />
##Bài 2: Vấn đề số hoá thông tin
<hr />

Thông tin tồn tại dưới nhiều hình thức khác nhau. Để xử lý, mà đặc biệt để truyền tải thông tin ta cần phải mã hóa chúng.

![image.png](https://image.thanhnien.vn/w1024/Uploaded/2022/tnabtw/2021_12_09/ta03-7305.jpg)

| Thông tin | Hệ thống | Bộ mã hoá |	Bộ giải mã	| Truyền tải |
| :-----------: |:-------------:| :----:| :-----------: |:-------------:|
|Lời nói|	điện thoại|	micro	|loa	|tín hiệu tuần tự hay tín hiệu số|
|Ảnh tĩnh|	fax	| scanner|	bộ thông dịch tập tin|	tín hiệu tuần tự hoặc tín hiệu số|
|Dữ liệu tin học	| mạng truyền tin |	bộ điều khiển truyền thông	|bộ điều khiển truyền thông	| tín hiệu tuần tự hoặc tín hiệu số|
|Truyền hình	|truyền quảng bá|	camera|	bộ thu TV + antene	|Tín hiệu tuấn tự hoặc tín hiểu số|

<Text>
Trong thời đại chúng ta, thông tin thường được thể hiện dưới dạng các trang tài liệu hỗn hợp, như các trang web, mà ở đó đồng thời có thể thể hiện văn bản, hình ảnh tĩnh, hình ảnh động, phim ảnh,.... Thông tin thực tế được thể hiện dưới dạng đa phương tiện. Mỗi một loại thông tin sở hữu hệ thống mã hóa riêng, nhưng kết quả thì giống nhau: một chuỗi các số 0 và 1. Việc truyền tải thông tin bao gồm việc truyền tải các bit này. Mô hình mã hóa như sau:
</Text>

#### 