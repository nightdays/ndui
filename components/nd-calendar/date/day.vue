<style lang="less" scoped>
.nd-calendar-day {
    padding: 15px;

    &>table{
        border-collapse: collapse;
        table-layout: fixed;
        width: 100%;
    }

    &>table>thead>th{
        padding: 5px;
        color: rgb(131,165,155);
        font-weight: 400;
    }

    &>table>tbody>tr>td{
        height: 32px;
        font-weight: 400;
        text-align: center;
        color:#333;
        vertical-align: middle;
        cursor: pointer;
    }

    .currentMonth:hover {
        background-color: rgb(228, 241, 239);
    }

    .nextMonth {
        color: #ddd;
    }

    .prevMonth {
        color: #ddd;
    }

    .currentMonth.selected {
        background-color:#0ACD79 ;
        color: #fff;
    }
}
</style>

<template>
<div class="nd-calendar-day">
    <table>
        <thead>
            <th>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th>
        </thead>
        <tbody>
            <tr v-for="(item,index) in dateArray" :key="index">
                <td v-for="(day,i) in item" :key="i" :class="getClass(day)" @click="selectDay(day)"> {{day.value}} </td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import NdDate from '~/plugins/NdDate.js'

export default {
    props: ['selected','currentHead'],
    data() {
        return {
            dateArray: [[],[],[],[],[],[]],
            currentSelected: ''
        }
    },
    watch:{
        selected(value) {
            this.currentSelected = value;
        }
    },
    methods: {
        renderDay(date) {
            let currentDate = null;
            if(date){
                currentDate = new NdDate(date);
            }else{
                currentDate = new NdDate();
            }
            let index = 0;
            let rowcount  = 0;
            let start =false;
            let end = false;

            this.dateArray =  [[],[],[],[],[],[]];

            for(let i=0;i<this.dateArray.length;i++){
                let item = this.dateArray[i];
                for(let j=0; j<7;j++){
                    if( i == 0 && !start){
                        let prevMonth = currentDate.prevMonth();
                        if(currentDate.getFirstDay().getWeekDay() == j) {
                            for(let k=j;k>0;k--){
                                let day = prevMonth.getLastDay().day - k +1;
                                let obj = {
                                    className:'prevMonth',
                                    value: day,
                                    date: prevMonth.getSomeDay(day)
                                }
                                item.push(obj);
                            }

                            index++;
                            item.push({className:'currentMonth',value: index, date: currentDate.getSomeDay(index)});
                            start = true;
                        }
                    }else if(start && !end){
                        index++;
                        item.push({className:'currentMonth',value: index, date : currentDate.getSomeDay(index)});
                        if(index == currentDate.getLastDay().day) {
                            index = 0;
                            end = true;
                        }
                    } else {
                        index++;
                        let nextMonth = currentDate.nextMonth();
                        item.push({className:'nextMonth' , value: index, date : nextMonth.getSomeDay(index)});
                    }
                }
            }
        },
        selectDay(item) {
            this.currentSelected = item.date.toString();
            this.$emit('change',this.currentSelected)
        },
        getClass(day){
            let arr = [];

            arr.push(day.className);

            let selectedDay = new NdDate(this.currentSelected);
            if( selectedDay.date && !(selectedDay>day.date) && !(selectedDay<day.date)){
                arr.push("selected");
            }

            return arr;
        }
    }
}
</script>


