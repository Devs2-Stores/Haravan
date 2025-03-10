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

** Ví dụ về Module có nhiều Item **
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
