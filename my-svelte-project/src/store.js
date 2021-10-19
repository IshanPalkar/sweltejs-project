import { writable } from 'svelte/store'

export const FeedbackStore = writable([
    {
        id: 1,
        rating: 10,
        text: "lorem ipsum dolor sit amet, consectetur adipiscing.", 

    },
    {
        id: 2,
        rating: 4,
        text: "lorem ipsum dolor sit amet, consect"
    },
    {
        id: 3,
        rating: 7,
        text: "lorem ipsum dolor sit amet, consect adipiscing sirac."
    }
]
)