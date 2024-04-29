# Website Name
afia-b9a10-tourism-management-website

# Live Site URL
https://tourify-now-app.web.app/

# Features
* **Home** page contains a banner, shows all the tourist spots' information dynamically, shows the countries' information dynamically as cards, and lastly shows provided services & customer reviews.
<br>

* By clicking on the view details button of a tourist spot card, we are taken to another page containing that tourist spot's details (name, country, location, cost, travel duration, season, description, the name of the user that added that spot etc.)
<br>

* By clicking on a country card, we taken to a page list of all the tourist spots of that country.
<br>

* **About** page provides a brief description about the purpose and workings of TourifyNow torism management website and contains a contact form.
<br>

* **Destination** shows all the tourists spots as cards and each card has a *View Detail* button that redirects to the specific tourist spot details.
<br>

* **Add Tourist Spots** is a private(route) page. This page contain a form to add a tourist spot. We can provide necessary information in the form and add that tourist spot to database and also the spot will be shown in **Destination** page.
<br>

* **Add Country** is a private(route) page. This page contain a form to add a country's information. We can provide necessary information in the form and add that country's information to database and also that country's information will be shown in **Country** section of the *HomePage*.
<br>

* **Update Tourist Spots** is a private(route) page. This page contain a form to update a tourist spot. We can change information in the form and update that tourist spot's information in database and also the spot's updated information will be shown in **Destination** page.

# Characteristics
* Navigation Bar is fixed across all the pages of the website
<br>

* In the Navigation Bar, when a user is logged in, that user's image and a logout button is shown. Otherwise, Login & Register button is shown
<br>

* By hovering on the user's image their name is shown
<br>

* If an user tries to access a private route without logging in, the user is taken to the **sign in** page and after loggin in, the user is redirected to the intended page
<br>

* Footer section is fixed across all the pages of the website
<br>

* Relevant animations are added on several section of the website using *React Awesome reveal*
<br>

* **Toast** is shown with appropriate message for all the actions and conditions (like register, login, errors, successfull addition and update of tourist spots and addition of country information etc.)
<br>


# Used npm packages -
* React Awesome reveal,
* React-tooltip

