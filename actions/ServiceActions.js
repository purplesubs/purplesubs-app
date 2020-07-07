export const ON_PRESS_ITEM = {
    name: 'ON_PRESS_ITEM',
    action: (item) => ({
        type: ON_PRESS_ITEM.name, item
    })
}

export const ON_PRESS_ADD_SERVICE = {
    name: 'ON_PRESS_ADD_SERVICE',
    action: () => ({
        type: ON_PRESS_ADD_SERVICE.name
    })
}