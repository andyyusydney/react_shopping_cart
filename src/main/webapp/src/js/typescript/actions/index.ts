type PackName = string[];

export const addPackage = (packName: PackName) => ({
    type: 'ADD_PACK',
    packName
})

export const removePackage = (packName: PackName) => ({
    type: 'REMOVE_PACK',
    packName
})