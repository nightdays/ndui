/**
 * 
 * @param 参数目前只能使用 yyyy-mm-dd 的形式
 */
function NdDate(param) {
    if(param == '' || param==undefined){
      noParam(this);
    }else if(arguments.length==3){
      argParam(this,arguments);
    }else if(typeof param == 'string') {
      strParam(this,param);
    }else if(param instanceof Date){
      dateParam(this,param);
    }
  
    if(Number.parseInt(this.month)<10){
        this.month = "0" + Number.parseInt(this.month);
    }
  
    if(Number.parseInt(this.day)<10){
        this.day = "0" + Number.parseInt(this.day);
    }
  
    this.date = new Date(this.year,this.month-1,this.day);
  }
  
  function noParam(obj) {
      let date = new Date();
      obj.year = date.getFullYear();
      obj.month = date.getMonth() + 1;
      obj.day = date.getDate();
  }
  
  function argParam(obj,args){
      obj.year = args[0];
      obj.month = args[1];
      obj.day = args[2];
  }
  
  function strParam(obj,dateStr){
      let dateArray = dateStr.split('-');
      obj.year = dateArray[0];
      obj.month = dateArray[1];
      obj.day = dateArray[2];
  }
  
  function dateParam(obj,date){
      obj.year = date.getFullYear();
      obj.month = date.getMonth() + 1;
      obj.day = date.getDate();
  }
  
  NdDate.prototype.prevMonth = function() {
      if(this._prevMonth) return this._prevMonth;
      let prevMonth = new Date(this.year,this.month - 2, 1);
      this._prevMonth = new NdDate(prevMonth);
      return this._prevMonth;
  }
  
  NdDate.prototype.nextMonth = function() {
      if(this._nextMonth) return this._nextMonth;
      let nextMonth = new Date(this.year,this.month , 1);
      this._nextMonth = new NdDate(nextMonth);
      return this._nextMonth;
  }
  
  NdDate.prototype.getFirstDay = function() {
      if(this.firstDay) return this.firstDay;
      let firstDay = new Date(this.year,this.month - 1 , 1);
      this.firstDay = new NdDate(firstDay);
      return this.firstDay;
  }
  
  NdDate.prototype.getLastDay = function() {
      if(this._lastDay) return this._lastDay;
      let lastDay = new Date(this.year,this.month , 0);
      this._lastDay = new NdDate(lastDay);
      return this._lastDay;
  }
  
  NdDate.prototype.getWeekDay = function() {
      return this.date.getDay();
  }
  
  NdDate.prototype.getSomeDay = function(day) {
      return new NdDate(this.year,this.month,day);
  }
  
  NdDate.prototype.valueOf = function() {
      return this.date.getTime();
  }
  
  NdDate.prototype.toString = function() {
      return this.year + "-" + this.month + "-" + this.day;
  } 
  
  
  export default NdDate;