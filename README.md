# Industry-Dropdown-Cookie #
*This checks the URL and set's a cookie based on if a user gets to the thankyou URL so removed a select element which blocks users from being able to proceed to checkout without selecting an element to avoid having to select this multiple times.*
## Contents
  * CustomerTagchecker.liquid
    This checks to see if the customer has a tag by one checking if they're logged in or not if they're logged in then there's a loop to check to see if the customer is tagged any of the following industry's as we have a flow where by the customer is tagged whatever industry they pick the flow is triggered by looking at the order attributes and if any order has an industry order attribute it tags the specific customer that ordered.
  * Development Goal
    * The Development goal for this was down to an old system which needed a certain field otherwise there were errors that was caused which need fixing this then meant that we needed to capture this information otherwise those errors would continue therefore I had to implement a sort of block from checkout to capture the customers industry.
  * Why was this necessary?
    * This was absolutely necessary to be done during the time as I put myself in the customers shoes and if I was blocked from ordering the first time from checking out and I had to pick an industry first of all it would create a negative experience but what if that customer maybe forgot to add something to the order and then wanted to go to checkout again? This would then ask for there industry a **Second time** this gave me the idea to create a way in which a script could pick up whether they had ordered and filled the information in previously and if they had and we already captured that data we could then allow the customer to go to checkout without having to pick an industry. This is why there are two checks done:
    1. If the customer is logged in and tagged with an industry we display the checkout button on cart drawer and also don't block them from checking out
    2. If the cookie that is set when the user gets to checkout exists. 
