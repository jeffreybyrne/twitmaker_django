document.addEventListener('DOMContentLoaded', function() {
  let form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    let formData = new FormData(this);
    axios.post(
      this.action,
      formData,
    ).then(function(response) {
      console.log(response.data);
      newLi = document.createElement('li');
      newLi.classList = 'tweet';
      tweetList = document.querySelector('.tweets');
      newTime = document.createElement('time')
      newTime.innerText = response.data.created_at
      newP = document.createElement('p')
      newP.innerText = response.data.message
      newLi.appendChild(newTime);
      newLi.appendChild(newP);
      tweetList.prepend(newLi)
    }).catch(function(error) {
      console.log(error);
    });
  });
});
