const btn = document.getElementById('output-btn');

btn.addEventListener('click', () => {
    console.log('クリックされました！');
})

const addBtn = document.getElementById('add-btn');
const parentList = document.getElementById('parent-list');

addBtn.addEventListener('click', () => {
    const childList = document.createElement('li');
    childList.textContent = 'これはリスト要素です';
    parentList.appendChild(li);
});
