<template>
<td class="nd-table-column">
    <span class="nd-table-column-inner-text">{{text}}</span>
    <slot></slot>
</td>

</template>

<script>
export default {
    props:{
        text: String
    }
}
</script>

