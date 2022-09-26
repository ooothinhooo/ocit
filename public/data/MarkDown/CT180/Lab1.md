#Cơ Sở Dữ Liêu
##Thực Hành Buổi 1

<tag>Data Giáo Viên Cho</tag>
<Code>
<p>INSERT INTO KHOAHOC VALUES('K001','Khóa 1','2020-01-10','2020-03-20');
<p>INSERT INTO KHOAHOC VALUES('K002','Khóa 2','2020-02-28','2020-05-28');
<p>INSERT INTO KHOAHOC VALUES('K003','Khóa 3','2020-04-10','2020-07-20');
<p>INSERT INTO KHOAHOC VALUES('K004','Khóa 4','2020-06-15','2020-09-20');
<p>VÌ ĐỊNH DANG NGÀY TRÊN APEX LỖI NÊN 
<p>INSERT INTO KHOAHOC VALUES('K001','Khóa 1','01-10-2020','03-20-2020');
<p>INSERT INTO KHOAHOC VALUES('K002','Khóa 2','02-28-2020','05-28-2020');
<p>INSERT INTO KHOAHOC VALUES('K003','Khóa 3','04-10-2020','07-20-2020');
<p>INSERT INTO KHOAHOC VALUES('K004','Khóa 4','06-25-2020','09-20-2020');
<p>
<p>INSERT INTO KHOAHOC VALUES('K001','Khóa 1',to_date('2020-01-10','yyyy-mm-dd'),to_date('2020-03-20','yyyy-mm-dd'));
<p>INSERT INTO KHOAHOC VALUES('K002','Khóa 2',to_date('2020-02-28','yyyy-mm-dd'),to_date('2020-05-28','yyyy-mm-dd'));
<p>INSERT INTO KHOAHOC VALUES('K003','Khóa 3',to_date('2020-04-10','yyyy-mm-dd'),to_date('2020-07-20','yyyy-mm-dd'));
<p>INSERT INTO KHOAHOC VALUES('K004','Khóa 4',to_date('2020-06-15','yyyy-mm-dd'),to_date('2020-09-20','yyyy-mm-dd'));
<p>--------------------------------------------------------------------------------------
<p>INSERT INTO CHUONGTRINH VALUES('CT001','Tiếng Anh Tổng Quát');
<p>INSERT INTO CHUONGTRINH VALUES('CT002','Tiếng Anh Trẻ Em');
<p>INSERT INTO CHUONGTRINH VALUES('CT003','Tiếng Anh Luyện Kỹ Năng');
<p>INSERT INTO CHUONGTRINH VALUES('CT004','Chương Trình TOEIC');
<p>INSERT INTO CHUONGTRINH VALUES('CT005','Tiếng Anh IELTS');
<p>INSERT INTO CHUONGTRINH VALUES('CT006','Chương Trình CamBridge');
<p>INSERT INTO CHUONGTRINH VALUES('CT007','Chứng Chỉ Tiếng Anh 6 Bậc(A1,B1,B2,C1)');
<p>
<p>--------------------------------------------------------------------------------------
<p>
<p>INSERT INTO LOAILOP VALUES('LL001','CT001','Tiếng Anh căn bản');
<p>INSERT INTO LOAILOP VALUES('LL002','CT001','Tiếng Anh A1');
<p>INSERT INTO LOAILOP VALUES('LL003','CT001','Tiếng Anh A2');
<p>INSERT INTO LOAILOP VALUES('LL004','CT001','Tiếng Anh B1');
<p>INSERT INTO LOAILOP VALUES('LL005','CT001','Tiếng Anh B2');
<p>INSERT INTO LOAILOP VALUES('LL006','CT001','Tiếng Anh C1');
<p>INSERT INTO LOAILOP VALUES('LL007','CT001','Tiếng Anh C2');
<p>INSERT INTO LOAILOP VALUES('LL008','CT001','Tiếng Anh nâng cao');
<p>
<p>-------------------------------------------------------------------------------------
<p>
</Code>

<tag>Bài Làm</tag>
<br />
<aside>

