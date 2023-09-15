import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
   state: {
      savedQuotes: null,
      archivedQuotes: null,
      appConfig: null,
      userConfig: null,
      user: null,
      quoteFormData: null,
      quoteStatus: 0,
      lastSubmission: {
         fields: {
            AnnualPremium: 0,
            PolicyPremium: 0,
         },
      },
      subjectivities:
         "1. Signed and underwriting approved application:\nApplication Instructions: The Applicant must review and provide responses to all questions contained in the Application and any applicable Application Supplement(s). If you are unclear as to the meaning of any question in the Application and Application Supplement(s) or you have any questions regarding the questions the Application or the Application Supplements, please refer questions to your broker. If you have any doubts, please ask. We rely on accurate responses in the Application and Application Supplements to underwrite the Policy and all responses to the Application and Application Supplements are taken into consideration if a claim arises.\n\n2. This proposal is valid until {{PolicyExpirationDate}}\n\n3. This insurance is issued pursuant to the state Surplus Lines laws that the insured is domiciled. Persons insured by Surplus Lines carriers do not have the protection of the above captioned state’s Guaranty Act to the extent of any right of recovery for the obligation of an insolvent unlicensed insurer. Any applicable taxes, surcharges or countersignature fees, etc., are in addition to the indicated premiums. Agent or Brokers’ office is responsible for making State Surplus Lines Filings and complying with all applicable laws.\n",
   },
});
