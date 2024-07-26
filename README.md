# Security UI Demo

## Purpose:

To illustrate a hypothetical security breach scenario in a banking environment.

This website aims to simulate the user experience when a bank customer encounters a phishing email, clicks on a malicious link, and subsequently loses all their funds. Through this visualization, we aim to highlight the potential risks and consequences of cyber attacks, emphasizing the importance of cybersecurity awareness and best practices for both users and institutions.

![screen capture](screenshots/glitch.gif)

## References:

[Collection of design ideas in Figma](https://www.figma.com/design/V4yBgXcdnICrI2Aj7Uretp/Bank-account-references?node-id=0-1&t=45Oh1rioxwNgbPWd-1)

## Tools:

- Created using HTML, CSS, JS, VS Code, GitHub, Figma
- Deployed using GitHub pages

## Tech details:

Clicking on the notification starts a series of JS functions that handle DOM manipulation.

First it animates all elements with money amounts that should be set to 0. Then it adds a fake transfer element to the Payment section to indicate a recent activity in the account. After that it adds a class to the whole HTML body element to imitate a page glitch using CSS. Then it displays a broken screen by enabling display property of this HTML element and setting z-index so the broken screen is visible on top of the UI. Each step is wrapped into a separate JS function that get executed on timer.

Page glitch is implemented using CSS property `text-shadow` with different offset and RGB color (red, blue, green). Animation runs for 2 seconds and adds `text-shadow` with different color and offset to all elements that support this CSS property.

Animation of decreasing numbers is implemented using native Web API - [requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame)
