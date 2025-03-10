Các trường sẽ cung cấp:
Class: ...
Asset: ...

Ngôn ngữ chính: HTML, Liquid, Platform là Haravan
- Cấu trúc thư mục cần xây dựng render ra bao gồm 2 File: index.liquid, settings.html

* Rule dùng Liquid:
- Nếu trong dùng for, dùng capture bọc settings chứ đừng dùng assign
- Nếu không có dùng For, dùng settings.name trực tiếp vào luôn.
- Image sẽ settings dưới dạng asset_url, đuôi .png

* Về file settings.html
- Dùng file settings.html mẫu (** Ví dụ về cấu trúc cho File settings.html **) để tạo cấu trúc tương tự

* Về file index.liquid
- Module có Check sử dụng bọc toàn bộ Module bằng Liquid
- Các đặt class theo Class tôi cung cấp: Ví dụ tôi cung cấp Class: home-banner => home-banner-demo, home-banner-demo-wrap, home-banner-demo-item... Lưu ý là mình chỉ đặt ví dụ, nhờ bạn đặt class sao cho hay tương ứng với chức năng đang xây
- Có dùng Liquid để settings các nội dung cứng
- Render đầy đủ bằng HTML, và chỉ render các phần theo Asset được cung cấp, đừng dùng JS để render bất kì phần nào
- Trường hợp cần Render nhiều Item giống nhau, hãy sử dụng vòng for (** Ví dụ về Module có nhiều Item **), và mỗi item đều có check ẩn hiện đầy đủ
- Hình ảnh img có responsive Picture đầy đủ, settings dạng asset_url

** Ví dụ về Module có 1 item
{%- if settings.home_banner_check -%}
<div class="home-banner">
	<div class="home-banner-wrap">
		<div class="home--banner-image">
			<picture>
				<source media="(min-width: 767px)" srcset="{{ 'home_banner_desktop.png' | asset_url }}"/>
				<source media="(min-width: 0)" srcset="{{ 'home_banner_mobile.png' | asset_url }}"/>
				<img width="" height="" loading="lazy" decoding="async" src="{{ 'home_banner_desktop.png' | asset_url }}" alt="{{ settings.home_banner_alt | escape }}"/>
			</picture>
   		</div>
		<div class="home-banner-info">
			<span class="home-banner-info-title">{{ settings.home_banner_title }}</span>
			<a href="{{ settings.home_banner_link}}" class="home-banner-info-title">{{ settings.home_banner_button }}</span>
		</div>
	</div>
</div>
{%- endif -%}

** Ví dụ về Module có nhiều Item **
{%- if settings.home_banner_check -%}
<div class="home-banner">
	<div class="home-banner-wrap">
		<div class="home-banner-items">
			{%- for i in (1..3) -%}
			{%- capture check -%}home_slider_item_check_{{ i }}{%- endcapture -%}
			{%- capture title -%}home_slider_item_title_{{ i }}{%- endcapture -%}
		 	{%- capture image_desktop -%}home_slider_item_image_desktop_{{ i }}.png{%- endcapture -%}
		  	{%- capture image_mobile -%}home_slider_item_image_mobile_{{ i }}.png{%- endcapture -%}
		  	{%- capture alt -%}home_slider_item_alt_{{ i }}{%- endcapture -%}
			{%- capture button -%}home_slider_item_button_{{ i }}{%- endcapture -%}
			{%- capture link -%}home_slider_item_link_{{ i }}{%- endcapture -%}
			{%- if settings[check] -%}
			<div class="home-banner-item">
		 		<div class="home-banner-item-image">
					<picture>
			   			<source media="(min-width: 767px)" srcset="{{ image_desktop | asset_url }}"/>
			      			<source media="(min-width: 0)" srcset="{{ image_mobile | asset_url }}"/>
						<img width="" height="" loading="lazy" decoding="async" src="{{ image | asset_url }}" link="{{ settings[alt] | escape }}"/>
			   		</picture>
				</div>
		 		<div class="home-banner-item-info">
					<span class="home-banner-item-info-title">{{ settings[title] }}</span>
					<a href="{{ settings[link] }}" class="home-banner-item-info-button">{{ settings[button] }}</span>
     				</div>
		   	</div>
			{%- endif -%}
		{%- endfor -%}
   		</div>
	</div>
</div>

