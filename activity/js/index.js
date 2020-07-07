
function initialize() {
  let selector = document.getElementById('selector')
  for (let i = 1; i < 150; i++) {
    let id = i.toString();
    while (id.length < 3) {
      id = '0' + id;
    }
    a = document.createElement('a');
    a.href = './html/' + id + '.html';
    a.textContent = '#' + id;
    selector.append(a);
    selector.append(document.createTextNode(' '));
  }
}
