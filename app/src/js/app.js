angular.module('media_manager', ['ui.bootstrap', 'ngRoute', 'ngDroplet', 'xeditable', 'ngResource'])
.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/', {
    redirectTo: "/collections"
  })
  .when('/workspace', {
    templateUrl: "build/templates/workspace.html",
    controller: 'WorkspaceController',
    controllerAs: 'wc'
  })
  .when('/workspace/:collectionId', {
    templateUrl: "build/templates/workspace.html",
    controller: 'WorkspaceController',
    controllerAs: 'wc'
  })
  .when('/collections', {
    templateUrl: "build/templates/collections.html",
    controller: 'ListController',
    controllerAs: 'lc'
  });
}]);
