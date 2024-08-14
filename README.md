### The Frontend Mentor Challenge
### Your users should be able to:
- Search for words using the input field
- See the Free Dictionary API's response for the searched word
- See a form validation message when trying to submit a blank form
- Play the audio file for a word when it's available
- Switch between serif, sans serif, and monospace fonts
- Switch between light and dark themes
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Bonus: Have the correct color scheme chosen for them based on their computer preferences. Hint: Research prefers-color-scheme in CSS.

### I have used
- "https://api.dictionaryapi.dev/api/v2/entries/en/`(word)`" - API to fetch data from

### Compile sass using command line:
1. See if you have sass installed:
    ~~~
    sass --version
    ~~~
2. If not install it globally:
    ~~~
    npm install -g sass
    ~~~
3. To compile scss into css type folowing:
    ~~~
    sass --watch styles.scss:styles.css
    ~~~
4. To compile scss into minified css type folowing (according to this project's directory):
   ~~~
   --style compressed -w scss/styles.scss:css/styles.min.css
   ~~~

#### User device's theme preference
- `@media (prefers-color-scheme: dark){...}` -- Detect user device's theme preference in css
- `const prefersDark = window.matchMedia("(prefers-color-scheme: dark)")` -- get user's theme preference value in js
- `prefersDark.matches && (switcher.checked = true)` - change checkbox value based on theme preference
