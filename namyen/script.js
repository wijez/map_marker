window.addEventListener('load', function() {
  var canvas = document.getElementById('myCanvas');
  var ctx = canvas.getContext('2d');
  var image = document.getElementById('map');
  var infoCard = document.getElementById('info-card');
  var suggest = document.getElementById('goi-y-nam-yen')
 
  var markerData = {
    marker1: {
      x: 2630,
      y: 2900,
      radius: 10,
      tt: 1,

      img: "cautreohoabac.jpg",
      hrefMapinGoogle: "https://maps.app.goo.gl/HfSHy8suuXHqhrgZ6",
      title: "Cầu treo Hòa Bắc",
      description: `Cầu treo Hòa Bắc còn có tên gọi khác là Cầu dây văng Hòa Bắc, nối hai bờ của con sông 
       Cu Đê. Trước khi cây cầu được xây dựng, người dân di chuyển qua lại hai bên bờ bằng ghe 
      và xuồng. Tuy nhiên, điều này tiềm ẩn rủi ro khi có thời tiết xấu, đặc biệt vào mùa mưa lũ.
       Với mục đích đảm bảo an toàn việc đi lại, sinh hoạt, học tập của người dân, Cố Bí thư  
        <a href="https://vi.wikipedia.org/wiki/Nguy%E1%BB%85n_B%C3%A1_Thanh"> Nguyễn Bá Thanh <a> 
        đã lên kế hoạch xây dựng cầu treo Hòa Bắc. Cây cầu được khởi công  
        xây dựng vào ngày 15/01/2001 và hoàn thành vào ngày 02/9/2002. Cầu có chiều dài
          151,4m, rộng 7,5m, tải trọng 8 tấn. 

      Nếu muốn đến check-in công trình này, du khách nên đến trong khoảng tháng 5 đến tháng 8,
      đây là khoảng thời gian có thời tiết thuận lợi. Du khách có thể ngắm hoàng hôn rực rỡ 
       khi mặt trời xuống núi buổi chiều tà.
      Có nhiều homestay, khu cắm trại xung quanh cây cầu,
      an ninh đảm bảo. Vì vậy, khách du lịch hoàn toàn có thể yên tâm để trải nghiệm và khám
       phá địa điểm tuyệt vời này.
      `,
    },
    marker2: {
      x:  2420,
      y: 2460,
      radius: 10,
      tt: 5,
      icon: "",
      img: "langnguon.jpg",
      hrefMapinGoogle: "https://maps.app.goo.gl/wBA4xU9wjHirNyMj6",
      title: "Làng Nguồn",
      description: `
      Nằm ngay tại trung tâm thôn Nam Yên, xã Hoà Bắc, huyện Hoà Vang, TP. Đà Nẵng.
      Làng Nguồn là điểm đến tuyệt vời dành cho gia đình, bạn bè mỗi dịp cuối tuần hay
      những kỳ nghỉ lễ.
      Làng Nguồn có 13 phòng hiện đại, sức chứa 4 - 5 người/phòng với đầy đủ tiện nghi 
      bao gồm phòng bếp và phòng ăn. Tại đây còn cung cấp dịch vụ cắm trại và tổ chức
      sự kiện cũng như nhiều không gian đẹp để du khách check-in.
      `,
    },
    marker3: {
      x: 2490,
      y: 2400,
      radius: 10,
      icon: "",
      img: "noimg.jpg",
      hrefMapinGoogle: "",
      title: "Homestay Sang",
      description: `
      Homestay Sang sở hữu cảnh quan thiên nhiên tuyệt đẹp với núi rừng và những thửa ruộng 
      bậc thang. Du khách sẽ được tận hưởng bầu không khí trong lành, yên bình và hòa mình 
      vào thiên nhiên, mang đến cho du khách trải nghiệm đời sống bình dị và văn hóa độc đáo
      của người dân bản địa.
      <br><br>
      Homestay cung cấp nhiều hoạt động vui chơi giải trí như tour tham quan bản làng bằng xe
      đạp, đốt lửa trại, ...Đặc biệt, du khách còn được thưởng thức những món ăn đặc sản của
      người dân địa phương như gà nướng, cơm lam, rau rừng…
      `,
    },
  
    marker4: {
      x: 2878,
      y: 2617,
      radius: 10,
      icon: "",
      img: "campinghoabac.jpg",
      hrefMapinGoogle: "https://maps.app.goo.gl/m5zLuFvQjqUWWdvb6",
      title: "Khu cắm trại Hòa Bắc",
      description: `
      Khu cắm trại Hòa Bắc là một bờ đất trống nhô ra từ bãi bồi của sông Cu đê. Đi vào con 
      đường đối diện với Trạm y tế Hòa Bắc tầm 200m, du khách sẽ thấy bảng chỉ dẫn rẽ trái
      đến nơi này. Khu cắm trại Hòa Bắc có khung cảnh thiên nhiên hùng vĩ, thảm cỏ xanh mát,
      bên cạnh là dòng sông xanh êm đềm. Nơi đây trở thành một địa điểm dã ngoại lý tưởng 
      cho ai thích khám phá và trải nghiệm. Khi đến đây, du khách nên chuẩn bị đầy đủ các dụng cụ 
      để cắm trại như: lều, nước uống, thức ăn. Chi phí thuê đèn chiếu sáng 10.000/đêm. Du
      khách có thể ca hát, nấu ăn, đốt lửa trại và tổ chức các hoạt động giải trí ở nơi này mà 
      không cần phải lo lắng về vấn đề an ninh. Tuy nhiên, du khách nên lưu ý việc giữ gìn vệ sinh
      chung cho môi trường luôn xanh sạch đẹp. 
      `,
    },
    marker5: {
      x: 3800 ,
      y: 4763,
      radius: 10,
      icon: "",
      tt: 9,
      img: "vacbachong.jpg",
      hrefMapinGoogle: "",
      title: "Mô hình vườn - ao - chuồng - nhà bác Hồng",
      description: `
 
      Vườn - ao - chuồng nhà bác Hồng là nơi cung cấp nguồn lương thực, thực phẩm chủ yếu
      trong khu vực. Địa thế nằm gần sông Cu Đê, nước tự nhiên từ đầu nguồn chảy xuống, bao 
      phủ bởi núi rừng, đất thịt màu mỡ rất thích hợp để trồng nhiều loại rau củ như: bí đỏ, cà 
      tím, rau muống, rau lang, mướp đắng,… Bác Hồng còn nuôi thêm gia súc, gia cầm và nuôi 
      cá. Đến thăm Vườn Bác Hồng, du khách có thể mua được nông sản tươi, ngon và sạch 
      nhất. Bên cạnh đó, du khách có thể chọn mô hình vườn - ao - chuồng nhà bác Hồng cho
      những hoạt động tham quan, học tập, tìm hiểu các phương pháp canh tác cây trồng và phát 
      triển nông nghiệp.

     `,
    },
    marker6: {
      x: 2590,
      y: 2460,
      radius: 10,
      tt: 8,
      img: "campingnamyen.jpg",
      hrefMapinGoogle: "https://maps.app.goo.gl/apixfunf8Pt4Dxhs5",
      title: "Nam Yên Camping",
      description: `
     
      Khu vực cắm trại tại <strong>Nam Yên Camping</strong> được trang bị cơ sở hạ tầng hiện đại, ẩm thực 
      phong phú đa dạng, khu vệ sinh tiện nghi đảm bảo cho du khách có một chuyến cắm trại
      tuyệt vời. Du khách có thể mang theo thức ăn để chuẩn bị cho tiệc BBQ ngoài trời.
      Vào buổi tối, <strong>Nam Yên Camping</strong> còn cung cấp dịch vụ đốt lửa 
      trại, đêm nhạc hát cho nhau nghe
      theo yêu cầu của du khách.
     
      `,
    },
    marker7: {
      x: 2662,
      y: 2393,
      radius: 10,
      icon: "",
      img: "noimg.jpg",
      hrefMapinGoogle: "https://maps.app.goo.gl/RCdETYGcM5fHXqN99",
      title: "Homestay Hoa Chín",
      description: `
     
      Homestay Hoa Chín tọa lạc tại thôn Nam Yên, xã Hòa Bắc, huyện Hòa Vang, TP. Đà Nẵng
       - địa điểm để du khách trải nghiệm thiên nhiên thơ mộng.
      Vào những dịp lễ, tết, Homestay Hoa Chín là địa điểm được nhiều du khách lựa chọn là 
      điểm đến nghỉ dưỡng lý tưởng. Không gian sống tiện nghi, nhân viên thân thiện cùng với 
      nhiều loại thực phẩm phong phú, đa dạng. Homestay có 04 phòng và hơn 10 lều ngoài trời,
      tích hợp đầy đủ tiện nghi về điện nước, wifi và dịch vụ ăn uống. Homestay cung cấp đầy 
      đủ các dịch vụ, bao gồm cả bãi đỗ xe. Chi phí sẽ giao động từ 100.000 - 200.000 đồng/ 
      người/đêm.
      <br><strong>Lưu ý:</strong><br>
      ●	Homestay dừng hoạt động từ tháng 9 đến tháng 12 do ảnh hưởng của mưa lũ 
      ●	Sinh viên sẽ được giảm giá thuê phòng khi mang theo thẻ sinh viên.
     
    `,
    },
    marker8: {
      x: 2774,
      y: 2400,
      radius: 10,
      icon: "",
      tt: 4,
      img: "hoptacxa.jpg",
      hrefMapinGoogle: "https://maps.app.goo.gl/4CbU1HCnz6XUkFBQ6",
      title: `Trung tâm Du lịch học tập cộng đồng Hợp tác xã (HTX) <br>
               Nông nghiệp sinh thái & Du lịch cộng đồng Hòa Bắc`,
      description: `
      
      Trung tâm Du lịch học tập cộng đồng Hợp tác xã (HTX) Nông nghiệp sinh thái & Du lịch 
      cộng đồng Hòa Bắc đặt trụ sở tại Homestay Nam Yên. Homestay được xây dựng từ năm 
      2019, là nơi tiếp đón du khách đến với Hòa Bắc để tham quan và tham gia các chương trình 
      trao đổi học tập và nghiên cứu.
      <br>
      <br>
      Homestay Nam Yên cung cấp dịch vụ lưu trú với 04 phòng, dịch vụ ăn uống, dịch vụ thuê 
      xe đạp và xe điện du lịch. Quanh khu vực homestay có các quầy tạp hóa, quán cafe gần kề 
      nên rất thuận lợi cho du khách. An ninh tại khu vực này rất tốt.
      
      `,
    },
    marker9: {
      x: 3243,
      y: 1620,
      radius: 10,
      tt: 3,
      icon: "",
      img: "nhathogiaoxu.jpg",
      hrefMapinGoogle: "https://maps.app.goo.gl/Euj4e56bwbNn9Toi6",
      title: "Nhà thờ Giáo xứ Hội Yên",
      description: `
      
      Nhà thờ Giáo xứ Hội Yên nằm ở vị trí đắc địa, là nơi “Tựa Sơn hướng Thủy”, tựa lưng vào 
      đồi cây Bàng Da và mặt hướng ra phía Nam, hướng sông Cu Đê. Bởi vị trí địa lý nằm trên 
      vùng đất cao, được xây dựng kiên cố cho nên hằng năm vào các mùa mưa lũ (từ tháng 9 
      đến tháng 12), nhà thờ không bị ngập úng và là nơi trú ngụ của Giáo dân mùa mưa bão.
       <br>
       <br>
      Năm 2008, Giáo họ Hội Yên chính thức trở thành Giáo xứ. Linh mục đầu tiên của Giáo xứ 
      là Cha Phêrô Trần Công Thạch. Năm 2015, Nhà thờ Giáo xứ Hội Yên chính thức khởi
      công xây dựng nhà thờ mới và khánh thành vào năm 2018.
       <br>
       <br>
      Nhà thờ có lối kiến trúc bắt mắt, với thiết kế vòm cửa cao, tông màu chủ đạo là màu xám
      kết hợp với màu trắng tạo cảm giác rộng rãi cho ngôi thánh đường. Chi tiết ảnh Chúa, thánh
      giá, vườn địa đàng làm cho khu thánh đường vừa hài hòa vừa trang nghiêm. Nhà thờ thường
      tổ chức các cuộc thi về giáo lý, nhiều hoạt động vui chơi, giải trí như múa, hát, đốt lửa trại,
      sinh hoạt thiếu nhi… vào các ngày lễ lớn như Lễ Phục sinh, Lễ Giáng sinh…

      `,
    },
    marker10: {
      x: 5070 ,
      y: 2850,
      radius: 10,
      icon: "",
      tt: 2,
      img: "vuonrungbacdu.jpg",
      hrefMapinGoogle: "",
      title: "Vườn rừng bác Du",
      description: `
      Vườn rừng bác Du nằm trong con hẻm nhỏ, trong vườn có hồ cá cùng với mạch nước ngầm
      từ sông Cu Đê nên hồ không bao giờ bị khô cạn. Trong vườn có rất nhiều loại cây như tre,
      chuối, bắp, khế, mía, cây bạc hà và có các loài chim, khỉ đến đây sinh sống. Đặc biệt, chủ
      vườn có trồng cây sao đen quý. Du khách từ các cơ sở lưu trú lân cận chủ yếu đến vườn để
      tham quan mô hình vườn rừng. <br>
      <strong>Không cung cấp dịch vụ lưu trú.</strong> `,
    },
    marker11: {
      x: 1930,
      y: 2280,
      radius: 10,
      icon: "",
      img: "noimg.jpg",
      hrefMapinGoogle: "https://maps.app.goo.gl/ADun85LptggUzsPM9",
      title: "Cu Đê House",
      description: `Giữa miền an nhiên Hòa Bắc, có một căn nhà tên là Cu Đê House. Tên gọi ấy được bắt nguồn từ chính dòng sông Cu Đê hiền hòa, với cảnh sắc sơn thủy hữu tình. Khi đặt chân đến Cu Đê House, bạn sẽ cảm nhận được không khí thoáng đãng, nhẹ nhàng, là cảm giác một khi đã đến thì chẳng muốn rời xa.
      Điểm đặc biệt là Cu Đê House được thiết kế có một hồ bơi lớn nằm ngay trước căn nhà. Bố cục không gian mở nhằm giúp cho không gian cảnh quan thông thoáng và ánh sáng tự nhiên tràn ngập đến các phòng. Cu Đê House có 05 phòng với sức chứa tối đa khoảng 50 khách.
      Các dịch vụ tích hợp trong Cu Đê House phù hợp cho gia đình, bạn bè, các buổi tổng kết cuối năm của công ty, sinh hoạt câu lạc bộ. 
      <br>Lưu ý:<br>
      ●	Tuyệt đối không sử dụng các chất kích thích bị nghiêm cấm: ma tuý, thuốc lắc, các chất cháy nổ.
      
      
      `,
    },
    marker12: {
      x: 1960,
      y: 2100,
      radius: 10,
      icon: "",
      tt: 6,
      img: "noimg.jpg",
      hrefMapinGoogle: "https://maps.app.goo.gl/9p3Q51sRcxWhzTJCA",
      title: "Hòa Bắc Ecolodge - Camping Space Art",
      description: `<strong>Hòa Bắc Ecolodge - Camping Space Art:</strong> được xem là địa điểm nghỉ dưỡng sinh thái hấp <br>
      dẫn trong khu vực. Nằm nép mình giữa vùng núi Hòa Bắc với không gian xanh mát, cánh 
      rừng thông hòa cùng tiếng chim líu lo, khu vực đồng bằng bằng phẳng. Đây là nơi lý tưởng 
      để du khách tìm sự bình yên, thoải mái, gần gũi thiên nhiên sau những ngày làm việc mệt mỏi.
      <br><br>
      <strong>Hòa Bắc Ecolodge - Camping Space Art:</strong> có những chiếc lều trắng
       thơ mộng, khu vực lửa
      trại với không gian thoáng đãng. Chi phí thuê lều cho khách lẻ và khách theo đoàn dao 
      động từ 200.000 - 600.000 đồng/người/ngày.

      `,
    },
    marker13: {
      x: 1999,
      y: 1800,
      radius: 10,
      icon: "",
      img: "noimg.jpg",
      hrefMapinGoogle: "",
      title: "Đền Âm Linh",
      description: `
        Khu vực thờ cúng linh thiêng trong thôn đã có từ khoảng thế kỉ 19. Công trình đã bị tàn phá
        sau chiến tranh chống thực dân Pháp và được xây dựng lại từ năm 1992. Đền Âm Linh 
        nằm trên vùng đất bằng phẳng, xung quanh được bao quanh bởi đồi núi. Bên trong đền có 
        9 gian cúng tế. Đây là nơi thờ cúng những người vô danh, không nơi nương tựa. Tại đây
        du khách có thể tham dự lễ hội cúng bái được tổ chức vào ngày 25 tháng chạp hằng năm.
        `,
    },
    marker14: {
      x: 1590,
      y: 2370,
      tt: 7,
      radius: 10,
      icon: "",
      img: "campingcude.jpg",
      hrefMapinGoogle: "https://maps.app.goo.gl/oWBYvbY5f9q58Bc26",
      title: "Cu Đê Camping",
      description: `
      Nằm ngay cạnh bờ sông Cu Đê, khu cắm trại có vẻ đẹp thiên nhiên hoang sơ, không gian
      trong lành của cây cỏ. Đến Cu Đê Camping, du khách có thể chiêm ngưỡng một màu xanh 
      bạt ngàn của đồng cỏ, núi rừng, dòng sông và bầu trời.
      <br><br>
      Cu Đê Camping cung cấp dịch vụ cafe, ăn uống và lưu trú với khu vực lều trại riêng biệt. 
      `,
    },
    marker15: {
      x: 1204,
      y: 1952,
      radius: 10,
      img: "noimg.jpg",
      hrefMapinGoogle: "https://maps.app.goo.gl/Dyf9KTgaPTim6zH47",
      title: "Làng Mê",
      description: `
      Làng Mê nằm ở thôn Nam Yên, xã Hòa Bắc, huyện Hòa Vang, TP. Đà Nẵng, với lợi thế
      không gian rộng rãi, thoáng mát. Nơi đây là địa điểm du lịch lý tưởng, thích hợp với nghỉ
      dưỡng và dã ngoại cuối tuần. 
       <br><br>
      Làng Mê có những chiếc lều trắng chắc chắn, có không gian đốt lửa trại, ghế ngồi được
      làm bằng chất liệu tre gần gũi. Nhà hàng, quán cà phê và khu cắm trại kết hợp với nhau
      nên ở đây cung cấp nhiều trải nghiệm dịch vụ hấp dẫn trong quá trình du khách lưu trú Giá
      dịch vụ sẽ từ 500.000 đồng/người/ngày. 

      `,
    },
  };

  var canvasContainer = document.getElementById('canvas-container');

  function resizeCanvas() {
    canvas.width = canvasContainer.offsetWidth;
    canvas.height = canvasContainer.offsetHeight;
    drawMarkers();
  }

  function drawMarkers() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    for (const marker of Object.values(markerData)) {
      var scaledX = marker.x / image.naturalWidth * canvas.width;
      var scaledY = marker.y / image.naturalHeight * canvas.height;
      ctx.beginPath();
      ctx.arc(scaledX, scaledY, marker.radius, 0, 2 * Math.PI, false);
      marker.scaledX = scaledX;
      marker.scaledY = scaledY;
    }
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  const infoCardWidth = 300;
  const infoCardHeight = 370;
  
  function displayInfoCard(marker, event, useMarkerPosition = false) {
    infoCard.innerHTML = `
      <div style="width:${infoCardWidth}px; height:${infoCardHeight}px">
        <div class="overflow-hidden" style="display: flex; align-items: center; justify-content: space-between; margin-top: 15px;">
          <strong>${marker.title}</strong>
          <div class="button-container" style="display: flex; align-items: center; margin-left: auto;">
            <a id="mapInGoogle" target="_blank" href="${marker.hrefMapinGoogle}" alt="${marker.title}">
              <img src="https://img.icons8.com/?size=48&id=kDqO6kPb3xLj&format=gif" alt="Google Maps ${marker.title}">
            </a>
            <button id="hidden-click">
              <img src="https://img.icons8.com/?size=80&id=I02TdaPxbwRz&format=png"/>
            </button>
          </div>
        </div>
        <br><hr>
        <div class="image-container" id="no_image">
          <img class="hover-image" src="../images/namyen/${marker.img}" alt="No image">
          <div class="image-info">${marker.title}</div>
          <br><hr>
        </div>
        <div style="text-align: justify; max-height:160px; overflow-y:auto; background-color: white;">
          <p>${marker.description}</p>
        </div>
        <br>
      </div>
    `;
  
    document.getElementById("hidden-click").addEventListener("click", function () {
      infoCard.style.display = "none";
    });
  
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
  
    var infoCardLeft, infoCardTop;
  
    if (useMarkerPosition) {
      infoCardLeft = marker.scaledX - (marker.scaledX <= canvas.width - infoCardWidth ? 30 : infoCardWidth - 20);
      infoCardTop = marker.scaledY - (marker.scaledY <= canvas.height - infoCardHeight ? 20 : infoCardHeight + 20);
    } else {
      infoCardLeft = event.pageX - (x <= canvas.width - infoCardWidth ? 30 : infoCardWidth - 20);
      infoCardTop = event.pageY - (y <= canvas.height - infoCardHeight ? 20 : infoCardHeight + 20);
    }
  
    if (infoCardLeft < 0) infoCardLeft = 0;
    if (infoCardTop < 0) infoCardTop = 0;
    if (infoCardLeft + infoCardWidth > window.innerWidth) infoCardLeft = window.innerWidth - infoCardWidth;
    if (infoCardTop + infoCardHeight > window.innerHeight) infoCardTop = window.innerHeight - infoCardHeight;
  
    infoCard.style.left = infoCardLeft + 'px';
    infoCard.style.top = infoCardTop + 'px';
    infoCard.style.display = 'block';
  }
  
  // Handle click on canvas
  window.addEventListener('click', function(event) {
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
  
    for (const marker of Object.values(markerData)) {
      var distance = Math.sqrt((x - marker.scaledX) ** 2 + (y - marker.scaledY) ** 2);
      if (distance <= marker.radius) {
        displayInfoCard(marker, event);
        return;
      }
    }
  });
  
  // Handle click on list items
  var arr = document.querySelectorAll("#goi-y-nam-yen li");
  arr.forEach(function(item, index) {
    item.addEventListener("click", function(event) {
      for (const markerKey in markerData) {
        const marker = markerData[markerKey];
        if (marker.tt - 1 == index) {
          displayInfoCard(marker, event, true);
          return;
        }
      }
    });
  });

  
});

