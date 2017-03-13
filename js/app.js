angular.module('BeMEAN', [])
     .controller('UserController', UserController);



   function UserController() {
     var vm = this;
     vm.users = [
       {name: 'teste', email: 'teste@teste.com'}
     ];
   }
