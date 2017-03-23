/**
 * Created by Doming on 2017/3/20.
 */

import Data from './data'
import Dom from './Dom'

// The version of hake-form

class HakeForm {
  constructor( element ) {
    let target = Dom.getElement(element);

    if(target === false) {
      console.error('[Hake Error] The hake-form can\'t find a element to bind.');
    }

    if( target.tagName.toUpperCase() === 'FORM' ) {
      this.form = target;

    } else {
      console.error('[Hake Error] The hake-form require a element to bind.')
    }
  }

  get data(){
    return Data.normalize(this.form);
  }

  set data(e){
    return console.warn('[Hake Warn] You can\'t set the value through hake-form.');
  }

  get serial(){
    return Data.serialize(this.form);
  }
}

export default HakeForm