angular.module('package').controller('AppCtrl', function ($scope, upload) {
  $scope.doUpload = function () {
    upload({
      url: '/upload',
      data: {
        anint: 123,
        aBlob: Blob([1,2,3]), // Only works in newer browsers
        aFile: $scope.myFile, // a jqLite type="file" element, upload() will extract all the files from the input and put them into the FormData object before sending.
      }
    }).then(
      function (response) {
        console.log(response.data); // will output whatever you choose to return from the server on a successful upload
      },
      function (response) {
          console.error(response); //  Will return if status code is above 200 and lower than 300, same as $http
      }
    );
  }
});