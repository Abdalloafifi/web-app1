app.controller('FormController', function ($scope, $http, $location) {
    $scope.formData = {}; // تخزين البيانات اللي هتدخلها

    $scope.submitForm = function () {
        // استخدام HTTP POST لإرسال البيانات إلى الـ API
        $http.post('http://localhost:2000/users', $scope.formData)
            .then(function (response) {
                console.log("Data submitted successfully", response.data);
                // تحويل الصفحة بعد نجاح الإرسال
                $location.path('/data');
            })
            .catch(function (error) {
                console.error("Error in submitting data", error);
            });
    };
});

app.controller('DataController', function ($scope, $http) {
    // جلب البيانات باستخدام HTTP GET
    $http.get('http://localhost:2000/users')
        .then(function (response) {
            $scope.users = response.data; // تخزين البيانات المعروضة
        })
        .catch(function (error) {
            console.error("Error in fetching data", error);
        });
});


/**const app = angular.module('myApp', []);

app.controller('MyController', function ($scope, $http) {
    // التحكم في إظهار وإخفاء النموذج


    $scope.addUser = function() {
        // تعريف بيانات المستخدم بناءً على المدخلات
        $scope.userData = {
            name: $scope.userName,
            email: $scope.userEmail
        };

        // إرسال البيانات إلى الخادم باستخدام $http
        $http.post('http://localhost:2000/users', $scope.userData)
            .then(function(response) {
                console.log('User added:', response.data);

                // إعادة تعيين الحقول بعد نجاح الإضافة
                $scope.userName = '';
                $scope.userEmail = '';

                // إغلاق النموذج بعد الإرسال
                $scope.isVisible = false;

                // توجيه المستخدم إلى الصفحة 2 بعد نجاح الإضافة
                window.location.href = '#!/page2'; // تأكد من أن المسار صحيح
            })
            .catch(function(error) {
                console.error('Error adding user:', error);
            });
    };
});


app.controller('detailController', function($scope, $http) {
    // تخزين المستخدمين في المتغير
    $scope.users = [];

    // جلب جميع المستخدمين عند تحميل الصفحة
    $http.get('http://localhost:2000/users') // طلب البيانات من السيرفر
        .then(function(response) {
            $scope.users = response.data; // تخزين البيانات في المتغير
        })
        .catch(function(error) {
            console.error("Error fetching users:", error);
        });
}); */