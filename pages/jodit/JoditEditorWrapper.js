// JoditEditorWrapper.js
import React, { forwardRef } from 'react';
import dynamic from 'next/dynamic';

const JoditEditor = dynamic(() => import('jodit-react'), {
    ssr: false,
});

const JoditEditorWrapper = forwardRef((props, ref) => (
    <JoditEditor {...props} ref={ref} />
));

export default JoditEditorWrapper;
