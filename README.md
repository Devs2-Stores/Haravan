Ngôn ngữ chính: HTML, SCSS, JS, Liquid, Platform là Haravan
- Bỏ qua thẻ Head, chỉ cần xây dựng các Modaule dưới dạng Section
- File code chính là Index.html
- File settings tương ứng cho Liquid là settings.html

* Rule code SCSS
- Render dưới dạng SCSS, responsive ngay tại chỗ dòng code

* Rule dùng Liquid:
- Nếu trong dùng for, dùng capture bọc settings chứ đừng dùng assign
- Mỗi Module sinh ra đều có check sử dụng hay không

* Về Module ở file index.html
- Các đặt class: Ví dụ: home-demo, home-demo-wrap, home-demo-item... Lưu ý là mình chỉ đặt ví dụ, nhờ bạn đặt class sao cho hay tương ứng với chức năng đang xây
- Có dùng Liquid để settings các nội dung cứng
- Render đầy đủ bằng HTML, đừng dùng JS để render bất kì phần nào
- Trường hợp cần Render nhiều Item giống nhau, hãy sử dụng vòng for, và mỗi item đều có check ẩn hiện đầy đủ
- Hình ảnh Render dưới dạng Có responsive
