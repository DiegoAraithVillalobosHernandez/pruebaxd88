app.controller('reporte', ['$scope', '$http', '$window', function ($scope, $http, $window){
    $scope.options = [
        {
        id: 1,
        label: 'General',
       },
       {
        id: 2,
        label: 'Por Divisiones Académicas y Carreras',
       }
    ]
    $scope.graphics = {}
    $scope.graphics.type = ""
    $scope.survey = [
        {
            id:1,
            section_name: 'DEPARTAMENTO DE ESTADÍAS',
            questions: [
                {
                    id: 1,
                    label: '¿La información que te proporcionó el departamento durante el curso de inducción a la estadía, te pareció?',
                    type: 'Escala',
                    results: [
                        {
                            id: 1,
                            label: '1',
                            students: 20,
                        },
                        {
                            id: 2,
                            label: '2',
                            students: 40,
                        },
                        {
                            id: 3,
                            label: '3',
                            students: 60,
                        },
                        {
                            id: 4,
                            label: '4',
                            students: 80,
                        },
                        {
                            id: 5,
                            label: '5',
                            students: 220,
                        }
                    ]
                },
                {
                    id: 2,
                    label: '¿La información que se te proporcionó en las guías de estadía, te pareció?',
                    type: 'Escala',
                    results: [
                        {
                            id: 1,
                            label: '1',
                            students: 5,
                        },
                        {
                            id: 2,
                            label: '2',
                            students: 21,
                        },
                        {
                            id: 3,
                            label: '3',
                            students: 100,
                        },
                        {
                            id: 4,
                            label: '4',
                            students: 304,
                        },
                        {
                            id: 5,
                            label: '5',
                            students: 569,
                        }
                    ],
                }
            ] 
        },
        {
            id:1,
            section_name: 'DEPARTAMENTO DE ESTADÍAS22',
            questions: [
                {
                    id: 1,
                    label: '¿222La información que te proporcionó el departamento durante el curso de inducción a la estadía, te pareció?',
                    type: 'Escala',
                    results: [
                        {
                            id: 1,
                            label: '1',
                            students: 20,
                        },
                        {
                            id: 2,
                            label: '2',
                            students: 40,
                        },
                        {
                            id: 3,
                            label: '3',
                            students: 60,
                        },
                        {
                            id: 4,
                            label: '4',
                            students: 80,
                        },
                        {
                            id: 5,
                            label: '5',
                            students: 220,
                        }
                    ]
                },
                {
                    id: 2,
                    label: '¿222La información que se te proporcionó en las guías de estadía, te pareció?',
                    type: 'Escala',
                    results: [
                        {
                            id: 1,
                            label: '1',
                            students: 5,
                        },
                        {
                            id: 2,
                            label: '2',
                            students: 21,
                        },
                        {
                            id: 3,
                            label: '3',
                            students: 100,
                        },
                        {
                            id: 4,
                            label: '4',
                            students: 304,
                        },
                        {
                            id: 5,
                            label: '5',
                            students: 569,
                        }
                    ],
                }
            ] 
        }
    ]

$scope.reporteGeneral = () =>{
    let graficxs = ``
    let labels = []
    let data = {}
    let subdata = []
    let config = []
    console.log("aaaaaaaaaaaaeeeaaaaaaaaaa")
    //se hace peticion
    survey.forEach(element => {
        // graficxs = `
        // <div class="col-12">
        // <p>${element.label}</p>
        // <div class="row">
        // `
        console.log("aaaaaaaaaaaaaaaaaaaaaa")

        element.questions.forEach(element2 =>{
            labels = element2.results.map(({label}) => ({label}))
            console.log(labels)
        })

        // graficxs = `
        // </div>
        // </div>`

    });
}

    $scope.generateReport = () =>{

        $scope.survey.forEach(
            section => {
                section.questions.forEach(
                    question =>{
                        let id = section.id + "" + question.id
                        var ctx = document.getElementById(id).getContext("2d");
                        const myChart = new Chart(ctx, {
                                type: 'bar',
                                data: {
                                    labels: ['1', '2', '3', '4', '5'],
                                    datasets: [{
                                        data: [20,30,40,50,40],
                                        backgroundColor: [
                                            'rgba(255, 99, 132, 0.2)',
                                        ],
                                        borderColor: [
                                            'rgba(255, 99, 132, 1)',
                                        ],
                                        borderWidth: 1
                                    }]
                                },
                                options: {
                                    scales: {
                                        y: {
                                            beginAtZero: true
                                        }
                                    }
                                }
                            });
                        myChart.destroy();
                    }
                )
    
            }
        );
    }
    
    
}])
