const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    const text = document.getElementById('text');
    setTimeout(() => {
        text.innerText = 'ボタンをクリックしました'
    }, 2000);
});
