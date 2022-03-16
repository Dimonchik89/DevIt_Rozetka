export const required = (value) => {
    if(value) return undefined;
    return "Обязательное поле"
}

export const emailValidate = (value) => {
    if(value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        return "Не верный email"
    }
    return undefined
}

export const phoneValidate = (value) => {
    if(value && !/^(0|[1-9][0-9]{9})$/i.test(value)) {
        return "Номер указан не верно"
    }
    return undefined
}

export const minLengthCreator = (num) => (value) => {
    if(value && value.length < num) {
        return "Минимум 6 символов"
    }
    return undefined;
}
