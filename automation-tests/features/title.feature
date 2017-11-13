Feature: Title check
  I should be able to go the webpage and check the title

Scenario: Get the title of webpage
  Given I go to the website "http://localhost:8080"
  Then I expect the title of the page "React With Webpack"