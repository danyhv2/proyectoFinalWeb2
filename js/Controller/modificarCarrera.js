// Code goes here
angular.module('modifyCarrera', [])
  .controller('updateCarreraCtrl', function($scope, $http) {
   var self=this;

    function renderElement(elementIds) {
      angular.forEach(elementIds, function(id) {
        angular.element(id).controller('ngModel').$render();
      });
    }

    this.datos = jQuery.parseJSON(localStorage.getItem('carreras'));
    //obtener query carreras
      

    /*self.updateModel = function updateModel() {
      for(var i = 0; i < this.datos.length; i++){
        if($('.searchCarrera').val() != this.datos[i].Carrera){
            $('.errorSearch').css('display','block');
        }
        else{
          $('.errorSearch').css('display','none');
          // update the form values
          self.formEditCarrera.nombre.$setViewValue(this.datos[i].Carrera);
          self.formEditCarrera.codCarrera.$setViewValue(this.datos[i].Codigo);
          self.formEditCarrera.dirCarrera.$setViewValue(this.datos[i].Director);
        
          renderElement(['#inpNombreCarrera', '#inpCodCarrera', '#inpDirCarrera']);
    }
    }
    };*/

    self.buscarCarrera = function(){
      $http.post('php/buscarCarrera.php', { "data" : $scope.getCarrera }).
      success(function(data) {
        $scope.data = data;
        console.log(data.length);
          
        if(data.length==0){
          $('.errorSearch').css('display','block');
        }else{
          $('.errorSearch').css('display','none');
          self.formEditCarrera.nombre.$setViewValue(data[0].nombre);
          self.formEditCarrera.codCarrera.$setViewValue(data[0].codCarrera);
          self.formEditCarrera.director.$setViewValue(data[0].dirCarrera);
          renderElement(['#inpNombreCarrera', '#inpCodCarrera', '#inpDirCarrera']);
        }
        
      })

    };

    $scope.guardarCarrera = function(){
        $scope.datosCarrera = jQuery.parseJSON(localStorage.getItem('carreras'));
          if($scope.updCarrera.formEditCarrera.$valid){
        
            $scope.changedCarrera = [{
                          'Carrera': $('#inpNombreCarrera').val(),
                          'Codigo': $('#inpCodCarrera').val(),
                          'Director': $('#inpDirCarrera').val()
                            }];
                         
            localStorage.setItem('carreras',JSON.stringify($scope.changedCarrera));
            $('#modalEditarCarrera').modal('hide');
            $('.modal-backdrop').modal('hide');
            //$('#modalExito').fadeIn(1000);
            //$('#modalExito').fadeOut(3000);
        } 
        if($scope.updCarrera.formEditCarrera.$valid && $('#chkCurso').hasClass('md-checked')){
          $('#modalEditarCarrera').modal('hide');
          $('#modalExito').modal('hide');
          $('#modalConfirm').modal('show');
        }
      }
      //cancelar modal confirm, me devuelve al modal principal
      $('.cancelConfirm').click(function() {
         $('#modalEditarCarrera').modal('show');
         $('#modalConfirm').modal('hide');
      });

      $('.btnConfirmModal').click(function() {
         $('#modalConfirm').modal('hide');
         $('#modalExito').fadeIn(1000);
         $('#modalExito').fadeOut(1000);
         $('#modalExito').css('display','none');
      });

  });