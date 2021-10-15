<script>
import Card from './Card.svelte'
import Button from './Button.svelte'

let text = ''
</script>


<Card>
    <header>
        <h2>How would you like to rate our service with us?</h2>
    </header>
</Card>

<form>
    <!--RATING SELECT-->
    <div class="input-group">
        <input type="text" bind:value = {text} placeholder="Tell us something so that we can improve ourselves! Thankyou." >
        <Button>Send</Button>
    </div>
</form>