<script>
    import Icon from "./icon.svelte"
    import ToDoItem from "./todo_item.svelte"
</script>
<h1>ToDos</h1>
<div class="todo-list">
    <div class="header"><Icon /></div>
    <div class="header"><Icon /></div>
    <div class="header"><Icon /></div>
    <div class="header"><Icon /></div>
    <div class="header"><Icon /></div>

    <ToDoItem />

    <ToDoItem />

    <ToDoItem />
</div>

<style>
    .todo-list{
        display: grid;
        grid-template-columns: 1fr 1fr 4fr 2fr 1fr;
        border: 3px solid blue;
        width: 95%;
        height: 80%;
        margin: auto;
    }
</style>