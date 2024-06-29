import Jodit from 'jodit';

const customPlugin = (editor) => {
    // Add Font Size button
    editor.registerButton({
        name: 'customFontSize',
        iconURL: 'https://img.icons8.com/ios-glyphs/30/000000/resize-horizontal.png', 
        exec: (e) => {
            console.log("=== customFontSize :: ", customFontSize)
            // const fontSize = prompt('Enter font size (e.g., 12px, 1em, 1.5rem):');
            if (fontSize) {
                editor.execCommand('fontSize', fontSize);
            }
        },
    });

    // Add Font Family button
    editor.registerButton({
        name: 'customFontFamily',
        iconURL: 'https://img.icons8.com/ios-glyphs/30/000000/font.png',
        exec: () => {
            // const fontFamily = prompt('Enter font family (e.g., Arial, Verdana, "Times New Roman"):');
            if (fontFamily) {
                editor.execCommand('fontName', fontFamily);
            }
        },
    });
};

// Register the plugin with Jodit
Jodit.plugins.add('customPlugin', customPlugin);
