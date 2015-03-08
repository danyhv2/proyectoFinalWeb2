(function() {
    var module = angular.module('module', ['ui.router']);

    module.controller('directorController', function($scope) {
        this.datos = archivos;
        var valorActualE = [];
        var valorActualP = [];
        $('.errormsj').hide();
        $('.errormsj2').hide();

        $scope.del = function(grupos){
            var z = $scope.este.datos.GruposDeCurso.indexOf(grupos);
            $scope.este.datos.GruposDeCurso.splice(z, 1);
        }

        $scope.horChan = function(){
          $scope.par3 = $scope.nuevH
        }

        $scope.editCrus = function(inf) {

           var valorActual = inf;
           $scope.estT = [];
           $scope.proT = [];

           for(var j=0; j< valorActual.Estudiantes.length;j++){
                $scope.estT.push(valorActual.Estudiantes[j].NombreEstudiante);
            }

            for(var k=0; k< valorActual.Profesores.length;k++){
                $scope.proT.push(valorActual.Profesores[k].NombreProfesor);
            }

            $scope.par1 = valorActual.NombreDelCurso;
            $scope.par2 = valorActual.NombreDelGrupo;
            $scope.par3 = valorActual.Horario;
            $scope.par4 = $scope.proT;
            $scope.par5 = $scope.estT;

        }

        $scope.estudAdd = function(){
            var tempEs = $scope.infoIngresada4;
            var eAdd = '';

            $('.EstudTempor').append('<tr><td class="nombreETemp">'+tempEs.Estudiante+'</td></tr>')

            eAdd = tempEs.Estudiante;

            valorActualE.push({
            "NombreEstudiante" : eAdd,
             })
        }

        $scope.profAdd = function(){
            var tempPr = $scope.infoIngresada5;
            var pAdd = '';
            $('.ProfeTempor').append('<tr><td class="nombrePTemp">'+tempPr.Profesor+'</td></tr>')
             
              pAdd = tempPr.Profesor;
        
                  valorActualP.push({
                  "NombreProfesor" : pAdd,
                 })

              }

        $scope.guarNuevGr = function(){
            var grupoTemp = {
                "NombreDelCurso": $scope.infoIngresada1,
                "NombreDelGrupo": $scope.infoIngresada2,
                "Horario": $scope.infoIngresada3,
                "Estudiantes": valorActualE,
                "Profesores": valorActualP,
            }

            archivos.GruposDeCurso.push(grupoTemp);
            document.getElementById("modalNuevoGru").reset();

            $(".ProfeTempor").empty();
            $(".EstudTempor").empty();
            $('#selHorario').prop('selectedIndex',0);
        }

        $scope.resetForm = function(){
            
            document.getElementById("modalNuevoGru").reset();
            $(".ProfeTempor").empty();
            $(".EstudTempor").empty();
            $('#selHorario').prop('selectedIndex',0);
        }


        $scope.edit = function(valores) {
            var t = $scope.este.datos.RubricasCreadas.indexOf(valores);

            var valorActual = valores;
            $scope.entrada1 = valorActual.NombreDeRubrica;
            $scope.entrada2 = valorActual.Asistencia;
            $scope.entrada3 = valorActual.Concepto;
            $scope.entrada4 = valorActual.Examen1;
            $scope.entrada5 = valorActual.Examen2;
            $scope.entrada6 = valorActual.Tareas;

            $scope.editCreat = function() {

                totalE = Number($scope.entrada2) + Number($scope.entrada3) + Number($scope.entrada4) + Number($scope.entrada5) + Number($scope.entrada6);

                if (totalE === 100) {
                var nuevaRubricaEditada = {
                    "NombreDeRubrica": $scope.entrada1,
                    "Asistencia": $scope.entrada2,
                    "Concepto": $scope.entrada3,
                    "Examen1": $scope.entrada4,
                    "Examen2": $scope.entrada5,
                    "Tareas": $scope.entrada6
                };
                archivos.RubricasCreadas.push(nuevaRubricaEditada);
                $scope.este.datos.RubricasCreadas.splice(t, 1);
                $('.errormsj2').hide();
            }else{
                $('.errormsj2').show();
            }
            }
        }

        $scope.delR = function(valores) {
            var f = $scope.este.datos.RubricasCreadas.indexOf(valores);
            $scope.este.datos.RubricasCreadas.splice(f, 1);
        }

        $scope.add = function() {

            total = Number($scope.int1) + Number($scope.int2) + Number($scope.int3) + Number($scope.int4) + Number($scope.int5);
            if (total === 100) {
                var nuevaRubricaCreada = {
                    "NombreDeRubrica": $scope.newNombreRubrica,
                    "Asistencia": $scope.int1,
                    "Concepto": $scope.int2,
                    "Examen1": $scope.int3,
                    "Examen2": $scope.int4,
                    "Tareas": $scope.int5
                }
                archivos.RubricasCreadas.push(nuevaRubricaCreada);
                document.getElementById("formAddR").reset();
                $('.errormsj').hide();
            }else{
                    $('.errormsj').show();
                }
        }
    });

    module.config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
       
        .state('grupo.grupoCursos', {
            url: '/cursos',
            templateUrl: 'pages/_grupoCursoDirector.html'
        })

        .state('grupo.nuevaRubrica', {
            url: '/rubrica',
            templateUrl: 'pages/_nuevaRubricaDirector.html',
            controller: 'directorController'
        })

        .state('grupo.cursosCarreras', {
            url: '/carreras',
            template: '<p>Pendiente</p>'
        })
    });
})();

