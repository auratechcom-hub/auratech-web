document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // フォームのデフォルト送信をキャンセル

        // 各入力フィールドの値を取得
        const name = document.getElementById("name").value;
        const furigana = document.getElementById("furigana").value;
        const company = document.getElementById("company").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;

        // オブジェクトにまとめる
        const formData = {
            name: name,
            furigana: furigana,
            company: company,
            email: email,
            phone: phone,
            message: message
        };

        // sessionStorage に保存（JSON形式に変換して保存）
        // sessionStorage.setItem('キー', '値');
        sessionStorage.setItem('contactFormData', JSON.stringify(formData));

        // 確認画面へ遷移
        window.location.href = 'confirm.html';
    });
});


 
