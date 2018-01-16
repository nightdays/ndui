<style lang="less" scoped>
.nd-page {

    text-align: right;

    .nd-page-inner {
        display: inline-block;

        &>ul {font-size: 0}

        .page-item {
            display: inline-block;
            border: 1px solid #f4f4f4;
            border-radius: 4px;
            width: 36px;
            height: 36px;
            font-size: 13px;
            color:#8A8989;
            line-height: 36px;
            text-align: center;
            margin-right: 4px;
            cursor: pointer;
            user-select: none;
        }

        .page-item.current {
            color: #fff;
            background-color: #0ACD79;
        }

        [class*="-arrow"]{
            font-size: 12px;
        }

        [class*="-arrow"].disabled {
            color: #e4e4e4;
            cursor: not-allowed;
        }

        .right-arrow {
            margin-right: 0;
        }

    }

}
</style>

<template>
    <div class="nd-page">

        <div class="nd-page-inner">
            <ul>

                <li class="page-item left-arrow" :class="{disabled: 1==currentPage}" @click="prevSearch(1)">
                    <i class="nd-icon-arrow-left"></i>
                </li>

                <li class="page-item" v-if="pageTotal>0" :class="{current: 1==currentPage}" @click="change({value:1})"
                    >
                    1
                </li>

                <li class="page-item" v-if="prev"  @click="prevSearch(5)" @mouseenter="prevout=false" @mouseleave="prevout=true">
                    <i :class="{'nd-icon-more': prevout , 'nd-icon-d-arrow-left' : !prevout }"></i>
                </li>

                <li class="page-item" v-for="(item,index) in pageList" 
                    :key="index"
                    :class="{current: item.value==currentPage}" 
                    @click="change(item)"
                >
                   
                    <span v-if="!item.type">{{item.value}}</span>
                    <i class="nd-icon-more" v-if="item.type"></i>
                </li>

                 <li class="page-item" v-if="next" @click="nextSearch(5)" @mouseenter="nextout=false" @mouseleave="nextout=true">
                     <i :class="{'nd-icon-more': nextout , 'nd-icon-d-arrow-right' : !nextout }"></i>
                </li>

                <li class="page-item" v-if="pageTotal>0" :class="{current: pageTotal==currentPage}" @click="change({value:pageTotal})">
                    {{pageTotal}}
                </li>

                <li class="page-item right-arrow" :class="{disabled: currentPage==pageTotal}" @click="nextSearch(1)">
                    <i class="nd-icon-arrow-right"></i>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        value : {
            type: [String,Number],
            default: 1
        },
        total : [String,Number],
        pageSize : {
            type: [String,Number],
            default: 10
        } 
    },
    computed: {
        pageList(){

            let prev = false;
            let next = false;

            let count = 7;

            if(this.pageTotal > count) {
                if(this.currentPage >count - 3){
                    prev = true;
                }

                if(this.currentPage <this.pageTotal - 3){
                    next = true;
                }
            }

            const array = [];

            if(prev && !next){
                let start = this.pageTotal - 5;
                for(let i = start ; i<this.pageTotal ; i++){
                    array.push({'value':i});
                }
            }
            else if( !prev && next) {
                for(let i = 2; i < count ; i++){
                    array.push({'value':i});
                }
            } else if( prev && next) {
                 const offset = Math.floor(count / 2) - 1;
                 for(let i=this.currentPage - offset;i<=this.currentPage + offset ;i++){
                     array.push({'value':i});
                 }
            } else {
                for (let i = 2; i < this.pageTotal; i++) {
                    array.push({'value':i});
                }
            }

            this.prev = prev;
            this.next = next;

            return array;

        },
        currentPage(){
            return this.value;
        },
        pageTotal(){
            let total = this.total;
            let pageSize = this.pageSize;
            let pageTotal = total%pageSize==0? total/pageSize : (Number.parseInt(total/pageSize) + 1);
            return pageTotal;
        }
    },  
    data(){
        return {
            prev : false,
            next : false,
            prevout: true,
            nextout : true
        }
    },
    watch: {
        prev(val){
            if(!val){
                this.prevout = true;
            }
        },
        next(val){
            if(!val){
                this.nextout = true;
            }
        }
    },
    methods: {
        change(item){
            this.$emit('input',item.value);
            this.$emit('change',item.value);
        },
        prevSearch(num) {
            if(this.currentPage == 1) {
                return;
            }
            let page = this.currentPage - num
            if(page<=0){
                page = 1;
            }
            this.$emit('input',page);
            this.$emit('change',page);
        },
        nextSearch(num) {
            if(this.currentPage == this.pageTotal) {
                return;
            }
            let page = this.currentPage + num
            if(page>=this.pageTotal){
                page = this.pageTotal;
            }
            this.$emit('input',page);
            this.$emit('change',page);
        }
    }
}
</script>