<p>CREATE TABLE KHOAHOC
<p>(
<p>    MAKT CHAR(4) PRIMARY KEY,
<p>    TENKH VARCHAR(20) NOT NULL,
<p>    NGAYBD DATE NOT NULL,
<p>    NGAYKT DATE NOT NULL,
<p>    CONSTRAINT check_ngaykt CHECK(NGAYKT>NGAYBD)
<p>);
<p>
</aside>
<br />
<aside>
<p>-- CHUONG TRINH--
<p>CREATE TABLE CHUONGTRINH(
<p>    MACT CHAR(5) PRIMARY KEY,
<p>    TENCT VARCHAR(20)
<p>);
<p>
</aside>
<p>ALTER TABLE CHUONGTRINH MODIFY TENCT VARCHAR(50);
<br />
<aside>
<p>-- LOAI LOP--
<p>CREATE TABLE LOAILOP(
<p>    MALOAI CHAR(5) PRIMARY KEY,
<p>    MACT CHAR(5) REFERENCES CHUONGTRINH(MACT)
<p>);
</aside>
<br />
<aside>
<p>ALTER TABLE LOAILOP ADD LOAILOP VARCHAR(60);
<br />
<p>-- LOP --
<p>CREATE TABLE LOP(
<p>    MALOP CHAR(4) PRIMARY KEY,
<p>    MALOAI CHAR(5) NOT NULL,
<p>    TENLOP VARCHAR(20) NOT NULL,
<p>    SISO SMALLINT NOT NULL,
<p>    MAKH CHAR(4) NOT NULL REFERENCES KHOAHOC(MAKT),
<p>    FOREIGN KEY(MALOAI) REFERENCES LOAILOP(MALOAI)
<p>);
</aside>
<br />
<aside>
<p>ALTER TABLE LOP MODIFY TENLOP VARCHAR(60);
<p>--  HOCVIEN (MAHV,TENHV,SDT,NGAYSINH,GIOITINH,DIACHI) --
<p>CREATE TABLE HOCVIEN(
<p>    MAHV CHAR(6) PRIMARY KEY,
<p>    TENHV VARCHAR(20) NOT NULL,
<p>   GIOITINH CHAR(1) CHECK(GIOITINH IN ('0','1')),
<p>    NGAYSINH DATE NOT NULL,
<p>    SDT CHAR(10) NOT NULL,
<p>    DIACHI VARCHAR(50)
<p>);
</aside>
<br />
<aside>
<p>--  PHIEUTHU(SOPT,MAHV, MALOP,NGAYLAPPHIEU,THANHTIEN)--
<p>CREATE TABLE PHIEUTHU(
<p>    SOPT CHAR(8) PRIMARY KEY,
<p>    MAHV CHAR(6) REFERENCES HOCVIEN(MAHV),
<p>    MALOP CHAR(4) NOT NULL,
<p>    NGAYLAPPHIEU DATE,
<p>    THANHTIEN INT NOT NULL CHECK(THANHTIEN >0)
<p>);
<p>
</aside>
<br />
<aside>
<p>--
<p>CREATE TABLE MONHOC
<p>(
<p>    MAMH CHAR(5) PRIMARY KEY,
<p>    TENMH VARCHAR(20) NOT NULL
<p>);
<p>
</aside>
<br />

<p>


<aside>
<p>--DIEM--
<p>CREATE TABLE DIEM(
<p>    MAMH CHAR(5) REFERENCES MONHOC(MAMH),
<p>    MAHV CHAR(6) REFERENCES HOCVIEN(MAHV),
<p>    MALOP CHAR(4) REFERENCES LOP(MALOP),
<p>    DIEM NUMERIC(4,2),
<p>    PRIMARY KEY (MAMH, MAHV , MALOP)
<p>);
</aside>

