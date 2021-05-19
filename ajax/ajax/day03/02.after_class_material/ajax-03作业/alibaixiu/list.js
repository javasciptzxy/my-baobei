window.onload = function () {
  var xhr = new XMLHttpRequest();
  var publish = document.querySelector('.publish')
  xhr.open('GET', 'http://www.liulongbin.top:3005/api/getnewslist')
  xhr.send()
  var str = ''
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.responseText)
      data = JSON.parse(xhr.responseText)
      console.log(data);
      for (let item of data.message) {
        str += `
        <div class="row">
          <div class="col-sm-9">
              <h3>${item.title}</h3>
              <p class="text-muted hidden-xs">${item.add_time}</p>
              <p class="hidden-xs">${item.zhaiyao}</p>
              <p class="text-muted">阅读${item.click} 
              </p>
          </div>
          <div class="col-sm-3 pic hidden-xs">
              <img src="${item.img_url}" alt="">
          </div>
      </div>`
      }
      publish.innerHTML = str
    }
  }

}