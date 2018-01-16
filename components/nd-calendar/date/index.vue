<style lang="less" scoped>

</style>

<template>
    <div class="nd-calendar-date">
        <nd-calendar-head @change="headChange" ref="head"></nd-calendar-head>
        <nd-calendar-year></nd-calendar-year>
        <nd-calendar-month></nd-calendar-month>
        <nd-calendar-day :selected="current"  ref="day" @change="changeDate"></nd-calendar-day>
    </div>
</template>

<script>
import ndCalendarHead from "./head";
import ndCalendarYear from "./year";
import ndCalendarMonth from "./month";
import ndCalendarDay from "./day";
export default {

    data(){
        return {
            current: ''
        }
    },
    mounted(){
        this.$refs.head.renderHead(this.current);
    },
    methods: {
        headChange: function(value) {
            this.$refs.day.renderDay(value);
        },
        changeDate: function(value){
             this.$refs.head.renderHead(value);
             this.$emit('change',value);
        }
    },
	components: {
		ndCalendarHead,
        ndCalendarYear,
        ndCalendarMonth,
        ndCalendarDay
	}
};
</script>


