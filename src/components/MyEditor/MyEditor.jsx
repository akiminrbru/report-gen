import React, { useCallback, useRef, useState } from "react";
import { createReactEditorJS } from "react-editor-js";
import { EDITOR_JS_TOOLS } from "./constants";

const ReactEditorJS = createReactEditorJS();

function MyEditor() {
	const [editorValue, setEditorValue] = useState({
		time: new Date().getTime(),
		blocks: [
			{
				type: "paragraph",
				data: {
					text: "We have been working on this project more than three years. Several large media projects help us to test and debug the Editor, to make it's core more stable. At the same time we significantly improved the API. Now, it can be used to create any plugin for any task. Hope you enjoy. 😏",
				},
			},
		],
		version: "2.1.0",
	});

	const editorJS = useRef(null);

	const handleInitialize = useCallback((instance) => {
		editorJS.current = instance;
	}, []);

	const handleSave = useCallback(async () => {
		const savedData = await editorJS.current.save();
		console.log(savedData);
	}, []);

	const handleClear = useCallback(async () => {
		await editorJS.current.clear();
	}, []);

	return <ReactEditorJS tools={EDITOR_JS_TOOLS} onInitialize={handleInitialize} />;
}

export default MyEditor;
