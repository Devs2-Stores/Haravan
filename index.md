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
