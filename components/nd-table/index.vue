<style lang="less" scoped>
.nd-table-container {
    width: 100%;
    height: 553px;
}
.nd-table {
    border-collapse: collapse;
    width: 100%;
    table-layout: fixed;

    td,th{
        font-weight: normal;
    }

	.nd-table-head {
		background: rgba(202, 204, 208, 0.1);
		border-bottom: 1px solid #f4f4f4;
	}

	.nd-table-head-col {
		font-size: 14px;
		color: #999;
        padding: 18px 10px 10px 0;
        text-align: left;
	}

	.nd-table-head-col:first-child {
		padding-left: 20px;
    }
    
    .nd-table-row:hover{
        background-color: #f4fdf9;
        user-select: text;
    }

	.nd-table-column {
        border-bottom: 1px solid #f4f4f4;
        font-size: 14px;
        color: #666;
        padding: 18px 10px 10px 0;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    
    .nd-table-column:first-child{
        padding-left: 20px;
    }

	.nd-table-column .nd-table-column-inner-text {
	}
}
</style>

<script>
import ndTableColumn from "../nd-table-column";
export default {
    props:{
        items: Array
    },
	render(h) {
		var head = this.$slots.default.map(value => {
            let attr = value.data.attrs;
            let label = "";
            let width = "";
            let cols = "";
			if (attr.label) {
				label = attr.label;
            }
            if(attr.width){
                width = attr.width + "px";
            }
			return h('th',{ 'class': ['nd-table-head-col'] , 'style' : {'width':width} },value.data.attrs.label);
		});



		var rows = this.items && this.items.length>0 && this.items.map(item => {
			let cols = this.$slots.default.map(value => {
                let prop = value.data.attrs.prop;
                let attr = value.data.attrs;
                let width = "";
                let cols = "";
                if(attr.width){
                    width = attr.width + "px";
                }else if(attr.cols){
                    cols = attr.cols;
                }else{
                    cols = 1;
                }

				let text = "";
				if (!value.data.scopedSlots) {
					text = item[prop];
				}

				return h(
					ndTableColumn,
					{
						props: {
							text: text,
							item: item
                        },
                        style: {'width':width}
					},
					value.componentOptions.children ||
						(value.data.scopedSlots &&
							value.data.scopedSlots.default(item))
				);
            });
            
            let row = h('tr',{'class':['nd-table-row']}, cols);

            return row;

		});

        var html =(
            <div class="nd-table-container">
                <table class="nd-table">
                    <thead>
                        <tr class="nd-table-head">
                            {head}
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        ) ;

		return html;
	}
};
</script>



