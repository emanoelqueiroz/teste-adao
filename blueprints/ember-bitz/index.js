'use strict';

module.exports = {

  normalizeEntityName() { },

  afterInstall() {
    return this.addPackagesToProject([
      { name: 'inputmask' },
      { name: 'moment' },
      { name: 'bootstrap-datepicker' },
    ]);
  }

};
