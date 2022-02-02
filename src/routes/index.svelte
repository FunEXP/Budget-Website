<script lang="ts">
    import Task from '$lib/components/Task/Task.svelte';
    import Button from '$lib/components/Button/Button.svelte';
    const title = "Budget";

    export let transactions: Transaction[];
</script>

<!-- <Page /> -->

<svelte:head>
    <title>{title}</title>
</svelte:head>

<div class="transactions">
    <h1>{title}</h1>

    {#each transactions as transaction}
        <Task task={transaction} />
    {/each}
    <form action="" class="new">
        <Button label="+" backgroundColor/>
    </form>
</div>