** Ví dụ về HTML trong settings.html **
<fieldset>
  <legend>Home Banner</legend>
  <div class="row">
    <div class="col-sm-5">
      <img src="" alt="">
    </div>
    <div class="col-sm-7">
      <fieldset>
        <legend>1. Home Slider</legend>
        <table>
          <tr>
            <td colspan="2">
              <h3>Home Slider Item 1</h3>
            </td>
          </tr>
          <tr>
            <td colspan="1">
              <strong>Kích hoạt Slider</strong>
            </td>
            <td colspan="2">
              <input type="checkbox" name="home_slider_item_check_1" />
            </td>
          </tr>
          <tr>
            <td colspan="1">
              <strong>Hình ảnh Desktop 1920x640</strong>
            </td>
            <td colspan="2">
              <input type="file" name="home_slider_item_imagelg_1.jpg" />
            </td>
          </tr>
          <tr>
            <td colspan="1">
              <strong>Hình ảnh Mobile 600x600</strong>
            </td>
            <td colspan="2">
              <input type="file" name="home_slider_item_imagexs_1.jpg" />
            </td>
          </tr>
          <tr>
            <td colspan="1">
              <strong>Sử dụng nội dung</strong>
            </td>
            <td colspan="2">
              <input type="checkbox" name="home_slider_item_usecontent_1" />
            </td>
          </tr>
          <tr>
            <td colspan="1">
              <strong>Tiêu đề chính</strong>
            </td>
            <td colspan="2">
              <input type="text" name="home_slider_item_title_1" />
            </td>
          </tr>
          <tr>
            <td colspan="1">
              <strong>Tiêu đề phụ</strong>
            </td>
            <td colspan="2">
              <input type="text" name="home_slider_item_subtitle_1" />
            </td>
          </tr>
          <tr>
            <td colspan="1">
              <strong>Nội dung nút nhấn</strong>
            </td>
            <td colspan="2">
              <input type="text" name="home_slider_item_cta_1" />
            </td>
          </tr>
          <tr>
            <td colspan="1">
              <strong>link liên kết</strong>
            </td>
            <td colspan="2">
              <input type="text" name="home_slider_item_link_1" />
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <h3>Home Slider Item 2</h3>
            </td>
          </tr>
          <tr>
            <td colspan="1">
              <strong>Kích hoạt Slider</strong>
            </td>
            <td colspan="2">
              <input type="checkbox" name="home_slider_item_check_2" />
            </td>
          </tr>
          <tr>
            <td colspan="1">
              <strong>Hình ảnh Desktop 1920x640</strong>
            </td>
            <td colspan="2">
              <input type="file" name="home_slider_item_imagelg_2.jpg" />
            </td>
          </tr>
          <tr>
            <td colspan="1">
              <strong>Hình ảnh Mobile 600x600</strong>
            </td>
            <td colspan="2">
              <input type="file" name="home_slider_item_imagexs_2.jpg" />
            </td>
          </tr>
          <tr>
            <td colspan="1">
              <strong>Sử dụng nội dung</strong>
            </td>
            <td colspan="2">
              <input type="checkbox" name="home_slider_item_usecontent_2" />
            </td>
          </tr>
          <tr>
            <td colspan="1">
              <strong>Tiêu đề chính</strong>
            </td>
            <td colspan="2">
              <input type="text" name="home_slider_item_title_2" />
            </td>
          </tr>
          <tr>
            <td colspan="1">
              <strong>Tiêu đề phụ</strong>
            </td>
            <td colspan="2">
              <input type="text" name="home_slider_item_subtitle_2" />
            </td>
          </tr>
          <tr>
            <td colspan="1">
              <strong>Nội dung nút nhấn</strong>
            </td>
            <td colspan="2">
              <input type="text" name="home_slider_item_cta_2" />
            </td>
          </tr>
          <tr>
            <td colspan="1">
              <strong>link liên kết</strong>
            </td>
            <td colspan="2">
              <input type="text" name="home_slider_item_link_2" />
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <h3>Home Slider Item 3</h3>
            </td>
          </tr>
          <tr>
            <td colspan="1">
              <strong>Kích hoạt Slider</strong>
            </td>
            <td colspan="2">
              <input type="checkbox" name="home_slider_item_check_3" />
            </td>
          </tr>
          <tr>
            <td colspan="1">
              <strong>Hình ảnh Desktop 1920x640</strong>
            </td>
            <td colspan="2">
              <input type="file" name="home_slider_item_imagelg_3.jpg" />
            </td>
          </tr>
          <tr>
            <td colspan="1">
              <strong>Hình ảnh Mobile 600x600</strong>
            </td>
            <td colspan="2">
              <input type="file" name="home_slider_item_imagexs_3.jpg" />
            </td>
          </tr>
          <tr>
            <td colspan="1">
              <strong>Sử dụng nội dung</strong>
            </td>
            <td colspan="2">
              <input type="checkbox" name="home_slider_item_usecontent_3" />
            </td>
          </tr>
          <tr>
            <td colspan="1">
              <strong>Tiêu đề chính</strong>
            </td>
            <td colspan="2">
              <input type="text" name="home_slider_item_title_3" />
            </td>
          </tr>
          <tr>
            <td colspan="1">
              <strong>Tiêu đề phụ</strong>
            </td>
            <td colspan="2">
              <input type="text" name="home_slider_item_subtitle_3" />
            </td>
          </tr>
          <tr>
            <td colspan="1">
              <strong>Nội dung nút nhấn</strong>
            </td>
            <td colspan="2">
              <input type="text" name="home_slider_item_cta_3" />
            </td>
          </tr>
          <tr>
            <td colspan="1">
              <strong>link liên kết</strong>
            </td>
            <td colspan="2">
              <input type="text" name="home_slider_item_link_3" />
            </td>
          </tr>
        </table>
      </fieldset>
    </div>
  </div>
</fieldset>
