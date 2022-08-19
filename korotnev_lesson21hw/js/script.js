let search = document.querySelector('.search-input').addEventListener('keyup', function (event) {
    let val = this.value.trim().split(' ').join('');
    if (val.length >= 3) {
        try {
            getUsers(val);
        } catch (e) {
            alert('error');
        }
    }
});

let getUsers = async function (user) {
    let url = new URL('https://api.github.com/search/users');
    url.searchParams.set('q', user);
    const response = await fetch(url);
    const data = await response.json();
    document.querySelector('.items-wrap').innerHTML ='';
    if(data.items.length == 0){
        alert('Нет пользователей с таким именем');   
    } else {
        showItems(data.items);
    }
}

function showItems(items) {
    items.forEach((item) => {
        let a = document.createElement('a');
        a.setAttribute('href', item.html_url);
        a.className = 'item';
  
        let img = document.createElement('img');
        img.setAttribute('src', item.avatar_url);
        img.setAttribute('alt', 'avatar');
 
        let score = document.createElement('div');
        score.className = 'score';
        score.innerText = `score: ${item.score}`;
    
        let login = document.createElement('div');
        login.className = 'login';
        login.innerText = `login: ${item.login}`;

        a.appendChild(img);
        a.appendChild(score);
        a.appendChild(login);
        document.querySelector('.items-wrap').appendChild(a);
    });
}