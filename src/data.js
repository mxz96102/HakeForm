/**
 * Created by Doming on 2017/3/20.
 */
const Data = {
  normalize(form){
    let i,j,after = new Map();
    let origin = form.elements;

    for( i = 0; i < origin.length; i++ ){
      switch (origin[i].nodeName.toUpperCase()) {
        case 'INPUT':
          switch (origin[i].type.toLowerCase()){
            case 'text':
            case 'hidden':
            case 'password':
            case 'button':
            case 'reset':
            case 'color':
            case 'datetime':
            case 'datetime-local':
            case 'email':
            case 'month':
            case 'number':
            case 'range':
            case 'search':
            case 'tel':
            case 'time':
            case 'url':
            case 'week':
              after[origin[i].name] = origin[i].value;
              break;
            case 'radio':
              if (form.elements[i].checked)
                after[origin[i].name] = origin[i].value;
              break;
            case 'checkbox':
              if(Array.isArray(after[origin[i].name]))
                after[origin[i].name].push(origin[i].value);
              else
                after[origin[i].name] = [origin[i].value];
              break;
            default :
              break;
          }
          break;
        case 'SELECT':
        case 'TEXTAREA':case 'KEYGEN':case 'PROGRESS':case 'DATALIST':
          after[origin[i].name] = origin[i].value;
          break;
        default :
          break;
      }
    }

    return after;
  },

  serialize(form){
    let data = normalize(form);
    let iterator = data.entries(),i,result='';

    do{
      i = iterator.next().value;
      result += i[0] + '=' + JSON.stringify(i[1]) + '&';
    }while (i !== undefined)

    result = result.slice(0,result.length-1);

    return result;
  }
}

export default Data;
