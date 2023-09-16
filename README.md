# Bade Rutter Assessment
by Earl Justin Mangulabnan

- Vue 2.x
- Vuex 3.x

✌🏼

```
yarn
yarn dev
```

- - - 

## Prompt:
### Task

Using Vue CLI and Vue 2 (Options API), create a dynamically populated, styled form that interacts with a Vuex store where upon successful submission, displays the results in a modal. Please comment your work as you would in handing this work off to another developer. 
  
Completed code should be provided via link to public repository (GitHub, BitBucket, etc)

### Criteria
- [x] Must use SCSS for styling
- [x] Must _not_ use any UI framework (such as Bootstrap Vue, Vuetify, etc)
- [x] Validation
	- Must not use a 3rd party library to handle validation
	- Form validation should **not** be handled by the browser
	- Submission button should only appear if all form fields are deemed valid
- [x] Form may only be submittable if all fields pass validation
- [x] Form fields should be derived from an array of objects
- [x] Fields should have a use consistent, reusable label structure
- [x] All fields must be required and should be reflected in both the UI and validation
- [x] Form should contain at least:
	- Text input
		- Label: Full Name
			- Validation:
				- Must have a value
				- Must be at least 3 characters
	- Telephone number
		- Label: Telephone Number
		- Validation:
			- Must only allow numbers
	- Select input
		- Label: Interest
		- Options: 
		- Validation: 
			- Must have a valid selection
	- Textarea
		- Label: Description
		- Limited to 500 characters (with visual display of remaining characters)
	- Checkbox group
		- Label: Reference
		- Options: Online Ad, Recommendation, Referral, Other
		- Validation: 
			- Must have valid selection
		