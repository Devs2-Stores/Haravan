Ngôn ngữ chính: HTML, Liquid, Platform là Haravan
- Plugin Jquery, Swiper, Slick
- Cấu trúc thư mực bao gồm 2 File: index.liquid, settings.html

* Rule dùng Liquid:
- Nếu trong dùng for, dùng capture bọc settings chứ đừng dùng assign
- Nếu không có dùng For, dùng settings.name trực tiếp vào luôn.
- Image sẽ settings dưới dạng asset_url, đuôi .png

* Về file settings.html
- Dùng file settings.html mẫu để tạo cấu trúc tương tự

* Về Module ở file index.liquid
- Module có Check sử dụng bằng Liquid
- Các đặt class theo Class tôi cung cấp: Ví dụ tôi cung cấp Class: home-banner => home-banner-demo, home-banner-demo-wrap, home-banner-demo-item... Lưu ý là mình chỉ đặt ví dụ, nhờ bạn đặt class sao cho hay tương ứng với chức năng đang xây
- Có dùng Liquid để settings các nội dung cứng
- Render đầy đủ bằng HTML, đừng dùng JS để render bất kì phần nào
- Trường hợp cần Render nhiều Item giống nhau, hãy sử dụng vòng for, và mỗi item đều có check ẩn hiện đầy đủ
- Hình ảnh img có responsive Picture đầy đủ, settings dạng asset_url

** Ví dụ về Module có 1 item
{%- if settings.home_banner_check -%}
<div class="home-demo">
	<picture>
		<source media="(min-width: 767px)" srcset="{{ 'home_banner_desktop.png' | asset_url }}"/>
		<source media="(min-width: 0)" srcset="{{ 'home_banner_mobile.png' | asset_url }}"/>
		<img width="" height="" loading="lazy" decoding="async" src="{{ 'home_banner_desktop.png' | asset_url }}" alt="{{ settings.home_banner_alt | escape }}"/>
	</picture>
	<span>{{ settings.home_banner_title }}</span>
</div>
{%- endif -%}

** Ví dụ về Module có nhiều Item
{%- for i in (1..3) -%}
	{%- capture check -%}home_slider_item_check_{{ i }}{%- endcapture -%}
	{%- capture title -%}home_slider_item_title_{{ i }}{%- endcapture -%}
 	{%- capture image_desktop -%}home_slider_item_image_desktop_{{ i }}.png{%- endcapture -%}
  	{%- capture image_mobile -%}home_slider_item_image_mobile_{{ i }}.png{%- endcapture -%}
  	{%- capture alt -%}home_slider_item_alt_{{ i }}{%- endcapture -%}
	{%- if settings[check] -%}
	<div class="home-demo">
 		<picture>
   			<source media="(min-width: 767px)" srcset="{{ image_desktop | asset_url }}"/>
      			<source media="(min-width: 0)" srcset="{{ image_mobile | asset_url }}"/>
			<img width="" height="" loading="lazy" decoding="async" src="{{ image | asset_url }}" alt="{{ settings[alt] | escape }}"/>
   		</picture>
 		<span>{{ settings[title] }}</span>
   	</div>
	{%- endif -%}
{%- endfor -%}
