const dataContents = [
    {
        id: 1,
        type: 'panel',
        props: {
            width: 500,
            height: 200,
            visible: false

        },
        content: [{
            id: 1,
            type: 'panel',
            props: {
                width: 500,
                height: 200,
                visible: false
            },
            content: [{
                id: 1,
                type: 'label',
                props: {
                    caption: 'Текст в  span',
                    visible: false
                }
            }]
        }]
    },

    {
        id: 2,
        type: 'label',
        props: {
            caption: 'Текст в  span',
            visible: true

        },
    },

    {
        id: 3,
        type: 'button',
        props: {
            width: 150,
            height: 100,
            visible: false
        },
    }
]

export default dataContents;









