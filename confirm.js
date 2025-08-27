document.addEventListener('DOMContentLoaded', () => {
    // sessionStorage からデータを取得
    // sessionStorage.getItem('キー');
    const storedData = sessionStorage.getItem('contactFormData');

    if (storedData) {
        // JSON文字列をオブジェクトにパース
        const formData = JSON.parse(storedData);

        // 取得したデータをHTML要素に表示
        document.getElementById('confirmName').textContent = formData.name;
        document.getElementById('confirmFurigana').textContent = formData.furigana;
        document.getElementById('confirmCompany').textContent = formData.company;
        document.getElementById('confirmEmail').textContent = formData.email;
        document.getElementById('confirmPhone').textContent = formData.phone;
        document.getElementById('confirmMessage').textContent = formData.message;

        document.getElementById('hiddenName').value = formData.name;
        document.getElementById('hiddenFurigana').value = formData.furigana;
        document.getElementById('hiddenCompany').value = formData.company;
        document.getElementById('hiddenEmail').value = formData.email;
        document.getElementById('hiddenPhone').value = formData.phone;
        document.getElementById('hiddenMessage').value = formData.message;
    } else {
        // データがない場合は入力画面に戻すなどの処理
        alert('入力データが見つかりませんでした。入力画面に戻ります。');
        window.location.href = 'input.html';
    }

    // 「送信する」ボタンのイベントリスナー
    const submitButton = document.getElementById('submitForm');
    submitButton.addEventListener('click', () => {
        // ここでサーバーサイドへのデータ送信処理を行う
        // 例: fetch API を使ってPOSTリクエストを送る
        // fetch('/api/submit-contact', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: storedData // sessionStorageから取得したJSONデータをそのまま送信
        // })
        // .then(response => response.json())
        // .then(data => {
        //     console.log('Success:', data);
        //     // 送信成功後、sessionStorageをクリアして確定画面へ
        //     sessionStorage.removeItem('contactFormData');
        //     window.location.href = 'complete.html';
        // })
        // .catch((error) => {
        //     console.error('Error:', error);
        //     alert('送信中にエラーが発生しました。');
        // });

        // 今回はクライアントサイドのみの例なので、直接確定画面へ遷移
        // 実際のアプリケーションでは、ここでサーバーサイドへの送信処理を挟む
        alert('フォームが送信されました！');
        sessionStorage.removeItem('contactFormData'); // 送信後はデータをクリア
        window.location.href = 'complete.html';
    });
});
