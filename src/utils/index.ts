export const ageToString = (age: number) => {
    let ageWord;
    const lastDigit = age % 10;

    if ((age > 10 && age < 20) || lastDigit === 0 || lastDigit > 4) {
        ageWord = 'лет';
    } else if (lastDigit === 1) {
        ageWord = 'год'
    } else {
        ageWord = 'года';
    }

    return `${age} ${ageWord}`;
}