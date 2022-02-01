<script lang="ts">
    import Task from '$lib/components/Task/Task.svelte'

    const title = "Budget";
</script>

<!-- <Page /> -->

<svelte:head>
    <title>{title}</title>
</svelte:head>

<div class="transactions">
    <h1>{title}</h1>
    <Task />
</div>