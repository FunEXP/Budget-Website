<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    //event handler for Pin Task
    function PinTask() {
        dispatch('onPinTask', {
            id: task.id,
        });
    }

    // event handler for Archieve Task
    function ArchiveTask() {
        dispatch('onArchieveTask', {
            id: task.id,
        });
    } 

    // Task props
    export let task = {
        id:'',
        title:'',
        state: '',
        updatedAt: new Date(),
    };

    // Reactive declaration
    $: isChecked = task.state == 'TASK_ARCHIVED';

</script>

<!-- <div class="list-item">
    <input type="text" value={task.title} readonly />
</div> -->

<div class="list-item {task.state}">
    <label for="checkbox">
        <input type="checkbox" checked={isChecked} disabled name="checked" />
        <span class="checkbox-custom" on:click={ArchiveTask} aria-label={`achiveTask-${task.id}`} />
    </label>
    <div class="title">
        <input type="text" readonly value={task.title} placeholder="Input title" />
    </div>
    <div class="actions">
        {#if task.state !== 'TASK_ARCHIVED'}
        <a href="/" on:click|preventDefault={PinTask}>
            <span class="icon-star" aria-label={`pinTask-${task.id}`} />
        </a>
        {/if}
    </div>
</div>

