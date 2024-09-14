
// *************************************************************************************************************************
/*Q. Difference between Interface and Types Aliases ?

Type Aliases can be used for primitives like string or more complex types such as objects and arrays whereas Interfaces are similar to type aliases, except they only apply to object types.


// *************************************************************************************************************************
/*Q. Just like interfaces Type Aliases be extended ?

Yes, you can extend both interfaces and type aliases in TypeScript, but there are some differences in how they do it.
*/
interface Motherboard {
    cpu: string;
    gpu: number;
}

interface PCB extends Motherboard {
    sensors: number;
}

const server: PCB = {
    cpu: "Intel",
    gpu: 1,
    sensors: 12
};

// V/S  Type Aliasas
type Motherboard2 = {
    cpu: string;
    gpu: number;
};

type PCB2 = Motherboard2 & {
    sensors: number;
};

const employee1: PCB2 = {
    cpu: "Intel",
    gpu: 1,
    sensors: 12
};

// *************************************************************************************************************************