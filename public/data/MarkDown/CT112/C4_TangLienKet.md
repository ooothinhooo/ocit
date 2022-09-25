#Chương 4: Tầng Liên Kết

<aside>
<tag>Câu 1:</tag>
#####"Khung bị lỗi bị loại bỏ, những khung tiếp sau vẫn được nhận và được lưu tạm trong vùng đệm, khi tới thời gian time-out bên gởi chỉ gởi lại khung bị mất" mệnh đề này đề cập đến cách thức xử lý nào của bên nhận khi khung bị lỗi?
<success>
Selective Repeat
</success>
</aside>

<aside>
<tag>Câu 2:</tag>
#####"Nếu một khung bị sai thì ta không xác định được các khung tiếp theo", mệnh đề mày thể hiện khuyết điểm của phương pháp định khung nào?
<success>
Đếm ký tự
</success>
</aside>


<aside>
<tag>Câu 3:</tag>
#####"Người nhận gởi thông tin về cho người gởi cho phép người gởi gởi thêm dữ liệu, cũng như báo với người gởi những gì mà người nhận đang làm", mệnh đề này đề cập đến tiếp cận điều khiển luồng dựa trên
<success>
Phản hồi (feedback based)
</success>
</aside>


<aside>
<tag>Câu 4:</tag>
#####"Phương pháp kiểm tra chẵn lẻ" có thể khắc phục được bao nhiêu % số lỗi xảy ra trên đường truyền?
<success>
88%
</success>
</aside>


<aside>
<tag>Câu 5:</tag>
#####"Trong giao thức truyền tin cài sẵn cơ chế giới hạn tần suất mà người gởi có thể truyền tin", mệnh đề này đề cập đến tiếp cận điều khiển luồng dựa trên
<success>
Tần số (rate based)
</success>
</aside>


<aside>
<tag>Câu 6:</tag>
#####"Để bên gởi truyền lại tất cả các khung bắt đầu từ khung bị lỗi" mệnh đề này đề cập đến cách thức xử lý nào của bên nhận khi khung bị lỗi?
<success>
Go-Back-N
</success>
</aside>


<aside>
<tag>Câu 7:</tag>
#####Bằng cách nào để đảm bảo rằng các khung do tầng liên kết chuyển lên tầng mạng theo đúng trình tự chúng đã được gởi?
<success>
Gán số thứ tự cho khung
</success>
</aside>


<aside>
<tag>Câu 8:</tag>
#####Cho một giao thức cửa sổ trượt sử dụng 3 bits để đánh số thứ tự các vị trí trên cửa sổ, với kích thước của cửa sổ trượt được thỏa thuận giữa bên gởi và nhận là 4. Giả sử hiện tại cửa sổ nhận đang chứa các giá trị 2,3,4,5. Khung số 2 được gởi đến và không bị lỗi dữ liệu, khi đó cửa sổ nhận sẽ ứng xử như thế nào?
<success>
Nhận khung số 2, gởi báo nhận về bên gởi, di chuyển cửa sổ để chứa các số 3,4,5,6
</success>
</aside>


<aside>
<tag>Câu 9:</tag>
#####Cho một kịch bản trao đổi dữ liệu hai chiều trong giao thức HDLC như hình dưới đây. Hãy cho biết các giá trị X,Y,Z trong khung mà bên A sẽ gởi là gì?
<success>
I,2,1 (Bai này có hình mà luời dán quá)
</success>
</aside>


<aside>
<tag>Câu 10:</tag>
#####Chức năng nào sau đây không thuộc tầng liên kết dữ liệu?
<success>
Mã hóa đường truyền
</success>
</aside>

> 
<aside>
<tag>Câu 11:</tag>
#####Chức năng điều khiển luồng (Flow Control) của Tầng liên kết dữ liệu dùng để giải quyết vấn đề gì?
<success>
Sự khác biệt giữa tốc độ truyền và nhận của bên truyền và bên nhận
</success>
</aside>
<br />
<aside>
<tag>Câu 12:</tag>
#####Dịch vụ không nối kết có báo nhận thường được sử dụng trong?
<success>
Mạng không dây (Wireless)
</success>
</aside>


<aside>
<tag>Câu 13:</tag>
#####Dịch vụ không nối kết không báo nhận thường được sử dụng trong?
<success>
Mạng cục bộ (LAN)
</success>
</aside>


<aside>
<tag>Câu 14:</tag>
#####Giả sử hệ thống sử dụng phương pháp Kiểm tra phần dư tuần hoàn (Cycle Redundancy Check) để phát hiện và xử lý lỗi. Thông điệp cần truyền đi là M=1101011011, giá trị P=10011. Hãy cho biết dữ truyền đi (T) sau khi đã thêm chuỗi kiểm tra khung (F) là gì?
<success>
11010110111110
</success>
</aside>