<br />
<p>
<p>ALTER TABLE DIEM ADD CHECK(DIEM BETWEEN 0.0 AND 10.0);
<p>
<br />
<p>--THEM DATA --
<p>INSERT INTO KHOAHOC VALUES('K001','Khóa 1','01-10-2020','03-20-2020');
<p>INSERT INTO KHOAHOC VALUES('K002','Khóa 2','02-28-2020','05-28-2020');
<p>INSERT INTO KHOAHOC VALUES('K003','Khóa 3','04-10-2020','07-20-2020');
<p>INSERT INTO KHOAHOC VALUES('K004','Khóa 4','06-25-2020','09-20-2020');
<p>
<br />
<p>-- THEM DATA VÀO CHUONG TRINH --
<p>INSERT INTO CHUONGTRINH VALUES('CT001','Tiếng Anh Tổng Quát');
<p>INSERT INTO CHUONGTRINH VALUES('CT002','Tiếng Anh Trẻ Em');
<p>INSERT INTO CHUONGTRINH VALUES('CT003','Tiếng Anh Luyện Kỹ Năng');
<p>INSERT INTO CHUONGTRINH VALUES('CT004','Chương Trình TOEIC');
<p>INSERT INTO CHUONGTRINH VALUES('CT005','Tiếng Anh IELTS');
<p>INSERT INTO CHUONGTRINH VALUES('CT006','Chương Trình CamBridge');
<p>INSERT INTO CHUONGTRINH VALUES('CT007','Chứng Chỉ Tiếng Anh 6 Bậc(A1,B1,B2,C1)');
<p>
<br />
<p>--THEM DATA VÀO LOAI LOP -- 
<p>INSERT INTO LOAILOP VALUES('LL001','CT001','Tiếng Anh căn bản');
<p>INSERT INTO LOAILOP VALUES('LL002','CT001','Tiếng Anh A1');
<p>INSERT INTO LOAILOP VALUES('LL003','CT001','Tiếng Anh A2');
<p>INSERT INTO LOAILOP VALUES('LL004','CT001','Tiếng Anh B1');
<p>INSERT INTO LOAILOP VALUES('LL005','CT001','Tiếng Anh B2');
<p>INSERT INTO LOAILOP VALUES('LL006','CT001','Tiếng Anh C1');
<p>INSERT INTO LOAILOP VALUES('LL007','CT001','Tiếng Anh C2');
<p>INSERT INTO LOAILOP VALUES('LL008','CT001','Tiếng Anh nâng cao');
<p>
<br />
<p>--THEM DATA VAO LOP --
<p>INSERT INTO LOP(malop, maloai,siso,makh,tenlop) VALUES ('L001','LL001',30,'K001','Lớp 1');
<p>INSERT INTO LOP(malop, maloai,siso,makh,tenlop) VALUES ('L002','LL001',30,'K001','Lớp 2');
<p>INSERT INTO LOP(malop, maloai,siso,makh,tenlop)VALUES ('L003','LL002',25,'K001','Lớp 3');
<p>
<br />
<p>-- THEM DATA VÀO HOC VIEN --
<p>INSERT INTO HOCVIEN VALUES('HV0001','Đỗ Bình An','1',to_date('2000-11-02','yyyy-mm-dd'),'0917217036','Cờ Đỏ - Cần Thơ');
<p>INSERT INTO HOCVIEN VALUES('HV0002','Đỗ Gia Bảo','1',to_date('2001-12-02','yyyy-mm-dd'),'0917217036','Ôn Môn- Cần Thơ');
<p>INSERT INTO HOCVIEN VALUES('HV0003','Đỗ Phúc Vinh','1',to_date('2002-11-02','yyyy-mm-dd'),'0917217036','Cù Lao Dung - Sóc Trăng');
<p>INSERT INTO HOCVIEN VALUES('HV0004','Thạch Chí Tâm','1',to_date('2000-01-02','yyyy-mm-dd'),'0917217036','Châu Thành- An Giang')
<p>
<br />
<p>-- THÊM DATA VÀ PHIẾU THU --
<p>insert into PHIEUTHU values('PT000001','HV0001','L001',to_date('2021-06-01','yyyy-mm-dd'),1350000);
<p>insert into PHIEUTHU values('PT000002','HV0002','L001',to_date('2021-06-01','yyyy-mm-dd'),1350000);
<p>insert into PHIEUTHU values('PT000003','HV0003','L001',to_date('2021-06-01','yyyy-mm-dd'),1350000);
<p>insert into PHIEUTHU values('PT000004','HV0004','L001',to_date('2021-06-01','yyyy-mm-dd'),1350000);
<p>
<br />
<p>
<p>-- THEM DATA VÀO MON HOC --
<p>INSERT INTO MONHOC VALUES ('MH01','Nghe');
<p>INSERT INTO MONHOC VALUES ('MH02','Nói');
<p>INSERT INTO MONHOC VALUES ('MH03','Đọc');
<p>INSERT INTO MONHOC VALUES ('MH04','Viết');
<p>
<br />
<p>-- THEM DATA VÀO ĐIỂM --
<p>INSERT INTO DIEM values  ('MH01','HV0002', 'L001', 5.5);
<p>INSERT INTO DIEM values  ('MH02','HV0002', 'L001', 6.5);
<p>INSERT INTO DIEM values  ('MH03','HV0002', 'L001', 8.5);
<p>INSERT INTO DIEM values  ('MH04','HV0002', 'L001', 3.5);
<p>
<br />
<aside>
<p>--CÂU 3 --
<p>-- Thêm dòng dữ liệu ('PT00008','HV0012','L001','2021-06-02',1350000) vào PHIEUTHU ? --
<p>--Dòng này có thêm vào được không ? Giải thích tại sao ?--
<p>insert into PHIEUTHU values('PT000008','HV0012','L001',to_date('2021-06-02','yyyy-mm-dd'),1350000);
<p>-- LỆNH TRÊN KHÔNG CHẠY LÀ DÔ CHƯA CÓ HỌC VIÊN CÓ MÃ LÀ HV0012 NÊN KHÔNG THÊM VÀO PHIẾU THU ĐƯỢC --
</aside>
<p><br />
<aside>
<p>-- CÂU  4 --
<p>-- Thêm dòng dữ liệu ('L004','LL002','Lớp 4',10,'K001') vào LOP ? Dòng này có thêm vào được không ? Giải thích tại sao ?
<p>INSERT INTO LOP VALUES ('L004','LL002','Lớp 4',10,'K001');
<p>SELECT * FROM LOP
<p>-- THÊM VÀO ĐƯỢC VÌ CÁC KHOÁ CHÍNH VÀ KHOÁ NGOẠI ĐỀU THOẢ MẢN RÀNG BUỘC VÀ ĐỦ ĐIỀU KIỆN ĐỂ THÊM VÀO --
</aside>
<p><br />
<aside>
<p>-- CÂU 5--
<p>DELETE FROM KHOAHOC WHERE MAKT='K001';<br />
<p>-- KHÔNG XOÁ ĐC VÌ NÓ LÀ KHOÁ NGOẠI Ở CÁC BẢNG KHÁC NÊN KHÔNG THỂ XOÁ MAKT Ở BẢNG KHOÁ HỌC --<br />
</aside>

