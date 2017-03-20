/**
 * Created by Doming on 2017/3/20.
 */

import Data from './data'

// The version of hake-form

class HakeForm {
  constructor( target ) {
    if( target.tagName.toUpperCase() === 'FORM' ) {
      this.form = target;

    } else {
      console.error('[Hake Error] The hake-form require a element to bind.')
    }
  }

  get data(){
    return Data.normalize(this.form);
  }

  get serial(){
    return Data.serialize(this.form);
  }
}

export default HakeForm