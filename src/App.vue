<template>
  <form @submit.prevent="submitForm">
    <!-- Full Name -->
    <div>
      <label for="fullName">Full Name</label>
      <input
        type="text"
        id="fullName"
        v-model="fullName"
        @input="validateFullName"
      />
      <p v-if="errors.fullName">{{ errors.fullName }}</p>
    </div>

    <!-- Telephone Number -->
    <div>
      <label for="telephone">Telephone Number</label>
      <input
        type="tel"
        id="telephone"
        v-model="telephone"
        @input="validateTelephone"
      />
      <p v-if="errors.telephone">{{ errors.telephone }}</p>
    </div>

    <!-- Interest -->
    <div>
      <label for="interest">Interest</label>
      <select id="interest" v-model="interest" @change="validateInterest">
        <option disabled value="">Please select an interest</option>
        <!-- Add your options here -->
      </select>
      <p v-if="errors.interest">{{ errors.interest }}</p>
    </div>

    <!-- Description -->
    <div>
      <label for="description">Description</label>
      <textarea
        id="description"
        v-model="description"
        @input="validateDescription"
      ></textarea>
      <p>{{ 500 - description.length }} characters remaining</p>
    </div>

    <!-- Reference -->
    <div>
      <label>Reference</label>
      <div v-for="option in referenceOptions" :key="option">
        <input type="checkbox" :value="option" v-model="reference" />
        <label>{{ option }}</label>
      </div>
      <p v-if="errors.reference">{{ errors.reference }}</p>
    </div>

    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      fullName: "",
      telephone: "",
      interest: "",
      description: "",
      reference: [],
      referenceOptions: ["Online Ad", "Recommendation", "Referral", "Other"],
      errors: {},
    };
  },
  methods: {
    validateFullName() {
      if (!this.fullName) {
        this.errors.fullName = "Full Name is required.";
      } else if (this.fullName.length < 3) {
        this.errors.fullName = "Full Name must be at least 3 characters.";
      } else {
        delete this.errors.fullName;
      }
    },
    validateTelephone() {
      if (!/^\d+$/.test(this.telephone)) {
        this.errors.telephone = "Telephone Number must only contain numbers.";
      } else {
        delete this.errors.telephone;
      }
    },
    validateInterest() {
      if (!this.interest) {
        this.errors.interest = "Interest is required.";
      } else {
        delete this.errors.interest;
      }
    },
    validateDescription() {
      if (this.description.length > 500) {
        this.errors.description =
          "Description must be less than 500 characters.";
      } else {
        delete this.errors.description;
      }
    },
    validateReference() {
      if (!this.reference.length) {
        this.errors.reference = "At least one reference is required.";
      } else {
        delete this.errors.reference;
      }
    },
    submitForm() {
      this.validateFullName();
      this.validateTelephone();
      this.validateInterest();
      this.validateDescription();
      this.validateReference();

      if (Object.keys(this.errors).length === 0) {
        // Submit the form
      }
    },
  },
};
</script>

    Styling (optional):

You can add styles to make the form look better. Here's a basic example using scoped CSS:

vue

<style scoped>
form {
  width: 300px;
  margin: 0 auto;
}

label {
  display: block;
  margin-top: 10px;
}

input,
select,
textarea {
  width: 100%;
  padding: 5px;
  margin-top: 5px;
}

p {
  color: red;
  font-size: 12px;
}
</style>
