This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Boilerplate code was written by Ohans Emmanuel which can be found [here] (https://www.freecodecamp.org/news/understanding-redux-the-worlds-easiest-guide-to-beginning-redux-c695f45546f6/).

Compared to the original boilerplate code, there were some things I change. Instead of class based components I used functional components with hooks, and adapted some broken libraries/library changes since he published the book.
I've also extended the boilerplate by adding a delete message button which appears on hover, allowing own messages to be editable, highlighting which message is being edited, and adding an \[edited] tag on submission if the new text is different from the old text.

### Todo list

- [x] Add delete message functionality
- [x] Make own messages editable
- [x] Change styling on selected message
- [ ] Add functionality to unselect message to edit (kinda done, if you send an unedited message it unselects, but no "click elsewhere" functionality)
