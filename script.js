// Code goes here
angular.module('simpleTest', ['ngMaterial', 'ngMessages', 'ui.bootstrap.demo'])
  .controller('MyCtrl', function() {
   var self=this;

    /*
     * Loop through a list of element ids, calling the $render() function for the ngModel controller associated with
     * each element.
     */
    /*function renderElement(elementIds) {
      angular.forEach(elementIds, function(input) {
        angular.element(input).controller('ngModel').$render();
        console.log(angular.element(input));
      });
    }*/

    this.datos = jQuery.parseJSON(localStorage.getItem('users'));
    //onsole.log(self.datos);

    self.updateModel = function updateModel() {
      for(var i = 0; i < this.datos.length; i++){
        //console.log(this.datos.length);
        if($('#searchCurso').val()== this.datos[i].Correo){

      // update the form values
      self.simpleForm.city.$setViewValue(this.datos[i].Nombre);
      self.simpleForm.state.$setViewValue('Georgia');
      self.simpleForm.zip.$setViewValue('37013');
      // now call $render() to update the model associated to each input
      //renderElement(['#city']);
            angular.element('#city').controller('ngModel').$render();
            fsdds

    }
    }
    };

  });