# Haravan Development Repository

## Ngôn ngữ chính
- HTML
- Liquid
- Nền tảng: Haravan

## Cấu trúc thư mục
File cần tạo, kết quả sẽ bao gồm 2 file:
- `index.liquid`
- `settings.html`

## Quy tắc sử dụng Liquid
1. **Dùng capture trong vòng for**: Nếu sử dụng vòng lặp `for`, dùng capture để bọc settings thay vì dùng assign.
2. **Trực tiếp dùng settings**: Nếu không sử dụng vòng lặp `for`, dùng trực tiếp `settings.name`.
3. **Asset URL cho hình ảnh**: Thẻ hình ảnh sẽ được settings dưới dạng `asset_url`, với đuôi `.png`.

## Quy tắc cho file `settings.html`
1. **Cách sử dụng**: Dùng file `settings.html` trong cấu trúc Repo mẫu để tạo cấu trúc tương tự.
2. **Lưu ý**: Không dùng được code Liquid trong file này.
3. **Hình ảnh**: Ghi chú kích thước hình ảnh trong phần mô tả của settings, settings name có đuôi ảnh luôn, ví dụ: name="image.png".

## Quy tắc cho file `index.liquid`
1. **Kiểm tra sử dụng**: Dùng Liquid để bao toàn bộ module.
2. **Đặt class theo quy tắc**: Đặt class theo hướng dẫn. Ví dụ: `home-banner` => `home-banner-demo`, `home-banner-demo-wrap`, `home-banner-demo-item`.
3. **Settings các nội dung cố định**: Dùng Liquid để settings các nội dung cố định.
4. **Render đầy đủ bằng HTML**: Render toàn bộ nội dung bằng HTML, không dùng JS.
5. **Render nhiều item**: Nếu cần render nhiều item giống nhau, sử dụng vòng lặp `for`. Mỗi item đều có check ẩn hiện đầy đủ.
6. **Hình ảnh responsive**: Hình ảnh `img` có responsive `picture` đầy đủ, settings dạng `asset_url`.

## Quy tắc khi trả kết quả
1. **File**: Chỉ bao gồm 2 file được đề cập, không tạo file mới
2. **index.liquid**: Beautifull code
3. **settings.html**: Beautifull code, hình ảnh note kích thước đầy đủ

## Ví dụ về các module
### Module có 1 item
```liquid
{%- if settings.home_banner_check -%}
<div class="home-banner">
    <div class="home-banner-wrap">
        <div class="home-banner-image">
            <picture>
                <source media="(min-width: 767px)" srcset="{{ 'home_banner_desktop.png' | asset_url }}"/>
                <source media="(min-width: 0)" srcset="{{ 'home_banner_mobile.png' | asset_url }}"/>
                <img width="" height="" loading="lazy" decoding="async" src="{{ 'home_banner_desktop.png' | asset_url }}" alt="{{ settings.home_banner_alt | escape }}"/>
            </picture>
        </div>
        <div class="home-banner-info">
            <a href="{{ settings.home_banner_link }}" class="home-banner-button">{{ settings.home_banner_button }}</a>
        </div>
    </div>
</div>
{%- endif -%}
```

### Module có nhiều item
```liquid
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
                        <img width="" height="" loading="lazy" decoding="async" src="{{ image_desktop | asset_url }}" alt="{{ settings[alt] | escape }}"/>
                    </picture>
                </div>
                <div class="home-banner-item-info">
                    <span class="home-banner-item-info-title">{{ settings[title] }}</span>
                    <a href="{{ settings[link] }}" class="home-banner-item-info-button">{{ settings[button] }}</a>
                </div>
            </div>
            {%- endif -%}
            {%- endfor -%}
        </div>
    </div>
</div>
{%- endif -%}
```

### Ví dụ về HTML trong `settings.html`
```html
<fieldset>
    <legend>Home Slider</legend>
    <table>
        <tr><td colspan="2"><h3>Home Slider Item 1</h3></td></tr>
        <tr>
            <td colspan="2"><strong>Kích hoạt Slider</strong></td>
            <td colspan="2"><input type="checkbox" name="home_slider_item_check_1" /></td>
        </tr>
        <tr>
            <td colspan="1"><strong>Hình ảnh Desktop (1920x640)</strong></td>
            <td colspan="2"><input type="file" name="home_slider_item_imagelg_1.jpg" /></td>
        </tr>
        <tr>
            <td colspan="1"><strong>Hình ảnh Mobile (800x800)</strong></td>
            <td colspan="2"><input type="file" name="home_slider_item_imagexs_1.jpg" /></td>
        </tr>
        <tr>
            <td colspan="1"><strong>Sử dụng nội dung</strong></td>
            <td colspan="2"><input type="checkbox" name="home_slider_item_usecontent_1" /></td>
        </tr>
        <tr>
            <td colspan="1"><strong>Tiêu đề chính</strong></td>
            <td colspan="2"><textarea name="home_slider_item_title_1"></textarea></td>
        </tr>
        <tr>
            <td colspan="1"><strong>Tiêu đề phụ</strong></td>
            <td colspan="2"><textarea name="home_slider_item_subtitle_1"></textarea></td>
        </tr>
        <tr>
            <td colspan="1"><strong>Nội dung nút nhấn</strong></td>
            <td colspan="2"><input type="text" name="home_slider_item_cta_1"/></td>
        </tr>
        <tr>
            <td colspan="1"><strong>Link liên kết</strong></td>
            <td colspan="2"><input type="text" name="home_slider_item_link_1"/></td>
        </tr>
        
        <tr><td colspan="2"><h3>Home Slider Item 2</h3></td></tr>
        <tr>
            <td colspan="2"><strong>Kích hoạt Slider</strong></td>
            <td colspan="2"><input type="checkbox" name="home_slider_item_check_2"/></td>
        </tr>
        <tr>
            <td colspan="1"><strong>Hình ảnh Desktop (1920x640)</strong></td>
            <td colspan="2"><input type="file" name="home_slider_item_imagelg_2.jpg"/></td>
        </tr>
        <tr>
            <td colspan="1"><strong>Hình ảnh Mobile (800x800)</strong></td>
            <td colspan="2"><input type="file" name="home_slider_item_imagexs_2.jpg"/></td>
        </tr>
        <tr>
            <td colspan="1"><strong>Sử dụng nội dung</strong></td>
            <td colspan="2"><input type="checkbox" name="home_slider_item_usecontent_2"/></td>
        </tr>
        <tr>
            <td colspan="1"><strong>Tiêu đề chính</strong></td>
            <td colspan="2"><textarea name="home_slider_item_title_2"></textarea></td>
        </tr>
        <tr>
            <td colspan="1"><strong>Tiêu đề phụ</strong></td>
            <td colspan="2"><textarea name="home_slider_item_subtitle_2"></textarea></td>
        </tr>
        <tr>
            <td colspan="1"><strong>Nội dung nút nhấn</strong></td>
            <td colspan="2"><input type="text" name="home_slider_item_cta_2"/></td>
        </tr>
        <tr>
            <td colspan="1"><strong>Link liên kết</strong></td>
            <td colspan="2"><input type="text" name="home_slider_item_link_2"/></td>
        </tr>
    </table>
</fieldset>
```
