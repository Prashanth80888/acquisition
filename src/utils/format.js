export const formatValidationError=(errors)=>{
    if(!errors || errors.issues) return 'Validation error';

    if(Array.isArray(errors)){
        return errors.map(err=>err.message).join(', ');
    }
    return 'Validation error';
}