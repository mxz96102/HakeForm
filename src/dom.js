/**
 * Created by Doming on 2017/3/22.
 */
const Dom = {
  getElement(el){
    if(typeof el === 'string'){
      return document.querySelectorAll(el).length > 0 ? document.querySelectorAll(el)[0] : false;
    }

    if(el instanceof HTMLElement){
      return el;
    }

    return false;
  }
}

export default Dom
