<script>
    import './task.css';
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
    <div class="title">
        <input class="descrip" type="text" value={task.title} placeholder="Input title" />
    </div>
</div>

