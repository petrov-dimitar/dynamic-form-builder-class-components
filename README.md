Implement a Dynamic Form Builder component that takes a JSON and render form:

JSON example:

const formJSON = [
    {
        "fields": [
            {
                "id": "firstname",
                "label": "First Name",
                "required": true,
                "placeholder": "Enter your first name ...",
                "type": "text",
                "value": ""
            },
            {
                "id": "lastname",
                "label": "Last Name",
                "required": true,
                "placeholder": "Enter your last name ...",
                "type": "text",
                "value": ""
            },
            {
                "id": "country",
                "label": "County",
                "required": true,
                "type": "select",
                "options": [
                    { "label": "Bulgaria"},
                    { "label": "Greece"},
                    { "label": "Romania"},
                    { "label": "Serbia"}
                ],
                "value": ""
            },
            {
                "id": "subscribe",
                "label": "Subscribe to newsletter",
                "type": "checkbox",
                "value": ""
            }
        ]
    }
]
The Dynamic Form Builder should support following form elements: text input, select, and checkbox. For each row element to render (if applicable): label, asterisk to indicate whether is required element, placeholder, value, and options.

Initialization example:

import formJSON from "./formData.json";
import DynamicFormBuilder from "./dynamicFormBuilder";
 
function App() {
 
  return (
    <div className="container">
      <DynamicFormBuilder formJSON={formJSON} />
    </div>
  );
}
 
export default App;
The Dynamic Form Builder should have a propery onSubmit in order to process form data submission.

Binding to event example:

<DynamicFormBuilder formJSON={formJSON} onSubmit={(data) => { console.log(data) }} />
console.log should output form data - the field id and element value - [{"firstname":"Ivan"},{"lastname":"Petrov"},{"country":"Bulgaria"},{"subscribe":true}]

Implement validation for required fields in order to prevent form submission.

Enchance formJSON structure and Dynamic Form Builder functionality in order to support generic field visibility scenarios. You should cover following scenario: having fields Subscribe to newsletter and email. In the email field the user inputs his email to subscribe for the newsletter. The email field should be visibile only when subscribe checkbox is checked.

Use ES6, Boostrap for styling, React, Create React App to create application, Function Components, Class Components, Handling Events, and etc. for the implementation.