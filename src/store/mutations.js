/*
 * @Author: your name
 * @Date: 2021-09-01 11:28:16
 * @LastEditTime: 2021-09-06 16:30:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \calendars0.1\src\store\mutations.js
 */
export default{
    setHeaderTitle(state,routerName){
        switch(routerName){
            case 'day':
                state.headerTitle = "当天信息";
                break;
            case 'month':
                state.headerTitle = "近期假期";
                break;
            case 'year':
                state.headerTitle = "当前假期";
                break;
            default:
                state.headerTitle = "当天信息"
                break;
        }
    },
    setErrorCode(state,errorCode){
        state.errorCode = errorCode
    },
    setData(state,payload){
        const {field, data } = payload;
        switch(field){
            case 'day':
                state.dayData = data;
                break;
            case 'month':
                state.monthData = data;
                break;
            case 'year':
                state.yearData = data;
                break;
            default:
                break;
        }
    },
    setField(state,field){
        state.field = field
    },
    setPlaceholder(state,routerName){
        const date = new Date();

        let year = date.getFullYear(),
            month = date.getMonth()+1,
            day = date.getDate();
            
            month = month < 10? '0'+month : month;
            day = day < 10? '0'+day:day;

            switch(routerName){
                case "day":
                    state.placeholder = `格式：${year}${month}${day}（${year}年${month}月${day}日）`;
                    break;
                  case "month":
                    state.placeholder = `格式：${year}${month}（${year}年${month}月）`;
                    break;
                  case "year":
                    state.placeholder = `格式：${year}（${year}年）`;
                    break;
                  default:
                    state.placeholder = `格式：${year}${month}${day}（${year}年${month}月${day}日）`;
                    break;
            }

    },
    setMaxlength(state,routerName){
        switch(routerName){
            case "day":
                state.maxlength = 8;
                break;
              case "month":
                state.maxlength = 6;
                break;
              case "year":
                state.maxlength = 4;
                break;
              default:
                state.maxlength = 8;
                break;
        }
    }
}