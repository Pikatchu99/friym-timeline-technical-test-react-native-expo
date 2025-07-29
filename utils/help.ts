const areArraysEqual = (arr1?: number[], arr2?: number[]) => {
    if (arr1 === arr2) return true;
    if (!arr1 || !arr2 || arr1.length !== arr2.length) return false;
    return arr1.every((v, i) => v === arr2[i]);
};

export { areArraysEqual };
