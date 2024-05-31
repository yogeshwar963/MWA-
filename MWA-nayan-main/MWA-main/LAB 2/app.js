// scripts/app.js
var app = angular.module("techConferenceApp", []);

app.controller("MainController", [
  "$scope",
  "$http",
  function ($scope, $http) {
    $scope.schedule = [];
    $scope.speakers = [];
    $scope.registration = {};

    // Simulating data fetch for schedule and speakers
    $scope.schedule = [
      {
        title: "Opening Keynote",
        time: "9:00 AM - 10:00 AM",
        speaker: "John Doe",
      },
      {
        title: "Future of AI",
        time: "10:30 AM - 11:30 AM",
        speaker: "Jane Smith",
      },
    ];

    $scope.speakers = [
      {
        name: "John Doe",
        bio: "John is a leading expert in AI and machine learning.",
      },
      {
        name: "Jane Smith",
        bio: "Jane is a renowned futurist and tech visionary.",
      },
    ];

    $scope.register = function () {
      // Here you would typically send the registration data to a server
      console.log("Registration data:", $scope.registration);
      alert("Thank you for registering!");
      $scope.registration = {}; // Reset form
    };
  },
]);
