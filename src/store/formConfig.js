export default {
   config: [
      {
         component: "Text",
         label: "Full Name",
         id: "fll",
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
      fll: "",
      tlp: "",
      ntr: "",
      dsc: "",
      rfr: [], // fields with multiple options must be initialized with an array
   },
};
