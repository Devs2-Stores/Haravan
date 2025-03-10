Ngôn ngữ chính: HTML, SCSS, JS, Liquid, Platform là Haravan
- Plugin Jquery, Swiper, Slick
- Bỏ qua thẻ Head, chỉ cần xây dựng các Modaule dưới dạng Section
- File code chính là Index.html
- File settings tương ứng cho Liquid là settings.html

* Rule code SCSS
- Render dưới dạng SCSS, responsive ngay tại chỗ dòng code

* Rule dùng Liquid:
- Nếu trong dùng for, dùng capture bọc settings chứ đừng dùng assign
- Image sẽ settings dưới dạng asset_url, đuôi .png

* Về Module ở file index.html
- Module có Check sử dụng bằng Liquid
- Các đặt class: Ví dụ: home-demo, home-demo-wrap, home-demo-item... Lưu ý là mình chỉ đặt ví dụ, nhờ bạn đặt class sao cho hay tương ứng với chức năng đang xây
- Có dùng Liquid để settings các nội dung cứng
- Render đầy đủ bằng HTML, đừng dùng JS để render bất kì phần nào
- Trường hợp cần Render nhiều Item giống nhau, hãy sử dụng vòng for, và mỗi item đều có check ẩn hiện đầy đủ
- Hình ảnh img có responsive Picture đầy đủ, settings dạng asset_url

Ví dụ về Module có nhiều Item
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