<aside>
<p>-- CÂU 6 -- 
<p>DELETE FROM KHOAHOC WHERE MAKT='K002';<br />
<p>-- XOÁ ĐƯỢC VÌ CHƯA CÓ BẢNG NÀO ĐANG SỰ DỤNG KHOÁ NGOẠI VỚI MAKT='KL002' NÊN CÓ THỂ XOÁ ĐƯỢC--<br />
<p>SELECT * FROM KHOAHOC
</aside>
<br />



<aside>
<p>-- CAAU 7--
<p>SELECT * FROM PHIEUTHU -- XEM BANG PHIEU THU--<br />
<p>UPDATE PHIEUTHU SET THANHTIEN = THANHTIEN *0.9<br />
<p>SELECT * FROM LOP;
</aside>
<br />


<aside>
<p>-- UPDATE DATA--
<p>-- CAU 8 --
<p>ALTER TABLE LOP ADD HOCPHI INT; -- THEM COT HOC PHI VAOF BANG LOP--<br />
<p>UPDATE LOP SET HOCPHI =1350000 WHERE MALOAI='LL001';<br />
<p>UPDATE LOP SET HOCPHI =1650000 WHERE MALOAI='LL002';<br />
<p>SELECT * FROM LOP;
</aside>
<br />


<p><br />
<aside>
<p>-- CAU 9--
<p>CREATE TABLE HOCVIENNAM(
<p>    MAHV CHAR(6) PRIMARY KEY,
<p>    TENHV VARCHAR(20) NOT NULL,
<p>    NGAYSINH DATE NOT NULL,
<p>    SDT CHAR(10) NOT NULL,
<p>    DIACHI VARCHAR(50)
<p>);
</aside>
<br />


<aside>

<p>-- CAU 10--
<p>INSERT INTO HOCVIENNAM
<p>    SELECT MAHV, TENHV, NGAYSINH, SDT, DIACHI FROM HOCVIEN WHERE GIOITINH='1'; 
<p>    <br />
<p>SELECT * FROM HOCVIENNAM
</aside>


<aside>

<p><br />
<p>-- CÂU 11- 
<p>DROP TABLE KHOAHOC;<br />
<p>-- KHÔNG THỂ XOÁ BẢNG KHOAHOC ĐƯỢC VÌ BẢNG KHOAHOC LÀ KHOÁ NGOẠI CỦA BẢNG KHÁC NÊN KHÔNG THỂ XOÁ ĐƯỢC --<br />
<p><br />
</aside>


<aside>

<p>-- CÂU 12--
<p>DROP TABLE HOCVIENNAM;<br />
<p>-- CÓ THỂ XOÁ ĐƯỢC BẢNG HOCVIENNAM ĐƯỢC LÀ VÌ BẢNG HOCVIENNAM KHÔNG LÀ KHOÁ NGOẠI CỦA BẤT KÌ BẢNG NÀO NÊN CÓ THỂ XOÁ ĐƯỢC --
<p><br />
</aside>


<aside>


<p>-- CÂU 13 --
<p>--THAY ĐÔI KÍCH THƯỚC KIỂU DỮ LIỆU CỦA BẢNG MÔN HỌC -- <br />
<p>ALTER TABLE MONHOC MODIFY TENMH VARCHAR(100);
<p><br />
</aside>






<create>
Create by Van Thinh Tran - Update 26/09/2022
</create>