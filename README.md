# Visa Calculator
This website is designed to make it easier for the frequent traveler to plan stays in the 
EU/Schengen area (or other zones and countries with similar visa-free rules). 

## How to use
By simply inputting the start and end dates for your planned stay, as well as any recent stays, 
the calculator will check if you exceed the 90/180-day rule at any point during your planned stay.
The calculated number of days will be displayed in the top section of this website. 
If you spend 90% or more of the total available days, the website will turn orange/yellow and issue a warning. 
If you spend the full 90 days or more, the website will turn red and show the date that you overstay. Additionally, a circle path
will help you understand how big a percentage of the 90 days that you have used.

## Motivation
Being in a long distance relationship with someone from across the Schengen borders, international travel for me and
my partner is frequent, and can make it complicated to manually calculate whether or not we overstay in the Schengen area.
Some Schengen visa calculators already exists (even an official one), but I found their design to be rather archaic and not
fully functional on a smartphone.
I therefore wanted to make a calculator that functions well on both mobile and desktop, with a colourful, playful and simple design.

## Technologies used
HTML, CSS, JavaScript, React, react-datepicker, react-transition-group.

## Improvements made on the previous version of the visa calculator
This project is a continuation of my original visa calculator, which only uses vanilla JavaScript to make the website dynamic. I wanted to use my 
recently aquired knowledge about React to rebuild the website. The styling and functionality is not changed drastically, but some key improvements
have been made:

- The way you input your stays in Schengen have been simplified. There is now only one input form, where previously there was a form for each of the users stays.
- The single date input is now a range. There is not a seperate date input field for 'start' and 'end' dates.
- The user can now remove a specific stay, instead of only being able to remove the last stay on the list.
- The website automatically makes calculations whenever the user adds or removes a stay. There is no longer a need to click a 'calculate' button.
- The list of stays gets automatically sorted by start date of the stays, in descending order. This means that the calculations will always function correctly, no matter which order the user inputs the stays.
- Animations/transitions have been modified. They are now faster, making the website feel more responsive.


## Challenges and ideas for the future
The conversion from vanilla JavaScript to React was relatively simple. The biggest challenge was passing function results to parent and child components. A significant portion of the time was spent on changing the styling of the stays, as well as learning about and using the react-datepicker component. Some work had to be done to resolve a deprecation error from using the react-transition-group library.

Some elements to improve upon:

- Testing the code.
- Understanding best practises for having a significant amount of JavaScript functions in a component (possibly import them from another scripts file?).
- Using different methods of styling components, instead of just using the vanilla, unscoped CSS.
- Using more features of React in general. The project only scratches the surface.
