
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
      x: 627,
      y: 570,
      icon: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      img: '',
      radius: 10,
      title: 'Địa điểm 1: Cầu treo Hòa Bắc',
      description: "Cầu treo Hòa Bắc còn có tên gọi khác là Cầu dây văng Hòa Bắc, nối hai bờ của con sông Cu Đê. Trước khi cây cầu được xây dựng, người dân di chuyển qua lại hai bên bờ bằng ghe và xuồng. Tuy nhiên, điều này tiềm ẩn rủi ro khi có thời tiết xấu, đặc biệt vào mùa mưa lũ. Với mục đích đảm bảo an toàn việc đi lại, sinh hoạt, học tập của người dân, Cố Bí thư Nguyễn Bá Thanh đã lên kế hoạch xây dựng cầu treo Hòa Bắc. Cây cầu được khởi công xây dựng vào ngày 15/01/2001 và hoàn thành vào ngày 02/9/2002. Cầu có chiều dài 151,4m, rộng 7,5m, tải trọng 8 tấn. \n\n" +
        "\n\nNếu muốn đến check-in công trình này, du khách nên đến trong khoảng tháng 5 đến tháng 8, đây là khoảng thời gian có thời tiết thuận lợi. Du khách có thể ngắm hoàng hôn rực rỡ khi mặt trời xuống núi buổi chiều tà. Có nhiều homestay, khu cắm trại xung quanh cây cầu, an ninh đảm bảo. Vì vậy, khách du lịch hoàn toàn có thể yên tâm để trải nghiệm và khám phá địa điểm tuyệt vời này.",
    },
    marker2: {
      x: 587,
      y: 483,
      icon: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      img: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      radius: 10,
      title: 'Địa điểm 2: Vườn rừng bác Du',
      description: 'Vườn rừng bác Du nằm trong con hẻm nhỏ, trong vườn có hồ cá cùng với mạch nước ngầm từ sông Cu Đê nên hồ không bao giờ bị khô cạn. Trong vườn có rất nhiều loại cây như tre, chuối, bắp, khế, mía, cây bạc hà và có các loài chim, khỉ đến đây sinh sống. Đặc biệt, chủ vườn có trồng cây sao đen quý. Du khách từ các cơ sở lưu trú lân cận chủ yếu đến vườn để tham quan mô hình vườn rừng.Tại đây không cung cấp dịch vụ lưu trú.'
    },
    marker3: {
      x: 597,
      y: 463,
      icon: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      img: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      radius: 10,
      title: 'marker 3',
      description: ' this is marker3'
    },
    marker4: {
      x: 682,
      y: 525,
      icon: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      img: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      radius: 10,
      title: 'Địa điểm 1: Cầu treo Hòa Bắc',
      description: 'Cầu treo Hòa Bắc còn có tên gọi khác là Cầu dây văng Hòa Bắc, nối hai bờ của con sông Cu Đê. Trước khi cây cầu được xây dựng, người dân di chuyển qua lại hai bên bờ bằng ghe và xuồng. Tuy nhiên, điều này tiềm ẩn rủi ro khi có thời tiết xấu, đặc biệt vào mùa mưa lũ. Với mục đích đảm bảo an toàn việc đi lại, sinh hoạt, học tập của người dân, Cố Bí thư Nguyễn Bá Thanh đã lên kế hoạch xây dựng cầu treo Hòa Bắc. Cây cầu được khởi công xây dựng vào ngày 15/01/2001 và hoàn thành vào ngày 02/9/2002. Cầu có chiều dài 151,4m, rộng 7,5m, tải trọng 8 tấn. '
    },
    marker5: {
      x: 627,
      y: 570,
      icon: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      img: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      radius: 10,
      title: 'Địa điểm 1: Cầu treo Hòa Bắc',
      description: 'Cầu treo Hòa Bắc còn có tên gọi khác là Cầu dây văng Hòa Bắc, nối hai bờ của con sông Cu Đê. Trước khi cây cầu được xây dựng, người dân di chuyển qua lại hai bên bờ bằng ghe và xuồng. Tuy nhiên, điều này tiềm ẩn rủi ro khi có thời tiết xấu, đặc biệt vào mùa mưa lũ. Với mục đích đảm bảo an toàn việc đi lại, sinh hoạt, học tập của người dân, Cố Bí thư Nguyễn Bá Thanh đã lên kế hoạch xây dựng cầu treo Hòa Bắc. Cây cầu được khởi công xây dựng vào ngày 15/01/2001 và hoàn thành vào ngày 02/9/2002. Cầu có chiều dài 151,4m, rộng 7,5m, tải trọng 8 tấn. '
    },
    marker6: {
      x: 627,
      y: 570,
      icon: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      img: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      radius: 10,
      title: 'Địa điểm 1: Cầu treo Hòa Bắc',
      description: 'Cầu treo Hòa Bắc còn có tên gọi khác là Cầu dây văng Hòa Bắc, nối hai bờ của con sông Cu Đê. Trước khi cây cầu được xây dựng, người dân di chuyển qua lại hai bên bờ bằng ghe và xuồng. Tuy nhiên, điều này tiềm ẩn rủi ro khi có thời tiết xấu, đặc biệt vào mùa mưa lũ. Với mục đích đảm bảo an toàn việc đi lại, sinh hoạt, học tập của người dân, Cố Bí thư Nguyễn Bá Thanh đã lên kế hoạch xây dựng cầu treo Hòa Bắc. Cây cầu được khởi công xây dựng vào ngày 15/01/2001 và hoàn thành vào ngày 02/9/2002. Cầu có chiều dài 151,4m, rộng 7,5m, tải trọng 8 tấn. '
    },
    marker7: {
      x: 627,
      y: 570,
      icon: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      img: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      radius: 10,
      title: 'Địa điểm 1: Cầu treo Hòa Bắc',
      description: 'Cầu treo Hòa Bắc còn có tên gọi khác là Cầu dây văng Hòa Bắc, nối hai bờ của con sông Cu Đê. Trước khi cây cầu được xây dựng, người dân di chuyển qua lại hai bên bờ bằng ghe và xuồng. Tuy nhiên, điều này tiềm ẩn rủi ro khi có thời tiết xấu, đặc biệt vào mùa mưa lũ. Với mục đích đảm bảo an toàn việc đi lại, sinh hoạt, học tập của người dân, Cố Bí thư Nguyễn Bá Thanh đã lên kế hoạch xây dựng cầu treo Hòa Bắc. Cây cầu được khởi công xây dựng vào ngày 15/01/2001 và hoàn thành vào ngày 02/9/2002. Cầu có chiều dài 151,4m, rộng 7,5m, tải trọng 8 tấn. '
    },
    marker8: {
      x: 627,
      y: 570,
      icon: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      img: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      radius: 10,
      title: 'Địa điểm 1: Cầu treo Hòa Bắc',
      description: 'Cầu treo Hòa Bắc còn có tên gọi khác là Cầu dây văng Hòa Bắc, nối hai bờ của con sông Cu Đê. Trước khi cây cầu được xây dựng, người dân di chuyển qua lại hai bên bờ bằng ghe và xuồng. Tuy nhiên, điều này tiềm ẩn rủi ro khi có thời tiết xấu, đặc biệt vào mùa mưa lũ. Với mục đích đảm bảo an toàn việc đi lại, sinh hoạt, học tập của người dân, Cố Bí thư Nguyễn Bá Thanh đã lên kế hoạch xây dựng cầu treo Hòa Bắc. Cây cầu được khởi công xây dựng vào ngày 15/01/2001 và hoàn thành vào ngày 02/9/2002. Cầu có chiều dài 151,4m, rộng 7,5m, tải trọng 8 tấn. '
    },
    marker9: {
      x: 627,
      y: 570,
      icon: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      img: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      radius: 10,
      title: 'Địa điểm 1: Cầu treo Hòa Bắc',
      description: 'Cầu treo Hòa Bắc còn có tên gọi khác là Cầu dây văng Hòa Bắc, nối hai bờ của con sông Cu Đê. Trước khi cây cầu được xây dựng, người dân di chuyển qua lại hai bên bờ bằng ghe và xuồng. Tuy nhiên, điều này tiềm ẩn rủi ro khi có thời tiết xấu, đặc biệt vào mùa mưa lũ. Với mục đích đảm bảo an toàn việc đi lại, sinh hoạt, học tập của người dân, Cố Bí thư Nguyễn Bá Thanh đã lên kế hoạch xây dựng cầu treo Hòa Bắc. Cây cầu được khởi công xây dựng vào ngày 15/01/2001 và hoàn thành vào ngày 02/9/2002. Cầu có chiều dài 151,4m, rộng 7,5m, tải trọng 8 tấn. '
    },
    marker10: {
      x: 627,
      y: 570,
      icon: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      img: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      radius: 10,
      title: 'Địa điểm 1: Cầu treo Hòa Bắc',
      description: 'Cầu treo Hòa Bắc còn có tên gọi khác là Cầu dây văng Hòa Bắc, nối hai bờ của con sông Cu Đê. Trước khi cây cầu được xây dựng, người dân di chuyển qua lại hai bên bờ bằng ghe và xuồng. Tuy nhiên, điều này tiềm ẩn rủi ro khi có thời tiết xấu, đặc biệt vào mùa mưa lũ. Với mục đích đảm bảo an toàn việc đi lại, sinh hoạt, học tập của người dân, Cố Bí thư Nguyễn Bá Thanh đã lên kế hoạch xây dựng cầu treo Hòa Bắc. Cây cầu được khởi công xây dựng vào ngày 15/01/2001 và hoàn thành vào ngày 02/9/2002. Cầu có chiều dài 151,4m, rộng 7,5m, tải trọng 8 tấn. '
    },
    marker11: {
      x: 627,
      y: 570,
      icon: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      img: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      radius: 10,
      title: 'Địa điểm 1: Cầu treo Hòa Bắc',
      description: 'Cầu treo Hòa Bắc còn có tên gọi khác là Cầu dây văng Hòa Bắc, nối hai bờ của con sông Cu Đê. Trước khi cây cầu được xây dựng, người dân di chuyển qua lại hai bên bờ bằng ghe và xuồng. Tuy nhiên, điều này tiềm ẩn rủi ro khi có thời tiết xấu, đặc biệt vào mùa mưa lũ. Với mục đích đảm bảo an toàn việc đi lại, sinh hoạt, học tập của người dân, Cố Bí thư Nguyễn Bá Thanh đã lên kế hoạch xây dựng cầu treo Hòa Bắc. Cây cầu được khởi công xây dựng vào ngày 15/01/2001 và hoàn thành vào ngày 02/9/2002. Cầu có chiều dài 151,4m, rộng 7,5m, tải trọng 8 tấn. '
    },
    marker12: {
      x: 627,
      y: 570,
      icon: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      img: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      radius: 10,
      title: 'Địa điểm 1: Cầu treo Hòa Bắc',
      description: 'Cầu treo Hòa Bắc còn có tên gọi khác là Cầu dây văng Hòa Bắc, nối hai bờ của con sông Cu Đê. Trước khi cây cầu được xây dựng, người dân di chuyển qua lại hai bên bờ bằng ghe và xuồng. Tuy nhiên, điều này tiềm ẩn rủi ro khi có thời tiết xấu, đặc biệt vào mùa mưa lũ. Với mục đích đảm bảo an toàn việc đi lại, sinh hoạt, học tập của người dân, Cố Bí thư Nguyễn Bá Thanh đã lên kế hoạch xây dựng cầu treo Hòa Bắc. Cây cầu được khởi công xây dựng vào ngày 15/01/2001 và hoàn thành vào ngày 02/9/2002. Cầu có chiều dài 151,4m, rộng 7,5m, tải trọng 8 tấn. '
    },
    marker13: {
      x: 627,
      y: 570,
      icon: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      img: 'https://cdn-icons-png.flaticon.com/128/559/559907.png',
      radius: 10,
      title: 'Địa điểm 1: Cầu treo Hòa Bắc',
      description: 'Cầu treo Hòa Bắc còn có tên gọi khác là Cầu dây văng Hòa Bắc, nối hai bờ của con sông Cu Đê. Trước khi cây cầu được xây dựng, người dân di chuyển qua lại hai bên bờ bằng ghe và xuồng. Tuy nhiên, điều này tiềm ẩn rủi ro khi có thời tiết xấu, đặc biệt vào mùa mưa lũ. Với mục đích đảm bảo an toàn việc đi lại, sinh hoạt, học tập của người dân, Cố Bí thư Nguyễn Bá Thanh đã lên kế hoạch xây dựng cầu treo Hòa Bắc. Cây cầu được khởi công xây dựng vào ngày 15/01/2001 và hoàn thành vào ngày 02/9/2002. Cầu có chiều dài 151,4m, rộng 7,5m, tải trọng 8 tấn. '
    },
    marker14: {
      x: 627,
      y: 570,
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
        if (distance <= marker.radius) {

          infoCard.innerHTML = '<strong>' + marker.title + '</strong><br>' + marker.description + '<br><img src="' + marker.img + '">';
          infoCard.style.left = (event.pageX + 10) + 'px';
          infoCard.style.top = (event.pageY + 10) + 'px';
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