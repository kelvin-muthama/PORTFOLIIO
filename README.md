# Kelvin Mutuku Muthama — Portfolio Website

A responsive personal portfolio built with HTML, CSS, and vanilla JavaScript.

## Files
- `index.html` — page content and sections
- `styles.css` — responsive layout and styling
- `script.js` — mobile menu, active navigation, contact form and link configuration
- `assets/` — add your own profile photo, CV, and other assets here

## Run locally
1. Extract the ZIP file.
2. Open `index.html` in a browser.
3. For local development, you can use VS Code with the Live Server extension.

## Personalise before publishing
Open `script.js` and fill in:
- `email`
- `linkedin`
- `github`
- project URLs in `projects`

Replace the hero monogram in `index.html` with your own portrait if desired. Put the photo in `assets/` and replace the `.hero-monogram` element with an image element, then style it in `styles.css`.

Add a real CV PDF to `assets/` and add a download link in the navigation if you want a CV download button. The current site deliberately does not invent contact details, project URLs, a CV, or performance statistics.

## Publish with GitHub Pages
1. Create a GitHub repository, for example `kelvin-portfolio`.
2. Upload the contents of this folder (not the ZIP itself).
3. Open the repository's **Settings → Pages**.
4. Select deployment from the `main` branch and `/ (root)`.
5. Save and wait for GitHub Pages to provide your public website URL.

## Notes
- The contact form opens the visitor's email application with the message prefilled. It does not send data to a server.
- Icons load from the Lucide CDN, and Google Fonts load from Google Fonts, so those parts need an internet connection.
- Review all project descriptions and update them to reflect the exact status of your work before publishing.
