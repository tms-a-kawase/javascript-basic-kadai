const validation = () => {

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const output = document.getElementById('output');

    let errors = [];

    if (name.trim() === '') {
        errors.push('名前を入力してください');
    } else if (name.length > 10) {
        errors.push('名前は10文字以内で入力してください');
    }

    const emailPattern = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        errors.push('メールアドレスを正しく入力してください');
    }

    if (errors.length > 0) {
        output.innerHTML = errors.join('<br>');
    } else {
        output.innerHTML='';
        alert('バリデーションOKです。')
    }
}

const button = document.getElementById('check-btn');
button.addEventListener('click', validation);
