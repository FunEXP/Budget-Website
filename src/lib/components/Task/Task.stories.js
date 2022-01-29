import Task from './Task.svelte';
import { action } from '@storybook/addon-actions';

export const actionsData = {
    onPinTask: action('onPinTask'),
    onArchieveTask: action('onArchieveTask'),
};

export default {
    component: Task,
    title: 'Task',
    excludeStories: /.*Data$/,
    argTypes: {
        onPinTask: { action: 'onPinTask'},
        onArchiveTask: { action: 'onArchiveTask'},
    },
};

const Template = ({ onArchiveTask, onPinTask, ...args}) => ({
    Component: Task,
    props: args,
    on: {
        ...actionsData,
    },
});

export const Default = Template.bind({});
Default.args={
    task: {
        id: '1',
        title: 'Task Task',
        state: 'TASK_INBOX',
        updatedAt: new Date(),
    },
};

export const Pinned = Template.bind({});
Pinned.args={
    task: {
        ...Default.args.task,
        state: 'TASK_PINNED',
    },
};

export const Archived = Template.bind({});
Archived.args={
    task: {
        ...Default.args.task,
        state: 'TASK_ARCHIVED',
    },
};
