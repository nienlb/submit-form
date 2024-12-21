document.getElementById('submitButton').addEventListener('click', function () {
    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;
    const fileInput = document.getElementById('fileInput').files[0];
    const access_token =""  // Thay bằng token thực tế
    const username = "nienluong";       // Thay bằng username thực tế

    if (!fileInput) {
        alert("Vui lòng chọn một tệp tin.");
        return;
    }


    const formData = new FormData();
    formData.append('access_token', access_token);
    formData.append('name', input1);
    formData.append('username', username);
    formData.append('custom_tong_ngan_sach_de_xuat', input2);
    formData.append('custom_file_ky_duyet', fileInput);
    if (fileInput) {
        formData.append('fileInput', fileInput);
    }

    fetch('https://request.base.com.vn/extapi/v1/request/create', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();  // Chuyển đổi phản hồi thành JSON
    })
    .then(data => {
        console.log("Response:", data);  // Xử lý kết quả trả về
        alert("Yêu cầu gửi thành công!");
    })
    .catch(error => {
        console.error("Error:", error);  // Xử lý lỗi nếu có
        alert("Có lỗi xảy ra khi gửi yêu cầu.");
    });
});
