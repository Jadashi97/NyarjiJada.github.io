import React from 'react';
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogOverlay,
} from "@chakra-ui/react";
import {useAlertContext } from "../context/alertContext";
import {useRef} from "react";

/**
 * This is a global component that uses context to display a global alert message.
 */

export default function Alert() {
    const {isOpen, type, message, onClose} = useAlertContext();

    return (
        <div>
        
        </div>
    )
}
