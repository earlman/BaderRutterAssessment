export default {
   config: [
      {
         component: "Text", // should match a component in `src/components/FormFields`
         label: "Full Name",
         id: "fll", // should match an object in "initialFormData" object below
      },
      {
         component: "Phone",
         label: "Telephone Number",
         id: "tlp",
      },
      {
         component: "Select",
         label: "Interest",
         options: ["Option 1", "Option 2", "Option 3"],
         id: "ntr",
      },
      {
         component: "TextArea",
         label: "Description",
         id: "dsc",
      },
      {
         component: "CheckboxGroup",
         options: ["Online Ad", "Recommendation", "Referral", "Other"],
         label: "Reference",
         id: "rfr",
      },
   ],
   initialFormData: {
      //required to initialize vuex data
      fll: {
         data: "",
      },
      tlp: {
         data: "",
      },
      ntr: {
         data: "",
      },
      dsc: {
         data: "",
      },
      rfr: {
         data: [],
      }, // fields with multiple options must be initialized with an array
   },
   //
   // COMPLETD VERSION FOR TESTING
   // initialFormData: {
   //    //required to initialize vuex data
   //    fll: {
   //       data: "asdf",
   //    },
   //    tlp: {
   //       data: "124124",
   //    },
   //    ntr: {
   //       data: "Option 1",
   //    },
   //    dsc: {
   //       data: "asdf",
   //    },
   //    rfr: {
   //       data: ["Online Ad"],
   //    }, // fields with multiple options must be initialized with an array
   // },
};
