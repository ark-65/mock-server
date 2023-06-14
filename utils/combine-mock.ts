export function combineMock<T extends Object>(originalData: T, combineData: Object): T {
    return Object.assign(originalData, combineData);
}
