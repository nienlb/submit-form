document.getElementById('submitButton').addEventListener('click', function () {
    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;
    const fileInput = document.getElementById('fileInput').files[0];
    const access_token = "2406-ZNNHG4UB32LBGA7T8ZJR3FSQ2DVVEVRHDBASQWYGVDGVGXJLK28NY5C7DKVJ6HK8-GYGM3F3SJFMZ3WMZPL9V52RY4UW7VGNVJUWFYTV5VGX6B83WPQVFFDH6KCV33G5P"; // Thay bằng token thực tế
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

    fetch('https://request.base.com.vn/webhook/create/-QY-vqY4vEFQUv6w_RvV9MU3_NvtBgHNEroGHn8ls_psTijyJalCyMaSpD5QtFHO82JbedX6SiH7y8QTagY4sV_0A467egZtavwpAQDYZzTyCK7n7WGldRH5OJteaNahWir6FqRB4r0BhHg35gQ3b6OvgCJapCPRu-6fRwlIzSs', {
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
