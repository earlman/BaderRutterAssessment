import arrayToObject from "vuex-map-fields/src/lib/array-to-object";

/* 

This solution is based on https://github.com/maoberlehner/vuex-map-fields/issues/24#issuecomment-521175379 

This implementation could be cleaned up considerably. It requires an additional "data" property in our formData (see formConfig.js -> initialFormData), but I'll leave it as-is for the sake of time. 

*/

/*
Special vuex-map-field like helper to manage fields inside dynamically defined index or object property

Usage :

computed: {
    ...mapDynamicFields('my/store/module', ['bigArray[].fieldName'], 'index'),
    index() {
        return 42;
    }
}

So you get a fieldName computed property mapped to store my.store.module.bigArray[42].fieldName property
You can use any computed, props, etc... as index property

Fields can also be passed as object to be renamed { myField: 'bigArray[].fieldName' }
*/
export function mapDynamicFields(fields, indexField) {
   const fieldsObject = Array.isArray(fields) ? arrayToObject(fields) : fields;

   return Object.keys(fieldsObject).reduce((prev, key) => {
      const field = {
         get() {
            // 'this' refer to vue component
            const path = fieldsObject[key].replace("[]", `[${this[indexField]}]`);
            return this.$store.getters[`getField`](path);
         },
         set(value) {
            // 'this' refer to vue component
            const path = fieldsObject[key].replace("[]", `[${this[indexField]}]`);
            this.$store.commit(`updateField`, { path, value });
         },
      };

      prev[key] = field;
      return prev;
   }, {});
}
