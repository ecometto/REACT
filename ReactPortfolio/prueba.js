const data = {
    id: 1,
    nombre: 'Juan',
    email:'juan@gmail'
}

const data1 = {...data, email:'juancito111@gmail'}

console.log(data1);

const arr = [
    {
        id: 1,
        nombre: 'Juan',
        email:'juan@gmail',
        direccion:{
            calle:'alguna street',
            city:'some city',
            code:{
                cod1:'us',
                cod2:'uk'
            }
        }
    },
    {
        id: 2,
        nombre: 'Juan2',
        email:'juan2@gmail',
        direccion:{
            calle:'alguna street',
            city:'some city',
            code:{
                cod1:'us',
                cod2:'uk'
            }
        }
    },
    {
        id: 3,
        nombre: 'Juan3',
        email:'juan3@gmail',
        direccion:{
            calle:'alguna street',
            city:'some city',
            code:{
                cod1:'us',
                cod2:'uk'
            }
        }
    }
]

// copiando un array hasta 3 niveles de profundidad y agregando datos 
const arr2 = [...arr,     {
    id: 4,
    nombre: 'Juan4',
    email:'juan4@gmail'
}]
console.log('-------------------------------------' )
console.log(arr2)


// copiando array de objetos completo con más de 3 niveles de profundidad  
const arr3 = JSON.parse(JSON.stringify(arr))
arr3.push({
    id: 4,
    nombre: 'Juan4',
    email:'juan4@gmail'
})
console.log('-------------------------------------' )
console.log(arr3)


