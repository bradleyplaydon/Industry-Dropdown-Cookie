# Industry-Dropdown-Cookie #
*This checks the URL and set's a cookie based on if a user gets to the thankyou URL so removed a select element which blocks users from being able to proceed to checkout without selecting an element to avoid having to select this multiple times.*
## Contents
  * CustomerTagchecker.liquid
    This checks to see if the customer has a tag by one checking if they're logged in or not if they're logged in then there's a loop to check to see if the customer is tagged any of the following industry's as we have a flow where by the customer is tagged whatever industry they pick the flow is triggered by looking at the order attributes and if any order has an industry order attribute it tags the specific customer that ordered.
