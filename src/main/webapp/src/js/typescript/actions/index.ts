export const addPackage = (tier: any) => ({
    type: 'ADD_PACK',
    payload: {
        tierId: tier.tierId,
        price: tier.price,
        discountedPrice: tier.discountedPrice,
        title: tier.title,
        type: tier.type,
        removable: tier.removable
    }
})

export const removePackage = (pack: any) => ({
    type: 'REMOVE_PACK',
    payload: {
        tierId: pack.tierId
    }
})