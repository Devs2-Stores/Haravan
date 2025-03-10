** Ví dụ về cấu trúc cho File settings.html **
<fieldset>
	<legend>1. Thiết lập tổng quát</legend>
	<div class="row">
		<div class="col-sm-12">
			<fieldset>
				<legend>0. Thẻ Meta</legend>
				<table>
					<tr>
						<td colspan="1">
							<strong>Keywords</strong>
						</td>
						<td colspan="2">
							<textarea name="shop_meta_keywords"></textarea>
						</td>
					</tr>
				</table>
			</fieldset>
			<fieldset>
				<legend>1. Màu sắc</legend>
				<table>
					<tr>
						<td colspan="1">
							<strong>Màu chủ đạo 1</strong>
						</td>
						<td colspan="2">
							<input type="color" name="home_color_master" />
						</td>
					</tr>
					<tr>
						<td colspan="2">
							<p>Màu mặc định: #FF5D22</p>
						</td>
					</tr>
					<tr>
						<td colspan="1">
							<strong>Màu chủ đạo 2</strong>
						</td>
						<td colspan="2">
							<input type="color" name="home_color_master_two" />
						</td>
					</tr>
					<tr>
						<td colspan="2">
							<p>Màu mặc định: #594A4E</p>
						</td>
					</tr>
					<tr>
						<td colspan="1">
							<strong>Màu chủ đạo 3</strong>
						</td>
						<td colspan="2">
							<input type="color" name="home_color_master_three" />
						</td>
					</tr>
					<tr>
						<td colspan="2">
							<p>Màu mặc định: #61f23f</p>
						</td>
					</tr>
				</table>
			</fieldset>
			<fieldset>
				<legend>2. Hình ảnh chia sẻ trang chủ lên facebook</legend>
				<table>
					<tr>
						<td colspan="2">
							<h3>Hình ảnh nên có kích thước 1200x630 hoặc là hình vuông. Và kích thước không được nhiều hơn 5mb.</h3>
						</td>
					</tr>
					<tr>
						<td colspan="1">
							<strong>Chọn hình ảnh (1200x630)</strong>
						</td>
						<td colspan="2">
							<input type="file" name="share_fb_home.png" />
						</td>
					</tr>
					<tr>
						<td colspan="2">
							<p>Hình ảnh nên có kích thước 1200x630 hoặc là hình vuông. Và kích thước không được nhiều hơn 5mb.</p>
						</td>
					</tr>
				</table>
			</fieldset>
			<fieldset>
				<legend>3. Popup đăng ký nhận tin</legend>
				<div class="row">
					<div class="col-sm-5">
						<img src="https://file.hstatic.net/200000951409/file/screenshot_200.png" alt="Popup đăng ký nhận tin"/>
					</div>
					<div class="col-sm-7">
						<table>
							<tr>
								<td colspan="1">
									<strong>Kích hoạt nhóm</strong>
								</td>
								<td colspan="2">
									<input type="checkbox" name="shop_modal_contact_check" />
								</td>
							</tr>
							<tr>
								<td colspan="1">
									<strong>Thời gian bắt đầu hiển thị</strong>
								</td>
								<td colspan="2">
									<input type="text" name="shop_modal_contact_time" />
								</td>
							</tr>
							<tr>
								<td colspan="1">
									<strong>Banner phải (480x480)</strong>
								</td>
								<td colspan="2">
									<input type="file" name="shop_modal_contact_image.jpg" />
								</td>
							</tr>
							<tr>
								<td colspan="1">
									<strong>Tiêu đề chính</strong>
								</td>
								<td colspan="2">
									<input type="text" name="shop_modal_contact_title" />
								</td>
							</tr>
							<tr>
								<td colspan="1">
									<strong>Nội dung ngắn</strong>
								</td>
								<td colspan="2">
									<textarea name="shop_modal_contact_description"></textarea>
								</td>
							</tr>
							<tr>
								<td colspan="1">
									<strong>Link chính sách</strong>
								</td>
								<td colspan="2">
									<input type="text" name="shop_modal_contact_href" />
								</td>
							</tr>
						</table>
					</div>
				</div>
			</fieldset>
			<fieldset>
				<legend>4. Thanh bar trên mobile</legend>
				<div class="row">
					<div class="col-sm-5">
						<img src="https://file.hstatic.net/200000913407/file/mb.png" alt="Popup đăng ký nhận tin"/>
					</div>
					<div class="col-sm-7">
						<table>
							<tr>
								<td colspan="1">
									<strong>Kích hoạt toàn nhóm</strong>
								</td>
								<td colspan="2">
									<input type="checkbox" name="shop_mobar_check" />
								</td>
							</tr>
							<tr>
								<td colspan="2">
									<h3>Item 1</h3>
								</td>
							</tr>
							<tr>
								<td colspan="1">
									<strong>Hình ảnh 1(64x64px)</strong>
								</td>
								<td colspan="2">
									<input type="file" name="shop_mobar_item_image_1.png" />
								</td>
							</tr>
							<tr>
								<td colspan="1">
									<strong>Tiêu đề</strong>
								</td>
								<td colspan="2">
									<input type="text" name="shop_mobar_item_title_1" />
								</td>
							</tr>
							<tr>
								<td colspan="1">
									<strong>Link liên kết</strong>
								</td>
								<td colspan="2">
									<input type="text" name="shop_mobar_item_link_1" />
								</td>
							</tr>
							<tr>
								<td colspan="2">
									<h3>Item 2</h3>
								</td>
							</tr>
							<tr>
								<td colspan="1">
									<strong>Hình ảnh 2(64x64px)</strong>
								</td>
								<td colspan="2">
									<input type="file" name="shop_mobar_item_image_2.png" />
								</td>
							</tr>
							<tr>
								<td colspan="1">
									<strong>Tiêu đề</strong>
								</td>
								<td colspan="2">
									<input type="text" name="shop_mobar_item_title_2" />
								</td>
							</tr>
							<tr>
								<td colspan="1">
									<strong>Link liên kết</strong>
								</td>
								<td colspan="2">
									<input type="text" name="shop_mobar_item_link_2" />
								</td>
							</tr>
							<tr>
								<td colspan="2">
									<h3>Item 3</h3>
								</td>
							</tr>
							<tr>
								<td colspan="1">
									<strong>Hình ảnh 3(64x64px)</strong>
								</td>
								<td colspan="2">
									<input type="file" name="shop_mobar_item_image_3.png" />
								</td>
							</tr>
							<tr>
								<td colspan="1">
									<strong>Tiêu đề</strong>
								</td>
								<td colspan="2">
									<input type="text" name="shop_mobar_item_title_3" />
								</td>
							</tr>
							<tr>
								<td colspan="1">
									<strong>Link liên kết</strong>
								</td>
								<td colspan="2">
									<input type="text" name="shop_mobar_item_link_3" />
								</td>
							</tr>
							<tr>
								<td colspan="2">
									<h3>Item 4( Danh mục cột trái )</h3>
								</td>
							</tr>
							<tr>
								<td colspan="1">
									<strong>Hình ảnh 4(64x64px)</strong>
								</td>
								<td colspan="2">
									<input type="file" name="shop_mobar_item_image_4.png" />
								</td>
							</tr>
							<tr>
								<td colspan="1">
									<strong>Tiêu đề</strong>
								</td>
								<td colspan="2">
									<input type="text" name="shop_mobar_item_title_4" />
								</td>
							</tr>
						</table>
					</div>
				</div>
			</fieldset>
			<fieldset>
				<legend>5. Menu mobile</legend>
				<div class="row">
					<div class="col-sm-5">
						<img src="https://file.hstatic.net/200000928091/file/screenshot_16_7d6fec7f22cb46baa17545782ad8f1b2.png" alt="Popup đăng ký nhận tin"/>
					</div>
					<div class="col-sm-7">
						<table>
							<tr>
								<td colspan="2">
									<h3>Thiết lập chung</h3>
								</td>
							</tr>
							<tr>
								<td colspan="1">
									<strong>Tiêu đề</strong>
								</td>
								<td colspan="2">
									<input type="text" name="shop_menu_mobile_sub_title" />
								</td>
							</tr>
							<tr>
								<td colspan="1">
									<strong>Mô tả</strong>
								</td>
								<td colspan="2">
									<textarea name="shop_menu_mobile_content"></textarea>
								</td>
							</tr>
						</table>
					</div>
				</div>
			</fieldset>
			<fieldset>
				<legend>6. Hình ảnh nhỏ kế tiêu đề ( Ở các trang trong như blog, cart )</legend>
				<div class="row">
					<div class="col-sm-5">
						<img src="https://file.hstatic.net/200000928091/file/screenshot_17.png" alt="Popup đăng ký nhận tin"/>
					</div>
					<div class="col-sm-7">
						<table>
							<tr>
								<td colspan="1">
									<strong>Sử dụng</strong>
								</td>
								<td colspan="2">
									<input type="checkbox" name="image_title_all_check" />
								</td>
							</tr>
							<tr>
								<td colspan="1">
									<strong>Chọn ảnh 64x64</strong>
								</td>
								<td colspan="2">
									<input type="file" name="image_title_all.png" />
								</td>
							</tr>
						</table>
					</div>
				</div>
			</fieldset>
			<fieldset>
				<legend>7. Trang tìm kiếm</legend>
				<table>
					<tr>
						<td colspan="2">
							<h3>Thiết lập chung</h3>
						</td>
					</tr>
					<tr>
						<td colspan="1">
							<strong>Giới hạn sản phẩm hiển thị</strong>
						</td>
						<td colspan="2">
							<input type="text" name="main_search_limit" />
						</td>
					</tr>
				</table>
			</fieldset>
			<fieldset>
				<legend>8. Trang 404</legend>
				<table>
					<tr>
						<td colspan="2">
							<h3>Thiết lập chung</h3>
						</td>
					</tr>
					<tr>
						<td colspan="1">
							<strong>Hình 404 (600x600)</strong>
						</td>
						<td colspan="2">
							<input type="file" name="404.png" />
						</td>
					</tr>
				</table>
			</fieldset>
			<fieldset>
				<legend>9. Thiết lập Mailchimp</legend>
				<table>
					<tr>
						<td colspan="1">
							<strong>Liên kết</strong>
						</td>
						<td colspan="2">
							<textarea name="shop_mailChimp"></textarea>
						</td>
					</tr>
				</table>
			</fieldset>
			<fieldset>
				<legend>10. Chia sẻ mạng Xã hội</legend>
				<table>
					<tr>
						<td colspan="1">
							<strong>Liên kết Facebook</strong>
						</td>
						<td colspan="2">
							<input type="text" name="linkFbsocial" />
						</td>
					</tr>
					<tr>
						<td colspan="1">
							<strong>Liên kết Youtube</strong>
						</td>
						<td colspan="2">
							<input type="text" name="linkYtsocial" />
						</td>
					</tr>
					<tr>
						<td colspan="1">
							<strong>Liên kết Pinterest</strong>
						</td>
						<td colspan="2">
							<input type="text" name="linkPisocial" />
						</td>
					</tr>
					<tr>
						<td colspan="1">
							<strong>Liên kết Twitter</strong>
						</td>
						<td colspan="2">
							<input type="text" name="linkTwsocial" />
						</td>
					</tr>
					<tr>
						<td colspan="1">
							<strong>Liên kết Instagram</strong>
						</td>
						<td colspan="2">
							<input type="text" name="linkInsocial" />
						</td>
					</tr>
				</table>
			</fieldset>
			<fieldset>
				<legend>11. Danh sách logo thanh toán</legend>
				<table>
					<tr>
						<td colspan="2">
							<h3>- Logo số 1</h3>
						</td>
					</tr>
					<tr>
						<td colspan="1">
							<strong>Sử dụng</strong>
						</td>
						<td colspan="2">
							<input type="checkbox" name="shop_payment_item_check_1" />
						</td>
					</tr>
					<tr>
						<td colspan="1">
							<strong>Hình ảnh (38x24)</strong>
						</td>
						<td colspan="2">
							<input type="file" name="shop_payment_item_image_1.png" />
						</td>
					</tr>
					<tr>
						<td colspan="1">
							<strong>Chú thích ảnh</strong>
						</td>
						<td colspan="2">
							<input type="text" name="shop_payment_item_alt_1" />
						</td>
					</tr>
					<tr>
						<td colspan="1">
							<strong>Link liên kết</strong>
						</td>
						<td colspan="2">
							<input type="text" name="shop_payment_item_link_1" />
						</td>
					</tr>
					<tr>
						<td colspan="2">
							<h3>- Logo số 2</h3>
						</td>
					</tr>
					<tr>
						<td colspan="1">
							<strong>Sử dụng</strong>
						</td>
						<td colspan="2">
							<input type="checkbox" name="shop_payment_item_check_2" />
						</td>
					</tr>
					<tr>
						<td colspan="1">
							<strong>Hình ảnh (38x24)</strong>
						</td>
						<td colspan="2">
							<input type="file" name="shop_payment_item_image_2.png" />
						</td>
					</tr>
					<tr>
						<td colspan="1">
							<strong>Chú thích ảnh</strong>
						</td>
						<td colspan="2">
							<input type="text" name="shop_payment_item_alt_2" />
						</td>
					</tr>
					<tr>
						<td colspan="1">
							<strong>Link liên kết</strong>
						</td>
						<td colspan="2">
							<input type="text" name="shop_payment_item_link_2" />
						</td>
					</tr>
					<tr>
						<td colspan="2">
							<h3>- Logo số 3</h3>
						</td>
					</tr>
					<tr>
						<td colspan="1">
							<strong>Sử dụng</strong>
						</td>
						<td colspan="2">
							<input type="checkbox" name="shop_payment_item_check_3" />
						</td>
					</tr>
					<tr>
						<td colspan="1">
							<strong>Hình ảnh (38x24)</strong>
						</td>
						<td colspan="2">
							<input type="file" name="shop_payment_item_image_3.png" />
						</td>
					</tr>
					<tr>
						<td colspan="1">
							<strong>Chú thích ảnh</strong>
						</td>
						<td colspan="2">
							<input type="text" name="shop_payment_item_alt_3" />
						</td>
					</tr>
					<tr>
						<td colspan="1">
							<strong>Link liên kết</strong>
						</td>
						<td colspan="2">
							<input type="text" name="shop_payment_item_link_3" />
						</td>
					</tr>
					<tr>
						<td colspan="2">
							<h3>- Logo số 4</h3>
						</td>
					</tr>
					<tr>
						<td colspan="1">
							<strong>Sử dụng</strong>
						</td>
						<td colspan="2">
							<input type="checkbox" name="shop_payment_item_check_4" />
						</td>
					</tr>
					<tr>
						<td colspan="1">
							<strong>Hình ảnh (38x24)</strong>
						</td>
						<td colspan="2">
							<input type="file" name="shop_payment_item_image_4.png" />
						</td>
					</tr>
					<tr>
						<td colspan="1">
							<strong>Chú thích ảnh</strong>
						</td>
						<td colspan="2">
							<input type="text" name="shop_payment_item_alt_4" />
						</td>
					</tr>
					<tr>
						<td colspan="1">
							<strong>Link liên kết</strong>
						</td>
						<td colspan="2">
							<input type="text" name="shop_payment_item_link_4" />
						</td>
					</tr>
					<tr>
						<td colspan="2">
							<h3>- Logo số 5</h3>
						</td>
					</tr>
					<tr>
						<td colspan="1">
							<strong>Sử dụng</strong>
						</td>
						<td colspan="2">
							<input type="checkbox" name="shop_payment_item_check_5" />
						</td>
					</tr>
					<tr>
						<td colspan="1">
							<strong>Hình ảnh (38x24)</strong>
						</td>
						<td colspan="2">
							<input type="file" name="shop_payment_item_image_5.png" />
						</td>
					</tr>
					<tr>
						<td colspan="1">
							<strong>Chú thích ảnh</strong>
						</td>
						<td colspan="2">
							<input type="text" name="shop_payment_item_alt_5" />
						</td>
					</tr>
					<tr>
						<td colspan="1">
							<strong>Link liên kết</strong>
						</td>
						<td colspan="2">
							<input type="text" name="shop_payment_item_link_5" />
						</td>
					</tr>
				</table>
			</fieldset>
			<fieldset>
				<legend>12. Button Thông báo</legend>
				<div class="row">
					<div class="col-sm-5">
						<img src="https://file.hstatic.net/200000928091/file/screenshot_18.png" alt="Popup đăng ký nhận tin"/>
					</div>
					<div class="col-sm-7">
						<table>
							<tr>
								<td colspan="1">
									<strong>Sử dụng</strong>
								</td>
								<td colspan="2">
									<input type="checkbox" name="popnoti_check" />
								</td>
							</tr>
							<tr>
								<td colspan="1">
									<strong>Tiêu đề chính</strong>
								</td>
								<td colspan="2">
									<input type="text" name="popnoti_title" />
								</td>
							</tr>
							<tr>
								<td colspan="1">
									<strong>Mô tả dưới</strong>
								</td>
								<td colspan="2">
									<textarea name="popnoti_content"></textarea>
								</td>
							</tr>
							<tr>
								<td colspan="2">
									<h3>Mục nội dung 1</h3>
								</td>
							</tr>
							<tr>
								<td colspan="1">
									<strong>Sử dụng</strong>
								</td>
								<td colspan="2">
									<input type="checkbox" name="popnoti_item_check_1" />
								</td>
							</tr>
							<tr>
								<td colspan="1">
									<strong>Tiêu đề</strong>
								</td>
								<td colspan="2">
									<input type="text" name="popnoti_item_title_1" />
								</td>
							</tr>
							<tr>
								<td colspan="1">
									<strong>Link liên kết</strong>
								</td>
								<td colspan="2">
									<input type="text" name="popnoti_item_link_1" />
								</td>
							</tr>
							<tr>
								<td colspan="2">
									<h3>Mục nội dung 2</h3>
								</td>
							</tr>
							<tr>
								<td colspan="1">
									<strong>Sử dụng</strong>
								</td>
								<td colspan="2">
									<input type="checkbox" name="popnoti_item_check_2" />
								</td>
							</tr>
							<tr>
								<td colspan="1">
									<strong>Tiêu đề</strong>
								</td>
								<td colspan="2">
									<input type="text" name="popnoti_item_title_2" />
								</td>
							</tr>
							<tr>
								<td colspan="1">
									<strong>Link liên kết</strong>
								</td>
								<td colspan="2">
									<input type="text" name="popnoti_item_link_2" />
								</td>
							</tr>
							<tr>
								<td colspan="2">
									<h3>Mục nội dung 3</h3>
								</td>
							</tr>
							<tr>
								<td colspan="1">
									<strong>Sử dụng</strong>
								</td>
								<td colspan="2">
									<input type="checkbox" name="popnoti_item_check_3" />
								</td>
							</tr>
							<tr>
								<td colspan="1">
									<strong>Tiêu đề</strong>
								</td>
								<td colspan="2">
									<input type="text" name="popnoti_item_title_3" />
								</td>
							</tr>
							<tr>
								<td colspan="1">
									<strong>Link liên kết</strong>
								</td>
								<td colspan="2">
									<input type="text" name="popnoti_item_link_3" />
								</td>
							</tr>
							<tr>
								<td colspan="2">
									<h3>Mục nội dung 4</h3>
								</td>
							</tr>
							<tr>
								<td colspan="1">
									<strong>Sử dụng</strong>
								</td>
								<td colspan="2">
									<input type="checkbox" name="popnoti_item_check_4" />
								</td>
							</tr>
							<tr>
								<td colspan="1">
									<strong>Tiêu đề</strong>
								</td>
								<td colspan="2">
									<input type="text" name="popnoti_item_title_4" />
								</td>
							</tr>
							<tr>
								<td colspan="1">
									<strong>Link liên kết</strong>
								</td>
								<td colspan="2">
									<input type="text" name="popnoti_item_link_4" />
								</td>
							</tr>
						</table>
					</div>
				</div>
			</fieldset>
			<fieldset>
				<legend>13. Pouup khách hàng đăng ký qua số điện thoại</legend>
				<div class="row">
					<div class="col-sm-5">
						<img src="https://file.hstatic.net/200000928091/file/screenshot_19.png" alt="Popup đăng ký nhận tin"/>
					</div>
					<div class="col-sm-7">
						<table>
							<tr>
								<td colspan="1">
									<strong>Sử dụng</strong>
								</td>
								<td colspan="2">
									<input type="checkbox" name="shop_modal_phone_check" />
								</td>
							</tr>
							<tr>
								<td colspan="1">
									<strong>Tiêu đề</strong>
								</td>
								<td colspan="2">
									<input type="text" name="shop_modal_phone_title" />
								</td>
							</tr>
							<tr>
								<td colspan="1">
									<strong>Mô tả ngắn</strong>
								</td>
								<td colspan="2">
									<textarea name="shop_modal_phone_description"></textarea>
								</td>
							</tr>
						</table>
					</div>
				</div>
			</fieldset>
		</div>
	</div>
</fieldset>
