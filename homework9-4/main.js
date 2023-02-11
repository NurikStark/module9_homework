
 
let inp1 = document.querySelector('.inp1');
let inp2 = document.querySelector('.inp2');
let btn = document.querySelector('.btn');
let resultNode = document.querySelector('.result');

btn.addEventListener('click', useRequest)
  function useRequest(){
    console.log('start')
    let checkWidth = (inp1.value >= 100 && inp1.value <= 300);
    let checkHeight = (inp2.value >= 100 && inp2.value <= 300);
    if(checkWidth && checkHeight){
      const checkWidth = document.querySelector('.inp1').value;
      const checkHeight = document.querySelector('.inp2').value;
      let requestURL = `https://picsum.photos/${checkWidth}\/${checkHeight}`
      fetch(requestURL)
      .then(response => { ;
       return response.url;
      })
      .then(url => {writeOutput(formatOutput(url)) })
  
      .catch(() => { resultNode.innerHTML = `<div>error</div>`});
      } 
      else{
        resultNode.innerHTML = `<div>одно из чисел вне диапазона от 100 до 300</div>`
      }
      console.log('end')
  }
  
 

function writeOutput(result){
  resultNode.innerHTML = result;
}

function formatOutput(url){
  let htmlString = `<img src="${url}" alt="">`
  return htmlString;
}
  


  





