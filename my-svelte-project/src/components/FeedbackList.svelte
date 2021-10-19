<script>
import { onMount, onDestroy } from 'svelte'
import {FeedbackStore} from '../store'
import {fade , scale } from 'svelte/transition';
import FeedbackItem from "./FeedbackItem.svelte";
let feedback = []
 

FeedbackStore.subscribe((data) => feedback = data)
    
onMount(() => {
    console.log('mounted')
    })
</script>

{#each feedback as fb (fb.id)}
<div in:scale out:fade="{{duration: 500}}">
    <FeedbackItem item={fb} on:delete-feedback />
</div>
{/each}