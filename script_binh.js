
var image = document.getElementById('map');

var canvas = document.getElementById('myCanvas');
var markers = document.getElementById('.marker')
const infoBox = document.getElementById('info-box');
var infoCard = document.getElementById('info-card');
const infoText = document.getElementById('info-text');
var cardText = document.getElementById('card_text')
var cardTitle = document.getElementById('.card-title')
var cardLocation = document.getElementById('.card_location')


// Định nghĩa hàm để lấy chiều rộng của trình duyệt
function getWindowWidth() {
  return document.documentElement.clientWidth;
}
function getWindowHeight() {
  return document.documentElement.clientHeight;
}



// Khi trang đã được tải hoàn toàn
window.onload = function () {
  // Lấy chiều rộng của trình duyệt
  var browserWidth = getWindowWidth();
  var browserHeight = getWindowHeight()

  canvas.width = browserWidth;
  //canvas.width = image.width
  canvas.height = image.height


  var widthW = (canvas.width - image.width) / 2
  var heightW = (canvas.height - image.height) / 2
  console.log('wid', widthW)
  console.log('hei', heightW)

  // data
// Tạo một đối tượng chứa thông tin cho từng điểm đánh dấu
const markerData = {
  marker1: {
      x: 1330,
      y: 410,
      map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30661.008822904496!2d108.01087353605213!3d16.136631307566265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31418bd3ca7c84c1%3A0xb304c8f2904e86f5!2zTMOgbmcgTcOq!5e0!3m2!1svi!2s!4v1713952355600!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      img: 'https://i.pinimg.com/236x/17/b4/5b/17b45b56495623fb249e060bffe43bcd.jpg',
      radius: 10,
      hrefMapinGoogle: 'https://maps.app.goo.gl/xpQDgNvh7PEeZxEt9',
      title: 'cầu',
      description: '',
  }
,
  marker2: {
      x: 1256,
      y: 410,
      icon: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      img: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      radius: 10,
      hrefMapinGoogle: 'https://maps.app.goo.gl/fywJTYLMysoKAiLDA',
      title: 'Nhà cô Tin - Dệt thổ cẩm',
      description: 'Dệt thổ cẩm là bản sắc văn hóa độc đáo của đồng bào Cơ Tu. Lúc bấy giờ, trong làng có khoảng hơn 40 người làm nghề dệt thổ cẩm và cô Tin - nghệ nhân dệt thổ cẩm là một trong số đó. Khi đến đây, chúng ta sẽ được hướng dẫn cách dệt vải thổ cẩm, nhận dạng áo thổ cẩm cho nam bằng những hình sọc dọc, áo nữ là hình sọc ngang. Cô Tin sẽ mất khoảng một tháng để làm ra một bộ quần áo truyền thống bằng thổ cẩm, Vào lễ cưới hỏi, nhà trai sẽ mang theo sính lễ như vòng cổ đồng, cườm hạt, vài lít rượu, cau trầu, heo và gà đến nhà gái. Nhà gái sẽ đáp lại sính lễ như gà, xôi, cau trầu và 1 lít rượu. Khách mừng đám cưới không mừng phong bì mà mừng hiện vật như gà, rượu và 10 lon gạo. Người Cơ Tu thời xưa có phong tục nhuộm răng đen để giúp răng chắc khỏe và là nét đẹp văn hóa truyền thống.'
  }
,
  marker3: {
      x: 1210,
      y: 420,
      icon: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      img: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      radius: 10,
      hrefMapinGoogle: '',
      title: 'Cổng Thôn Giàn bí',
      description: ''
  }
,
  marker4: {
      x: 1070,
      y: 391,
      icon: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      img: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      radius: 10,
      hrefMapinGoogle: '',
      title: 'Cô Chọn nấu Chè dây',
      description: 'Cô Chọn làm nghề chế biến chè dây được 8 năm. Cô cho biết chè dây có nhiều công dụng như chữa bệnh dạ dày, viêm gan B, tiểu đường… Chè dây là đặc sản của xã Hòa Bắc. Cách chế biến chè dây khá đơn giản, qua 03 công đoạn chính là: (1) băm thân chè, (2) phơi khô chè và (3) rang chè. Nếu như khi pha trà chúng ta thường dùng nước sôi tráng sơ qua, còn với chè dây thì không vì khi tráng sẽ làm mất lớp men vị thuốc của chè. Cứ vào mùa, cô Chọn cùng với bà con sẽ lên rừng hái chè, sau đó chế biến ngay để chè giữ được hương vị thơm ngon nhất. Cứ 10kg chè tươi, sau khi rang xong ra được 2kg chè thành phẩm với mức giá khoảng  200.000 đồng/kg.'
  }
,
  marker5: {
      x: 1045,
      y: 482,
      icon: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      img: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      radius: 10,
      hrefMapinGoogle: '',
      title: 'Nhà Gươl thôn Tà Lang',
      description: 'Nhà Gươl thôn Tà Lang, xã Hòa Bắc, huyện Hoà Vang, TP. Đà Nẵng là địa điểm phục vụ du khách tham quan các loại hình văn hóa truyền thống, trưng bày các sản phẩm làng nghề và là nơi tổ chức các lễ hội của đồng bào dân tộc Cơ Tu... Đối với đồng bào Cơ Tu, nhà Gươl chính là ngôi nhà chung của bản làng và còn được xem là linh hồn của làng. Đây là nơi thờ các vị thần linh như thần rừng, thần đất, ông bà tổ tiên, với mong muốn cầu mong mưa thuận gió hòa, dân làng gặp nhiều may mắn Trong văn hóa của đồng bào Cơ Tu, phụ nữ không được bước lên nhà Gươl, vai trò của phụ nữ và đàn ông rất khác nhau, phụ nữ là người nấu đồ cúng và đàn ông sẽ dâng đồ cúng lên nhà Gươl. Mâm lễ cúng gồm heo, gà, cá sông, bánh sừng trâu, bánh lam. Lễ hội quan trọng của người Cơ Tu gồm có “Lễ hội mừng lúa mới” và “Đâm trâu”. Đây là lễ hội lớn nhất của đồng bào Cơ Tu.  Người Cơ Tu của cả 3 làng sẽ dựng cây nêu, tập trung tại nhà Gươl và cùng múa vũ điệu “tung tung za zá”, sau đó sẽ “Đâm trâu”. Cũng giống người Kinh, người Cơ Tu cũng có lễ  “Tất niên” vào mỗi dịp cuối năm âm lịch. Đồng bào Cơ Tu tại khu vực Tà Lang - Giàn Bí sẽ tập trung tại nhà Gươl để dự lễ cúng. Người Cơ Tu thờ ảnh của Bác Hồ. Bàn thờ của Già làng sẽ có một chén gạo và cau trầu xung quanh. Vào tháng 4 hàng năm, chén gạo sẽ được thay bởi lúa mới gặt về.'
  }
,
  marker6: {
      x: 998,
      y: 400,
      icon: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      img: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      radius: 10,
      hrefMapinGoogle: '',
      title: 'Homestay ALăng Như',
      description: 'Homestay ALăng Như nằm tại thôn Giàn Bí, xã Hòa Bắc, huyện Hòa Vang do anh Đinh Văn Như làm chủ. Homestay được thiết kế theo kiểu nhà sàn, sử dụng các vật liệu tự nhiên như tre, gỗ, đá. Homestay có hai tầng: tầng 1 được sử dụng cho ăn uống và sinh hoạt chung; tầng 2 là khu vực phòng ngủ hướng ra phía sông Cu Đê. Homestay có khoảng sân rộng rãi thuận tiện cho việc cắm trại cũng như tổ chức các trò chơi, đốt lửa trại. Ngoài ra, du khách có thể thưởng thức những món ăn đặc trưng của người đồng bào Cơ Tu như bánh sừng trâu, cá suối, gà nướng…'
  } 
,
  marker7: {
      x: 938,
      y: 410,
      icon: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      img: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      radius: 10,
      hrefMapinGoogle: '',
      title: 'Trường Mầm Non',
      description: ''
  }
,
  marker8: {
      x: 820,
      y: 440,
      icon: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      img: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      radius: 10,
      hrefMapinGoogle: '',
      title: 'Homestay Thị Hồng',
      description: 'Homestay Thị Hồng (Zơ Răm Thị Hồng) có diện tích khoảng 100m2, thuộc thôn Tà Lang, xã Hòa Bắc. Homestay được xây dựng theo mô hình nhà sàn của người đồng bào Cơ Tu gồm hai tầng: tầng 1 để tiếp khách, ăn uống và sinh hoạt cộng đồng; tầng 2 có 4 phòng ngủ, mỗi phòng sẽ có 2 giường, khu vực nhà vệ sinh riêng. Không gian homestay khá yên tĩnh, hòa mình giữa núi rừng, không khí mát mẻ quanh năm. Khi đến đây du khách sẽ được thưởng thức những đặc sản núi rừng như: cá liên, ốc đá, lá sắn xào sả ớt, bánh sừng trâu, cơm lam, ếch rừng…'
  }
,
  marker9: {
      x: 570,
      y: 280,
      icon: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      img: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      radius: 10,
      hrefMapinGoogle: '',
      title: 'Vũng Bọt',
      description: 'Vũng Bọt nằm ở hạ lưu sông Nam, sông Bắc thuộc địa bàn Thôn Tà Lang - Giàn Bí, xã Hòa Bắc, huyện Hòa Vang, TP. Đà Nẵng. Vũng Bọt là một kiệt tác của thiên nhiên được bao quanh bởi những ngọn núi đá tạo thành hình ảnh hòn non bộ tự nhiên. Nơi đây có khí hậu quanh năm mát mẻ, là điểm đến trải nghiệm lý tưởng.'
  }
,
  marker10: {
      x: 610,
      y: 515,
      icon: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      img: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      radius: 10,
      hrefMapinGoogle: '',
      title: 'Cầu',
      description: ''
  }
,
  marker111: {
    x: 490,
    y: 730,
    icon: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
    img: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
    radius: 10,
    hrefMapinGoogle: '',
    title: 'Cổng làng tà lang',
    description: ''
  }
,
  marker12: {
      x: 558,
      y: 746,
      icon: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      img: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      radius: 10,
      hrefMapinGoogle: '',
      title: 'Trường tiểu Học',
      description: ''
  }
,
  marker13: {
      x: 395,
      y: 725,
      icon: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      img: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      radius: 10,
      hrefMapinGoogle: '',
      title: 'Tạp Hóa Hải Yến',
      description: ''
  }
,
  marker14: {
      x: 280,
      y: 780,
      icon: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      img: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      radius: 10,
      hrefMapinGoogle: '',
      title: 'Nhà Gươl thôn Giàn Bí',
      description: "Nhà Gươl thôn Giàn Bí là nơi lưu giữ văn hóa truyền thống, trưng bày các sản phẩm của người địa phương. “Gươl” trong tiếng Cơ Tu có nghĩa là cộng đồng, nhà Gươl được xem như trái tim của Làng. Vậy nên các làng của người Cơ Tu đều phải có nhà Gươl. Nhà Gươl được thiết kế theo kiểu nhà sàn, trụ bởi một cây cột cái ở giữa và tám cây cột con ở xung quanh. Mái nhà được lợp bằng lá tự nhiên, sàn nhà lát bằng tre cật chẻ mỏng, giữa các thanh tre có một độ hở nhất định để tạo nên sự thông thoáng. Mái nhà thường thường được trang trí bằng những hình tượng đơn giản như gà trống hay tổ hợp gắn kết nhiều tượng với nhau như tượng người, tượng đầu trâu. Dưới mái nhà Gươl, những hình ảnh chạm khắc tỉ mỉ như những tác phẩm nghệ thuật sinh động, mỗi tác phẩm tái hiện đời sống lao động, văn hóa của một dân tộc giàu bản sắc giữa núi rừng. Cây nêu (x'nur) của người Cơ Tu cũng là một sản phẩm mỹ thuật thể hiện tài nghệ trang trí, điêu khắc của nghệ nhân. Cây được đặt tại sân nhà Gươl, nơi hành lễ."
  }
,
  marker15: {
      map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30661.008822904496!2d108.01087353605213!3d16.136631307566265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31418bd3ca7c84c1%3A0xb304c8f2904e86f5!2zTMOgbmcgTcOq!5e0!3m2!1svi!2s!4v1713952355600!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      img: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      radius: 10,
      hrefMapinGoogle: 'https://maps.app.goo.gl/Dyf9KTgaPTim6zH47',
      x: 184,
      y: 805,
      title: 'Nghệ nhân đàn Ta Lư',
      description: 'Khi đặt chân đến nhà ông A Lăng Mỹ - nghệ nhân đàn Ta Lư, chúng ta sẽ được lắng nghe những chia sẻ về sự tích cây đàn Ta Lư huyền thoại của đồng bào Cơ Tu. Cây đàn Ta Lư được làm từ gỗ mít, khá nhẹ. Để làm được đàn, cây gỗ mít phải được trồng hơn 10 năm và có đường kính trên 20cm. Cây đàn được làm thủ công và không quét sơn. Dây đàn có thể là dây cước và dây tơ. Nghệ nhân A Lăng Mỹ đã mất hơn 1 tuần để làm ra nó. Nghệ nhân A Lăng Mỹ nâng niu cây đàn Ta Lư, ông luôn muốn gửi gắm những lời hát của người Cơ Tu đến với khách du lịch, như cách mà ông muốn âm nhạc và đàn Ta Lư mãi mãi trường tồn cùng núi rừng, làng bản, không bao giờ mai một trong văn hóa của đồng bào Cơ Tu .'
  }
};
  


  // xử lý vẽ điểm
  var ctx = canvas.getContext('2d');

  ctx.drawImage(image, widthW, heightW);

  for (const key in markerData) {
    const maker = markerData[key];
    maker.x += 40
  }
  function convertCoordinatesToPercent(markerData, canvas) {
    for (const key in markerData) {
      if (markerData.hasOwnProperty(key)) {
        const marker = markerData[key];
        marker.x = (marker.x / canvas.width) * 100;
        marker.y = (marker.y / canvas.height) * 100;
      }
    }
  }


  // Gọi hàm để chuyển đổi tọa độ của tất cả các điểm đánh dấu sang %
  convertCoordinatesToPercent(markerData, canvas);



  window.addEventListener('mousemove', function (event) {
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;

    // Kiểm tra xem chuột có nằm trong bán kính của marker không
    for (const markerKey in markerData) {
      if (markerData.hasOwnProperty(markerKey)) {
        const marker = markerData[markerKey];
        var distance = Math.sqrt((x - ((marker.x / 100) * canvas.width) + (Math.abs(124 - widthW)/2)) ** 2 + (y - ((marker.y / 100) * canvas.height)+(Math.abs(0 - heightW)/2)) ** 2);

        console.log("distances", distance)
        ctx.beginPath();
        ctx.arc(marker.x * canvas.width / 100, marker.y * canvas.height / 100, marker.radius, 0, 2 * Math.PI);
        // img.src = marker.icon

        // var pattern = ctx.createPattern(img, 'repeat');
        // var imageWidth = 2 * marker.radius;
        // var imageHeight = 2 * marker.radius;


        // ctx.fillStyle = pattern;
        // ctx.fillStyle = 'red';
        // ctx.fill();
        if (distance <= marker.radius) {
          // infoCard.innerHTML = '<div width="60"; height = "90";><strong>' + marker.title + '</strong><br><hr><p style="text-align: justify;">' + marker.description + '</p><br><img style="width:40px; height:40px;" src="' + marker.img + '"></div>';
          infoCard.innerHTML =
            `

            <div width="60"; height = "90";>
              <div style="display: flex; align-items: center; margin-top: 20px;">
              <strong>${marker.title}</strong>
              <a id="mapInGoogle" target="_blank" style="width:40px; height:40px;margin-left: auto;" href="${marker.hrefMapinGoogle}" alt="${marker.title}"><img src="https://img.icons8.com/?size=48&id=kDqO6kPb3xLj&format=gif" alt="Google Maps ${marker.title}"></a> 
              </div>

              <br><hr>
              <div style="text-align: justify; max-height:200px; overflow-y:auto">
              <p>${marker.description}</p>
              <br>
              <div>
              <img style="width:40px; height:40px;" src="${marker.img}">
              <br><hr>
              <div id="map-container" class="hidden">
              ${marker.map}
              </div>
             
            </div>

            `
          if (marker.x <= browserWidth - 300 && marker.y <= canvas.height - 200) {
            infoCard.style.left = (event.pageX - 40) + 'px';
            infoCard.style.top = (event.pageY + 20) + 'px';
            infoCard.style.display = 'block';
            return;
          }
          else {
            infoCard.style.left = (event.pageX - 300) + 'px';
            infoCard.style.top = (event.pageY + 20) + 'px';
            infoCard.style.display = 'block';
            return;
          }
        }
      }
    }
  });



  window.addEventListener('click', function (event) {
    // Kiểm tra xem click có xảy ra bên ngoài các điểm đánh dấu không
    var isOutsideMarkers = true;
    for (const markerKey in markerData) {
      if (markerData.hasOwnProperty(markerKey)) {
        const marker = markerData[markerKey];
        var rect = canvas.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;
        var distance = Math.sqrt((x - ((marker.x / 100) * canvas.width + (Math.abs(124 - widthW)/2))) ** 2 + (y - ((marker.y / 100) * canvas.height + (Math.abs(0 - heightW)/2))) ** 2);
        if (distance <= marker.radius) {
          isOutsideMarkers = false;
          break;
        }
      }
    }
    // Nếu click xảy ra bên ngoài các điểm đánh dấu, ẩn thông tin
    if (isOutsideMarkers) {
      infoCard.style.display = 'none';
    }
  });


  
}





