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

.controller('PlaylistsCtrl', function($scope ,$ionicPopup) {
  
      //popUp for myProgress 1
      $scope.showAlert1 = function() {
        var alertPopup = $ionicPopup.alert({
          title: 'Congratulations!!!',
          template: 'You did 1/12!',
        });      
      }; 
  
  
      //popUp for myProgress 2
      $scope.showAlert2 = function() {
        var alertPopup = $ionicPopup.alert({
          title: 'Congratulations!!!',
          template: 'You did 2/12!',
        });      
      }; 
  
      //popUp for myProgress 3
      $scope.showAlert3 = function() {
        var alertPopup = $ionicPopup.alert({
          title: 'Congratulations!!!',
          template: 'You did 3/12!',
        });      
      }; 
  
      //popUp for myProgress 4
      $scope.showAlert4 = function() {
        var alertPopup = $ionicPopup.alert({
          title: 'Congratulations!!!',
          template: 'You did 4/12!',
        });      
      }; 
  
      //popUp for myProgress 5
      $scope.showAlert5 = function() {
        var alertPopup = $ionicPopup.alert({
          title: 'Congratulations!!!',
          template: 'You did 5/12!',
        });      
      }; 
  
      //popUp for myProgress 6
      $scope.showAlert6 = function() {
        var alertPopup = $ionicPopup.alert({
          title: 'Congratulations!!!',
          template: 'You did 6/12!',
        });      
      }; 
  
  
      //popUp for myProgress 7
      $scope.showAlert7 = function() {
        var alertPopup = $ionicPopup.alert({
          title: 'Congratulations!!!',
          template: 'You did 7/12!',
        });      
      }; 
  
  
      //popUp for myProgress 8
      $scope.showAlert8 = function() {
        var alertPopup = $ionicPopup.alert({
          title: 'Congratulations!!!',
          template: 'You did 8/12!',
        });      
      }; 
  
      //popUp for myProgress 9
      $scope.showAlert9 = function() {
        var alertPopup = $ionicPopup.alert({
          title: 'Congratulations!!!',
          template: 'You did 9/12!',
        });       
      }; 
 
      //popUp for myProgress 10
      $scope.showAlert10 = function() {
        var alertPopup = $ionicPopup.alert({
          title: 'Congratulations!!!',
          template: 'You did 10/12!',
        });       
      }; 
  
      //popUp for myProgress 11
      $scope.showAlert11 = function() {
        var alertPopup = $ionicPopup.alert({
          title: 'Congratulations!!!',
          template: 'You did 11/12!',
        });     
      };
  
      //popUp for myProgress 12
      $scope.showAlert12 = function() {
        var alertPopup = $ionicPopup.alert({
          title: 'Congratulations!!!',
          template: 'You did 12/12!',
        });
      };

 
  
/*
  $scope.playlists = [
    { title: '1. We admitted that we were powerless over our addiction; that our lives had become unmanageable.', id: 1 },
    { title: '2. We came to believe that a Power greater than ourselves could restore us to sanity.', id: 2 },
    { title: '3. We made a decision to turn our will and our lives over to the care of God as we understood Him.', id: 3 },
    { title: '4. We made a searching and fearless moral inventory of ourselves.', id: 4 },
    { title: '5. We admitted to God, to ourselves, and to another human being the exact nature of our wrongs.', id: 5 },
    { title: '6. We were entirely ready to have God remove all these defects of character.', id: 6 },
    { title: '7. We humbly asked Him to remove our shortcomings.', id: 7 },
    { title: '8. We made a list of all persons we had harmed, and became willing to make amends to them all.', id: 8 },
    { title: '9. We made direct amends to such people wherever possible, except when to do so would injure them or others', id: 9 },
    { title: '10. We continued to take personal inventory and when we were wrong promptly admitted it.', id: 10 },
    { title: '11. We sought through prayer and meditation to improve our conscious contact with God as we understood Him, praying only for knowledge of His will for us and the power to carry that out.', id: 11 },
    { title: '12. Having had a spiritual awakening as the result of these steps, we tried to carry this message to addicts, and to practice these principles in all our affairs.', id: 12 }
  ];
  
  */
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
