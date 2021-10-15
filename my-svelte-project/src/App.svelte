<script lang="ts">
import FeedbackItem from './components/FeedbackItem.svelte'
import FeedbackList from './components/FeedbackList.svelte';
import FeedbackStats from './components/FeedbackStats.svelte';
import FeedbackStats from './components/FeedbackStats.svelte'
	let feedback = [
		{
			id: 1,
			rating: 10,
			text: "lorem ipsum dolor sit amet, consectetur adipiscing.", 

		},
		{
			id: 2,
			rating: 9,
			text: "lorem ipsum dolor sit amet, consect"
		},
		{
			id: 3,
			rating: 7,
			text: "lorem ipsum dolor sit amet, consect adipiscing sirac."
		}
	]
	$:count = feedback.length
	$:average = feedback.reduce((a, {rating}) => a + rating, 0) / feedback.length

	
	const deleteFeedback = (e) => {
	const itemId = e.detail
	feedback = feedback.filter((item) => item.id != itemId)
	}

	 
</script>

<main class="container">
	<FeedbackStats {count} {average} />
	<FeedbackList {feedback} on:delete-feedback={deleteFeedback} />
</main>
