app.controller('registro', ['$scope', '$http', '$window','SweetAlert', function ($scope, $http, $window, SweetAlert){
    $scope.optionsUser = [
        {
        id: 1,
        label: 'Estudiante',
       },
       {
        id: 2,
        label: 'Jefatura de estadías',
       }
    ]
    $scope.divisiones = [
        {
        id: 1,
        label: 'División Académica Económica-Administrativa  ',
        carreras: [
            {
                id: 1,
                label: 'Administración área: Capital Humano',
                grupos: [{
                    id: 1,
                    label: 'A',
                    grados: ['1','2','3','4','5','6']
                },
                {
                    id: 2,
                    label: 'B',
                    grados: ['1','2','3','4','5','6']
                },
                {
                    id: 3,
                    label: 'C',
                    grados: ['1','2','3','4','5','6']
                }]
            },
            {
                id: 2,
                label: 'Desarrollo de negocios área: Mercadotecnia',
                grupos: [{
                    id: 1,
                    label: 'A',
                    grados: ['1','2','3','4','5','6']
                },
                {
                    id: 2,
                    label: 'B',
                    grados: ['1','2','3','4','5','6']
                }]
            }
        ]
       },
       {
        id: 2,
        label: 'División Académica de Tecnologías de la Información y Comunicación ',
        carreras: [
            {
                id: 1,
                label: 'Tecnologías de la Información área: Infraestructura de Redes Digitales',
                grupos: [{
                    id: 1,
                    label: 'A',
                    grados: ['1','2','3','4','5','6']
                }]
            },
            {
                id: 2,
                label: 'Tecnologías de la Información área: Desarrollo de Software Multiplataforma',
                grupos: [{
                    id: 1,
                    label: 'B',
                    grados: ['1','2','3','4','5','6']
                },
                {
                    id: 2,
                    label: 'C',
                    grados: ['1','2','3','4','5','6']
                },
                {
                    id: 3,
                    label: 'D',
                    grados: ['1','2','3','4','5','6']
                }]
            },
            {
                id: 3,
                label: 'Diseño Digital',
                grupos: [{
                    id: 1,
                    label: 'A',
                    grados: ['1','2','3','4','5','6']
                },
                {
                    id: 2,
                    label: 'B',
                    grados: ['1','2','3','4','5','6']
                },
                {
                    id: 3,
                    label: 'C',
                    grados: ['1','2','3','4','5','6']
                }]
            }
        ]
       }
    ]
    $scope.generaciones = [
        {
            id: 1,
            label: 'No. 38 SEPTIEMBRE-2020 / AGOSTO-2022',
        },
        {
            id: 2,
            label: 'No. 39 SEPTIEMBRE-2021 / AGOSTO-2023',
        },
        {
            id: 3,
            label: 'No. 40 SEPTIEMBRE-2022 / AGOSTO-2024',
        },
        {
            id: 4,
            label: 'No. 41 SEPTIEMBRE-2023 / AGOSTO-2025',
        },
    ]

    $scope.carrerasDis = []
    $scope.gruposDis = []
    $scope.gradosDis = []
    $scope.usuario = {}
    $scope.genSeleccionado = true
    $scope.valContrasexas = true

    $scope.buscarCarrerasDis = () =>{
        if($scope.usuario.division != undefined){
            for (let index = 0; index < $scope.divisiones.length; index++) {
                if($scope.divisiones[index].id == $scope.usuario.division.id){
                    $scope.carrerasDis = $scope.usuario.division.carreras
                    break
                }
            }
            delete $scope.usuario.division.carreras
        }else{
            $scope.carrerasDis = []
        }
    }

    $scope.buscarGruposDis = () =>{
        if($scope.usuario.division.carrera != undefined){
            $scope.gruposDis = $scope.usuario.division.carrera.grupos;
            delete $scope.usuario.division.carrera.grupos
        }else{
            $scope.gruposDis = []
        }
    }

    $scope.buscarGradosDis = () =>{
        if($scope.usuario.division.carrera.grupo != undefined){
            $scope.gradosDis = $scope.usuario.division.carrera.grupo.grados;
            delete $scope.usuario.division.carrera.grupo.grados
        }else{
            $scope.gradosDis = []
        }
    }

    $scope.validarGenero = () => {
        let radios = document.getElementsByName("genero");
        let genValido = false;

        let i = 0;
        while (!genValido && i < radios.length) {
            if (radios[i].checked) genValido = true;
            i++;        
        }
    
        if (!genValido){
            $scope.genSeleccionado = false
            document.getElementById("generoSeleccionado").scrollIntoView({behavior: 'smooth'});
        }else{
            $scope.genSeleccionado = true
        };
        return genValido;
    }

    $scope.confirmarEmailReg = () =>{
        if($scope.validarGenero()){
            SweetAlert.swal({
                showCancelButton: true,
                closeOnConfirm: true,
                confirmButtonText: "Aceptar",
                confirmButtonColor: "#de6b54",
                cancelButtonText: "Cancelar",
                cancelButtonColor: "#c2c2c2",
                type: "info",
                title: "¿Estás segura(o) de registrar los datos?",
                text: "Los datos ingresados se vincularán al correo institucional ingresado",
            }, function (isConfirm){
                if(isConfirm){
                    //validar correo no registrado
                    //generar codigo
                    //enviar correo con codigo
                    //registrar codigo en la bd
                    $('#mdlCodeReg').modal('toggle')
                }
            })
            
            // function (isConfirm) {
            //     if (isConfirm) {
            //         $http({
            //             method: 'POST',
            //             url: '/SISAASE_war/recuperarContrasexa',
            //             data: 'parametros=' + angular.toJson($scope.email)
            //         }).success(function (data) {
            //             if (data.respuesta === "correo_enviado") {
            //                 SweetAlert.swal({
            //                     timer: 3000,
            //                     title: "Correo de recuperación enviado",
            //                     text: "En breve recibirás un correo con un código para restablecer tu contraseña.",
            //                     type: "info"
            //                 });
            //             } else if (data.respuesta === "correo_no_valido") {
            //                 SweetAlert.swal({timer: 6000, type: "error", title: "Correo ya registrado.", text: " Ya existe un usuario con este correo electrónico"});
            //             } else if (data.respuesta === "correo_no_enviado") {
            //                 SweetAlert.swal({timer: 3000, type: "error", title: "Error interno", text: "Algo salio mal al intentar registrar el usuario, intentalo de nuevo."});
            //             }
            //         }).error($rootScope.errorhttp);
            //     }
            // }
            
        }
    }

    $scope.confirmarCodigoReg = () =>{
        //validar codigo correcto antes de cerrar modal
        $('#mdlCodeReg').modal('hide')
        $scope.usuario.codigoAcceso = ""
        
        SweetAlert.swal({
            showCancelButton: true,
            closeOnConfirm: false,
            confirmButtonText: "Aceptar",
            confirmButtonColor: "#de6b54",
            cancelButtonText: "Cancelar",
            cancelButtonColor: "#c2c2c2",
            type: "info",
            title: "¿Estás seguro(a) de registrar el usuario?",
            text: "No olvides tu contraseña, tu usuario será la mátricula o nombre de tu correo institucional antes del @",
        }, function (isConfirm){
            if(isConfirm){
                $('#mdlCodeReg').modal('hide')
                $scope.usuario.codigoAcceso = ""
                //validar diferentes resultados
                SweetAlert.swal({
                    showCancelButton: true,
                    closeOnConfirm: true,
                    type: "success",
                    title: "El Usuario se ha registrado correctamente, Tu usuario de ingreso es: {nombreUsuario}",
                })
            }
        })
    }

    $scope.cancelarRegistro = () =>{
        $('#mdlCodeReg').modal('hide')
        $('#mdlCodeReg', function () {
            $(this).find("input,select").val('').end();
        })
    }

    //-------------------------------------


    $scope.confirmarEmailRec = () =>{
        SweetAlert.swal({
            showCancelButton: true,
            closeOnConfirm: true,
            confirmButtonText: "Aceptar",
            confirmButtonColor: "#de6b54",
            cancelButtonText: "Cancelar",
            cancelButtonColor: "#c2c2c2",
            type: "info",
            title: "¿Estás segura(o) de registrar los datos?",
            text: "Los datos ingresados se vincularán al correo institucional ingresado",
        }, function (isConfirm){
            if(isConfirm){
                //validar correo registrado
                //generar codigo
                //enviar correo con codigo
                //registrar codigo en la bd
                $('#mdlCodeRec').modal('toggle')
            }
        })
    }

    $scope.confirmarCodigoRec = () =>{
        //validar codigo correcto antes de cerrar modal
        $('#mdlCodeRec').modal('hide')
        $scope.usuario.codigoAcceso = ""
        $('#mdlRec').modal('toggle')
       
    }


    $scope.confirmarContrasexas = () =>{
        //Validar contrasexas iguales
        if($scope.validarContrasexas()){
            SweetAlert.swal({
                showCancelButton: true,
                closeOnConfirm: false,
                confirmButtonText: "Aceptar",
                confirmButtonColor: "#de6b54",
                cancelButtonText: "Cancelar",
                cancelButtonColor: "#c2c2c2",
                type: "info",
                title: "¿Estás segura(o) de cambiar la contraseña?",
                text: "Tu nuevo acceso será con la nueva contraseña, no la olvides",
            }, function (isConfirm){
                if(isConfirm){
                    //registrar la nueva contrasexa
                   //validar diferentes resultados
                   $('#mdlRec').modal('hide')
                    $scope.contrasexa = ""
                    $scope.confContrasexa = ""
    
                   SweetAlert.swal({
                    showConfirmButton: false,
                    showCancelButton: false,
                    type: "success",
                    title: "La contraseña se ha actualizado correctamente",
                    timer: 3000
                })
                }
            })
        }
    }

    $scope.cancelarRecuperacion = () =>{
        $('#mdlCodeRec').modal('hide')
        $scope.usuario.codigoAcceso = ""
    }

    $scope.cancelarRecuperacion2 = () =>{
        $('#mdlRec').modal('hide')
        $scope.contrasexa = ""
        $scope.confContrasexa = ""
    }

    $scope.validarContrasexas = () =>{
        $scope.valContrasexas = $scope.contrasexa === $scope.confContrasexa
        return  $scope.valContrasexas

    }

}])