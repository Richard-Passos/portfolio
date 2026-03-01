import lodashKeys from 'lodash/keys';

const keys = lodashKeys as <T extends object>(obj?: T) => Array<keyof T>;

export { keys };
