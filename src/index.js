// Example function
const sayHello = () => {
    /*eslint-disable no-console */
    console.log("Allo! We are all set!");
    console.log("Arrow functions are working");
};

sayHello();

// https://www.flickr.com/services/api/flickr.photos.search.html
fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&tags=dog&api_key=795e25298b0974e961992509b8830632&format=json', {

})
    .then(response => {
        console.log('loading API...');
        return (response.text());
    })
    .then((data) => {
        const myJson = JSON.parse(data.slice(14, -1)); // convert JSONP to JSON
        const photoList = myJson.photos.photo;
        let output = '';
        Object.keys(photoList).forEach(photo => {
            // console.log(photoList[photo]);
            output += `
            <img width="100%" height="*" src="https://farm${photoList[photo].farm}.staticflickr.com/${photoList[photo].server}/${photoList[photo].id}_${photoList[photo].secret}.jpg">
            `;
        });
        document.getElementById('output').innerHTML = output;

    })
    .catch(err => console.error(err, 'hmmm something happened'));
