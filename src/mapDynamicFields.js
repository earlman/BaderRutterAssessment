import arrayToObject from "vuex-map-fields/src/lib/array-to-object";

/*
Special vuex-map-field like helper to manage fields inside dynamically defined index or object property

Usage :

computed: {
    ...mapDynamicFields('my/store/module', ['bigArray[].fieldName'], 'indexArray'),
    indexArray() {
        return 42;
    }
}

So you get a fieldName computed property mapped to store my.store.module.bigArray[42].fieldName property
You can use any computed, props, etc... as index property

Fields can also be passed as object to be renamed { myField: 'bigArray[].fieldName' }
*/
export function mapDynamicFields(namespace, fields, indexField) {
   const fieldsObject = Array.isArray(fields) ? arrayToObject(fields) : fields;

   return Object.keys(fieldsObject).reduce((prev, key) => {
      const field = {
         get() {
            // 'this' refer to vue component
            const path = fieldsObject[key].replace("[]", `[${this[indexField]}]`);
            return this.$store.getters[`${namespace}/getField`](path);
         },
         set(value) {
            // 'this' refer to vue component
            const path = fieldsObject[key].replace("[]", `[${this[indexField]}]`);
            this.$store.commit(`${namespace}/updateField`, { path, value });
         },
      };

      prev[key] = field;
      return prev;
   }, {});
}
