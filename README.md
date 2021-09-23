# EverlyHealth_HomeAssessment

1.Create an automated test file or written test plan for the most critical or risk-prone functionality related to this feature. If you choose to create an automated test file, it can be written in the language/framework of your choice, but cypress.io is preferred. The code is not expected to be executable, but it should be written as if it were able to be run against the QA environment when this feature was deployed.

2. Please answer the following short-response questions:
a.	How would you approach testing at each stage of the development process for this feature?
1.	During the development, the Services testing should be given more priority. If the core logic is working perfectly, it will be easy to fix the UI issues.
2.	Without blocking UI testing, we can use mock services to test UI part.
3.	Once integration is completed, we can complete the UI automation and can run UI automation. When integration is completed, good to do one round of manual testing too. To include the exploratory testing scenarios as well as the user point of view test scenarios.

b. How would you work with the Dev team and at what points in the process?
1. Will work with the dev team closely.
2. Take the collection of services from the dev team to perform API testing. If any issue comes, will raise defects and help them in reproduction of the issues, if needed.
3. Test the UI and Functionality of the application as per the User acceptance criteria. If any issue, raises will help them in reproduction and once the issue resolves performing the retesting. If any logs needed by Dev team, will provide them too. Any specific details needed about the issue occurrence in old environments, will validate and confirm.
4. Closing of the defects when fixed and follow up on the defects when they are working/Not working on it, based on the situation.

c. How would you handle UAC failing during different times in the process?
    At any point of time, if UAC is failing will raise the defects and track them closely.

3. If you were going to be on vacation the day this feature was deployed to staging and needed to be smoke tested, quickly write/explain the steps needed to verify this feature is working as intended and ready for release to production. Pretend as if this would be handed off to the Product Owner to verify the feature.

1.	Generally, when we know the feature deployment planned date, prior. Better not to plan any vacation at that time. If any last-minute issues, raises. QA should support the testing activities.
2.	Due to urgency, if we need to be off and as per pretend condition,
a.	Will have the smoke test cases and functionality test cases written very detailed steps. Can go through them and test them.
b.	Can run the automation in CI/CD process, In Jenkins pipeline, we can specify after deployment is done, should start the automation test cases.
c.	In my experience, we will do hand off to other QA with all the details, not to the Product owner.
4. What other areas would you want to smoke/regression test alongside this feature before it is released?
1. Adding multiple products to the cart and removing the products from the cart.
2. All cart related, promotional code and billing related test cases should be executed as part of regression.
3. Regression testing on complete flow.
Complete flow:  From sign into account, adding to cart, purchased and validating the order list.

5. Identify risks associated with this feature.
If we are giving 5 kits for 1 kit price, if we order 10 kits, will pay only 2 kits price. It may give loss to the organization. One condition, we can avail this only one time after signing in, may be better.

6. Imagine that certain bugs were discovered late in the testing/integration process and the feature was supposed to deploy tomorrow.  How would you communicate the issues to the product owner? Would these issues block or delay the release? Why or why not?

1.	Whenever, we find a defect/bug should be reported immediately. 
2.	After raising defect, the product owner will be part of everyday standup meeting (In agile process).  When we find an issue, it will be updated in the meeting and Dev team will try to find a solution to fix the issue.
3.	Basing on the severity and priority of the issue, it will be decided to fix the issue before deployment or not.
4.	If the plan is to fix the issue and deploy, QA should prepare all the regression cases needs to be tested. Once the issue gets fixed, need to perform testing. Once testing is completed without any issues, we can complete the release process. QA should do the root cause analysis of the issue, why it is not found in the early stage and where it’s been missed. If it is an issue from QA side, should consider all the points in test coverage. If the issue, is not present in early stage and it started coming now due to other implementations, need to provide all these details to dev team, so it helps the dev team to resolve the issue soon.
5.	If the issue cannot be fixed and the dependencies are more, we should explain all the reasons to product owner for blocking or delaying the release.
6.	If the issue is low priority and low severity, may go ahead with the release after discussing with the product owner and the fix will be checked in during the next deployment, and will mention the issue in release notes.
![image](https://user-images.githubusercontent.com/46790237/134535269-d446770d-332b-45de-b4c3-25e7ece238a8.png)
