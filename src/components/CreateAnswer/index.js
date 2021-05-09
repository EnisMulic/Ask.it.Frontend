import React, { useState, useRef, useCallback } from "react";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";

import "tinymce/tinymce";
import "tinymce/icons/default";
import "tinymce/themes/silver";
import "tinymce/plugins/paste";
import "tinymce/plugins/link";
import "tinymce/plugins/table";
import "tinymce/skins/ui/oxide/skin.min.css";
import "tinymce/skins/ui/oxide/content.min.css";
import "tinymce/skins/content/default/content.min.css";
import { Editor } from "@tinymce/tinymce-react";

import * as actions from "../../store/questions/addAnswer";

const CreateAnswer = (props) => {
    const { questionId } = props;
    const [showPrompt, setShowPrompt] = useState(false);

    const dispatch = useDispatch();
    const onAnswerAdd = useCallback(
        (questionId, answer) => dispatch(actions.addAnswer(questionId, answer)),
        [dispatch]
    );

    const editorRef = useRef(null);
    const addAnswer = (questionId) => {
        if (editorRef.current) {
            onAnswerAdd(questionId, editorRef.current.getContent());
        }
    };

    return (
        <div>
            <Button
                variant="dark"
                onClick={() => setShowPrompt(!showPrompt)}
                className="mb-2"
            >
                {showPrompt === false ? "Answer" : "Cancel"}
            </Button>
            {showPrompt && (
                <>
                    <Editor
                        onInit={(evt, editor) => (editorRef.current = editor)}
                        initialValue=""
                        init={{
                            height: 500,
                            menubar: false,
                            plugins: [
                                "advlist autolink lists link image charmap print preview anchor",
                                "searchreplace visualblocks code fullscreen",
                                "insertdatetime media table paste code help wordcount",
                            ],
                            toolbar:
                                "undo redo | formatselect | " +
                                "bold italic backcolor | alignleft aligncenter " +
                                "alignright alignjustify | bullist numlist outdent indent | " +
                                "removeformat | help",
                            content_style:
                                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                        }}
                    />
                    <Button
                        variant="dark"
                        className="mt-2"
                        onClick={() => {
                            addAnswer(questionId);
                            setShowPrompt(false);
                        }}
                    >
                        Save
                    </Button>
                </>
            )}
        </div>
    );
};

export default CreateAnswer;
