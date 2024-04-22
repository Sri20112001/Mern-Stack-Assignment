const api = 'https://baconipsum.com/api/?type=all'
console.log(api);

const response = fetch(api).then(res => res.json()).then(data => {
    try {
        console.log(data);
    } catch (err) {
        console.log(err);
    }
});