fetch('https://api.punkapi.com/v2/beers?brewed_before=11-2017&abv_gt=6')
  .then(response => response.json())
  .then(elements => showObjects(elements));

function showObjects(arrObj) {
  arrObj.forEach(function (arrElem) {
    let parent = document.querySelector('.wrapper');
    let element = document.createElement('div');
    element.classList.add('element');
    element.id = arrElem.id;

    let heading = document.createElement('h2');
    heading.innerText = arrElem.tagline;

    let elementContent = document.createElement('div');
    elementContent.classList.add('element-content-wrap');

    let img = document.createElement('img');
    img.setAttribute('src', arrElem.image_url);
    img.addEventListener('click', function(){
      localStorage.setItem('id', img.parentElement.parentElement.id);
    });

    let description = document.createElement('div');
    description.classList.add('description');
    description.innerText = arrElem.description;

    elementContent.appendChild(img);
    elementContent.appendChild(description);

    element.appendChild(heading);
    element.appendChild(elementContent);

    parent.appendChild(element);
  });



}
