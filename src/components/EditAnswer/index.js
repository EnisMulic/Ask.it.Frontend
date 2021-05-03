import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Edit } from "react-feather";

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

import http from "../../http";
import * as endpointConstants from "../../constants/endpoints";

const EditAnswer = (props) => {
    const [showModal, setShowModal] = useState(false);

    const editorRef = useRef(null);
    const saveAnswer = () => {
        if (editorRef.current) {
            // onQuestionAdd(editorRef.current.getContent());
            var data = {
                content: editorRef.current.getContent(),
            };
            http.put(
                endpointConstants.UPDATE_ANSWER_ENDPOINT.replace(
                    "{id}",
                    props.ID
                ),
                data
            )
            .catch((err) => console.log(err));
        }
    };

    return (
        <div>
            <Edit onClick={() => setShowModal(true)} size="21" />
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Answer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Editor
                        onInit={(evt, editor) => (editorRef.current = editor)}
                        initialValue={props.Content}
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
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={() => setShowModal(false)}
                    >
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => {
                            saveAnswer();
                            setShowModal(false);
                        }}
                    >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default EditAnswer;
