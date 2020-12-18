import * as yup from 'yup'

export default yup.object().shape({
   
    name:yup
        .string()
        .required('Please Enter your Name')
        .min(2, 'Name must be at least 2 characters long'),
    
    mushroom: yup.boolean(),
    ham: yup.boolean(),
    jalapeno: yup.boolean(),
    olive: yup.boolean(),
    extraCheese: yup.boolean(),

    size: yup
        .string()
        .oneOf(['1','2','3'])
        .required('Please choose a size'),

    delivryInstruction: yup
        .string()
        .required('please put your adresse and phone Number')
        .min(9, 'Put your phone Number')
})  