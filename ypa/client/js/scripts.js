    // دالة التحكم في إظهار وإخفاء الفورم
    function toggleForm() {
        var formContainer = document.getElementById("formContainer");

        // التبديل بين حالة الإظهار والإخفاء
        if (formContainer.style.display === "none" || formContainer.style.display === "") {
            formContainer.style.display = "block";  // إظهار الفورم
        } else {
            formContainer.style.display = "none";  // إخفاء الفورم
        }
    }