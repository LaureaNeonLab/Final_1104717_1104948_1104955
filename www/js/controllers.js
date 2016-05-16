angular.module('starter.controllers', [])

/*************.controller('AppCtrl', function($scope, $ionicModal, $timeout) {    */
  .controller('AppCtrl', function($scope,$ionicModal, LoginService, $ionicPopup, $state) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
     
$scope.data = {};


  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);
    
/********** LOGIN CONTROLL ********/
    LoginService.loginUser($scope.loginData.username, $scope.loginData.password).success(function(data) {
        //WHEN THE LOGIN IS CORRECT WE HAVE ACCESS to app.list
            $state.go('app.list');

            // Triggered in the login modal to close it
              $scope.modal.hide(); //this hides the login window
              
              var alertPopup = $ionicPopup.alert({
                title: 'You are logged  in!',
                template: 'Welcome '+ $scope.loginData.username +' '
            });
            
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
  };
/**** */  
})

/**************************** */


.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
    $scope.data = {};
    
      // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function() {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function() {
    // $state.go('login')
      $scope.modal.show();
    };
    
 
    $scope.login = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            $state.go('tab.dash');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
    }
})


/*************************** */

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: '1. We admitted that we were powerless over our addiction; that our lives had become unmanageable.', id: 1 },
    { title: '2. We came to believe that a Power greater than ourselves could restore us to sanity.', id: 2 },
    { title: '3. We made a decision to turn our will and our lives over to the care of God as we understood Him.', id: 3 },
    { title: '4. We made a searching and fearless moral inventory of ourselves.', id: 4 },
    { title: '5. We admitted to God, to ourselves, and to another human being the exact nature of our wrongs.', id: 5 },
    { title: '6. We were entirely ready to have God remove all these defects of character', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('ListCtrl', function ($scope,$ionicPlatform, $state, NotesDataService) {
  $scope.$on('$ionicView.enter', function(e) {
      NotesDataService.getAll(function(data){
        $scope.itemsList = data
      })
  })

  $scope.gotoEdit = function(idNote){
    $state.go('form', {id: idNote})
  }
})

.controller('FormCtrl', function ($scope, $stateParams, $ionicPopup, $state, NotesDataService) {
  $scope.$on('$ionicView.enter', function(e) {
    initForm()
  })

  function initForm(){
    if($stateParams.id){
      NotesDataService.getById($stateParams.id, function(item){
        $scope.noteForm = item
      })
    } else {
      $scope.noteForm = {}
    }
  }
  function onSaveSuccess(){
    $state.go('app.list')
  }
  $scope.saveNote = function(){

    if(!$scope.noteForm.id){
      NotesDataService.createNote($scope.noteForm).then(onSaveSuccess)
    } else {
      NotesDataService.updateNote($scope.noteForm).then(onSaveSuccess)
    }
  }

  $scope.confirmDelete = function(idNote) {
    var confirmPopup = $ionicPopup.confirm({
      title: 'Delete the post',
      template: 'Are you sure ?'
    })

    confirmPopup.then(function(res) {
      if(res) {
        NotesDataService.deleteNote(idNote).then(onSaveSuccess)
      }
    })
  }


});

 // Phone 
   $scope.CallTel = function(tel) {
            window.location.href = 'tel:'+ tel;
        };
  