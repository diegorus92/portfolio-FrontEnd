import { ISkill, skillType } from "src/app/interfaces/skill-item";

export const HardSkills:ISkill[] = [
    {
        id: 1,
        name: "Programación Frontend",
        value: 10,
        type: skillType.HARD
    },
    {
        id: 2,
        name: "Programación Backend",
        value: 20,
        type: skillType.HARD 
    },
    {
        id: 3,
        name: "Ciberseguridad",
        value: 30,
        type: skillType.HARD
    },
    {
        id: 4,
        name: "Inteligencia Artificial",
        value: 35,
        type: skillType.HARD 
    },
    {
        id: 5,
        name: "Cloud Computing",
        value: 40,
        type: skillType.HARD
    },
    {
        id: 6,
        name: "Análisis e interpretación de datos",
        value: 50,
        type: skillType.HARD
    }
]

export const SoftSkills:ISkill[] = [
    {
        id: 1,
        name: "Comunicación",
        value: 50,
        type: skillType.SOFT 
    },
    {
        id: 2,
        name: "Administración del tiempo",
        value: 40, 
        type:  skillType.SOFT
    },
    {
        id: 3,
        name: "Pensamiento crítico",
        value: 35,
        type: skillType.SOFT 
    },
    {
        id: 4,
        name: "Liderazgo",
        value: 30,
        type: skillType.SOFT
    },
    {
        id: 5,
        name: "Negociación",
        value: 15,
        type: skillType.SOFT
    },
    {
        id: 6,
        name: "Trabajo en equipo",
        value: 10,
        type: skillType.SOFT
    }
]