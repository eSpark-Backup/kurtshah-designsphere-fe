//Capitalize
export const capitalizeText = (editor) => {
    console.log(editor);

    const { from, to } = editor.state.selection;
    const selectedText = editor.state.doc.textBetween(from, to);
    const capitalizedText = selectedText.replace(/\b\w/g, char => char.toUpperCase());
    editor.chain().focus().insertContent(capitalizedText, { from, to }).run();
};


//Font Family
export const handleFontFamilyChange = (event, editor, setFontFamily) => {
    console.log(event.target.value);

    const selectedFont = event.target.value;
    setFontFamily(selectedFont);

    editor.chain().focus().setFontFamily(selectedFont).run();
};

//Font Size
export const handleFontSizeChange = (event, editor) => {
    const selectedSize = `${event.target.value}px`;
    editor.chain().focus().setFontSize(selectedSize).run();
};


//Space Before
export const handleSpaceBeforeChange = (event, editor) => {
    const newSpaceCount = Number(event.target.value);
    const { from } = editor.state.selection;

    // Get the existing content before the selection
    const contentBefore = editor.state.doc.textBetween(from - 50, from, '\n');

    // Count existing spaces before the selection
    const currentSpaceCount = contentBefore.match(/^\s*/)[0].length;

    // Determine the number of spaces to add or remove
    const spaceDifference = newSpaceCount - currentSpaceCount;

    if (spaceDifference !== 0) {
        if (spaceDifference > 0) {
            // Add spaces
            const spaceBefore = ' '.repeat(spaceDifference);
            editor.chain().focus().insertContentAt(from, spaceBefore).run();
        } else {
            // Remove spaces
            editor.chain().focus().deleteRange({ from: from + spaceDifference, to: from }).run();
        }
    }
};


export const handleSpaceAfterChange = (event, editor) => {
    const newSpaceCount = Number(event.target.value);
    const { to } = editor.state.selection;

    // Get the existing content after the selection
    const contentAfter = editor.state.doc.textBetween(to, to + 1, '\n');

    // Count existing spaces after the selection
    const currentSpaceCount = contentAfter.match(/^\s*/)[0].length;

    // Determine the number of spaces to add or remove
    const spaceDifference = newSpaceCount - currentSpaceCount;

    if (spaceDifference !== 0) {
        if (spaceDifference > 0) {
            // Add spaces
            const spaceAfter = ' '.repeat(spaceDifference);
            editor.chain().focus().insertContentAt(to, spaceAfter).run();
        } else {
            // Remove spaces
            const from = to;
            const toDelete = to - Math.abs(spaceDifference); // spaceDifference is negative, so this subtracts
            editor.chain().focus().deleteRange({ from: toDelete, to: from }).run();
        }
    }
};
