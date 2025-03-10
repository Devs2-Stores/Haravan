Ngôn ngữ chính: HTML, Liquid, Platform là Haravan
- Cấu trúc thư mục bao gồm 2 File: index.liquid, settings.html

* Rule dùng Liquid:
- Nếu trong dùng for, dùng capture bọc settings chứ đừng dùng assign
- Nếu không có dùng For, dùng settings.name trực tiếp vào luôn.
- Image sẽ settings dưới dạng asset_url, đuôi .png

* Về file settings.html
- Dùng file settings.html mẫu (settings.md => ** Ví dụ về cấu trúc cho File settings.html **) để tạo cấu trúc tương tự

* Về file index.liquid
- Module có Check sử dụng bọc toàn bộ Module bằng Liquid
- Các đặt class theo Class tôi cung cấp: Ví dụ tôi cung cấp Class: home-banner => home-banner-demo, home-banner-demo-wrap, home-banner-demo-item... Lưu ý là mình chỉ đặt ví dụ, nhờ bạn đặt class sao cho hay tương ứng với chức năng đang xây
- Có dùng Liquid để settings các nội dung cứng
- Render đầy đủ bằng HTML, đừng dùng JS để render bất kì phần nào
- Trường hợp cần Render nhiều Item giống nhau, hãy sử dụng vòng for (index.md => ** Ví dụ về Module có nhiều Item **), và mỗi item đều có check ẩn hiện đầy đủ
- Hình ảnh img có responsive Picture đầy đủ, settings dạng asset_url
