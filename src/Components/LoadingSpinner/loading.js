
import React from 'react'
import "./spinner.css";

export const Loading = (props) => {
    const {
        openLoading
    } = props;
    return (
        <span class="loader"></span>
    )
}