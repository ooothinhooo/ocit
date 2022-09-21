#Deterministic Finite Automata

## Thiết kế DFD

<aside>
> Thiết kế một DFA có tập kí tự đầu vào là {a, b, c} chấp nhận các chuỗi nhị phân bắt đầu là a và kết thúc là c.

<img src="https://i.ibb.co/jrNzjCV/image.png" alt="image" border="0">
</aside>

<aside>
> Thiết kế một DFA có tập kí tự đầu vào là {0, 1} chấp nhận tất cả các chuỗi nhị phân

 <img src="https://i.ibb.co/JvswYWf/image.png" alt="image" border="0">

</aside>

<aside>
> Thiết kế một DFA có tập kí tự đầu vào là {0, 1} chấp nhận các chuỗi nhị phân bắt đầu và kết thúc là 0
<img src="https://i.ibb.co/M8hRRKM/image.png" alt="image" border="0">
</aside>

<aside>
Thiết kế một DFA có tập kí tự đầu vào là {0, 1} chấp nhận các chuỗi nhị phân có số lượng số 0 là chẵn và số lượng số 1 là chẵn.
<img src="https://i.ibb.co/pRNxrCt/image.png" alt="image" border="0">
</aside>

<aside>
Thiết kế một DFA có tập kí tự đầu vào là {0, 1} chấp nhận tcác chuỗi nhị phân có số lượng số 0 là chẵn.
<img src="https://i.ibb.co/v1ynR1G/image.png" alt="image" border="0">
</aside>

##Thực hành 1: Lập trình Python
<Code>
Chuỗi DNA được tạo thành từ sự kết hợp của các codon, là 3 ký tự khác nhau bất kỳ thuộc bộ ký hiệu {A,C,G,T}, ví dụ ACT, ACG, TCG... Một đoạn gen là tập hợp của ít nhất 3 codon bắt đầu là ATG và kết thúc bằng TAA, TAG hoặc TGA.

Hãy viết chương trình kiểm tra 1 đoạn gen có hợp lệ hay không?

Đầu vào

Chuỗi st mô tả đoạn gen cần kiểm tra
Đầu ra

YES nếu chuỗi biểu diễn đoạn gen hợp lê; ngược lại NO
For example:

|Input	|Result|
|:----:|:------:| 
|CBAcBAac|A: 2|
|       |B: 2|
|       |C: 1|
|       |a: 1|
|       |c: 2|

<img src="https://i.ibb.co/1zGpRMh/image.png" alt="image" border="0">
</Code>

<info>
Chuỗi DNA được tạo thành từ sự kết hợp của các codon, là 3 ký tự khác nhau bất kỳ thuộc bộ ký hiệu {A,C,G,T}, ví dụ ACT, ACG, TCG... Một đoạn gen là tập hợp của ít nhất 3 codon bắt đầu là ATG và kết thúc bằng TAA, TAG hoặc TGA.


Hãy viết chương trình kiểm tra 1 đoạn gen có hợp lệ hay không?


Đầu vào


Chuỗi st mô tả đoạn gen cần kiểm tra


Đầu ra


YES nếu chuỗi biểu diễn đoạn gen hợp lê; ngược lại NO



For example:
 
|Input	|Result|
|:----:|:------:| 
|ATGCGTTGA | YES |
|  ATGCCCTAG | NO |

<img src="https://i.ibb.co/pwPx59c/image.png" alt="image" border="0">





</info>

<create>
Author: othinho - Update 15/09/2022
</create>
