const image = Array.prototype.slice.call(document.getElementsByTagName("img"));
        
let list = document.getElementById('points');
image.forEach((element) => {
    let item = document.createElement('a');
    item.href = '#' + element.id;
    item.innerHTML = "•";
    list.append(item);
});