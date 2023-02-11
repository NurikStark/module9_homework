const apiURL = ' https://picsum.photos/v2/list?'
let inp1 = document.querySelector('.inp1');
let inp2 = document.querySelector('.inp2');
let btn = document.querySelector('.btn');
let resultNode = document.querySelector('.result');

btn.addEventListener('click', useRequest)
  function useRequest(){
    console.log('start')
    let checkWidth = (inp1.value >= 1 && inp1.value <= 10);
    let checkHeight = (inp2.value >= 1 && inp2.value <= 10);
    if(checkWidth && checkHeight){
      const checkWidth = document.querySelector('.inp1').value;
      const checkHeight = document.querySelector('.inp2').value;
      let requestURL = formatURL();
      fetch(requestURL)
      .then(response => { ;
       return response.url})
      .then(url => {resultNode.innerHTML = `<img src="${url}" alt="photo">`})
  
      .catch(() => {resultNode.innerHTML = `<div>error</div>`});
      } 
      else if(!checkWidth && checkHeight){
        resultNode.innerHTML = `<div>Номер страницы вне диапазона от 1 до 10</div>`
      }else if(checkWidth && !checkHeight){
        resultNode.innerHTML = `<div>Лимит вне диапазона от 1 до 10</div>`
      }else if((!checkHeight && !checkWidth) || (typeof checkWidth !== "number" && typeof checkHeight !== "number")){
        resultNode.innerHTML = `<div>Номер страницы и лимит вне диапазона от 1 до 10</div>`
      }
      console.log('end')
  }
  function formatURL(){
    let url = new URL(apiURL);
    url.searchParams.set('page', inp1.value);
    url.searchParams.set('limit', inp2.value);
    return url
  }

//   function writeOutput(result){
//   resultNode.innerHTML = result;
// }

// function formatOutput(text){
//   let htmlString = `<img src="${text}" alt="">`
//   return htmlString;
// }