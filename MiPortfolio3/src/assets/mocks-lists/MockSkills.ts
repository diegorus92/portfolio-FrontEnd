import { ISkill } from "src/app/interfaces/skill";

export const HardSkills:ISkill = {
    id: 1,
    datasets: [
        { 
            data:[100, 50, 100, 30, 45, 20],
            backgroundColor:[
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(222, 150, 132)',
                'rgb(25, 100, 35)',
                'rgb(255, 50, 110)'
            ]
        }
    ],
    labels:[
        'Programacion Frontend',
        'Programacion Backend',
        'Ciberseguridad',
        'Inteligencia Artificial',
        'Cloud Computing',
        'Análisis e interpretación de datos'
    ]
        
};

export const SoftSkills:ISkill = {
    id: 2,
    datasets: [
        { 
            data:[100, 50, 85, 60, 45, 90],
            backgroundColor:[
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(222, 150, 132)',
                'rgb(25, 100, 35)',
                'rgb(255, 50, 110)'
            ]
        }
    ],
    labels:[
        'Comunicación',
        'Administración del tiempo',
        'Pensamiento crítico',
        'Liderazgo',
        'Negociación',
        'Trabajo en equipo'
    ]
        
}