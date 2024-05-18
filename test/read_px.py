import cv2

# Đọc hình ảnh từ tệp
image_path = cv2.imread('D:/map/MAP/map_marker/namyen/img/namyen/namyencanhquan.jpg')

def display_pixel_positions(image_path):
    # Đọc hình ảnh từ tệp
    image = cv2.imread(image_path)

    # Kiểm tra xem hình ảnh có được đọc đúng không
    if image is None:
        print("Không thể đọc hình ảnh.")
        return

    # Lấy kích thước của hình ảnh
    height, width, _ = image.shape

    # Hiển thị vị trí của từng pixel
    for y in range(height):
        for x in range(width):
            cv2.putText(image, f'({x}, {y})', (x, y), cv2.FONT_HERSHEY_SIMPLEX, 0.3, (255, 255, 255), 1, cv2.LINE_AA)

    # Hiển thị hình ảnh với vị trí pixel
    cv2.imshow('Image with Pixel Positions', image)
    cv2.waitKey(0)
    cv2.destroyAllWindows()
    
display_pixel_positions(image_path)