var archivos = {
    "RubricasCreadas": [{
        "NombreDeRubrica": "Rubrica 1",
        "Asistencia": "10",
        "Concepto": "10",
        "Examen1": "15",
        "Examen2": "25",
        "Tareas": "10"
    }, {
        "NombreDeRubrica": "Rubrica 2",
        "Asistencia": "10",
        "Concepto": "10",
        "Examen1": "15",
        "Examen2": "25",
        "Tareas": "10"
    }, {
        "NombreDeRubrica": "Rubrica 3",
        "Asistencia": "10",
        "Concepto": "10",
        "Examen1": "15",
        "Examen2": "25",
        "Tareas": "10"
    }],

    "ParamatrosRubrica": [{
        "parametro1": "Asistencia"
    }, {
        "parametro2": "Concepto"
    }, {
        "parametro3": "Examen1"
    }, {
        "parametro4": "Examen2"
    }, {
        "parametro5": "Tareas"
    }],

    "GruposDeCurso": [{
        "NombreDelCurso": "Proyecto Web 1",
        "NombreDelGrupo": "Grupo 1",
        "Horario": "Noche",
        "Estudiantes": [{
            "NombreEstudiante" : "Frodo",
        },{
            "NombreEstudiante" : "Harry",
        }],

        "Profesores": [{
            "NombreProfesor" : "Israel",
        },{
            "NombreProfesor" : "Carlos",
        }],
    },{
        "NombreDelCurso": "Proyecto Web 3",
        "NombreDelGrupo": "Grupo 3",
        "Horario": "Noche",
        "Estudiantes": [{
            "NombreEstudiante" : "Frodo",
    
        },{
            "NombreEstudiante" : "Harry",
     
        }],

        "Profesores": [{
            "NombreProfesor" : "Israel",
 
        },{
            "NombreProfesor" : "Carlos",
  
        }],
    }],

    "EstudiantesNormales": [{
        "Estudiante": "Mario Cascante",
        },{
        "Estudiante": "Mariana Cascante",
        },{
        "Estudiante": "Helen Post ",
        },{
        "Estudiante": "Josiah Brandt"
    }],

    "ProfesoresNormales": [{
        "Profesor": "Jennifer Moralez",
        },{
        "Profesor": "Henrietta Mundo",
        },{
        "Profesor": "Alfonso Collins ",
        },{
        "Profesor": "Robert Smith"
    }]
}