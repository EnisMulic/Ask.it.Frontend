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

import Modal from "../Modal";

import * as actions from "../../store/actions";

const NewQuestion = () => {
    const [showModal, setShowModal] = useState(false);

    const dispatch = useDispatch();
    const onQuestionAdd = useCallback(
        (question) => dispatch(actions.addQuestion(question)),
        [dispatch]
    );

    const editorRef = useRef(null);
    const addQuestion = () => {
        if (editorRef.current) {
            onQuestionAdd(editorRef.current.getContent());
            setShowModal(false);
        }
    };

    return (
        <>
            <Button variant="dark" onClick={() => setShowModal(true)}>
                Ask
            </Button>
            <Modal show={showModal} modalClosed={() => setShowModal(false)}>
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
                <button onClick={addQuestion}>Add</button>
            </Modal>
        </>
    );
};

export default NewQuestion;
