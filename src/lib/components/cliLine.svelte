<script lang="ts">
	export let hostName: string = 'unknown host';
	export let isEditable = true;

	$: value = '';
</script>

<div class="line-wrap">
	<pre>{hostName}</pre>
	<pre class="line" bind:textContent={value} contenteditable="true">{value} ▌</pre>
</div>

<style>
	.line-wrap {
		display: flex;
		flex-direction: row;
		gap: 8px;
		align-items: center;
		background-color: var(--clr-black);
		color: var(--clr-white);
		padding: 10px;
		border-radius: 5px;
		margin: 10px 0;
	}

	.line {
		min-width: 100px;
		background-color: rgba(0, 255, 255, 0.28);
	}
</style>
