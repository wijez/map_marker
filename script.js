
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



// Khi trang đã được tải hoàn toàn
window.onload = function () {
  // Lấy chiều rộng của trình duyệt
  var browserWidth = getWindowWidth();
  canvas.width = browserWidth;
  //canvas.width = image.width
  canvas.height = image.height

  var widthW = (canvas.width - image.width) / 2
  var heightW = (canvas.height - image.height) / 2

  // data
  const markerData = {
    marker1: {
      x: 635,
      y: 573,
      icon: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      img: 'https://i.pinimg.com/236x/17/b4/5b/17b45b56495623fb249e060bffe43bcd.jpg',
      radius: 10,
      href: 'https://www.google.com/maps/@16.0268288,108.2195968,14z?entry=ttu',
      title: 'Cầu treo Hòa Bắc',
      description: `Cầu treo Hòa Bắc còn có tên gọi khác là Cầu dây văng Hòa Bắc, nối hai bờ của con sông <br> 
       Cu Đê. Trước khi cây cầu được xây dựng, người dân di chuyển qua lại hai bên bờ bằng ghe <br>
      và xuồng. Tuy nhiên, điều này tiềm ẩn rủi ro khi có thời tiết xấu, đặc biệt vào mùa mưa lũ.<br> 
       Với mục đích đảm bảo an toàn việc đi lại, sinh hoạt, học tập của người dân, Cố Bí thư  <br>
        <a href="https://vi.wikipedia.org/wiki/Nguy%E1%BB%85n_B%C3%A1_Thanh"> Nguyễn Bá Thanh <a> 
        đã lên kế hoạch xây dựng cầu treo Hòa Bắc. Cây cầu được khởi công  <br>
        xây dựng vào ngày 15/01/2001 và hoàn thành vào ngày 02/9/2002. Cầu có chiều dài<br> 
          151,4m, rộng 7,5m, tải trọng 8 tấn. <br>

      Nếu muốn đến check-in công trình này, du khách nên đến trong khoảng tháng 5 đến tháng 8,<br> 
      đây là khoảng thời gian có thời tiết thuận lợi. Du khách có thể ngắm hoàng hôn rực rỡ <br>
       khi mặt trời xuống núi buổi chiều tà.<br>
      Có nhiều homestay, khu cắm trại xung quanh cây cầu, <br>
      an ninh đảm bảo. Vì vậy, khách du lịch hoàn toàn có thể yên tâm để trải nghiệm và khám<br>
       phá địa điểm tuyệt vời này.
      `
    },
    marker2: {
      x: 598,
      y: 484,
      icon: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      img: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      radius: 10,
      title: 'Làng Nguồn',
      description: `Nằm ngay tại trung tâm thôn Nam Yên, 
      xã Hoà Bắc, huyện Hoà Vang, TP. Đà Nẵng.<br>
       Làng Nguồn là điểm đến tuyệt vời dành cho gia đình, 
       bạn bè mỗi dịp cuối tuần hay<br> 
       những kỳ nghỉ lễ.<br>
      Làng Nguồn có 13 phòng hiện đại, 
       sức chứa 4 - 5 người/phòng với đầy đủ tiện nghi<br> 
      bao gồm phòng bếp và phòng ăn. Tại đây còn cung cấp dịch vụ
       cắm trại và tổ chức<br>
      sự kiện cũng như nhiều không gian đẹp để du khách check-in.
      `
    },
    marker3: {
      x: 610,
      y: 462,
      icon: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      img: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      radius: 10,
      title: 'Homestay Sang',
      description: `Homestay Sang sở hữu cảnh quan thiên nhiên tuyệt đẹp với núi rừng 
      và những thửa ruộng <br>
      bậc thang. Du khách sẽ được tận hưởng bầu không khí trong 
      lành, yên bình và hòa mình <br>
      vào thiên nhiên, mang đến cho du khách trải nghiệm 
      đời sống bình dị và văn hóa độc đáo<br>
       của người dân bản địa.
      <br><br>
      Homestay cung cấp nhiều hoạt động vui chơi giải trí như tour tham quan bản
       làng bằng xe<br>
        đạp, đốt lửa trại, ...Đặc biệt, du khách còn được thưởng thức
        những món ăn đặc sản của <br>
         người dân địa phương như gà nướng, cơm lam, rau rừng…
      `
    },
    marker4: {
      x: 685,
      y: 521,
      icon: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      img: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      radius: 10,
      title: 'Khu cắm trại Hòa Bắc',
      description:`

      Khu cắm trại Hòa Bắc là một bờ đất trống nhô ra từ bãi bồi của sông Cu đê.
       Đi vào con đường <br> 
      đối diện với Trạm y tế Hòa Bắc tầm 200m, du khách sẽ thấy 
       bảng chỉ dẫn rẽ trái <br>
        đến nơi này. Khu cắm trại Hòa Bắc có khung cảnh thiên 
       nhiên hùng vĩ, thảm cỏ xanh mát,<br>
        bên cạnh là dòng sông xanh êm đềm. 
       Nơi đây trở thành một địa điểm dã ngoại lý tưởng cho ai thích khám phá và
        trải nghiệm. Khi đến đây, du khách nên chuẩn bị đầy đủ các dụng cụ để cắm
         trại như: lều, nước uống, thức ăn. Chi phí thuê đèn chiếu sáng 10.000/đêm. 
         Du khách có thể ca hát, nấu ăn, đốt lửa trại và tổ chức các hoạt động giải trí
          ở nơi này mà không cần phải lo lắng về vấn đề an ninh. 
          Tuy nhiên, du khách nên lưu ý việc giữ gìn vệ sinh chung cho môi trường 
          luôn xanh sạch đẹp. 
       
      `,
    },
    marker5: {
      x: 865,
      y: 917,
      icon: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      img: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      radius: 10,
      title: 'Mô hình vườn - ao - chuồng - nhà bác Hồng',
      description: `
 
      Vườn - ao - chuồng nhà bác Hồng là nơi cung cấp nguồn lương thực, 
      thực phẩm chủ yếu trong khu vực. Địa thế nằm gần sông Cu Đê, 
      nước tự nhiên từ đầu nguồn chảy xuống, bao phủ bởi núi rừng, đất thịt 
      màu mỡ rất thích hợp để trồng nhiều loại rau củ như: bí đỏ, cà tím, rau muống, 
      rau lang, mướp đắng,… Bác Hồng còn nuôi thêm gia súc, gia cầm và nuôi cá. 
      Đến thăm Vườn Bác Hồng, du khách có thể mua được nông sản tươi, ngon và sạch nhất.
       Bên cạnh đó, du khách có thể chọn mô hình vườn - ao - chuồng nhà bác Hồng cho 
       những hoạt động tham quan, học tập, tìm hiểu các phương pháp canh tác cây trồng
        và phát triển nông nghiệp.
     `
      
    },
    marker6: {
      x: 629,
      y: 473,
      icon: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      img: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      radius: 10,
      title: 'Nam Yên Camping',
      description: `
     
      Khu vực cắm trại tại <strong>Nam Yên Camping</strong> được trang bị cơ sở hạ tầng hiện đại, 
      ẩm thực phong phú đa dạng, khu vệ sinh tiện nghi đảm bảo cho du khách có một 
      chuyến cắm trại tuyệt vời. Du khách có thể mang theo thức ăn để chuẩn bị cho 
      tiệc BBQ ngoài trời. Vào buổi tối, <strong>Nam Yên Camping</strong> còn cung cấp dịch vụ đốt lửa 
      trại, đêm nhạc hát cho nhau nghe theo yêu cầu của du khách.
     
      `
    },
    marker7: {
      x: 639,
      y: 459,
      icon: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      img: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      radius: 10,
      title: 'Homestay Hoa Chín',
      description: `
     
      Homestay Hoa Chín tọa lạc tại thôn Nam Yên, xã Hòa Bắc, huyện Hòa Vang, TP. Đà Nẵng - địa điểm để du khách trải nghiệm thiên nhiên thơ mộng.
      "Vào những dịp lễ, tết, Homestay Hoa Chín là địa điểm được nhiều du khách lựa chọn là điểm đến nghỉ dưỡng lý tưởng. Không gian sống tiện nghi, nhân viên thân thiện cùng với nhiều loại thực phẩm phong phú, đa dạng. Homestay có 04 phòng và hơn 10 lều ngoài trời, tích hợp đầy đủ tiện nghi về điện nước, wifi và dịch vụ ăn uống. Homestay cung cấp đầy đủ các dịch vụ, bao gồm cả bãi đỗ xe. Chi phí sẽ giao động từ 100.000 - 200.000 đồng/người/đêm.
      <br><strong>Lưu ý:</strong><br>
      ●	Homestay dừng hoạt động từ tháng 9 đến tháng 12 do ảnh hưởng của mưa lũ <br>
      ●	Sinh viên sẽ được giảm giá thuê phòng khi mang theo thẻ sinh viên.
     
  `,
    },
    marker8: {
      x: 665,
      y: 464,
      icon: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      img: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      radius: 10,
      title: 'Trung tâm Du lịch học tập cộng đồng Hợp tác xã (HTX) Nông nghiệp sinh thái & Du lịch cộng đồng Hòa Bắc',
      description: `
      
      Trung tâm Du lịch học tập cộng đồng Hợp tác xã (HTX) 
      Nông nghiệp sinh thái & Du lịch cộng đồng Hòa Bắc đặt trụ sở tại Homestay Nam Yên. 
      Homestay được xây dựng từ năm 2019, là nơi tiếp đón du khách đến với Hòa Bắc 
      để tham quan và tham gia các chương trình trao đổi học tập và nghiên cứu.
      <br>
      <br>
      Homestay Nam Yên cung cấp dịch vụ lưu trú với 04 phòng, dịch vụ ăn uống, 
      dịch vụ thuê xe đạp và xe điện du lịch. Quanh khu vực homestay có các quầy 
      tạp hóa, quán cafe gần kề nên rất thuận lợi cho du khách. An ninh tại 
      khu vực này rất tốt.
      
      `
    },
    marker9: {
      x: 752,
      y: 309,
      icon: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      img: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      radius: 10,
      title: 'Nhà thờ Giáo xứ Hội Yên',
      description: `
      
      Nhà thờ Giáo xứ Hội Yên nằm ở vị trí đắc địa, là nơi “Tựa Sơn hướng Thủy”,
       tựa lưng vào đồi cây Bàng Da và mặt hướng ra phía Nam, hướng sông Cu Đê. 
       Bởi vị trí địa lý nằm trên vùng đất cao, được xây dựng kiên cố cho nên hằng năm 
       vào các mùa mưa lũ (từ tháng 9 đến tháng 12), nhà thờ không bị ngập úng và là 
       nơi trú ngụ của Giáo dân mùa mưa bão.
       <br>
       <br>
      Năm 2008, Giáo họ Hội Yên chính thức trở thành Giáo xứ.
       Linh mục đầu tiên của Giáo xứ là Cha Phêrô Trần Công Thạch. 
       Năm 2015, Nhà thờ Giáo xứ Hội Yên chính thức khởi công xây 
       dựng nhà thờ mới và khánh thành vào năm 2018.
       <br>
       <br>
      Nhà thờ có lối kiến trúc bắt mắt, với thiết kế vòm cửa cao, 
      tông màu chủ đạo là màu xám kết hợp với màu trắng tạo cảm giác rộng rãi
       cho ngôi thánh đường. Chi tiết ảnh Chúa, thánh giá, vườn địa đàng làm cho 
       khu thánh đường vừa hài hòa vừa trang nghiêm. Nhà thờ thường tổ chức các cuộc
        thi về giáo lý, nhiều hoạt động vui chơi, giải trí như múa, hát, đốt lửa trại,
         sinh hoạt thiếu nhi… vào các ngày lễ lớn như Lễ Phục sinh, Lễ Giáng sinh…
      `,
    },
    marker10: {
      x: 1111,
      y: 543,
      icon: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      img: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      radius: 10,
      title: 'Vườn rừng bác Du',
      description: `Vườn rừng bác Du nằm trong con hẻm nhỏ, 
      trong vườn có hồ cá cùng với mạch nước ngầm từ sông Cu Đê nên hồ không bao giờ bị khô cạn. 
      Trong vườn có rất nhiều loại cây như tre, chuối, bắp, khế, mía, cây bạc hà và có các loài chim, 
      khỉ đến đây sinh sống. Đặc biệt, chủ vườn có trồng cây sao đen quý. 
      Du khách từ các cơ sở lưu trú lân cận chủ yếu đến vườn để tham quan mô hình vườn rừng.
      <strong>Không cung cấp dịch vụ lưu trú.</strong> `
    },
    marker11: {
      x: 501,
      y: 452,
      icon: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      img: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      radius: 10,
      
    },
    marker12: {
      x: 508,
      y: 410,
      icon: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      img: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      radius: 10,
      title: 'Hòa Bắc Ecolodge - Camping Space Art',
      description: `<strong>Hòa Bắc Ecolodge - Camping Space Art</strong> được xem 
      là địa điểm nghỉ dưỡng sinh thái hấp dẫn trong khu vực. Nằm nép 
      mình giữa vùng núi Hòa Bắc với không gian xanh mát, cánh rừng thông hòa 
      cùng tiếng chim líu lo, khu vực đồng bằng bằng phẳng. Đây là nơi lý tưởng 
      để du khách tìm sự bình yên, thoải mái, gần gũi thiên nhiên sau những ngày 
      làm việc mệt mỏi.
      <br><br>
      <strong>Hòa Bắc Ecolodge - Camping Space Art</strong> có những chiếc lều trắng
       thơ mộng, khu vực lửa trại với không gian thoáng đãng. Chi phí thuê lều cho 
       khách lẻ và khách theo đoàn dao động từ 200.000 - 6000.000 đồng/người/ngày.
      `
    },
    marker13: {
      x: 517,
      y: 343,
      icon: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      img: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      radius: 10,
      title: 'Địa điểm 3: Đền Âm Linh',
      description: `Khu vực thờ cúng linh thiêng trong thôn đã có từ khoảng thế kỉ 19.
       Công trình đã bị tàn phá sau chiến tranh chống thực dân Pháp và được xây dựng lại từ năm 1992.
        Đền Âm linh nằm trên vùng đất bằng phẳng, xung quanh được bao quanh bởi đồi núi. 
        Bên trong đền có 9 gian cúng tế. Đây là nơi thờ cúng những người vô danh,
         không nơi nương tựa. Tại đây du khách có thể tham dự lễ hội cúng bái được tổ chức vào ngày 25 tháng chạp hằng năm.`
      
    },
    marker14: {
      x: 435,
      y: 454,
      icon: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      img: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      radius: 10,
      title: 'Cu Đê Camping',
      description: `Nằm ngay cạnh bờ sông Cu Đê, khu cắm trại có vẻ đẹp thiên nhiên hoang sơ, không gian
      <br> 
      trong lành của cây cỏ. Đến Cu Đê Camping, du khách có thể chiêm ngưỡng một
      màu xanh 
       <br> 
       bạt ngàn của đồng cỏ, núi rừng, dòng sông và bầu trời.

       <br><br>
      Cu Đê Camping cung cấp dịch vụ cafe, ăn uống và lưu trú với khu vực lều trại 
      riêng biệt. 
      `
    },
    marker15: {
      x: 365,
      y: 380,
      icon: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      img: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      radius: 10,
      title: 'Làng Mê',
      description: `Làng Mê nằm ở thôn Nam Yên, xã Hòa Bắc, huyện Hòa Vang, TP. Đà Nẵng,
       với lợi thế không gian rộng rãi, thoáng mát. Nơi đây là địa điểm du lịch lý tưởng, 
       thích hợp với nghỉ dưỡng và dã ngoại cuối tuần. 
       <br><br>
      Làng Mê có những chiếc lều trắng chắc chắn, có không gian đốt lửa trại, 
      ghế ngồi được làm bằng chất liệu tre gần gũi. Nhà hàng, quán cà phê và khu cắm
       trại kết hợp với nhau nên ở đây cung cấp nhiều trải nghiệm dịch vụ hấp dẫn 
       trong quá trình du khách lưu trú Giá dịch vụ sẽ từ 500.000 đồng/người/ngày. 
      `
    },
    marker16: {
      x: 365,
      y: 380,
      icon: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      img: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      radius: 10,
      title: 'Địa điểm 1: Cầu treo Hòa Bắc',
      description: 'Cầu treo Hòa Bắc còn có tên gọi khác là Cầu dây văng Hòa Bắc, nối hai bờ của con sông Cu Đê. Trước khi cây cầu được xây dựng, người dân di chuyển qua lại hai bên bờ bằng ghe và xuồng. Tuy nhiên, điều này tiềm ẩn rủi ro khi có thời tiết xấu, đặc biệt vào mùa mưa lũ. Với mục đích đảm bảo an toàn việc đi lại, sinh hoạt, học tập của người dân, Cố Bí thư Nguyễn Bá Thanh đã lên kế hoạch xây dựng cầu treo Hòa Bắc. Cây cầu được khởi công xây dựng vào ngày 15/01/2001 và hoàn thành vào ngày 02/9/2002. Cầu có chiều dài 151,4m, rộng 7,5m, tải trọng 8 tấn. '
    },

  };


  // xử lý vẽ điểm
  var ctx = canvas.getContext('2d');

  ctx.drawImage(image, widthW, heightW);

  window.addEventListener('mousemove', function (event) {
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
         
    // Kiểm tra xem chuột có nằm trong bán kính của marker không
    for (const markerKey in markerData) {
      if (markerData.hasOwnProperty(markerKey)) {
        const marker = markerData[markerKey];
        var distance = Math.sqrt((x - marker.x) ** 2 + (y - marker.y) ** 2);
        ctx.beginPath();
        ctx.arc(marker.x, marker.y, marker.radius, 0, 2 * Math.PI);
      // var img = new Image()
      // img.src = marker.icon

      // var pattern = ctx.createPattern(img, 'repeat');
      // var imageWidth = 2 * marker.radius;
      // var imageHeight = 2 * marker.radius;


      // ctx.fillStyle = pattern;
       // ctx.fillStyle = 'white';
       // ctx.fill();
        if (distance <= marker.radius) {
          infoCard.innerHTML = `
          <li class="card_item"> 
          <div class="card">
            <div class="card_image">
              <img src="${marker.img}" alt="info image ${marker.title}" />
              <span class="card_price"><a href="${marker.href}" alt="gg map link">
              <img style="width:30px;height:30px;" src="https://cdn-icons-png.flaticon.com/128/151/151773.png" alt="location ${marker.title}" />
              </a></span>
            </div>
            <div class="card_content">
              <h2 class="card_title">${marker.title}</h2>
              <div class="card_text">
                <p>marker.description
                </p>
                <hr />
                <p>${marker.description}
                </p>
                <hr />
              </div>
            </div>
          </div>
          </li>
          
          `
        //  infoCard.innerHTML = '<div width="60"; height = "90";><strong>' + marker.title + '</strong><br><hr><p style="text-align: justify;">' + marker.description + '</p><br><img src="' + marker.img + '"></div>';
          infoCard.style.left = (event.pageX - 40) + 'px';
          infoCard.style.top = (event.pageY + 20) + 'px';
          infoCard.style.display = 'block';
          // cardTitle.textContent =   marker.title ; 
          // cardText.textContent =  marker.description;
          return;
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
        var distance = Math.sqrt((x - marker.x) ** 2 + (y - marker.y) ** 2);
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


  // canvas.addEventListener('mousemove', function (event) {
  //   var rect = canvas.getBoundingClientRect();
  //   var x = event.clientX - rect.left;
  //   var y = event.clientY - rect.top;
  // });



  // for (const markerKey in markerData) {
  //   if (markerData.hasOwnProperty(markerKey)) {
  //     const marker = markerData[markerKey];
  //     ctx.beginPath();
  //     ctx.arc(marker.x, marker.y, marker.radius, 0, 2 * Math.PI);
  //     // var img = new Image()
  //     // img.src = marker.icon

  //     // var pattern = ctx.createPattern(img, 'repeat');
  //     // var imageWidth = 2 * marker.radius;
  //     // var imageHeight = 2 * marker.radius;


  //     // ctx.fillStyle = pattern;
  //     ctx.fillStyle = 'white';
  //      ctx.fill();


  //       var distance = Math.sqrt((x - marker.x) ** 2 + (y - marker.y) ** 2);
  //       if (distance <= marker.radius) {

  //         //ctx.textAlign = "center";
  //         //ctx.fillText(marker.title + marker.description, 1118, 82)

  //         infoCard.innerHTML = '<strong>' + marker.title + '</strong><br>' + marker.description + '<br><img src="' + marker.img + '">';
  //         infoCard.style.left = (event.pageX + 10) + 'px';
  //         infoCard.style.top = (event.pageY + 10) + 'px';
  //         infoCard.style.display = 'block';

  //         return
  //       }     
  //   }

  //   }  
}





// markers.forEach(marker => {
//   marker.addEventListener('click', () => {
//     const id = marker.id;
//     const data = markerData[id];

//     if (data) {
//       infoText.innerHTML = `<h3>${data.title}</h3><p>${data.description}</p>`;
//       infoBox.classList.remove('hidden');
//     }
//   });
// });


// infoBox.addEventListener('click', () => {
//   infoBox.classList.add('hidden');
// });