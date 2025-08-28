document.addEventListener('DOMContentLoaded', () => {
  const storedData = sessionStorage.getItem('contactFormData');

  if (storedData) {
    const formData = JSON.parse(storedData);

    // 表示
    document.getElementById('confirmName').textContent = formData.name;
    document.getElementById('confirmFurigana').textContent = formData.furigana;
    document.getElementById('confirmCompany').textContent = formData.company;
    document.getElementById('confirmEmail').textContent = formData.email;
    document.getElementById('confirmPhone').textContent = formData.phone;
    document.getElementById('confirmMessage').textContent = formData.message;

    // hidden にセット
    document.getElementById('hiddenName').value = formData.name;
    document.getElementById('hiddenFurigana').value = formData.furigana;
    document.getElementById('hiddenCompany').value = formData.company;
    document.getElementById('hiddenEmail').value = formData.email;
    document.getElementById('hiddenPhone').value = formData.phone;
    document.getElementById('hiddenMessage').value = formData.message;
  } else {
    alert('入力データが見つかりませんでした。入力画面に戻ります。');
    window.location.href = 'input.html';
  }

  // form送信イベントをフック
  const finalForm = document.getElementById('finalForm');
  finalForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // 本来の送信を止める

    const formDataObj = new FormData(finalForm);

    try {
      const response = await fetch("https://formspree.io/f/movnqono", {
        method: "POST",
        body: formDataObj,
        headers: { "Accept": "application/json" }
      });

      if (response.ok) {
        sessionStorage.removeItem('contactFormData');
        window.location.href = "complete.html"; // ← 自作の完了ページに飛ぶ
      } else {
        alert("送信に失敗しました。");
      }
    } catch (error) {
      console.error(error);
      alert("エラーが発生しました。");
    }
  });
});
