import { writable } from 'svelte/store'

export const FeedbackStore = writable([
    {
        id: 1,
        rating: 10,
        text: "You are awesome.", 

    },
    {
        id: 2,
        rating: 4 ,
        text: "Needs some improvements",
    },
    {
        id: 3,
        rating: 8,
        text: "Loved it!!!!!!!."
    }
]
)