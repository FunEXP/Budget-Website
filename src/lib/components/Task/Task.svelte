<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    //event handler for Pin Task
    function pinTask() {
        dispatch('onPinTask', {
            id: task.id,
        });
    }

    // event handler for Archieve Task
    function archieveTask() {
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

</script>

<div class="list-item">
    <input type="text" value={task.title} readonly />
</div>

