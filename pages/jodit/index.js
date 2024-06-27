'use client';
import React, { useRef } from 'react';
import dynamic from "next/dynamic";
const JoditEditor = dynamic(() => import("jodit-react"), {
    ssr: false,
});

const customPlugin = dynamic(() => import("./customPlugin"), {
    ssr: false,
});

const EditorPage = () => {
    const editor = useRef(null);
    const config = {
        readonly: false,
        toolbar: true,
        extraButtons: ['customFontSize', 'customFontFamily'],
        plugins: {
            customPlugin
        },
    };

    return (
        <div className='text-red'>
            <h1>Jodit Editor with Custom Plugin</h1>
            <JoditEditor
                ref={editor}
                config={config}
                
            />
        </div>
    );
};

export default EditorPage;
