let ImageDiv = document.querySelector('.ImageDiv')
let input = document.querySelector('input')

function fatch(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.onload = function () {
      resolve(JSON.parse(xhr.response))
    }
    xhr.onerror = function () {
      reject('something wrong !')
    }
    xhr.send()
  })
}

let data = fatch(
  'https://api.unsplash.com/search/photos?query=taj;client_id=lUwDTtlX5SkXWf3tda4Ql_dMoiPY-mTixVqN5ZT89xM',
)

data.then((data) => {
  let imageData = data.results
  for (let elm of imageData) {
    let img = document.createElement('img')
    img.src = elm.urls.small

    ImageDiv.append(img)
  }
})
data.catch(() => {
  alert('something wrong')
})

// handleInput

function handleInput(e) {
  if (e.keyCode === 13) {
    ImageDiv.innerHTML = ''

    function fatch(url) {
      return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest()
        xhr.open('GET', url)
        xhr.onload = function () {
          resolve(JSON.parse(xhr.response))
        }
        xhr.onerror = function () {
          reject('something wrong !')
        }
        xhr.send()
      })
    }

    let data = fatch(
      `https://api.unsplash.com/search/photos?query=${input.value};client_id=lUwDTtlX5SkXWf3tda4Ql_dMoiPY-mTixVqN5ZT89xM`,
    )

    data.then((data) => {
      let imageData = data.results
      for (let elm of imageData) {
        let img = document.createElement('img')
        img.src = elm.urls.small
        ImageDiv.append(img)
      }
    })
    data.catch(() => {
      alert('something wrong')
    })
    input.value = ''
    //
  }
}

input.addEventListener('keyup', handleInput)
