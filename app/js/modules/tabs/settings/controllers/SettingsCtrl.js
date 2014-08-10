(function() {
  var SettingsCtrl = function($scope, $ionicModal, Auth, User) {
    var vm = this;

    $ionicModal
      .fromTemplateUrl("js/modules/tabs/settings/views/loginModal.html", {
        scope: $scope,
        animation: "slide-in-up"
      })
      .then(function(modal) {
          vm.loginModal = modal;
      });

    $ionicModal
      .fromTemplateUrl("js/modules/tabs/settings/views/signupModal.html", {
        scope: $scope,
        animation: "slide-in-up"
      })
      .then(function(modal) {
          vm.signupModal = modal;
      });

    vm.openModal  = openModal;
    vm.closeModal = closeModal;
    vm.signup     = signup;
    vm.login      = login;

    //////////////////////

    function openModal() {
      vm.loginModal.show();
    };
    function closeModal(){
      vm.loginModal.hide();
    };
    function signup() {
      User.signup(vm.username, vm.password);
    };
    function login() {
      User.login(vm.username, vm.password);
    };

  };
  SettingsCtrl
    .$inject = ['$scope', '$ionicModal', 'Auth', 'User'];
  angular
    .module('app.modules.tabs.settings.controllers', [])
    .controller('SettingsCtrl', SettingsCtrl);
})();
