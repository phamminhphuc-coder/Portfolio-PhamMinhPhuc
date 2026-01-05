// Thêm event listener cho form
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn form reload trang
    
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
    
    // Gửi email
    emailjs.send("service_nbg7iqm", "template_z3gcp1i", params)
        .then(function(response) {
            alert("Email đã được gửi thành công!");
            console.log('SUCCESS!', response.status, response.text);
            // Reset form sau khi gửi
            document.getElementById('contact-form').reset();
        })
        .catch(function(error) {
            alert("Có lỗi xảy ra khi gửi email!");
            console.log('FAILED...', error);
        });
});