<aside><tag>Câu 15:</tag>
#####Giao thức cửa sổ trượt sử dụng 3 bits để đánh số thứ tự các vị trí trên cửa sổ, vùng bộ nhớ đệm của bên nhận có thể chứa được 5 khung, hỏi kích thước của cửa sổ trượt trong trường hợp này là bao nhiêu?
<success>
4
</success>
</aside>


<aside>
<tag>Câu 16:</tag>
#####Giao thức cửa sổ trượt sử dụng 4 bits để đánh số thứ tự các vị trí trên cửa sổ, vùng bộ nhớ đệm của bên nhận có thể chứa được 5 khung, hỏi kích thước của cửa sổ trượt trong trường hợp này là bao nhiêu?
<success>
5
</success>
</aside>


<aside>
<tag>Câu 17:</tag>
#####Giao thức HDLC (High Level Data Link Control) sử dụng bao nhiêu bit để đánh số thứ tự khung?
<success>
3
</success>
</aside>


<aside>
<tag>Câu 18:</tag>
#####Giao thức HDLC (High Level Data Link Control) sử dụng mấy loại khung trong việc truyền dữ liệu?
<success>
1
</success>
</aside>

<br />

<aside>
<tag>Câu 19:</tag>
#####Giao thức HDLC sử dụng phương pháo định khung nào?
<success>
Sử dụng cờ bắt đầu và kết thúc khung cùng với các bit độn.
</success>
</aside>

<br />
<aside>
<tag>Câu 20:</tag>
#####Giao thức Điểm nối điểm (PPP- Point-to-Point Protocol) sử dụng phương pháp định khung nào?
<success>
Cờ bắt đầu, kết thúc và độn byte
</success>
</aside>


<aside>
<tag>Câu 21:</tag>
#####Mệnh đề nào dưới đây không thể hiện tính chất của Primary Station trong giao thức HDLC?
<success>

Các khung gởi đi được gọi là các trả lời.
</success>
</aside>


<aside>
<tag>Câu 22:</tag>
#####Nếu ta sử dụng bộ mã phát hiện lỗi là "Kiểm tra chẵn" thì với ký tự cần truyền G = 111000111001100 ta phải sử dụng bit chẵn lẻ p là?
<success>
p=0
</success>
</aside>


<aside>
<tag>Câu 23:</tag>
#####Phát biểu nào sau đây không đúng về cấu hình đường kết nối "không cân bằng" trong giao thức HDLC?
<success>
Gồm hai Combined stations.
</success>
</aside>


<aside><tag>Câu 24:</tag>
#####Thiết bị mạng nào sau đây hoạt động ở tầng liên kết dữ liệu của mô hình OSI?
<success>

Switch và Bridge
</success>
</aside>

<br />
<aside><tag>Câu 25:</tag>
#####Trong giao thức cửa số trượt (Sliding Windows), cửa sổ gởi (Sending windows) dùng để làm gì?
<success>

Theo dõi các khung đã gởi và đang chờ báo nhận
</success>
</aside>


<aside><tag>Câu 26:</tag>
#####Trong giao thức cửa sổ trượt (Sliding Windows), cửa sổ nhận (Receiving windows) dùng để làm gì?
<success>
Xác định các khung được phép nhận
</success>
</aside>


<aside><tag>Câu 27:</tag>
#####Trong giao thức cửa sổ trượt, kích thước tối đa của cửa số được chọn dựa vào số bit (khoảng) để đánh số thứ tự của khung như thế nào?
<success>
Kích thước tối đa của của sổ nhận bằng một nửa khoảng đánh số thứ tự của khung
</success>
</aside>


<aside><tag>Câu 28:</tag>
#####Trong giao thức HDLC, người ta định nghĩa bao nhiêu cấu hình đường kết nối?
<success>
2
</success>
</aside>


<aside><tag>Câu 29:</tag>
#####Trong phương pháp sử dụng cờ bắt đầu & kết thúc khung cùng với các bit độn, với mẫu bit đặc biệt để làm cờ là 01111110, với đoạn dữ liệu gốc là 11001111111001110001111111000000, thì dữ liệu chuyển lênh kênh truyền sẽ là:
<success>

1100111110110011100011111011000000
</success>
</aside>


<aside><tag>Câu 30:</tag>
#####Đơn vị truyền dữ liệu của Tầng liên kết dữ liệu gọi là gì?
<success>
Khung (Frame)
</success>
</aside>

<br>

<Text>Đây là bài làm các nhân, Có thể sẽ không đúng tất cả. Nếu có sai sót hãy liên hệ với chúng tôi. Xin chân thành cảm ơn</Text>
<create>
Author: NgocVi & othinho - Update 25/09/2022
</create>