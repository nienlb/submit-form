document.getElementById('submitButton').addEventListener('click', function () {
    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;
    const fileInput = document.getElementById('fileInput').files[0];

    const formData = new FormData();
    formData.append('access_token', "2406-ZNNHG4UB32LBGA7T8ZJR3FSQ2DVVEVRHDBASQWYGVDGVGXJLK28NY5C7DKVJ6HK8-GYGM3F3SJFMZ3WMZPL9V52RY4UW7VGNVJUWFYTV5VGX6B83WPQVFFDH6KCV33G5P");
    formData.append('name', input1);
    formData.append('username', "nienluong");
    formData.append('custom_tong_ngan_sach_de_xuat', input2);
    formData.append('custom_file_ky_duyet', fileInput);
    if (fileInput) {
        formData.append('fileInput', fileInput);
    }

    fetch('https://request.base.com.vn/extapi/v1/request/create', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(result => {
        alert('Response: ' + JSON.stringify(result));
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Có loi roi: ' + error.message);
    });
});
