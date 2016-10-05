import React from 'react';

const DEFULAT_SIZE = 24;
const DEFULAT_COLOR = "#FFFFFF";

// Google Material Icon set
export function mobileNumber(size, color) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    let _color = color !== undefined ? color : DEFULAT_COLOR
    return (
        <svg fill={_color} height={_size} viewBox="0 0 24 24" width={_size} xmlns="http://www.w3.org/2000/svg">
            <path
                d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
    );
}
export function homeNumber(size, color) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    let _color = color !== undefined ? color : DEFULAT_COLOR
    return (
        <svg fill={_color} height={_size} viewBox="0 0 24 24" width={_size} xmlns="http://www.w3.org/2000/svg">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
    );
}
export function workNumber(size, color) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    let _color = color !== undefined ? color : DEFULAT_COLOR
    return (
        <svg fill={_color} height={_size} viewBox="0 0 24 24" width={_size} xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path
                d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
        </svg>
    );
}
export function otherNumber(size, color) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    let _color = color !== undefined ? color : DEFULAT_COLOR
    return (
        <svg fill={_color} height={_size} viewBox="0 0 24 24" width={_size} xmlns="http://www.w3.org/2000/svg">
            <path
                d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
    );
}
export function favorite_heart(size, color) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    let _color = color !== undefined ? color : DEFULAT_COLOR
    return (
        <svg fill={_color} height={_size} viewBox="0 0 24 24" width={_size} xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
    );
}
export function micOn(size, color) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    let _color = color !== undefined ? color : DEFULAT_COLOR
    return (
        <svg fill={_color} height={_size} viewBox="0 0 24 24" width={_size} xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
    );
}

export function micOff(size, color) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    let _color = color !== undefined ? color : DEFULAT_COLOR
    return (
        <svg fill={_color} height={_size} viewBox="0 0 24 24" width={_size} xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0zm0 0h24v24H0z" fill="none"/>
            <path
                d="M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28zm-4.02.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18l5.98 5.99zM4.27 3L3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73 4.27 3z"/>
        </svg>
    );
}
export function micZero(size, color) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    let _color = color !== undefined ? color : DEFULAT_COLOR
    return (
        <svg fill={_color} height={_size} viewBox="0 0 24 24" width={_size} xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1.2-9.1c0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2l-.01 6.2c0 .66-.53 1.2-1.19 1.2-.66 0-1.2-.54-1.2-1.2V4.9zm6.5 6.1c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
    );
}
export function speakerOn(size, color) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    let _color = color !== undefined ? color : DEFULAT_COLOR
    return (
        <svg fill={_color} height={_size} viewBox="0 0 24 24" width={_size} xmlns="http://www.w3.org/2000/svg">
            <path
                d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
    );
}
export function speakerOff(size, color) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    let _color = color !== undefined ? color : DEFULAT_COLOR
    return (
        <svg fill={_color} height={_size} viewBox="0 0 24 24" width={_size} xmlns="http://www.w3.org/2000/svg">
            <path
                d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
    );
}
export function speakerZero(size, color) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    let _color = color !== undefined ? color : DEFULAT_COLOR
    return (
        <svg fill={_color} height={_size} viewBox="0 0 24 24" width={_size} xmlns="http://www.w3.org/2000/svg">
            <path d="M7 9v6h4l5 5V4l-5 5H7z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
    );
}
export function speakerHalf(size, color) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    let _color = color !== undefined ? color : DEFULAT_COLOR
    return (
        <svg fill={_color} height={_size} viewBox="0 0 24 24" width={_size} xmlns="http://www.w3.org/2000/svg">
            <path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
    );
}


export function favoritePerson(size, color) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    let _color = color !== undefined ? color : DEFULAT_COLOR
    return (
        <svg fill={_color} height={_size} viewBox="0 0 24 24" width={_size} xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
    );
}

export function addPlus(size, color) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    let _color = color !== undefined ? color : DEFULAT_COLOR
    return (
        <svg fill={_color} height={_size} viewBox="0 0 24 24" width={_size} xmlns="http://www.w3.org/2000/svg">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
    );
}

export function editPencil(size, color) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    let _color = color !== undefined ? color : DEFULAT_COLOR
    return (
        <svg fill={_color} height={_size} viewBox="0 0 24 24" width={_size} xmlns="http://www.w3.org/2000/svg">
            <path
                d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
    );
}

export function moreArrow(size, color) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    let _color = color !== undefined ? color : DEFULAT_COLOR
    return (
        <svg fill={_color} height={_size} viewBox="0 0 24 24" width={_size} xmlns="http://www.w3.org/2000/svg">
            <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"/>
            <path d="M0-.75h24v24H0z" fill="none"/>
        </svg>
    );
}

export function lockPadlock(size, color) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    let _color = color !== undefined ? color : DEFULAT_COLOR
    return (
        <svg fill={_color} height={_size} viewBox="0 0 24 24" width={_size} xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path
                d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
        </svg>
    );
}

export function settingGear(size, color) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    let _color = color !== undefined ? color : DEFULAT_COLOR
    return (
        <svg fill={_color} height={_size} viewBox="0 0 24 24" width={_size} xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path
                d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/>
        </svg>
    );
}
export function closeX(size, color) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    let _color = color !== undefined ? color : DEFULAT_COLOR
    return (
        <svg fill={_color} height={_size} viewBox="0 0 24 24" width={_size} xmlns="http://www.w3.org/2000/svg">
            <path
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
    );
}
export function minimizeBar(size, color) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    let _color = color !== undefined ? color : DEFULAT_COLOR
    return (
        <svg fill={_color} height={_size} viewBox="0 0 24 24" width={_size} xmlns="http://www.w3.org/2000/svg">
            <path d="M19 13H5v-2h14v2z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
    );
}
export function callPhone(size, color) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    let _color = color !== undefined ? color : DEFULAT_COLOR
    return (
        <svg fill={_color} height={_size} viewBox="0 0 24 24" width={_size} xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path
                d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
    );
}
export function callLettering(size, color) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    let _color = color !== undefined ? color : DEFULAT_COLOR
    return (
        <svg fill={_color} height={_size} viewBox="0 0 24 24" width={_size} xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path
                d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2c0-4.97-4.03-9-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z"/>
        </svg>
    );
}
export function callEnd(size, color) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    let _color = color !== undefined ? color : DEFULAT_COLOR
    return (
        <svg fill={_color} height={_size} viewBox="0 0 24 24" width={_size} xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path
                d="M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85-.18.18-.43.28-.7.28-.28 0-.53-.11-.71-.29L.29 13.08c-.18-.17-.29-.42-.29-.7 0-.28.11-.53.29-.71C3.34 8.78 7.46 7 12 7s8.66 1.78 11.71 4.67c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-2.48 2.48c-.18.18-.43.29-.71.29-.27 0-.52-.11-.7-.28-.79-.74-1.69-1.36-2.67-1.85-.33-.16-.56-.5-.56-.9v-3.1C15.15 9.25 13.6 9 12 9z"/>
        </svg>
    );
}
export function xmsText(size, color) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    let _color = color !== undefined ? color : DEFULAT_COLOR
    return (
        <svg fill={_color} height={_size} viewBox="0 0 24 24" width={_size} xmlns="http://www.w3.org/2000/svg">
            <path
                d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
    );
}
export function searchMagnifier(size, color) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    let _color = color !== undefined ? color : DEFULAT_COLOR
    return (
        <svg fill={_color} height={_size} viewBox="0 0 24 24" width={_size} xmlns="http://www.w3.org/2000/svg">
            <path
                d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
    );
}
export function callMissed(size, color) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    let _color = color !== undefined ? color : DEFULAT_COLOR
    return (
        <svg fill={_color} height={_size} viewBox="0 0 24 24" width={_size} xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M19.59 7L12 14.59 6.41 9H11V7H3v8h2v-4.59l7 7 9-9z"/>
        </svg>
    );
}
export function callDeclined(size, color) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    let _color = color !== undefined ? color : DEFULAT_COLOR
    return (
        <svg fill={_color} height={_size} viewBox="0 0 24 24" width={_size} xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"/>
        </svg>
    );
}
export function callReceived(size, color) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    let _color = color !== undefined ? color : DEFULAT_COLOR
    return (
        <svg fill={_color} height={_size} viewBox="0 0 24 24" width={_size} xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M20 5.41L18.59 4 7 15.59V9H5v10h10v-2H8.41z"/>
        </svg>
    );
}
export function callMade(size, color) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    let _color = color !== undefined ? color : DEFULAT_COLOR
    return (
        <svg fill={_color} height={_size} viewBox="0 0 24 24" width={_size} xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z"/>
        </svg>
    );
}
export function callOthers(size, color) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    let _color = color !== undefined ? color : DEFULAT_COLOR
    return (
        <svg fill={_color} height={_size} viewBox="0 0 24 24" width={_size} xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path
                d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"/>
        </svg>
    );
}
export function callSwap(size, color) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    let _color = color !== undefined ? color : DEFULAT_COLOR
    return (
        <svg fill={_color} height={_size} viewBox="0 0 24 24" width={_size} xmlns="http://www.w3.org/2000/svg">
            <path
                d="M18 4l-4 4h3v7c0 1.1-.9 2-2 2s-2-.9-2-2V8c0-2.21-1.79-4-4-4S5 5.79 5 8v7H2l4 4 4-4H7V8c0-1.1.9-2 2-2s2 .9 2 2v7c0 2.21 1.79 4 4 4s4-1.79 4-4V8h3l-4-4z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
    );
}
export function notiBell(size, color) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    let _color = color !== undefined ? color : DEFULAT_COLOR
    return (
        <svg fill={_color} height={_size} viewBox="0 -1 24 24" width={_size} xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
        </svg>
    );
}

export function notiOffBell(size, color) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    let _color = color !== undefined ? color : DEFULAT_COLOR
    return (
        <svg fill={_color} height={_size} viewBox="0 -1 24 24" width={_size} xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path
                d="M20 18.69L7.84 6.14 5.27 3.49 4 4.76l2.8 2.8v.01c-.52.99-.8 2.16-.8 3.42v5l-2 2v1h13.73l2 2L21 19.72l-1-1.03zM12 22c1.11 0 2-.89 2-2h-4c0 1.11.89 2 2 2zm6-7.32V11c0-3.08-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68c-.15.03-.29.08-.42.12-.1.03-.2.07-.3.11h-.01c-.01 0-.01 0-.02.01-.23.09-.46.2-.68.31 0 0-.01 0-.01.01L18 14.68z"/>
        </svg>
    );
}

export function minimizeWindow(size, color) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    let _color = color !== undefined ? color : DEFULAT_COLOR
    return (
        <svg fill={_color} height={_size} viewBox="0 0 24 24" width={_size} xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path
                d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
        </svg>
    );
}
export function checkDone(size, color) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    let _color = color !== undefined ? color : DEFULAT_COLOR
    return (
        <svg fill={_color} height={_size} viewBox="0 0 24 24" width={_size} xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
        </svg>
    );
}
export function volumeSpeaker(size, color) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    let _color = color !== undefined ? color : DEFULAT_COLOR
    return (
        <svg fill={_color} height={_size} viewBox="0 0 24 24" width={_size} xmlns="http://www.w3.org/2000/svg">
            <path
                d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
    );
}
export function dialPad(size, color) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    let _color = color !== undefined ? color : DEFULAT_COLOR
    return (
        <svg fill={_color} height={_size} viewBox="0 0 24 24" width={_size} xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path
                d="M12 19c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12-8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-6 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
        </svg>
    );
}
export function forumText(size, color) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    let _color = color !== undefined ? color : DEFULAT_COLOR
    return (
        <svg fill={_color} height={_size} viewBox="0 0 24 24" width={_size} xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path
                d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"/>
        </svg>
    );
}
export function surveyText(size, color) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    let _color = color !== undefined ? color : DEFULAT_COLOR
    return (
        <svg fill={_color} height={_size} viewBox="0 0 24 24" width={_size} xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path
                d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 14H6v-2h2v2zm0-3H6V9h2v2zm0-3H6V6h2v2zm7 6h-5v-2h5v2zm3-3h-8V9h8v2zm0-3h-8V6h8v2z"/>
        </svg>
    );
}
export function surveyPoll(size, color) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    let _color = color !== undefined ? color : DEFULAT_COLOR
    return (
        <svg fill={_color} height={_size} viewBox="0 0 24 24" width={_size} xmlns="http://www.w3.org/2000/svg">
            <path
                d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
    );
}
export function peopleList(size, color) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    let _color = color !== undefined ? color : DEFULAT_COLOR
    return (
        <svg fill={_color} height={_size} viewBox="0 0 24 24" width={_size} xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path
                d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
        </svg>
    );
}
export function disconnectPhone(size, color) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    let _color = color !== undefined ? color : DEFULAT_COLOR
    return (
        <svg fill={_color} height={_size} viewBox="0 0 24 24" width={_size} xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path
                d="M13 8.2l-1-1-4 4-4-4-1 1 4 4-4 4 1 1 4-4 4 4 1-1-4-4 4-4zM19 1H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z"/>
        </svg>
    );
}
export function errorExclamation(size, color) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    let _color = color !== undefined ? color : DEFULAT_COLOR
    return (
        <svg fill={_color} height={_size} viewBox="0 0 24 24" width={_size} xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
        </svg>
    );
}


// 디자이너 한테 받음
export function loginPin(size) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={_size} height={_size} viewBox="0 0 120 120" enableBackground="new 0 0 120 120" >
            <g>
                <path fillRule="evenodd" clipRule="evenodd" fill="#FFFFFF" d="M101.5,65.526h-83c-1.657,0-3-1.344-3-3v-17c0-1.656,1.343-3,3-3
                    h83c1.657,0,3,1.344,3,3v17C104.5,64.183,103.157,65.526,101.5,65.526z M47.13,52.039l-2.285,0.958l0.343-2.646h-1.863l0.334,2.646
                    l-2.294-0.958l-0.571,1.626l2.47,0.378l-1.749,1.986l1.45,1.002l1.283-2.329l1.292,2.329l1.459-1.002l-1.758-1.986l2.47-0.378
                    L47.13,52.039z M57.139,52.039l-2.285,0.958l0.343-2.646h-1.863l0.334,2.646l-2.294-0.958l-0.571,1.626l2.47,0.378l-1.749,1.986
                    l1.45,1.002l1.283-2.329l1.292,2.329l1.459-1.002l-1.758-1.986l2.47-0.378L57.139,52.039z M67.147,52.039l-2.285,0.958l0.343-2.646
                    h-1.863l0.334,2.646l-2.294-0.958l-0.571,1.626l2.47,0.378l-1.749,1.986l1.45,1.002l1.283-2.329l1.292,2.329l1.459-1.002
                    l-1.758-1.986l2.47-0.378L67.147,52.039z M77.157,52.039l-2.285,0.958l0.343-2.646h-1.863l0.334,2.646l-2.294-0.958l-0.571,1.626
                    l2.47,0.378l-1.749,1.986l1.45,1.002l1.283-2.329l1.292,2.329l1.459-1.002l-1.758-1.986l2.47-0.378L77.157,52.039z"/>
                <path fillRule="evenodd" clipRule="evenodd" fill="#FFFFFF" d="M67.131,90.526H50.844c-0.739,0-1.344-0.605-1.344-1.345
                    l0.006-10.317c0-0.739,0.599-1.344,1.338-1.344h16.287c0.739,0,1.345,0.604,1.345,1.344v10.317
                    C68.476,89.921,67.87,90.526,67.131,90.526z M54.311,80.558h-2.136v6.969h1.252v-2.471h0.738c0.721,0.019,1.319-0.188,1.795-0.616
                    c0.476-0.429,0.714-0.995,0.714-1.699C56.675,81.285,55.887,80.558,54.311,80.558z M59.527,86.461h-0.571v-4.833h0.571v-1.07
                    h-2.386v1.07h0.563v4.833h-0.563v1.065h2.386V86.461z M66.137,80.558h-1.191v4.161c0,0.527,0.012,0.853,0.036,0.976h-0.018
                    c-0.065-0.127-0.167-0.307-0.309-0.54l-2.759-4.597h-1.398v6.969h1.195v-4.18c0-0.5-0.012-0.859-0.035-1.08h0.019
                    c0.075,0.168,0.172,0.348,0.289,0.539l2.861,4.721h1.31V80.558z M54.065,83.999h-0.637v-2.367h0.664c0.847,0,1.27,0.387,1.27,1.16
                    C55.361,83.597,54.929,83.999,54.065,83.999z"/>
                <path fillRule="evenodd" clipRule="evenodd" fill="#FFFFFF" d="M80.729,106.506H38.266c-2.648,0-4.794-2.146-4.794-4.794V18.288
                    c0-2.647,2.146-4.794,4.794-4.794h42.462c2.648,0,4.795,2.146,4.795,4.794v83.424C85.523,104.359,83.377,106.506,80.729,106.506z
                     M55.5,102.526h9c0.553,0,1-0.447,1-1s-0.447-1-1-1h-9c-0.552,0-1,0.447-1,1S54.948,102.526,55.5,102.526z M83.519,22.543H35.474
                    v73.998h48.045V22.543z"/>
            </g>
        </svg>
    );
}
export function loginDevice(size) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={_size} height={_size} viewBox="0 0 120 120" enableBackground="new 0 0 120 120" >
            <g>
                <path fillRule="evenodd" clipRule="evenodd" fill="#FFFFFF" d="M114.826,101.993H5.174c-1.207,0-2.185-0.979-2.185-2.186V28.186
                    c0-1.206,0.978-2.184,2.185-2.184h48.828v-6.995c0-0.552,0.448-1,1-1h11c0.553,0,1,0.448,1,1v6.995h47.824
                    c1.207,0,2.185,0.978,2.185,2.184v71.622C117.011,101.015,116.033,101.993,114.826,101.993z M113.004,29.997H67.002v5.01
                    c0,0.553-0.447,1-1,1h-11c-0.552,0-1-0.447-1-1v-5.01H6.981v68.023h106.023V29.997z M17.761,50.03H56.2
                    c0.433,0,0.784,0.351,0.784,0.783v26.433c0,0.433-0.351,0.784-0.784,0.784H41.001v4.986h4.993v1.988H28.01v-1.988h5V78.03H17.761
                    c-0.433,0-0.784-0.352-0.784-0.784V50.813C16.977,50.381,17.328,50.03,17.761,50.03z M34.515,69.318l10.862-10.862l-1.702-1.713
                    l-9.16,9.159l-4.333-4.321l-1.702,1.703L34.515,69.318z M104.002,57.007h-36v-7h36V57.007z M104.002,70.007h-36v-7h36V70.007z
                     M89.002,83.007h-21v-7h21V83.007z"/>
            </g>
        </svg>
    );
}
export function loginPassword(size) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={_size} height={_size} viewBox="0 0 120 120" enableBackground="new 0 0 120 120" >
            <g>
                <path fillRule="evenodd" clipRule="evenodd" fill="#FFFFFF" d="M110.826,91.002h-38.8v11.017h11.976v1.971H35.997v-1.971h12.025
                    V91.002H9.174c-1.207,0-2.185-0.978-2.185-2.185V18.195c0-1.206,0.978-2.185,2.185-2.185h101.652c1.207,0,2.185,0.979,2.185,2.185
                    v70.622C113.011,90.024,112.033,91.002,110.826,91.002z M109.004,20.006H10.98V80.03h98.023V20.006z M46.018,37.116l-0.203-3.248
                    h1.855l-0.232,3.313l2.701-1.179l0.557,1.763l-2.867,0.836l1.902,2.449l-1.494,1.086l-1.605-2.719l-1.588,2.626l-1.503-1.039
                    l1.986-2.515l-2.84-0.836l0.565-1.744L46.018,37.116z M66.778,46.961c4.997,0,9.059,4.061,9.059,9.059s-4.062,9.059-9.059,9.059
                    c-3.94,0-7.293-2.521-8.531-6.039h-7.255v5.977h-4.977v-5.977H42.99V53h15.257C59.485,49.481,62.838,46.961,66.778,46.961z
                     M66.778,59.039c1.66,0,3.019-1.359,3.019-3.02c0-1.661-1.358-3.02-3.019-3.02c-1.661,0-3.02,1.358-3.02,3.02
                    C63.759,57.68,65.117,59.039,66.778,59.039z M75.315,41.051l-1.494,1.086l-1.605-2.719l-1.587,2.626l-1.504-1.039l1.986-2.515
                    l-2.84-0.836l0.566-1.744l2.766,1.206l-0.204-3.248h1.855l-0.231,3.313l2.7-1.179l0.557,1.763l-2.867,0.836L75.315,41.051z
                     M66.787,41.051l-1.494,1.086l-1.605-2.719l-1.587,2.626l-1.504-1.039l1.986-2.515l-2.84-0.836l0.565-1.744l2.767,1.206
                    l-0.205-3.248h1.856l-0.231,3.313l2.7-1.179l0.557,1.763l-2.867,0.836L66.787,41.051z M58.258,41.051l-1.494,1.086l-1.605-2.719
                    l-1.586,2.626l-1.504-1.039l1.986-2.515l-2.84-0.836l0.566-1.744l2.766,1.206l-0.205-3.248h1.856l-0.231,3.313l2.7-1.179
                    l0.557,1.763l-2.868,0.836L58.258,41.051z"/>
            </g>
        </svg>
    );
}
export function loginSync(size) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={_size} height={_size} viewBox="0 0 120 120" enableBackground="new 0 0 120 120" >
            <g>
                <path fillRule="evenodd" clipRule="evenodd" fill="#FFFFFF" d="M110.826,91.003h-38.8v11.016h11.976v1.971H35.997v-1.971h12.025
                    V91.003H9.174c-1.207,0-2.185-0.979-2.185-2.186V18.195c0-1.206,0.978-2.185,2.185-2.185h101.652c1.207,0,2.185,0.979,2.185,2.185
                    v70.622C113.011,90.024,112.033,91.003,110.826,91.003z M109.004,20.006H10.981V80.03h98.023V20.006z"/>
            </g>
            <g>
                <path fill="#FFFFFF" d="M74.42,49.578h5.408l-7.21-7.211l-7.211,7.211h5.408c0,5.969-4.849,10.816-10.815,10.816
                    c-1.82,0-3.551-0.45-5.047-1.262l-2.632,2.632C54.537,63.172,57.17,64,60,64C67.967,64,74.42,57.547,74.42,49.578z M49.185,49.578
                    c0-5.968,4.849-10.817,10.815-10.817c1.82,0,3.551,0.451,5.047,1.262l2.632-2.632c-2.217-1.406-4.849-2.236-7.679-2.236
                    c-7.967,0-14.42,6.455-14.42,14.423h-5.408l7.211,7.211l7.209-7.211H49.185z"/>
            </g>
        </svg>
    );
}
export function loginLock(size) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={_size} height={_size} viewBox="0 0 120 120" enableBackground="new 0 0 120 120" >
            <g>
                <path fillRule="evenodd" clipRule="evenodd" fill="#FFFFFF" d="M95.907,109.736H24.093c-1.301,0-2.354-1.054-2.354-2.354V54.404
                    c0-1.3,1.054-2.354,2.354-2.354h71.814c1.301,0,2.354,1.054,2.354,2.354v52.979C98.262,108.683,97.208,109.736,95.907,109.736z
                     M60.589,67.354c-4.552,0-8.241,3.69-8.241,8.242c0,3.191,1.819,5.955,4.474,7.323v6.804c0,2.08,1.687,3.768,3.768,3.768
                    c2.08,0,3.768-1.688,3.768-3.768v-6.804c2.654-1.368,4.474-4.132,4.474-7.323C68.83,71.044,65.14,67.354,60.589,67.354z"/>
                <path fillRule="evenodd" clipRule="evenodd" fill="#FFFFFF" d="M79.952,64.411c0.039-0.513,0.078-1.025,0.078-1.548V38.675
                    c0-11.062-8.968-20.03-20.03-20.03s-20.03,8.968-20.03,20.03v24.188c0,0.522,0.039,1.035,0.078,1.548h-8.672V38.888
                    c0-15.809,12.815-28.624,28.624-28.624s28.624,12.815,28.624,28.624v25.523H79.952z"/>
            </g>
        </svg>
    );
}


export function starFull(size, color) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    let _color = color !== undefined ? color : DEFULAT_COLOR
    return (
        <svg fill={_color} height={_size} viewBox="0 0 48 48" width={_size} xmlns="http://www.w3.org/2000/svg">
            <path fill="none" d="M0,0h48v48H0V0z"/>
            <path fill="none" d="M0,0h48v48H0V0z"/>
            <g>
                <path fill={_color} d="M38.54,23.83l1.681-1.456c2.078-1.8,1.537-3.464-1.203-3.696l-2.207-0.188l-7.19-0.61l-2.81-6.63
                    l-0.859-2.026c-1.073-2.532-2.829-2.532-3.902,0l-0.859,2.026l-2.81,6.63l-7.19,0.61l-2.207,0.188
                    c-2.74,0.232-3.281,1.896-1.203,3.696L9.46,23.83l5.46,4.729l-1.64,7.03l-0.504,2.161c-0.625,2.678,0.791,3.706,3.145,2.285
                    l1.899-1.146L24,35.16l6.18,3.729l1.899,1.146c2.354,1.421,3.77,0.393,3.145-2.285L34.72,35.59l-1.64-7.03L38.54,23.83z"/>
            </g>
        </svg>
    );
}
export function starBorder(size, color) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    let _color = color !== undefined ? color : DEFULAT_COLOR
    return (
        <svg fill={_color} height={_size} viewBox="0 0 48 48" width={_size} xmlns="http://www.w3.org/2000/svg">
            <path fill="none" d="M0,0h48v48H0V0z"/>
            <path fill={_color} d="M39.018,18.678l-2.207-0.188l-7.19-0.61l-2.81-6.63l-0.859-2.026c-1.073-2.532-2.829-2.532-3.902,0
                l-0.859,2.026l-2.81,6.63l-7.19,0.61l-2.207,0.188c-2.74,0.232-3.281,1.896-1.203,3.696L9.46,23.83l5.46,4.729l-1.64,7.03
                l-0.504,2.161c-0.625,2.678,0.791,3.706,3.145,2.285l1.899-1.146L24,35.16l6.18,3.729l1.899,1.146
                c2.354,1.421,3.77,0.393,3.145-2.285L34.72,35.59l-1.64-7.03l5.46-4.729l1.681-1.456C42.299,20.574,41.758,18.91,39.018,18.678z
                 M34.659,22.981l-1.809,1.569l-1.81,1.569l-1.511,1.311l1,4.279l0.545,2.333c0.25,1.071-0.315,1.481-1.256,0.912l-2.059-1.245
                l-3.771-2.279l-3.76,2.27l-2.048,1.236c-0.941,0.569-1.507,0.158-1.257-0.913l0.545-2.333l1-4.28l-1.51-1.31l-1.811-1.57
                l-1.81-1.569c-0.001,0-0.001-0.001-0.001-0.002c-0.829-0.719-0.612-1.386,0.481-1.481l2.389-0.207l2.388-0.207h0.001l1.991-0.173
                l1.7-4.029l0.923-2.188c0.428-1.014,1.128-1.014,1.557-0.001l0.931,2.198l1.71,4.039l4.38,0.381l2.388,0.207
                C35.273,21.594,35.49,22.261,34.659,22.981z"/>
        </svg>
    );
}

export function checkNormal(size) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" x="0px" y="0px"
             width={_size} height={_size} viewBox="0 0 48 48" enableBackground="new 0 0 48 48">
            <path fill="rgba(255,255,255,0.5)"
                  d="M42.8,5.3v37.3H5.3V5.3H42.8 M42.8,0H5.3C2.4,0,0,2.4,0,5.3v37.3c0,3,2.4,5.4,5.3,5.4h37.4 c2.9,0,5.3-2.4,5.3-5.3V5.3C48.1,2.4,45.7,0,42.8,0z"/>
        </svg>
    );
}
export function checkSelected(size) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" x="0px" y="0px"
             width={_size} height={_size} viewBox="0 0 48 48" enableBackground="new 0 0 48 48">
            <path fill="rgba(255,255,255,1)"
                  d="M42.8,0H5.3C2.4,0,0,2.4,0,5.3v37.3c0,3,2.4,5.4,5.3,5.4h37.4c3,0,5.3-2.4,5.3-5.3V5.3 C48.1,2.4,45.7,0,42.8,0z M18.5,37.3L5.2,24L9,20.2l9.6,9.5L38.8,9.5l3.8,3.8L18.5,37.3z"/>
        </svg>
    );
}
export function inputBirthday(size) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" x="0px" y="0px"
             width={_size} height={_size} viewBox="0 0 48 48" enableBackground="new 0 0 48 48">
            <g>
                <g>
                    <path fill="#C0BFBF"
                          d="M43.5,4.7h-39C2.2,4.7,0.2,6.6,0.2,9v30c0,2.4,1.9,4.3,4.3,4.3h38.9c2.4,0,4.3-1.9,4.3-4.3V9 C47.8,6.6,45.8,4.7,43.5,4.7z M15.1,13.3c2.9,0,5.3,2.4,5.3,5.3S18.1,24,15.1,24c-2.9,0-5.3-2.4-5.3-5.3 C9.8,15.8,12.2,13.3,15.1,13.3z M25.8,34.7H4.5v-1.8c0-3.6,7.1-5.5,10.7-5.5c3.6,0,10.7,2,10.7,5.5v1.8H25.8z M43,34.7H30.2v-2.1 H43V34.7z M43,26.1H30.2V24H43V26.1z M43,17.6H30.2v-2.1H43V17.6z"/>
                </g>
            </g>
        </svg>
    );
}
export function inputPhone(size) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" x="0px" y="0px"
             width={_size} height={_size} viewBox="0 0 48 48" enableBackground="new 0 0 48 48">
            <path fill="#C0BFBF"
                  d="M34.2,1.4l-20.4,0c-2.5,0-4.5,2-4.5,4.5v36.2c0,2.5,2,4.5,4.5,4.5h20.4c2.5,0,4.5-2,4.5-4.5V5.9 C38.7,3.4,36.7,1.4,34.2,1.4z M34.2,37.6H13.8V10.4h20.4V37.6z"/>
        </svg>
    );
}
export function inputSms(size) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" x="0px" y="0px"
             width={_size + 3} height={_size + 3} viewBox="0 0 48 48" enableBackground="new 0 0 48 48">
            <path fill="#C0BFBF"
                  d="M45.5,17.6c0-1.5-0.8-2.9-2-3.7L24,2.6L4.5,14c-1.2,0.8-2,2.1-2,3.7v21.5c0,2.4,1.9,4.3,4.3,4.3h34.4 c2.4,0,4.3-1.9,4.3-4.3L45.5,17.6z M24,28.4L6.2,17.3L24,6.9l17.8,10.4L24,28.4z"/>
        </svg>
    );
}
export function inputDevice(size) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" x="0px" y="0px"
             width={_size} height={_size} viewBox="0 0 48 48" enableBackground="new 0 0 48 48">
            <path fill="#C0BFBF"
                  d="M43.078,1.639H4.922c-2.523,0-4.589,2.066-4.589,4.592v26.161c0,2.523,2.065,4.59,4.589,4.59h14.881v4.789 h-4.588v4.59h18.362v-4.59h-4.59v-4.789h14.091c2.522,0,4.589-2.066,4.589-4.59V6.231C47.667,3.705,45.601,1.639,43.078,1.639z M43.078,32.393H4.922V6.231h38.156V32.393z"/>
        </svg>
    );
}
export function inputKey(size) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" x="0px" y="0px"
             width={_size} height={_size} viewBox="0 0 48 48" enableBackground="new 0 0 48 48">
            <path fill="#C0BFBF"
                  d="M19.7,25.4c-5.1-1.8-8.7-6.6-8.7-12.3c0-7.2,5.8-13,13-13c7.2,0,13,5.8,13,13c0,5.7-3.6,10.5-8.7,12.3v9.5 H37v8.7h-8.7v4.3h-8.7V25.4z M28.3,13.1c0-2.4-2-4.3-4.3-4.3c-2.4,0-4.3,2-4.3,4.3s2,4.3,4.3,4.3C26.4,17.5,28.3,15.5,28.3,13.1z"/>
        </svg>
    );
}
export function iconCertification(size) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" x="0px" y="0px"
             width={_size} height={_size} viewBox="0 0 48 48" enableBackground="new 0 0 48 48">
            <path fill="#FFFFFF"
                  d="M24,24c5.2,0,9.4-4.2,9.4-9.4c0-5.2-4.2-9.4-9.4-9.4s-9.4,4.2-9.4,9.4C14.6,19.8,18.7,24,24,24z M24,28.7 c-6.3,0-18.9,3.2-18.9,9.4v4.7h37.8v-4.7C42.8,31.9,30.3,28.7,24,28.7z"/>
        </svg>
    );
}
export function iconSms(size) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" x="0px" y="0px"
             width={_size} height={_size} viewBox="0 0 48 48" enableBackground="new 0 0 48 48">
            <path fill="#FFFFFF"
                  d="M39.2,5.8H8.8C6.8,5.8,5,7.5,5,9.6v34.6l7.6-8h26.5c2.1,0,3.8-1.7,3.8-3.8V9.6C43,7.5,41.3,5.8,39.2,5.8z M18.5,23.3h-3.8v-3.8h3.8V23.3z M26.2,23.3h-3.8v-3.8h3.8V23.3z M33.8,23.3H30v-3.8h3.8V23.3z"/>
        </svg>
    );
}
export function iconComplete(size) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" x="0px" y="0px"
             width={_size} height={_size} viewBox="0 0 48 48" enableBackground="new 0 0 48 48">
            <g>
                <g>
                    <path fill="#FFFFFF"
                          d="M28,30c0-0.3,0-0.6,0-0.9c-1.7-0.3-3.4-0.4-4.7-0.4c-6.3,0-18.9,3.2-18.9,9.4v4.7h37.8v-4.1 c-1.3,0.7-2.8,1-4.4,1C32.4,39.9,28,35.5,28,30z M23.4,24c5.2,0,9.4-4.2,9.4-9.4c0-5.2-4.2-9.4-9.4-9.4c-5.2,0-9.4,4.2-9.4,9.4 C13.9,19.8,18.1,24,23.4,24z M37.8,22.3c-4.3,0-7.8,3.5-7.8,7.8c0,4.3,3.5,7.8,7.8,7.8s7.8-3.5,7.8-7.8 C45.6,25.8,42.1,22.3,37.8,22.3z M36.3,33.9L32.4,30l1.1-1.1l2.8,2.8l5.9-5.9l1.1,1.1L36.3,33.9z"/>
                </g>
            </g>
        </svg>
    );
}
export function iconSync(size) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" x="0px" y="0px"
             width={_size} height={_size} viewBox="0 0 48 48" enableBackground="new 0 0 48 48">
            <path fill="#FFFFFF"
                  d="M41.2,24h6.4L39,15.4L30.5,24h6.4c0,7.1-5.8,12.9-12.9,12.9c-2.2,0-4.2-0.5-6-1.5l-3.1,3.1 c2.6,1.7,5.8,2.7,9.1,2.7C33.5,41.1,41.2,33.5,41.2,24z M11.2,24c0-7.1,5.8-12.9,12.9-12.9c2.2,0,4.2,0.5,6,1.5l3.1-3.1 c-2.6-1.7-5.8-2.7-9.1-2.7C14.6,6.9,6.9,14.5,6.9,24H0.5l8.6,8.6l8.6-8.6H11.2z"/>
        </svg>
    );
}
export function iconLock(size) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" x="0px" y="0px"
             width={_size} height={_size} viewBox="0 0 48 48" enableBackground="new 0 0 48 48">
            <g>
                <g>
                    <path fill="#FFFFFF"
                          d="M35.2,18.3h-2v-4.2c0-5-4.1-9.1-9.1-9.1S15,9.1,15,14.1v4.1h-2.2c-2,0-3.6,1.6-3.6,3.6v17.6 c0,2,1.6,3.6,3.6,3.6h22.3c2,0,3.6-1.6,3.6-3.6V21.9C38.8,19.9,37.2,18.3,35.2,18.3z M25.8,31.9v2.8c0,0.9-0.7,1.7-1.7,1.7 c-0.9,0-1.7-0.7-1.7-1.7v-2.8c-1.2-0.6-2.1-1.9-2.1-3.4c0-2.1,1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8C27.9,30,27,31.2,25.8,31.9z M29.8,18.3H18.5v-4.2c0-3.1,2.5-5.6,5.6-5.6c3.1,0,5.6,2.5,5.6,5.6L29.8,18.3L29.8,18.3z"/>
                </g>
            </g>
        </svg>
    );
}
export function iconPassword(size) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" x="0px" y="0px"
             width={_size} height={_size} viewBox="0 0 48 48" enableBackground="new 0 0 48 48">
            <g>
                <g>
                    <path fill="#FFFFFF"
                          d="M32.3,21.2c-4.3,0-7.9,2.7-9.3,6.6H6v6.6h3.3V41h6.6v-6.6H23c1.3,3.8,5,6.6,9.3,6.6c5.4,0,9.8-4.4,9.8-9.8 C42,25.5,37.7,21.2,32.3,21.2z M32.3,34.3c-1.8,0-3.3-1.5-3.3-3.3s1.5-3.3,3.3-3.3s3.3,1.5,3.3,3.3S34,34.3,32.3,34.3z M7,14.7 l1.6,1.1l1.7-2.8l1.7,2.9l1.6-1.2l-2-2.6l3.1-0.9l-0.6-1.9l-2.9,1.3L11.4,7h-2l0.2,3.5l-3-1.3L6.1,11l3,0.9L7,14.7z M16.1,14.7 l1.6,1.1l1.7-2.8l1.7,2.9l1.6-1.2l-2-2.6l3.1-0.9l-0.6-1.9l-2.9,1.3L20.5,7h-2l0.2,3.5l-3-1.3l-0.6,1.9l3,0.9L16.1,14.7z M25.2,14.7l1.6,1.1l1.7-2.8l1.7,2.9l1.6-1.2l-2-2.6l3.1-0.9l-0.6-1.9l-2.9,1.3L29.5,7h-2l0.2,3.5l-3-1.3l-0.6,1.9l3,0.9 L25.2,14.7z M34.3,14.7l1.6,1.1l1.7-2.8l1.7,2.9l1.6-1.2l-2-2.6l3.1-0.9l-0.6-1.9l-2.9,1.3L38.7,7h-2l0.2,3.5l-3-1.3l-0.6,1.9 l3,0.9L34.3,14.7z"/>
                </g>
            </g>
        </svg>
    );
}
export function syncNormal(size, color) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    let _color = color !== undefined ? color : "#DBDBDB"
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" x="0px" y="0px"
             width={_size} height={_size} viewBox="0 0 48 48" enableBackground="new 0 0 48 48">
            <path fill={_color} d="M17.1,41.8L0,24.7l4.8-4.8l12.3,12.3l26-26L48,11L17.1,41.8z"/>
        </svg>
    );
}
export function callByPhone(size, color) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" x="0px" y="0px"
             width={_size} height={_size} viewBox="0 0 48 48" enableBackground="new 0 0 48 48">
            <g>
                <g>
                    <path fill="#FFFFFF" d="M37.363,6.822l-15.63-0.014c-1.718,0-3.125,1.405-3.125,3.125v18.087l0.571-0.57
                        c0.665-0.666,1.613-1.017,2.554-1.01V13.059h15.63V34.94h-8.008c-0.263,1.696-1.717,2.998-3.481,2.998
                        c-2.558,0-5-0.485-7.266-1.333v1.461c0,1.72,1.407,3.126,3.125,3.126h15.63c1.718,0,3.127-1.406,3.127-3.126V9.933
                        C40.49,8.213,39.081,6.822,37.363,6.822z M26.951,34.396v-3.769c0-0.59-0.49-1.077-1.077-1.077c-1.342,0-2.646-0.217-3.859-0.616
                        c-0.375-0.127-0.806-0.031-1.099,0.263l-2.38,2.37c-3.054-1.563-5.556-4.059-7.113-7.113l2.376-2.376
                        c0.306-0.305,0.388-0.724,0.266-1.103c-0.4-1.208-0.613-2.506-0.613-3.855c0-0.592-0.486-1.081-1.078-1.081H8.594
                        c-0.595,0-1.084,0.489-1.084,1.081c0,10.139,8.219,18.359,18.364,18.359C26.461,35.479,26.951,34.991,26.951,34.396z"/>
                </g>
            </g>
        </svg>
    );
}
export function callByDesktop(size, color) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" x="0px" y="0px"
             width={_size} height={_size} viewBox="0 0 48 48" enableBackground="new 0 0 48 48">
            <g>
                <g>
                    <path fill="#FFFFFF" d="M44.4,6.838H13.508c-1.888,0-3.433,1.545-3.433,3.433v17.513c0.298,0.242,0.604,0.477,0.92,0.695
                        l1.029-1.028c0.409-0.408,0.93-0.682,1.484-0.848V10.271H44.4v20.595H22.256v3.432h3.264v3.433h-3.432v3.433h13.729v-3.433h-3.433
                        v-3.433H44.4c1.886,0,3.432-1.545,3.432-3.432V10.271C47.832,8.383,46.286,6.838,44.4,6.838z M18.532,30.48
                        c-1.341,0-2.646-0.217-3.858-0.615c-0.375-0.128-0.807-0.032-1.1,0.263l-2.379,2.37c-3.054-1.564-5.557-4.06-7.113-7.113
                        l2.376-2.376c0.304-0.305,0.386-0.724,0.264-1.104c-0.4-1.208-0.613-2.505-0.613-3.854c0-0.592-0.486-1.081-1.078-1.081H1.252
                        c-0.595,0-1.084,0.489-1.084,1.081c0,10.14,8.219,18.359,18.364,18.359c0.588,0,1.078-0.487,1.078-1.083v-3.77
                        C19.61,30.968,19.121,30.48,18.532,30.48z"/>
                </g>
            </g>
        </svg>
    );
}
export function logoSymbol(size, color) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" x="0px" y="0px"
             width={_size} height={_size} viewBox="0 0 48 48" enableBackground="new 0 0 48 48">
            <path fillRule="evenodd" clipRule="evenodd" fill="#FFFFFF" d="M24,0.442c13.01,0,23.558,10.547,23.558,23.558
                c0,13.01-10.548,23.558-23.558,23.558C10.989,47.558,0.442,37.01,0.442,24C0.442,10.989,10.989,0.442,24,0.442z"/>
            <g>
                <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="21.6309" y1="31.3604" x2="21.6309"
                                y2="11.0557">
                    <stop offset="0" style={{stopColor:'#5A8CFF'}}/>
                    <stop offset="0.5" style={{stopColor:'#36AAE6'}}/>
                    <stop offset="1" style={{stopColor:'#25B6C8'}}/>
                </linearGradient>
                <path fill="url(#SVGID_1_)" d="M24.863,29.446v1.914l5.274-3.437l-5.274-3.436V26.4h-4.246c-3.39,0-6.148-2.759-6.148-6.149
                    c0-3.391,2.759-6.149,6.149-6.149h9.696c0.841,0,1.522-0.682,1.522-1.523c0-0.841-0.682-1.523-1.522-1.523h-9.696
                    c-5.071,0-9.196,4.125-9.196,9.196c0,5.07,4.125,9.195,9.194,9.195H24.863z"/>
                <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="26.3691" y1="36.9443" x2="26.3691"
                                y2="16.6406">
                    <stop offset="0" style={{stopColor:'#5A8CFF'}}/>
                    <stop offset="0.5" style={{stopColor:'#36AAE6'}}/>
                    <stop offset="1" style={{stopColor:'#25B6C8'}}/>
                </linearGradient>
                <path fill="url(#SVGID_2_)" d="M27.382,18.553h-4.245V16.64l-5.274,3.437l5.274,3.437V21.6h4.245c3.391,0,6.148,2.758,6.148,6.149
                    c0,3.392-2.759,6.149-6.149,6.149h-9.696c-0.841,0-1.523,0.682-1.523,1.523c0,0.841,0.683,1.522,1.523,1.522h9.696
                    c5.07,0,9.196-4.125,9.196-9.195C36.577,22.679,32.452,18.553,27.382,18.553z"/>
            </g>
        </svg>
    );
}
export function logoTitle(size, color) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" x="0px" y="0px"
             width={_size} height={_size} viewBox="0 0 48 48" enableBackground="new 0 0 48 48">
            <g>
                <g>
                    <path fill="#FFFFFF" d="M6.479,25.993c-0.035-0.032-0.075-0.057-0.121-0.072c-0.046-0.017-0.094-0.024-0.143-0.024
                        c-0.078,0-0.153,0.013-0.222,0.037c-0.07,0.024-0.137,0.052-0.202,0.081c-0.202,0.089-0.431,0.153-0.688,0.196
                        c-0.256,0.041-0.518,0.063-0.785,0.063c-0.383,0-0.731-0.068-1.047-0.207c-0.315-0.139-0.585-0.348-0.811-0.627
                        c-0.226-0.28-0.401-0.63-0.524-1.05c-0.124-0.418-0.186-0.91-0.186-1.474c0-0.501,0.059-0.945,0.177-1.333
                        c0.118-0.388,0.294-0.714,0.527-0.979C2.688,20.338,2.98,20.138,3.331,20c0.351-0.137,0.758-0.206,1.224-0.206
                        c0.28,0,0.544,0.031,0.791,0.092c0.247,0.061,0.462,0.145,0.647,0.25l0.436-0.918c-0.112-0.048-0.232-0.092-0.36-0.132
                        c-0.127-0.04-0.269-0.075-0.425-0.104s-0.328-0.052-0.517-0.068c-0.188-0.017-0.399-0.025-0.63-0.025
                        c-0.575,0-1.104,0.084-1.584,0.253C2.43,19.309,2.015,19.563,1.667,19.9c-0.349,0.337-0.62,0.759-0.815,1.263
                        c-0.194,0.505-0.292,1.093-0.292,1.765c0,0.713,0.083,1.337,0.249,1.873c0.166,0.536,0.407,0.982,0.722,1.34
                        s0.699,0.627,1.151,0.807c0.453,0.18,0.967,0.27,1.542,0.27c0.153,0,0.319-0.008,0.5-0.023c0.18-0.016,0.362-0.043,0.546-0.082
                        c0.184-0.037,0.366-0.09,0.543-0.154s0.339-0.146,0.484-0.246c0.077-0.055,0.145-0.117,0.205-0.193
                        c0.06-0.074,0.09-0.154,0.09-0.244c0-0.061-0.01-0.113-0.031-0.162C6.542,26.064,6.514,26.024,6.479,25.993z M12.166,21.643
                        c-0.214-0.288-0.485-0.508-0.811-0.658c-0.326-0.149-0.696-0.225-1.11-0.225c-0.407,0-0.784,0.071-1.131,0.211
                        c-0.348,0.142-0.649,0.351-0.904,0.629c-0.255,0.278-0.456,0.623-0.6,1.034c-0.144,0.411-0.217,0.886-0.217,1.425
                        c0,0.51,0.064,0.962,0.192,1.353c0.127,0.393,0.308,0.723,0.541,0.99c0.233,0.268,0.514,0.471,0.842,0.609
                        c0.329,0.137,0.696,0.205,1.1,0.205c0.108,0,0.221-0.006,0.337-0.02s0.232-0.031,0.346-0.059c0.114-0.023,0.222-0.057,0.324-0.096
                        s0.192-0.086,0.27-0.139c0.078-0.051,0.14-0.109,0.186-0.176c0.046-0.068,0.069-0.141,0.069-0.219c0-0.059-0.01-0.111-0.031-0.156
                        c-0.021-0.045-0.048-0.084-0.083-0.115s-0.075-0.055-0.121-0.07s-0.094-0.023-0.143-0.023c-0.029,0-0.065,0.004-0.107,0.016
                        c-0.042,0.01-0.081,0.02-0.117,0.031c-0.135,0.047-0.262,0.08-0.378,0.1c-0.117,0.02-0.234,0.029-0.352,0.029
                        c-0.251,0-0.483-0.047-0.694-0.139c-0.211-0.094-0.394-0.235-0.548-0.426c-0.154-0.191-0.274-0.43-0.361-0.718
                        c-0.086-0.288-0.129-0.625-0.129-1.015c0-0.438,0.047-0.809,0.141-1.113c0.094-0.305,0.223-0.551,0.387-0.741
                        c0.164-0.189,0.357-0.327,0.579-0.411c0.222-0.085,0.461-0.126,0.719-0.126c0.135,0,0.269,0.012,0.402,0.038
                        c0.133,0.025,0.258,0.065,0.378,0.121c0.12,0.054,0.23,0.126,0.331,0.215c0.102,0.088,0.189,0.195,0.264,0.319
                        c0.075,0.124,0.133,0.269,0.175,0.433c0.042,0.165,0.063,0.351,0.063,0.558v3.199c0,0.018,0,0.045,0.001,0.084
                        c0.001,0.039,0.004,0.082,0.01,0.129c0.008,0.068,0.028,0.129,0.059,0.186c0.032,0.057,0.072,0.105,0.121,0.145
                        c0.049,0.041,0.105,0.072,0.168,0.094c0.063,0.023,0.13,0.035,0.201,0.035c0.07,0,0.137-0.012,0.2-0.035
                        c0.063-0.021,0.118-0.053,0.167-0.094c0.048-0.039,0.088-0.088,0.12-0.145c0.033-0.057,0.053-0.117,0.061-0.186
                        c0.006-0.047,0.009-0.09,0.01-0.129c0.001-0.039,0.002-0.066,0.002-0.084v-5.591h-0.849L12.166,21.643z M14.981,26.51
                        c0,0.018,0,0.045,0.001,0.084c0.001,0.037,0.004,0.08,0.01,0.129c0.01,0.068,0.03,0.131,0.062,0.186
                        c0.031,0.057,0.071,0.105,0.119,0.145s0.104,0.072,0.167,0.094c0.063,0.023,0.129,0.035,0.2,0.035c0.07,0,0.138-0.012,0.2-0.035
                        c0.063-0.021,0.118-0.055,0.167-0.094c0.048-0.039,0.088-0.088,0.12-0.145c0.033-0.055,0.052-0.117,0.061-0.186
                        c0.006-0.049,0.009-0.092,0.01-0.129c0.001-0.039,0.002-0.066,0.002-0.084v-8.389h-1.12V26.51z M17.986,26.51
                        c0,0.018,0,0.045,0.001,0.084c0.001,0.037,0.004,0.08,0.011,0.129c0.01,0.068,0.03,0.131,0.062,0.186
                        c0.031,0.057,0.071,0.105,0.119,0.145c0.048,0.039,0.104,0.072,0.167,0.094c0.063,0.023,0.129,0.035,0.2,0.035
                        c0.071,0,0.138-0.012,0.201-0.035c0.063-0.021,0.118-0.055,0.167-0.094s0.088-0.088,0.121-0.145
                        c0.032-0.055,0.052-0.117,0.061-0.186c0.006-0.049,0.009-0.092,0.01-0.129c0-0.039,0.002-0.066,0.002-0.084v-8.389h-1.12V26.51z
                         M28.348,23.869c-0.093-0.15-0.203-0.288-0.331-0.413c-0.129-0.126-0.272-0.241-0.432-0.345c-0.079-0.051-0.167-0.105-0.264-0.16
                        c-0.098-0.056-0.199-0.114-0.305-0.172c-0.106-0.059-0.215-0.118-0.324-0.176c-0.11-0.058-0.219-0.114-0.324-0.169
                        c-0.106-0.055-0.209-0.109-0.31-0.162c-0.1-0.053-0.198-0.108-0.296-0.164c-0.097-0.056-0.194-0.116-0.291-0.178
                        c-0.098-0.063-0.197-0.132-0.3-0.207c-0.135-0.099-0.239-0.217-0.313-0.35c-0.073-0.134-0.11-0.294-0.11-0.483
                        c0-0.151,0.021-0.285,0.066-0.398c0.044-0.114,0.104-0.212,0.181-0.294c0.077-0.083,0.167-0.15,0.271-0.204
                        c0.103-0.053,0.213-0.095,0.331-0.126s0.24-0.053,0.367-0.066c0.126-0.013,0.251-0.02,0.375-0.02c0.324,0,0.625,0.034,0.904,0.1
                        c0.279,0.067,0.551,0.171,0.815,0.313l0.471-0.896c-0.237-0.13-0.537-0.234-0.9-0.315s-0.785-0.121-1.267-0.121
                        c-0.222,0-0.443,0.015-0.666,0.045c-0.222,0.029-0.435,0.077-0.638,0.144s-0.393,0.154-0.568,0.261
                        c-0.176,0.108-0.328,0.239-0.458,0.394c-0.13,0.156-0.231,0.336-0.305,0.543s-0.11,0.444-0.11,0.711
                        c0,0.218,0.027,0.419,0.081,0.603c0.054,0.184,0.132,0.353,0.232,0.508c0.102,0.156,0.224,0.299,0.367,0.43
                        c0.143,0.129,0.305,0.251,0.484,0.363c0.183,0.112,0.367,0.217,0.555,0.315c0.188,0.099,0.381,0.204,0.582,0.316
                        c0.041,0.023,0.093,0.051,0.154,0.085c0.062,0.034,0.129,0.071,0.202,0.112c0.072,0.042,0.147,0.084,0.227,0.13
                        c0.078,0.044,0.155,0.09,0.232,0.136c0.077,0.047,0.15,0.093,0.22,0.141c0.069,0.047,0.131,0.09,0.185,0.132
                        c0.117,0.095,0.206,0.211,0.266,0.351c0.061,0.139,0.091,0.295,0.091,0.468c0,0.152-0.022,0.288-0.067,0.406
                        c-0.044,0.118-0.104,0.221-0.181,0.309c-0.077,0.086-0.167,0.16-0.271,0.219c-0.104,0.059-0.215,0.106-0.334,0.143
                        c-0.118,0.037-0.242,0.063-0.37,0.078c-0.127,0.016-0.254,0.023-0.38,0.023c-0.092,0-0.185-0.002-0.276-0.006
                        s-0.189-0.014-0.29-0.027c-0.102-0.016-0.208-0.035-0.32-0.064c-0.111-0.027-0.232-0.063-0.361-0.109
                        c-0.252-0.089-0.436-0.135-0.554-0.135c-0.07,0-0.137,0.012-0.199,0.031c-0.062,0.021-0.115,0.05-0.16,0.088
                        c-0.045,0.039-0.081,0.087-0.107,0.145c-0.026,0.059-0.04,0.123-0.04,0.197c0,0.096,0.02,0.18,0.062,0.252
                        c0.042,0.07,0.097,0.133,0.167,0.188c0.069,0.053,0.149,0.1,0.24,0.141c0.09,0.039,0.185,0.072,0.283,0.104
                        c0.202,0.059,0.429,0.1,0.679,0.125s0.512,0.039,0.785,0.039c0.235,0,0.47-0.02,0.702-0.057s0.454-0.094,0.664-0.172
                        c0.211-0.078,0.405-0.178,0.585-0.297c0.18-0.121,0.335-0.266,0.468-0.434c0.131-0.168,0.233-0.36,0.309-0.576
                        s0.112-0.459,0.112-0.728c0-0.204-0.025-0.395-0.075-0.571C28.511,24.183,28.44,24.019,28.348,23.869z M32.605,24.307
                        c-0.037,0.109-0.078,0.231-0.124,0.365c-0.046,0.133-0.092,0.268-0.137,0.403c-0.046,0.136-0.088,0.267-0.127,0.392
                        c-0.039,0.126-0.07,0.234-0.094,0.324h-0.048c-0.024-0.092-0.051-0.195-0.083-0.309c-0.032-0.111-0.069-0.231-0.108-0.357
                        c-0.04-0.128-0.082-0.26-0.129-0.398c-0.048-0.139-0.099-0.279-0.15-0.419l-1.26-3.382h-1.215l2.273,5.632
                        c0.022,0.055,0.037,0.105,0.046,0.15s0.014,0.098,0.014,0.156c0,0.035-0.002,0.072-0.009,0.113
                        c-0.007,0.039-0.019,0.092-0.038,0.158c-0.054,0.186-0.119,0.367-0.196,0.543s-0.171,0.342-0.281,0.496s-0.236,0.297-0.382,0.428
                        c-0.144,0.129-0.31,0.24-0.496,0.336c-0.048,0.023-0.096,0.049-0.146,0.078s-0.096,0.064-0.138,0.102
                        c-0.041,0.039-0.074,0.082-0.101,0.131s-0.041,0.107-0.041,0.172c0,0.076,0.016,0.145,0.045,0.201
                        c0.029,0.059,0.068,0.105,0.119,0.145c0.05,0.039,0.108,0.066,0.174,0.086c0.065,0.018,0.134,0.027,0.205,0.027
                        c0.128,0,0.26-0.023,0.395-0.072s0.271-0.115,0.402-0.203c0.132-0.09,0.263-0.195,0.39-0.316c0.128-0.121,0.248-0.256,0.361-0.402
                        s0.216-0.303,0.31-0.471c0.094-0.166,0.173-0.338,0.239-0.514l2.604-6.976h-1.144L32.605,24.307z M40.372,21.339
                        c-0.193-0.197-0.421-0.343-0.684-0.438c-0.265-0.094-0.548-0.141-0.85-0.141c-0.199,0-0.397,0.022-0.592,0.065
                        c-0.194,0.045-0.379,0.111-0.557,0.201c-0.177,0.089-0.342,0.202-0.492,0.335c-0.151,0.135-0.283,0.292-0.397,0.47v-0.907h-0.978
                        v5.585c0,0.018,0,0.045,0.001,0.084c0.001,0.037,0.006,0.08,0.01,0.129c0.011,0.068,0.03,0.131,0.063,0.186
                        c0.03,0.057,0.069,0.105,0.119,0.145c0.048,0.039,0.104,0.072,0.166,0.094c0.063,0.023,0.129,0.035,0.201,0.035
                        c0.069,0,0.137-0.012,0.199-0.035c0.063-0.021,0.119-0.055,0.167-0.094s0.088-0.088,0.119-0.145
                        c0.033-0.055,0.053-0.117,0.062-0.186c0.007-0.049,0.009-0.092,0.011-0.129c0-0.039,0-0.066,0-0.084v-3.205
                        c0-0.279,0.044-0.523,0.129-0.733s0.201-0.385,0.349-0.523c0.146-0.139,0.316-0.242,0.512-0.312
                        c0.194-0.07,0.403-0.104,0.626-0.104c0.189,0,0.366,0.028,0.528,0.086c0.163,0.059,0.302,0.153,0.418,0.284
                        c0.117,0.13,0.209,0.301,0.274,0.511c0.065,0.209,0.098,0.467,0.098,0.769v3.229c0,0.018,0.002,0.045,0.003,0.084
                        c0,0.037,0.004,0.08,0.01,0.129c0.01,0.068,0.03,0.131,0.062,0.186c0.032,0.057,0.072,0.105,0.12,0.145s0.103,0.072,0.166,0.094
                        c0.063,0.023,0.13,0.035,0.2,0.035s0.138-0.012,0.201-0.035c0.063-0.021,0.117-0.055,0.165-0.094s0.09-0.088,0.121-0.145
                        c0.033-0.055,0.054-0.117,0.06-0.186c0.007-0.049,0.01-0.092,0.012-0.129c0.001-0.039,0.002-0.066,0.002-0.084v-3.312
                        c0-0.426-0.057-0.792-0.168-1.101C40.718,21.789,40.565,21.536,40.372,21.339z M47.339,26.039
                        c-0.067-0.063-0.152-0.096-0.253-0.096c-0.057,0-0.115,0.01-0.174,0.029c-0.059,0.021-0.122,0.047-0.189,0.077
                        c-0.205,0.091-0.412,0.155-0.624,0.192c-0.209,0.037-0.423,0.055-0.639,0.055c-0.259,0-0.503-0.047-0.736-0.145
                        c-0.231-0.096-0.434-0.241-0.608-0.436c-0.172-0.197-0.31-0.441-0.412-0.736c-0.101-0.294-0.15-0.641-0.15-1.04
                        c0-0.373,0.05-0.701,0.148-0.985c0.101-0.284,0.244-0.521,0.432-0.713c0.186-0.191,0.414-0.334,0.682-0.431
                        c0.269-0.097,0.569-0.145,0.905-0.145c0.266,0,0.508,0.026,0.728,0.079c0.221,0.051,0.412,0.127,0.58,0.228l0.318-0.884
                        c-0.214-0.1-0.462-0.178-0.748-0.233c-0.283-0.057-0.607-0.085-0.972-0.085c-0.277,0-0.55,0.027-0.815,0.082
                        c-0.266,0.053-0.519,0.136-0.757,0.249c-0.239,0.112-0.457,0.255-0.66,0.427c-0.2,0.173-0.375,0.379-0.521,0.619
                        c-0.146,0.239-0.26,0.512-0.343,0.819c-0.08,0.308-0.122,0.652-0.122,1.032c0,0.372,0.035,0.709,0.103,1.012
                        s0.164,0.574,0.287,0.811c0.124,0.238,0.273,0.445,0.45,0.621c0.174,0.176,0.37,0.32,0.586,0.436
                        c0.216,0.113,0.451,0.197,0.704,0.254c0.251,0.057,0.517,0.084,0.793,0.084c0.166,0,0.334-0.012,0.504-0.031
                        c0.168-0.021,0.334-0.053,0.495-0.098c0.163-0.043,0.32-0.1,0.471-0.168s0.292-0.15,0.425-0.246
                        c0.065-0.047,0.118-0.102,0.157-0.164c0.037-0.063,0.057-0.131,0.057-0.201C47.439,26.191,47.406,26.102,47.339,26.039z"/>
                </g>
            </g>
        </svg>
    );
}
export function logoSKT(size, color) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" x="0px" y="0px"
             width={_size} height={_size} viewBox="0 0 48 48" enableBackground="new 0 0 48 48">
            <g>
                <g>
                    <path fill="#FFFFFF" d="M46.293,28.656c-0.928,0-1.405,0.611-1.48,0.703c-0.234-0.441-0.665-0.703-1.23-0.703
                        c-0.816,0-1.281,0.475-1.358,0.551c-0.033-0.127-0.201-0.473-0.728-0.473c-0.152,0-0.377,0.047-0.395,0.053
                        c0.023,0.1,0.123,0.582,0.123,1.248v2.936h1.073v-2.992c0.021-0.02,0.423-0.426,0.906-0.426c0.493,0,0.724,0.361,0.724,0.854
                        v2.564h1.079v-2.992c0.021-0.021,0.415-0.426,0.906-0.426s0.716,0.361,0.716,0.854v2.564h1.085v-2.732
                        C47.714,29.279,47.168,28.656,46.293,28.656z M34.509,32.195c-0.73,0-1.251-0.576-1.251-1.33c0-0.84,0.592-1.34,1.251-1.34
                        c0.354,0,0.505,0.107,0.74,0.107c0.251,0,0.385-0.121,0.509-0.363c0.068-0.135,0.108-0.211,0.108-0.211
                        c-0.053-0.033-0.597-0.402-1.521-0.402c-1.354,0-2.163,0.969-2.163,2.209c0,1.352,0.926,2.199,2.163,2.199
                        c0.898,0,1.442-0.365,1.538-0.434l-0.372-0.736C35.429,31.947,35.044,32.195,34.509,32.195z M22.724,28.656
                        c-1.03,0-1.899,0.838-1.899,2.209c0,1.404,0.843,2.201,2.102,2.201c1.001,0,1.52-0.438,1.582-0.479c0,0-0.098-0.158-0.125-0.203
                        c-0.14-0.229-0.301-0.305-0.478-0.305c-0.354,0-0.399,0.148-0.879,0.148c-0.824,0-1.109-0.643-1.129-1.072h2.757v-0.318
                        C24.654,29.523,23.896,28.656,22.724,28.656z M21.894,30.395c0-0.482,0.339-0.93,0.813-0.93c0.53,0,0.824,0.461,0.833,0.93H21.894
                        z M26.493,31.783v-4.396c0-0.496-0.33-0.881-0.845-0.881h-0.23v5.709c0,0.525,0.326,0.852,0.892,0.852
                        c0.698,0,0.907-0.496,0.907-0.963c-0.029,0.014-0.178,0.074-0.326,0.074C26.642,32.178,26.493,32.033,26.493,31.783z
                         M20.204,29.545l0.313-0.811h-1.212v-1.264c0,0-0.097,0-0.101,0c-0.479,0-0.975,0.203-0.975,1.254v0.01h-0.794v0.809h0.794v2.463
                        c0,0.697,0.413,1.059,0.997,1.059c0.473,0,1.083-0.143,1.083-1.08c-0.036,0.023-0.266,0.172-0.517,0.172
                        c-0.351,0-0.488-0.215-0.488-0.521v-2.09H20.204z M29.468,28.656c-1.029,0-1.897,0.838-1.897,2.209
                        c0,1.404,0.842,2.201,2.102,2.201c1,0,1.519-0.438,1.581-0.479c0,0-0.098-0.158-0.126-0.203c-0.14-0.229-0.299-0.305-0.477-0.305
                        c-0.354,0-0.4,0.148-0.88,0.148c-0.824,0-1.108-0.643-1.128-1.072h2.757v-0.318C31.399,29.523,30.642,28.656,29.468,28.656z
                         M28.639,30.395c0-0.482,0.339-0.93,0.813-0.93c0.53,0,0.823,0.461,0.832,0.93H28.639z M38.347,28.656
                        c-1.326,0-2.107,0.877-2.107,2.205c0,1.336,0.791,2.205,2.107,2.205c1.388,0,2.108-0.947,2.108-2.205
                        C40.455,29.533,39.676,28.656,38.347,28.656z M38.347,32.238c-0.668,0-1.038-0.586-1.038-1.377c0-0.818,0.389-1.379,1.038-1.379
                        c0.667,0,1.039,0.578,1.039,1.379C39.386,31.672,39.007,32.238,38.347,32.238z M3.722,28.271
                        c-0.649-0.303-1.183-0.549-1.183-1.045c0-0.379,0.304-0.654,0.902-0.654c0.222,0,0.401,0.025,0.587,0.061
                        c0.098,0.016,0.201,0.029,0.287,0.029c0.523,0,0.819-0.311,1.016-0.904l0.082-0.242c-0.084-0.033-0.939-0.408-2.055-0.408
                        c-1.774,0-2.71,1.139-2.71,2.318c0,0.596,0.187,1.027,0.479,1.367c0.377,0.436,0.912,0.723,1.414,0.967
                        c0.73,0.359,1.39,0.623,1.39,1.154c0.001,0.473-0.487,0.74-1.138,0.74c-0.894,0-1.674-0.51-1.772-0.572l-0.734,1.375
                        c0.132,0.074,1.075,0.674,2.629,0.674c1.655-0.002,2.909-0.951,2.909-2.412C5.824,29.266,4.662,28.727,3.722,28.271z M13.2,25.268
                        H11.06l-2.395,3.178H8.629v-3.178H6.864l0.001,7.801h0.105c0.763,0,1.67-0.354,1.67-1.627V29.65h0.036l2.441,3.32h2.244
                        l-3.165-4.021L13.2,25.268z M13.3,16.913c-0.621,0.117-1.542,0.681-1.539,1.678c0.003,0.905,0.742,1.454,0.744,2.639
                        c0.004,0.893-0.487,1.494-1.019,1.826c0.215-0.018,0.45-0.031,0.708-0.031c0.544-0.001,0.872,0.05,0.893,0.054l2.785-3.418
                        C15.099,18.501,14.195,17.602,13.3,16.913z M17.376,22.39c0.245-0.001,0.479,0.033,0.901,0.032
                        c1.619-0.007,2.678-0.565,3.335-0.932c-1.345-0.856-3.306-1.732-5.74-1.83c-0.158,0.447-1.392,3.877-1.485,4.154
                        c0.014,0.017,0.229,0.259,0.5,0.731c0.397,0.649,0.611,1.199,0.753,1.6c0.352-0.546,0.396-1.416,0.425-2.303
                        C16.098,23.016,16.27,22.393,17.376,22.39z M9.526,23.087c0.019,0.163,0.089,0.256,0.229,0.255c0.407,0,2.373-0.414,2.367-2.125
                        c-0.004-1.052-0.754-1.629-0.758-2.677c-0.005-1.185,0.99-1.757,1.54-1.912c-1.909-1.338-3.708-1.759-4.038-1.758
                        c-0.113,0-0.21,0.078-0.21,0.226c0,0.093,0.035,0.352,0.05,0.492C8.812,16.552,9.508,22.926,9.526,23.087z M23.506,23.461
                        c0.082-0.046,0.12-0.115,0.12-0.185c-0.001-0.04-0.012-0.079-0.034-0.115c-0.109-0.177-0.672-0.774-1.613-1.427
                        c-0.747,0.412-1.913,1.048-3.648,1.055c-0.426,0-0.521-0.027-0.813-0.026c-0.848,0.002-1.059,0.365-1.09,1.108
                        c-0.006,0.14-0.008,0.329-0.016,0.536c-0.027,0.664-0.105,1.58-0.612,2.191c0.03,0.08,0.059,0.146,0.087,0.193
                        c0.043,0.074,0.101,0.109,0.171,0.109c0.045-0.002,0.099-0.016,0.159-0.043c0.146-0.068,5.964-2.776,6.841-3.181
                        C23.186,23.616,23.426,23.508,23.506,23.461z"/>
                </g>
            </g>
        </svg>
    );
}
export function fullLogo(size) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    let _width = _size * 4.51
    return(
        <svg version="1.1" id="Layer_1" x="0px" y="0px"
             width={_width} height={_size} viewBox="0 0 71.557 15.867" enableBackground="new 0 0 71.557 15.867" xmlSpace="preserve">
            <path fill="#FFFFFF" d="M25.66,11.095c-0.038-0.038-0.083-0.064-0.135-0.083c-0.053-0.016-0.104-0.025-0.16-0.025
                c-0.089,0-0.173,0.018-0.249,0.044c-0.078,0.024-0.154,0.059-0.227,0.09c-0.229,0.099-0.484,0.174-0.771,0.22
                c-0.288,0.049-0.58,0.073-0.881,0.073c-0.429,0-0.819-0.079-1.173-0.236c-0.354-0.153-0.656-0.388-0.91-0.7
                c-0.252-0.312-0.447-0.705-0.587-1.178c-0.138-0.469-0.208-1.018-0.208-1.651c0-0.561,0.066-1.059,0.199-1.493
                c0.132-0.436,0.329-0.8,0.59-1.098c0.263-0.297,0.589-0.523,0.981-0.676c0.395-0.155,0.851-0.231,1.372-0.231
                c0.313,0,0.609,0.034,0.887,0.103c0.274,0.068,0.519,0.161,0.726,0.28l0.488-1.029c-0.125-0.051-0.261-0.102-0.401-0.146
                c-0.145-0.045-0.303-0.084-0.479-0.117c-0.176-0.034-0.369-0.06-0.579-0.078c-0.211-0.017-0.445-0.028-0.706-0.028
                c-0.646,0-1.236,0.095-1.775,0.284c-0.539,0.188-1.004,0.473-1.396,0.851c-0.392,0.379-0.695,0.851-0.912,1.417
                c-0.218,0.565-0.328,1.224-0.328,1.977c0,0.799,0.093,1.497,0.279,2.098c0.188,0.604,0.456,1.104,0.811,1.504
                s0.781,0.699,1.291,0.902c0.506,0.201,1.081,0.302,1.727,0.302c0.173,0,0.358-0.01,0.561-0.024c0.2-0.019,0.405-0.049,0.611-0.092
                c0.208-0.041,0.41-0.102,0.608-0.172c0.198-0.072,0.381-0.168,0.543-0.277c0.085-0.062,0.162-0.131,0.229-0.215
                c0.065-0.082,0.102-0.174,0.102-0.272c0-0.069-0.013-0.129-0.036-0.185C25.729,11.173,25.698,11.128,25.66,11.095z M32.031,6.22
                c-0.24-0.323-0.543-0.569-0.907-0.737c-0.365-0.167-0.778-0.251-1.245-0.251c-0.456,0-0.877,0.08-1.268,0.238
                c-0.39,0.158-0.729,0.393-1.014,0.705c-0.286,0.311-0.511,0.698-0.672,1.158c-0.161,0.461-0.242,0.993-0.242,1.595
                c0,0.574,0.071,1.078,0.215,1.518c0.145,0.438,0.346,0.811,0.604,1.109c0.261,0.299,0.576,0.526,0.942,0.682
                c0.369,0.154,0.78,0.23,1.233,0.23c0.12,0,0.245-0.008,0.378-0.021c0.13-0.016,0.26-0.033,0.388-0.065
                c0.127-0.024,0.249-0.062,0.363-0.106c0.113-0.043,0.214-0.096,0.302-0.152c0.087-0.059,0.157-0.125,0.208-0.199
                c0.052-0.074,0.078-0.156,0.078-0.242c0-0.068-0.013-0.128-0.035-0.179c-0.022-0.05-0.054-0.092-0.092-0.128
                c-0.039-0.034-0.084-0.062-0.136-0.078c-0.052-0.018-0.104-0.025-0.159-0.025c-0.033,0-0.074,0.006-0.12,0.02
                c-0.047,0.01-0.09,0.021-0.131,0.031c-0.151,0.057-0.292,0.095-0.424,0.113c-0.13,0.021-0.262,0.032-0.395,0.032
                c-0.281,0-0.54-0.05-0.777-0.157c-0.234-0.103-0.44-0.263-0.613-0.475c-0.174-0.214-0.308-0.482-0.404-0.805
                c-0.096-0.323-0.146-0.701-0.146-1.139c0-0.492,0.053-0.907,0.158-1.248c0.104-0.341,0.25-0.618,0.435-0.83
                c0.185-0.211,0.398-0.365,0.646-0.462c0.25-0.094,0.52-0.141,0.806-0.141c0.152,0,0.303,0.015,0.45,0.044
                c0.151,0.027,0.291,0.072,0.426,0.134c0.134,0.061,0.259,0.143,0.372,0.241c0.113,0.099,0.211,0.219,0.295,0.358
                c0.085,0.14,0.148,0.302,0.196,0.486c0.049,0.183,0.071,0.39,0.071,0.627v3.583c0,0.021,0.001,0.051,0.002,0.094
                c0.002,0.043,0.005,0.091,0.012,0.144c0.009,0.078,0.03,0.149,0.065,0.209c0.035,0.063,0.081,0.116,0.136,0.162
                c0.054,0.045,0.118,0.079,0.188,0.104c0.069,0.024,0.146,0.039,0.224,0.039c0.08,0,0.155-0.015,0.226-0.039
                c0.071-0.023,0.134-0.062,0.187-0.104c0.055-0.046,0.1-0.101,0.137-0.162c0.034-0.062,0.059-0.131,0.065-0.209
                c0.006-0.053,0.01-0.101,0.011-0.144s0.001-0.073,0.001-0.094V5.415h-0.95L32.031,6.22z M35.187,11.674c0,0.021,0,0.051,0.001,0.092
                c0.001,0.045,0.005,0.092,0.012,0.146c0.012,0.077,0.034,0.146,0.069,0.21c0.036,0.062,0.081,0.114,0.134,0.16
                c0.054,0.045,0.116,0.079,0.186,0.104c0.071,0.026,0.146,0.039,0.226,0.039s0.153-0.013,0.224-0.039
                c0.07-0.021,0.133-0.062,0.188-0.104c0.055-0.046,0.1-0.099,0.136-0.16c0.034-0.063,0.06-0.133,0.066-0.21
                c0.007-0.055,0.01-0.102,0.012-0.146c0-0.041,0.002-0.07,0.002-0.092V2.272h-1.254L35.187,11.674L35.187,11.674z M38.553,11.674
                c0,0.021,0.001,0.051,0.001,0.092c0.002,0.045,0.006,0.092,0.012,0.146c0.013,0.077,0.034,0.146,0.068,0.21
                c0.034,0.062,0.079,0.114,0.134,0.16c0.054,0.045,0.116,0.079,0.188,0.104c0.07,0.026,0.146,0.039,0.227,0.039
                s0.153-0.013,0.227-0.039c0.068-0.021,0.132-0.062,0.187-0.104c0.055-0.046,0.1-0.099,0.136-0.16c0.035-0.063,0.06-0.133,0.066-0.21
                c0.006-0.055,0.011-0.102,0.012-0.146c0.001-0.041,0.002-0.07,0.002-0.092V2.272h-1.254v9.402H38.553z M50.164,8.715
                c-0.104-0.17-0.228-0.325-0.371-0.465c-0.146-0.143-0.307-0.271-0.481-0.387c-0.09-0.059-0.188-0.117-0.296-0.18
                c-0.109-0.063-0.224-0.128-0.342-0.194c-0.118-0.066-0.24-0.131-0.361-0.196c-0.125-0.065-0.245-0.129-0.365-0.191
                C47.828,7.041,47.715,6.98,47.6,6.921c-0.109-0.06-0.224-0.12-0.331-0.182c-0.109-0.063-0.218-0.13-0.328-0.201
                c-0.107-0.07-0.22-0.147-0.333-0.23c-0.15-0.111-0.271-0.243-0.353-0.393c-0.083-0.15-0.125-0.331-0.125-0.542
                c0-0.169,0.024-0.317,0.075-0.445c0.05-0.127,0.117-0.237,0.203-0.331c0.086-0.092,0.187-0.168,0.301-0.227
                c0.115-0.06,0.239-0.107,0.372-0.143c0.132-0.035,0.271-0.059,0.411-0.075c0.141-0.014,0.28-0.021,0.421-0.021
                c0.362,0,0.698,0.038,1.015,0.112c0.312,0.074,0.615,0.191,0.912,0.35l0.529-1.004c-0.269-0.144-0.604-0.262-1.013-0.352
                c-0.405-0.09-0.881-0.135-1.419-0.135c-0.248,0-0.497,0.018-0.745,0.049c-0.249,0.033-0.487,0.087-0.715,0.161
                c-0.228,0.074-0.439,0.172-0.637,0.292c-0.198,0.121-0.37,0.268-0.515,0.441c-0.146,0.175-0.26,0.378-0.343,0.609
                c-0.08,0.232-0.122,0.498-0.122,0.797c0,0.244,0.029,0.47,0.092,0.676c0.061,0.205,0.146,0.395,0.26,0.569
                c0.114,0.174,0.25,0.333,0.411,0.48c0.162,0.146,0.342,0.283,0.541,0.407c0.205,0.126,0.414,0.244,0.622,0.354
                c0.211,0.11,0.428,0.229,0.65,0.354c0.048,0.027,0.104,0.06,0.177,0.096c0.065,0.036,0.144,0.079,0.226,0.125
                c0.081,0.047,0.166,0.098,0.254,0.147c0.089,0.051,0.176,0.103,0.262,0.153c0.084,0.052,0.166,0.104,0.243,0.154
                c0.08,0.053,0.146,0.104,0.208,0.148c0.131,0.104,0.229,0.236,0.297,0.395c0.066,0.154,0.103,0.331,0.103,0.524
                c0,0.173-0.023,0.321-0.074,0.456c-0.049,0.132-0.115,0.244-0.2,0.344c-0.087,0.1-0.188,0.182-0.306,0.245
                c-0.114,0.065-0.24,0.121-0.374,0.159c-0.134,0.043-0.271,0.068-0.415,0.089c-0.145,0.018-0.286,0.024-0.426,0.024
                c-0.104,0-0.207-0.004-0.311-0.009c-0.104-0.004-0.214-0.014-0.326-0.028c-0.113-0.02-0.231-0.041-0.358-0.07
                c-0.124-0.03-0.262-0.072-0.404-0.121c-0.282-0.104-0.488-0.15-0.62-0.15c-0.079,0-0.154,0.01-0.224,0.032
                c-0.068,0.021-0.128,0.058-0.183,0.101c-0.05,0.045-0.09,0.099-0.118,0.16c-0.029,0.065-0.044,0.142-0.044,0.221
                c0,0.108,0.021,0.199,0.067,0.281s0.108,0.15,0.188,0.213c0.079,0.062,0.167,0.11,0.271,0.154c0.103,0.047,0.206,0.081,0.315,0.115
                c0.229,0.064,0.479,0.111,0.76,0.145c0.28,0.025,0.575,0.043,0.881,0.043c0.264,0,0.525-0.021,0.785-0.063
                c0.264-0.042,0.51-0.108,0.744-0.194c0.237-0.085,0.456-0.197,0.656-0.332s0.377-0.298,0.521-0.486
                c0.146-0.188,0.263-0.4,0.348-0.646c0.083-0.241,0.124-0.511,0.124-0.813c0-0.229-0.025-0.441-0.085-0.641
                C50.347,9.066,50.268,8.883,50.164,8.715z M54.937,9.203c-0.042,0.125-0.089,0.262-0.142,0.411
                c-0.051,0.146-0.104,0.299-0.153,0.452c-0.053,0.148-0.1,0.297-0.144,0.438c-0.043,0.141-0.077,0.262-0.105,0.363h-0.052
                c-0.026-0.104-0.059-0.217-0.096-0.344c-0.036-0.127-0.075-0.265-0.12-0.403c-0.044-0.144-0.092-0.29-0.146-0.447
                c-0.052-0.151-0.107-0.312-0.166-0.471l-1.413-3.788h-1.36l2.549,6.311c0.023,0.062,0.042,0.117,0.054,0.168
                c0.009,0.051,0.016,0.107,0.016,0.176c0,0.039-0.006,0.078-0.012,0.125c-0.006,0.048-0.021,0.105-0.043,0.179
                c-0.06,0.21-0.133,0.412-0.22,0.608c-0.087,0.195-0.192,0.381-0.313,0.556c-0.125,0.173-0.267,0.332-0.428,0.479
                c-0.161,0.146-0.35,0.271-0.557,0.377c-0.054,0.024-0.108,0.057-0.165,0.088c-0.056,0.031-0.105,0.069-0.151,0.111
                c-0.046,0.045-0.085,0.096-0.114,0.149c-0.027,0.056-0.044,0.116-0.044,0.188c0,0.088,0.019,0.16,0.05,0.228
                c0.031,0.063,0.076,0.118,0.133,0.161c0.058,0.041,0.123,0.074,0.198,0.096c0.071,0.021,0.147,0.031,0.229,0.031
                c0.144,0,0.29-0.027,0.441-0.084c0.151-0.051,0.301-0.129,0.45-0.227c0.147-0.101,0.295-0.217,0.438-0.352
                c0.142-0.139,0.276-0.289,0.402-0.453c0.126-0.162,0.242-0.339,0.349-0.525c0.104-0.188,0.192-0.381,0.269-0.578l2.918-7.813h-1.278
                L54.937,9.203z M63.638,5.879c-0.217-0.221-0.474-0.385-0.769-0.491c-0.293-0.106-0.608-0.159-0.95-0.159
                c-0.226,0-0.443,0.024-0.664,0.074c-0.217,0.05-0.425,0.125-0.622,0.225c-0.199,0.1-0.383,0.225-0.554,0.376
                c-0.168,0.151-0.317,0.327-0.446,0.528V5.415H58.54v6.259c0,0.021,0.001,0.051,0.003,0.092c0.001,0.045,0.005,0.092,0.011,0.146
                c0.011,0.077,0.034,0.146,0.068,0.21c0.033,0.062,0.08,0.114,0.134,0.16c0.056,0.045,0.116,0.079,0.188,0.104
                c0.067,0.026,0.146,0.039,0.225,0.039s0.153-0.013,0.225-0.039c0.069-0.021,0.133-0.062,0.188-0.104
                c0.053-0.046,0.1-0.099,0.134-0.16c0.037-0.063,0.06-0.133,0.068-0.21c0.007-0.055,0.01-0.102,0.011-0.146
                c0.002-0.041,0.002-0.07,0.002-0.092V8.082c0-0.312,0.048-0.587,0.146-0.821c0.096-0.235,0.227-0.43,0.391-0.586
                c0.164-0.155,0.354-0.272,0.573-0.35c0.22-0.078,0.453-0.117,0.702-0.117c0.212,0,0.409,0.033,0.591,0.096
                c0.184,0.066,0.341,0.171,0.471,0.318C62.8,6.767,62.9,6.958,62.976,7.194c0.07,0.235,0.108,0.522,0.108,0.861v3.619
                c0,0.021,0,0.051,0.002,0.092c0,0.045,0.005,0.092,0.013,0.146c0.013,0.077,0.033,0.146,0.069,0.21
                c0.035,0.062,0.078,0.114,0.133,0.16c0.055,0.045,0.116,0.079,0.188,0.104c0.07,0.026,0.146,0.039,0.226,0.039
                s0.154-0.013,0.226-0.039c0.069-0.021,0.132-0.062,0.188-0.104c0.056-0.046,0.101-0.099,0.136-0.16
                c0.035-0.063,0.06-0.133,0.066-0.21c0.006-0.055,0.011-0.102,0.012-0.146c0.001-0.041,0.001-0.07,0.001-0.092V7.963
                c0-0.477-0.062-0.888-0.188-1.235C64.026,6.382,63.856,6.1,63.638,5.879z M71.444,11.146c-0.073-0.071-0.17-0.106-0.282-0.106
                c-0.062,0-0.128,0.012-0.194,0.033c-0.064,0.021-0.139,0.05-0.214,0.085c-0.229,0.102-0.462,0.173-0.695,0.213
                c-0.233,0.043-0.474,0.066-0.719,0.066c-0.289,0-0.563-0.057-0.822-0.162c-0.261-0.109-0.487-0.272-0.685-0.491
                c-0.192-0.218-0.349-0.495-0.461-0.825c-0.113-0.329-0.17-0.717-0.17-1.164c0-0.417,0.057-0.787,0.168-1.103
                c0.111-0.318,0.271-0.585,0.481-0.799c0.209-0.215,0.463-0.376,0.764-0.483c0.301-0.108,0.642-0.161,1.016-0.161
                c0.298,0,0.568,0.029,0.813,0.087c0.248,0.059,0.466,0.144,0.651,0.256l0.355-0.989c-0.239-0.112-0.521-0.2-0.836-0.262
                c-0.318-0.063-0.685-0.095-1.092-0.095c-0.311,0-0.614,0.031-0.912,0.091c-0.299,0.06-0.58,0.153-0.849,0.279
                c-0.266,0.124-0.513,0.283-0.736,0.477c-0.228,0.194-0.421,0.425-0.586,0.692c-0.163,0.269-0.29,0.575-0.382,0.92
                c-0.093,0.344-0.138,0.73-0.138,1.159c0,0.413,0.037,0.792,0.114,1.132c0.074,0.337,0.183,0.643,0.318,0.909
                c0.142,0.265,0.309,0.495,0.504,0.692c0.199,0.196,0.419,0.358,0.659,0.487c0.242,0.127,0.505,0.224,0.788,0.283
                c0.281,0.063,0.578,0.097,0.889,0.097c0.188,0,0.376-0.014,0.562-0.035c0.188-0.021,0.375-0.062,0.557-0.107
                c0.185-0.051,0.356-0.112,0.526-0.191c0.17-0.076,0.329-0.169,0.476-0.273c0.075-0.051,0.135-0.112,0.179-0.185
                c0.043-0.069,0.063-0.146,0.063-0.226C71.559,11.316,71.52,11.215,71.444,11.146z M7.444,10.917v1.047l2.882-1.877L7.444,8.208
                v1.044h-2.32c-1.852,0-3.358-1.505-3.358-3.36c0-1.852,1.508-3.36,3.359-3.36h5.298c0.459,0,0.832-0.372,0.832-0.832
                s-0.373-0.831-0.832-0.831H5.125c-2.771,0-5.023,2.254-5.023,5.024c0,2.769,2.253,5.023,5.022,5.023L7.444,10.917L7.444,10.917z
                 M8.821,4.966h-2.32V3.92L3.619,5.798l2.882,1.878V6.631H8.82c1.854,0,3.359,1.507,3.359,3.36c0,1.854-1.507,3.358-3.36,3.358H3.522
                c-0.459,0-0.832,0.373-0.832,0.834c0,0.459,0.373,0.832,0.832,0.832H8.82c2.771,0,5.025-2.255,5.025-5.022
                C13.844,7.22,11.591,4.966,8.821,4.966z"/>
        </svg>
    )
}
export function iconPoll(size) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    return(
        <svg version="1.1" id="레이어_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={_size} height={_size} viewBox="0 0 48 48" enableBackground="new 0 0 48 48" xmlSpace="preserve">
            <g>
                <path fillRule="evenodd" clipRule="evenodd" fill="#8EB0FB" d="M4.535,37.125C2.003,33.378,0.525,28.861,0.525,24
                    C0.525,11.035,11.035,0.526,24,0.526c12.964,0,23.475,10.509,23.475,23.474c0,5.037-1.587,9.704-4.287,13.528"/>
                <path fillRule="evenodd" clipRule="evenodd" fill="#E89723" d="M43.177,37.524c0.165-0.234,0.325-0.471,0.481-0.71V25.426
                    L23.617,9.598L4.375,25.426v11.438c0.123,0.187,0.248,0.372,0.375,0.556"/>
                <path fillRule="evenodd" clipRule="evenodd" fill="#FFFFFF" d="M39.469,10.309c0-0.29-0.234-0.524-0.523-0.524H9.618
                    c-0.29,0-0.523,0.234-0.523,0.524v24.126c4.569,2.133,7.918,6.391,11.8,8.769h10.221c2.768-1.857,5.382-4.85,8.354-7.014V10.309z"
                    />
                <path fillRule="evenodd" clipRule="evenodd" fill="#5F8BEB" d="M9.095,23.389V10.309c0-0.29,0.234-0.524,0.523-0.524h29.327
                    c0.289,0,0.523,0.234,0.523,0.524v13.081H9.095z"/>
                <g>
                    <rect x="12.782" y="26.145" fill="#E2EAEA" width="22.999" height="3.621"/>
                    <rect x="12.782" y="26.145" fill="#ADB9B9" width="8.466" height="3.621"/>
                    <rect x="12.782" y="31.904" fill="#E1E9E9" width="22.999" height="3.622"/>
                    <rect x="12.782" y="31.904" fill="#FF5943" width="17.893" height="3.622"/>
                    <rect x="12.782" y="37.665" fill="#E1E9E9" width="22.999" height="3.623"/>
                    <rect x="12.782" y="37.665" fill="#ADB8B8" width="14.138" height="3.623"/>
                </g>
                <path fillRule="evenodd" clipRule="evenodd" fill="#F9BD3C" d="M29.182,45.775l-7.438-6.004L4.36,25.744v11.099
                    c2.342,3.577,5.634,6.475,9.517,8.334"/>
                <path fillRule="evenodd" clipRule="evenodd" fill="#F9BD3C" d="M34.115,45.181c3.896-1.863,7.194-4.771,9.539-8.361V25.744
                    L26.249,39.763l-7.466,6.013"/>
                <path fillRule="evenodd" clipRule="evenodd" fill="#FFDB5F" d="M18.659,46.857c0.344,0.08,0.69,0.151,1.04,0.218
                    c0.116,0.021,0.232,0.041,0.349,0.06c0.305,0.053,0.612,0.098,0.92,0.138c0.136,0.018,0.271,0.035,0.407,0.052
                    c0.308,0.034,0.618,0.061,0.929,0.082c0.128,0.01,0.255,0.021,0.383,0.029c0.435,0.024,0.873,0.038,1.313,0.038
                    c0.438,0,0.873-0.014,1.305-0.038c0.127-0.007,0.255-0.019,0.382-0.028c0.309-0.022,0.616-0.048,0.923-0.082
                    c0.135-0.015,0.27-0.033,0.404-0.05c0.304-0.039,0.606-0.083,0.906-0.134c0.118-0.021,0.238-0.041,0.356-0.063
                    c0.335-0.063,0.667-0.132,0.998-0.208c0.076-0.017,0.152-0.033,0.229-0.051c1.716-0.415,3.358-1.016,4.905-1.782l-10.485-7.396
                    l-10.421,7.351c1.563,0.783,3.226,1.397,4.963,1.819C18.529,46.828,18.594,46.842,18.659,46.857z"/>
                <path opacity="0.5" fill="#C4801F" d="M30.73,44.657l-0.402,0.399c-0.35,0.347-0.918,0.347-1.267,0
                    c-0.168-0.166-0.26-0.388-0.26-0.622c0-0.235,0.092-0.456,0.26-0.623l1.483-1.471c0.307-0.305,0.885-0.754,1.306-0.336
                    c0.193,0.192,0.505,0.19,0.698-0.003c0.191-0.193,0.191-0.506-0.003-0.697c-0.717-0.711-1.774-0.579-2.696,0.336l-1.483,1.471
                    c-0.354,0.353-0.552,0.823-0.552,1.323c0,0.499,0.197,0.97,0.552,1.322c0.366,0.363,0.847,0.545,1.329,0.545
                    c0.48,0,0.961-0.182,1.326-0.545l0.403-0.4c0.193-0.191,0.195-0.504,0.004-0.697C31.236,44.466,30.925,44.465,30.73,44.657z
                     M35.225,38.941c-0.77-0.763-1.846-0.804-2.558-0.098l-0.503,0.499c-0.192,0.191-0.193,0.504-0.001,0.697
                    c0.19,0.193,0.504,0.194,0.697,0.002l0.502-0.498c0.368-0.366,0.851-0.215,1.167,0.099c0.168,0.166,0.26,0.388,0.26,0.622
                    c0,0.235-0.092,0.456-0.26,0.623l-1.582,1.569c-0.723,0.718-1.063,0.381-1.208,0.237c-0.193-0.192-0.505-0.19-0.697,0.003
                    c-0.191,0.192-0.19,0.506,0.003,0.697c0.331,0.329,0.711,0.492,1.108,0.492c0.485,0,1-0.244,1.488-0.729l1.583-1.569
                    c0.355-0.353,0.551-0.823,0.551-1.323C35.775,39.766,35.58,39.295,35.225,38.941z"/>
                <path fill="#FFFFFF" d="M30.625,44.205l-0.403,0.4c-0.349,0.346-0.917,0.346-1.266,0c-0.168-0.167-0.26-0.388-0.26-0.623
                    s0.092-0.456,0.26-0.622l1.483-1.471c0.307-0.306,0.885-0.755,1.306-0.336c0.194,0.191,0.505,0.189,0.698-0.003
                    c0.192-0.194,0.191-0.506-0.003-0.698c-0.716-0.71-1.775-0.579-2.696,0.336l-1.483,1.472c-0.354,0.353-0.551,0.822-0.551,1.322
                    s0.196,0.97,0.551,1.322c0.366,0.363,0.847,0.546,1.328,0.546s0.962-0.183,1.328-0.546l0.403-0.399
                    c0.192-0.192,0.193-0.505,0.002-0.697C31.131,44.014,30.818,44.014,30.625,44.205z M35.119,38.49
                    c-0.77-0.763-1.846-0.805-2.558-0.098l-0.502,0.498c-0.193,0.192-0.194,0.505-0.002,0.697c0.191,0.194,0.504,0.195,0.697,0.003
                    l0.502-0.498c0.369-0.367,0.851-0.214,1.167,0.098c0.168,0.167,0.26,0.388,0.26,0.623s-0.092,0.456-0.259,0.623l-1.583,1.569
                    c-0.723,0.718-1.063,0.381-1.208,0.236c-0.192-0.191-0.505-0.189-0.697,0.003c-0.191,0.194-0.19,0.506,0.003,0.697
                    c0.331,0.33,0.711,0.493,1.108,0.493c0.486,0,1.001-0.245,1.488-0.729l1.583-1.57c0.355-0.353,0.551-0.822,0.551-1.322
                    S35.475,38.844,35.119,38.49z"/>
                <g>
                    <g>
                        <path fill="#FFFFFF" d="M19.496,13.625H17.5v6.022h1.972c0.946,0,1.721-0.281,2.322-0.843c0.602-0.562,0.902-1.309,0.902-2.242
                            C22.695,14.604,21.629,13.625,19.496,13.625z M20.919,18.119c-0.365,0.375-0.871,0.563-1.518,0.563h-0.736v-4.087h0.745
                            c0.641,0,1.144,0.17,1.509,0.511c0.366,0.34,0.548,0.832,0.548,1.473C21.468,17.23,21.285,17.744,20.919,18.119z M23.422,17.733
                            h2.295v-0.819h-2.295V17.733z M28.047,18.174c0.16-0.194,0.423-0.427,0.791-0.699c0.2-0.147,0.395-0.296,0.584-0.444
                            c0.188-0.148,0.356-0.31,0.503-0.483c0.146-0.173,0.263-0.366,0.352-0.579c0.09-0.213,0.134-0.458,0.134-0.732
                            c0-0.535-0.171-0.953-0.51-1.256c-0.34-0.302-0.82-0.454-1.442-0.454c-0.613,0-1.163,0.168-1.649,0.507v1.027
                            c0.476-0.409,0.971-0.614,1.486-0.614c0.33,0,0.573,0.074,0.73,0.223c0.155,0.148,0.234,0.357,0.234,0.624
                            c0,0.215-0.056,0.411-0.167,0.585c-0.112,0.174-0.296,0.357-0.553,0.548c-0.66,0.494-1.094,0.86-1.299,1.099
                            c-0.206,0.238-0.365,0.495-0.476,0.77c-0.11,0.274-0.165,0.573-0.165,0.898v0.454h3.76v-0.961h-2.553
                            C27.808,18.539,27.888,18.368,28.047,18.174z"/>
                    </g>
                </g>
            </g>
        </svg>
    )
}
export function infoProcess(size) {
    let _size = size !== undefined ? size : 62
    return(
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"x="0px" y="0px" width={_size * (246 / 62)} height={_size} viewBox="0 0 246 62" enableBackground="new 0 0 246 62">
            <g>
                <g>
                    <g>
                        <path fillRule="evenodd" clipRule="evenodd" fill="#EDEDED" d="M31.708,0.25c16.982,0,30.75,13.767,30.75,30.75
                            c0,16.982-13.768,30.75-30.75,30.75S0.958,47.982,0.958,31C0.958,14.017,14.726,0.25,31.708,0.25z"/>
                    </g>
                    <rect x="21.709" y="16.673" fill="#FFFFFF" width="19.5" height="28.5"/>
                    <g>
                        <path fill="#4E4E4E" d="M39.672,13.017l-15.942-0.015c-1.678,0-3.035,1.372-3.035,3.05v29.897c0,1.676,1.357,3.049,3.035,3.049
                            h15.942c1.677,0,3.05-1.373,3.05-3.049V16.052C42.722,14.374,41.349,13.017,39.672,13.017z M40.734,44.023H22.729V17.976h18.005
                            V44.023z"/>
                        <path fill="#4E4E4E" d="M31.627,32.737v0.776l2.141-1.395l-2.141-1.395v0.776h-1.723c-1.376,0-2.496-1.12-2.496-2.496
                            s1.12-2.495,2.496-2.495h3.935c0.342,0,0.618-0.276,0.618-0.618s-0.276-0.618-0.618-0.618h-3.935
                            c-2.058,0-3.731,1.674-3.731,3.731s1.674,3.732,3.731,3.732H31.627z"/>
                        <path fill="#4E4E4E" d="M32.649,28.316h-1.724V27.54l-2.141,1.395l2.141,1.395v-0.776h1.724c1.375,0,2.495,1.119,2.495,2.495
                            c0,1.377-1.12,2.496-2.496,2.496h-3.935c-0.342,0-0.618,0.276-0.618,0.618c0,0.341,0.276,0.618,0.618,0.618h3.935
                            c2.058,0,3.732-1.675,3.732-3.732S34.707,28.316,32.649,28.316z"/>
                    </g>
                </g>
                <g>
                    <g>
                        <path fillRule="evenodd" clipRule="evenodd" fill="#EDEDED" d="M122.999,0.25c16.984,0,30.752,13.767,30.752,30.75
                            c0,16.982-13.768,30.75-30.752,30.75C106.017,61.75,92.25,47.982,92.25,31C92.25,14.017,106.017,0.25,122.999,0.25z"/>
                    </g>
                    <rect x="113.25" y="16.75" fill="#FFFFFF" width="19.501" height="28.5"/>
                    <g>
                        <path fill="#4E4E4E" d="M130.964,13.017l-15.942-0.015c-1.678,0-3.035,1.372-3.035,3.05v29.897c0,1.676,1.357,3.049,3.035,3.049
                            h15.942c1.678,0,3.051-1.373,3.051-3.049V16.052C134.015,14.374,132.642,13.017,130.964,13.017z M132.026,44.023h-18.005V17.976
                            h18.005V44.023z"/>
                        <path fill="#4E4E4E" d="M118.238,29.391l-1.298,0.544l0.194-1.503h-1.059l0.19,1.503l-1.305-0.544l-0.324,0.924l1.403,0.215
                            l-0.993,1.129l0.824,0.568l0.729-1.323l0.734,1.323l0.828-0.568l-0.998-1.129l1.402-0.215L118.238,29.391z"/>
                        <path fill="#4E4E4E" d="M122.646,29.391l-1.298,0.544l0.194-1.503h-1.059l0.19,1.503l-1.304-0.544l-0.325,0.924l1.404,0.215
                            l-0.994,1.129l0.824,0.568l0.729-1.323l0.734,1.323l0.828-0.568l-0.998-1.129l1.403-0.215L122.646,29.391z"/>
                        <path fill="#4E4E4E" d="M127.056,29.391l-1.299,0.544l0.195-1.503h-1.059l0.189,1.503l-1.304-0.544l-0.325,0.924l1.404,0.215
                            l-0.994,1.129l0.824,0.568l0.729-1.323l0.734,1.323l0.83-0.568l-1-1.129l1.404-0.215L127.056,29.391z"/>
                        <path fill="#4E4E4E" d="M131.464,29.391l-1.299,0.544l0.195-1.503h-1.059l0.189,1.503l-1.303-0.544l-0.324,0.924l1.402,0.215
                            l-0.994,1.129l0.824,0.568l0.729-1.323l0.734,1.323l0.83-0.568l-1-1.129l1.404-0.215L131.464,29.391z"/>
                    </g>
                </g>
                <g>
                    <g>
                        <path fillRule="evenodd" clipRule="evenodd" fill="#EDEDED" d="M214.292,0.25c16.982,0,30.75,13.768,30.75,30.75
                            s-13.768,30.75-30.75,30.75s-30.75-13.768-30.75-30.75S197.31,0.25,214.292,0.25z"/>
                    </g>
                    <rect x="202.161" y="14.182" fill="#FFFFFF" width="31.965" height="21.576"/>
                    <rect x="193.126" y="27.55" fill="#FFFFFF" width="13" height="17.417"/>
                    <g>
                        <path fill="#4E4E4E" d="M232.905,12.002h-28.197c-1.873,0-3.404,1.531-3.404,3.403v10.762c0.977,0,1.947,0,3.029,0V15.03h28.947
                            v19.955H206.47c0,0.981,0,2.031,0,3.028h8.832V42h-3.998v2.967h15.02V42h-4.029v-3.986h10.611c1.871,0,3.404-1.532,3.404-3.403
                            V15.405C236.31,13.533,234.776,12.002,232.905,12.002z"/>
                        <path fill="#4E4E4E" d="M204.253,24.017l-8.943-0.015c-1.678,0-3.035,1.371-3.035,3.049v19.898c0,1.676,1.357,3.049,3.035,3.049
                            h8.943c1.676,0,3.049-1.373,3.049-3.049V27.051C207.302,25.373,205.929,24.017,204.253,24.017z M205.315,45.023H194.31V28.976
                            h11.006V45.023z M197.47,26.167c3,0,5,0,8,0C202.47,26.167,200.47,26.167,197.47,26.167z M206.47,40.167c0-2,0-5,0-7
                            C206.47,35.167,206.47,38.167,206.47,40.167z"/>
                        <path fill="#4E4E4E" d="M197.624,36.209l-0.611,0.256l0.092-0.707h-0.498l0.088,0.707l-0.613-0.256l-0.152,0.436l0.66,0.102
                            l-0.469,0.531l0.389,0.269l0.344-0.624l0.346,0.624l0.391-0.269l-0.471-0.531l0.662-0.102L197.624,36.209z"/>
                        <path fill="#4E4E4E" d="M199.702,36.209l-0.611,0.256l0.092-0.707h-0.5l0.09,0.707l-0.613-0.256l-0.154,0.436l0.662,0.102
                            l-0.469,0.531l0.389,0.269l0.344-0.624l0.346,0.624l0.391-0.269l-0.471-0.531l0.662-0.102L199.702,36.209z"/>
                        <path fill="#4E4E4E" d="M201.78,36.209l-0.611,0.256l0.092-0.707h-0.5l0.09,0.707l-0.613-0.256l-0.154,0.436l0.662,0.102
                            l-0.469,0.531l0.389,0.269l0.344-0.624l0.346,0.624l0.391-0.269l-0.471-0.531l0.662-0.102L201.78,36.209z"/>
                        <path fill="#4E4E4E" d="M203.858,36.209l-0.613,0.256l0.092-0.707h-0.498l0.09,0.707l-0.615-0.256l-0.152,0.436l0.662,0.102
                            l-0.469,0.531l0.389,0.269l0.344-0.624l0.346,0.624l0.391-0.269l-0.471-0.531l0.66-0.102L203.858,36.209z"/>
                        <path fill="#4E4E4E" d="M214.442,23.809l-1.182,0.494l0.178-1.366h-0.963l0.174,1.366l-1.186-0.494l-0.295,0.84l1.275,0.194
                            l-0.904,1.026l0.75,0.518l0.662-1.203l0.668,1.203l0.754-0.518l-0.908-1.026l1.275-0.194L214.442,23.809z"/>
                        <path fill="#4E4E4E" d="M218.448,23.809l-1.18,0.494l0.178-1.366h-0.963l0.172,1.366l-1.184-0.494l-0.295,0.84l1.275,0.194
                            l-0.904,1.026l0.75,0.518l0.662-1.203l0.668,1.203l0.752-0.518l-0.906-1.026l1.275-0.194L218.448,23.809z"/>
                        <path fill="#4E4E4E" d="M222.456,23.809l-1.18,0.494l0.176-1.366h-0.961l0.172,1.366l-1.186-0.494l-0.295,0.84l1.275,0.194
                            l-0.902,1.026l0.748,0.518l0.664-1.203l0.666,1.203l0.754-0.518l-0.908-1.026l1.275-0.194L222.456,23.809z"/>
                        <path fill="#4E4E4E" d="M226.464,23.809l-1.182,0.494l0.178-1.366h-0.963l0.174,1.366l-1.186-0.494l-0.295,0.84l1.275,0.194
                            l-0.904,1.026l0.75,0.518l0.662-1.203l0.668,1.203l0.754-0.518l-0.908-1.026l1.275-0.194L226.464,23.809z"/>
                    </g>
                </g>
                <g>
                    <path fill="#D9D9D9" d="M163.79,23.646c0.328-0.33,0.863-0.33,1.193,0l6.758,6.756c0.33,0.33,0.33,0.865,0,1.195
                        c-0.33,0.33-0.865,0.33-1.195,0l-6.756-6.757C163.46,24.51,163.46,23.976,163.79,23.646z"/>
                    <path fill="#D9D9D9" d="M163.79,38.354c-0.33-0.33-0.33-0.864,0-1.194l6.756-6.758c0.33-0.329,0.865-0.329,1.195,0
                        c0.328,0.33,0.328,0.865,0,1.195l-6.758,6.757C164.653,38.684,164.118,38.684,163.79,38.354z"/>
                    <path fill="#D9D9D9" d="M73.789,23.646c0.33-0.33,0.865-0.33,1.195,0l6.757,6.756c0.33,0.33,0.33,0.865,0,1.195
                        c-0.33,0.33-0.864,0.33-1.194,0l-6.758-6.757C73.46,24.51,73.46,23.976,73.789,23.646z"/>
                    <path fill="#D9D9D9" d="M73.79,38.354c-0.33-0.33-0.33-0.864,0-1.194l6.756-6.758c0.33-0.329,0.865-0.329,1.194,0
                        c0.33,0.33,0.33,0.865,0,1.195l-6.756,6.757C74.654,38.684,74.119,38.684,73.79,38.354z"/>
                </g>
            </g>
        </svg>
    )
}
export function iconChatting(size) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    return(
        <svg version="1.1" id="레이어_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={_size} height={_size} viewBox="0 0 48 48" enableBackground="new 0 0 48 48" xmlSpace="preserve">
            <g>
                <path fillRule="evenodd" clipRule="evenodd" fill="#68D4D5" d="M24,0.525C11.035,0.525,0.525,11.035,0.525,24
                    c0,5.848,2.143,11.192,5.68,15.302c11.073-6.327,25.486-7.404,36.802-1.534C45.814,33.9,47.475,29.146,47.475,24
                    C47.475,11.035,36.964,0.525,24,0.525z"/>
                <path fillRule="evenodd" clipRule="evenodd" fill="#E89723" d="M41.155,37.643c0.498-0.617,2.067-0.161,2.503-0.828V25.426
            		L23.617,9.598L4.375,25.426v11.438c0.366,0.559,2.396,0.339,2.807,0.863C19.187,34.168,28.779,36.137,41.155,37.643z"/>
                <path fillRule="evenodd" clipRule="evenodd" fill="#FFFFFF" d="M39.469,10.308c0-0.289-0.234-0.524-0.523-0.524H9.618
		            c-0.29,0-0.523,0.235-0.523,0.524v28.119c2.176,2.294,4.563,3.842,7.083,4.776h14.17c3.102-0.897,6.183-2.261,9.121-3.893V10.308z"
                />
                <path fillRule="evenodd" clipRule="evenodd" fill="#34A1A2" d="M9.095,17.628v-7.32c0-0.29,0.234-0.524,0.523-0.524h29.327
		            c0.289,0,0.523,0.234,0.523,0.524v7.32H9.095z"/>
                <g>
                    <g>
                        <path fillRule="evenodd" clipRule="evenodd" fill="#68D4D5" d="M13.492,33.536c-0.982,0-1.778,0.796-1.778,1.779
                            c0,0.981,0.796,1.777,1.778,1.777c0.982,0,1.778-0.796,1.778-1.777C15.27,34.332,14.474,33.536,13.492,33.536z M13.492,24
                            c0.982,0,1.778-0.796,1.778-1.778s-0.795-1.778-1.778-1.778c-0.982,0-1.778,0.796-1.778,1.778S12.51,24,13.492,24z"/>
                    </g>
                </g>
                <g>
                    <g>
                        <path fillRule="evenodd" clipRule="evenodd" fill="#E2EDED" d="M30.042,33.536H19.569c-0.056,0-0.11,0.011-0.165,0.017h-3.157
                            l1.772,1.34c-0.01,0.07-0.022,0.141-0.022,0.215v1.047c0,0.868,0.704,1.572,1.571,1.572h10.473c0.867,0,1.572-0.704,1.572-1.572
                            v-1.047C31.614,34.24,30.909,33.536,30.042,33.536z M30.042,20.444H19.569c-0.055,0-0.106,0.011-0.16,0.016h-3.162l1.772,1.34
                            c-0.01,0.071-0.022,0.142-0.022,0.215v1.047c0,0.867,0.704,1.571,1.571,1.571h10.473c0.867,0,1.572-0.704,1.572-1.571v-1.047
                            C31.614,21.147,30.909,20.444,30.042,20.444z"/>
                    </g>
                </g>
                <g>
                    <g>
                        <path fillRule="evenodd" clipRule="evenodd" fill="#ABCBCB" d="M37.912,27.269h-3.155c-0.056-0.006-0.108-0.017-0.165-0.017
                            H24.118c-0.868,0-1.571,0.704-1.571,1.571v1.047c0,0.867,0.704,1.572,1.571,1.572h10.474c0.867,0,1.571-0.705,1.571-1.572v-1.047
                            c0-0.074-0.012-0.145-0.021-0.216L37.912,27.269z"/>
                    </g>
                </g>
                <path fillRule="evenodd" clipRule="evenodd" fill="#F9BD3C" d="M4.36,25.744v11.099c2.447,3.738,5.932,6.731,10.043,8.576
                    c3.189-1.154,6.116-2.465,8.781-4.483L4.36,25.744z"/>
                <path fillRule="evenodd" clipRule="evenodd" fill="#F9BD3C" d="M25.164,40.638c2.73,1.733,5.271,3.45,7.913,4.999
		            c4.345-1.826,8.028-4.913,10.577-8.817V25.744L25.164,40.638z"/>
                <path fillRule="evenodd" clipRule="evenodd" fill="#FFDB5F" d="M18.659,46.857c0.344,0.08,0.69,0.152,1.04,0.218
                    c0.116,0.021,0.232,0.042,0.349,0.061c0.305,0.052,0.612,0.098,0.92,0.137c0.136,0.019,0.271,0.036,0.407,0.052
                    c0.308,0.034,0.618,0.061,0.929,0.083c0.128,0.01,0.255,0.021,0.383,0.028c0.435,0.024,0.873,0.039,1.313,0.039
                    c0.438,0,0.873-0.014,1.305-0.039c0.127-0.007,0.255-0.019,0.382-0.027c0.309-0.022,0.616-0.048,0.923-0.082
                    c0.135-0.015,0.27-0.033,0.404-0.051c0.304-0.039,0.606-0.082,0.906-0.133c0.118-0.021,0.238-0.042,0.356-0.063
                    c0.335-0.062,0.667-0.131,0.998-0.207c0.076-0.018,0.152-0.033,0.229-0.052c1.716-0.414,3.358-1.015,4.905-1.782l-10.485-7.396
                    l-10.421,7.351c1.563,0.783,3.226,1.398,4.963,1.82C18.529,46.828,18.594,46.843,18.659,46.857z"/>
                <path opacity="0.5" fill="#C4801F" d="M30.73,44.658l-0.402,0.399c-0.35,0.346-0.918,0.347-1.267,0
                    c-0.168-0.167-0.26-0.388-0.26-0.623s0.092-0.456,0.26-0.623l1.483-1.471c0.307-0.305,0.885-0.753,1.306-0.335
                    c0.193,0.191,0.505,0.19,0.698-0.004c0.191-0.192,0.191-0.505-0.003-0.697c-0.717-0.71-1.774-0.578-2.696,0.336l-1.483,1.472
                    c-0.354,0.353-0.552,0.822-0.552,1.322s0.197,0.97,0.552,1.323c0.366,0.362,0.847,0.544,1.329,0.544
                    c0.48,0,0.961-0.182,1.326-0.544l0.403-0.4c0.193-0.192,0.195-0.504,0.004-0.698C31.236,44.467,30.925,44.466,30.73,44.658z
                     M35.225,38.942c-0.77-0.764-1.846-0.805-2.558-0.098l-0.503,0.499c-0.192,0.19-0.193,0.504-0.001,0.696
                    c0.19,0.194,0.504,0.195,0.697,0.002l0.502-0.498c0.368-0.365,0.851-0.214,1.167,0.099c0.168,0.166,0.26,0.388,0.26,0.623
                    s-0.092,0.456-0.26,0.623l-1.582,1.568c-0.723,0.719-1.063,0.382-1.208,0.238c-0.193-0.193-0.505-0.191-0.697,0.003
                    c-0.191,0.192-0.19,0.505,0.003,0.696c0.331,0.33,0.711,0.493,1.108,0.493c0.485,0,1-0.244,1.488-0.73l1.583-1.568
                    c0.355-0.354,0.551-0.824,0.551-1.323C35.775,39.766,35.58,39.296,35.225,38.942z"/>
                <path fill="#FFFFFF" d="M30.625,44.206l-0.403,0.4c-0.349,0.345-0.917,0.346-1.266,0c-0.168-0.167-0.26-0.388-0.26-0.623
                    c0-0.236,0.092-0.456,0.26-0.623l1.483-1.471c0.307-0.305,0.885-0.754,1.306-0.335c0.194,0.19,0.505,0.189,0.698-0.004
                    c0.192-0.193,0.191-0.505-0.003-0.697c-0.716-0.71-1.775-0.579-2.696,0.335l-1.483,1.473c-0.354,0.353-0.551,0.821-0.551,1.322
                    c0,0.5,0.196,0.969,0.551,1.322c0.366,0.363,0.847,0.545,1.328,0.545s0.962-0.182,1.328-0.545l0.403-0.399
                    c0.192-0.193,0.193-0.505,0.002-0.698S30.818,44.014,30.625,44.206z M35.119,38.491c-0.77-0.764-1.846-0.806-2.558-0.099
                    l-0.502,0.499c-0.193,0.191-0.194,0.505-0.002,0.697c0.191,0.194,0.504,0.194,0.697,0.002l0.502-0.498
                    c0.369-0.366,0.851-0.214,1.167,0.098c0.168,0.168,0.26,0.388,0.26,0.624c0,0.235-0.092,0.456-0.259,0.622l-1.583,1.569
                    c-0.723,0.718-1.063,0.382-1.208,0.237c-0.192-0.191-0.505-0.19-0.697,0.003c-0.191,0.193-0.19,0.505,0.003,0.697
                    c0.331,0.33,0.711,0.493,1.108,0.493c0.486,0,1.001-0.245,1.488-0.729l1.583-1.57c0.355-0.354,0.551-0.823,0.551-1.322
                    C35.67,39.313,35.475,38.845,35.119,38.491z"/>
            </g>
        </svg>
    )
}
export function starBadge(size, color) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    let _color = color !== undefined ? color : DEFULAT_COLOR
    return(
        <svg version="1.1" id="레이어_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={_size} height={_size} viewBox="0 0 48 48" enableBackground="new 0 0 48 48" xmlSpace="preserve">
            <path fill="#FFFFFF" d="M24,0c13.26,0,24,10.749,24,24c0,13.26-10.748,24-24,24C10.746,48,0,37.253,0,24C0,10.745,10.746,0,24,0z"/>
            <path fill={_color} d="M35.898,22.343l1.373-1.19c1.701-1.475,1.259-2.835-0.983-3.026l-1.807-0.154l-5.878-0.498l-2.302-5.426
                l-0.705-1.657c-0.878-2.07-2.316-2.07-3.192,0L21.7,12.048l-2.3,5.426l-5.882,0.498l-1.804,0.154
                c-2.243,0.194-2.687,1.552-0.986,3.026l1.375,1.19l4.465,3.872l-1.34,5.748l-0.411,1.772c-0.514,2.188,0.649,3.032,2.576,1.872
                l1.551-0.94L24,31.61l5.055,3.053l1.557,0.941c1.927,1.159,3.084,0.318,2.576-1.872l-0.414-1.77l-1.343-5.751L35.898,22.343z"/>
        </svg>
    )
}
export function plusBadge(size, color) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    let _color = color !== undefined ? color : DEFULAT_COLOR
    return(
        <svg version="1.1" id="레이어_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={_size} height={_size} viewBox="0 0 48 48" enableBackground="new 0 0 48 48" xmlSpace="preserve">
            <path fill="#FFFFFF" d="M24,0c13.258,0,24,10.749,24,24c0,13.258-10.748,24-24,24C10.746,48,0,37.252,0,24C0,10.746,10.746,0,24,0z"
            />
            <g>
                <g>
                    <path fill={_color} d="M36.016,21.848h-9.899v-9.861c0-1.176-0.953-2.128-2.129-2.128s-2.128,0.952-2.128,2.128v9.861h-9.875
                        c-1.176,0-2.128,0.955-2.128,2.13s0.952,2.129,2.128,2.129h9.875v9.908c0,1.176,0.952,2.127,2.128,2.127s2.129-0.951,2.129-2.127
                        v-9.908h9.899c1.176,0,2.127-0.953,2.127-2.129S37.191,21.848,36.016,21.848z"/>
                </g>
            </g>
        </svg>
    )
}
export function leftTail(size, color) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    let _color = color !== undefined ? color : '#eee'
    return(
        <svg version="1.1" id="레이어_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={_size} height={_size} viewBox="0 0 48 48" enableBackground="new 0 0 48 48" xmlSpace="preserve">
            <path fill={_color} d="M23.682-0.028H19.5h-7.22c-13.379,0-16.254,6.44-6.393,14.318L19.5,25.166l0,0L48,47.934V26.74v-5.572V-0.02
                H23.682V-0.028z"/>
        </svg>
    )
}
export function rightTail(size, color) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    let _color = color !== undefined ? color : DEFULAT_COLOR
    return(
        <svg version="1.1" id="레이어_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={_size} height={_size} viewBox="0 0 48 48" enableBackground="new 0 0 48 48" xmlSpace="preserve">
            <path fill={_color} d="M24.342-0.02H0.024v21.188v5.572v21.193l28.5-22.768l0,0L42.137,14.29
                c9.861-7.878,6.986-14.318-6.393-14.318h-7.22h-4.182V-0.02z"/>
        </svg>
    )
}

// 내가 그림
// TODO:
// 구글 공식 phone paused 아이콘으로 다시 그리기
export function callHoldAccept(size) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" x="0px" y="0px"
             width={_size} height={_size} viewBox="0 0 48 48" enableBackground="new 0 0 48 48">
            <path fill="none" d="M0,0h48v48H0V0z"/>
            <path fill="#FFFFFF" d="M15.886,25.832c-0.993-1.338-1.885-2.756-2.646-4.252l4.4-4.4c0.56-0.56,0.72-1.34,0.5-2.04
	            C17.4,12.9,17,10.5,17,8c0-1.1-0.9-2-2-2H8C6.9,6,6,6.9,6,8c0,7.669,2.54,14.743,6.822,20.432"/>
            <line fill="#FFFFFF" x1="12.822" y1="28.432" x2="15.886" y2="25.832"/>
            <g>
                <path fill="#FFFFFF" d="M19.935,35.443C25.561,39.562,32.493,42,40,42c1.1,0,2-0.9,2-2v-6.98c0-1.1-0.9-2-2-2
		            c-2.48,0-4.9-0.397-7.141-1.14c-0.699-0.239-1.5-0.06-2.039,0.479l-4.4,4.398c-1.26-0.646-2.459-1.389-3.609-2.195"/>
                <line fill="#FFFFFF" x1="19.935" y1="35.443" x2="22.811" y2="32.562"/>
            </g>
            <path fill="none" d="M0,0h48v48H0V0z"/>
            <g>
                <path fill="#FFFFFF"
                      d="M23.747,26.613l-1.95-1.959L5.766,40.761v-9.157H3V45.5h13.832v-2.779H7.717L23.747,26.613z"/>
            </g>
            <path fill="#FFFFFF" d="M28.301,20.416h4.465V4.094h-4.465V20.416z M37.23,4.094v16.322h4.463V4.094H37.23z"/>
        </svg>
    );
}
export function volumeSetting(size) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" width={_size}
             height={_size} viewBox="0 0 48 48" enableBackground="new 0 0 48 48">
            <path fill="#FFFFFF" d="M6,18v12h8l10,10V8L14,18H6z"/>
            <path fill="none" d="M0,0h48v48H0V0z"/>
            <path fill="#FFFFFF" d="M40.395,25.732c0.071-0.565,0.124-1.132,0.124-1.732s-0.053-1.167-0.124-1.731l3.729-2.915
                c0.336-0.265,0.425-0.742,0.211-1.13l-3.531-6.113c-0.213-0.389-0.69-0.53-1.079-0.389l-4.398,1.767
                c-0.92-0.707-1.909-1.289-2.988-1.731l-0.67-4.682c-0.052-0.424-0.424-0.742-0.866-0.742h-2.76v11.537
                c3.045,0.382,5.41,2.982,5.41,6.129c0,3.147-2.365,5.748-5.41,6.131v11.535h2.76c0.442,0,0.814-0.316,0.866-0.742l0.67-4.682
                c1.078-0.44,2.068-1.043,2.988-1.731l4.396,1.768c0.409,0.158,0.866,0,1.079-0.39l3.534-6.113c0.212-0.389,0.123-0.865-0.213-1.13
                L40.395,25.732z"/>
        </svg>
    );
}
export function callEndAccept(size) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" x="0px" y="0px"
             width={_size} height={_size} viewBox="0 0 48 48" enableBackground="new 0 0 48 48">
            <path fill="none" d="M0,0h48v48H0V0z"/>
            <path fill="#FFFFFF" d="M15.886,25.832c-0.993-1.338-1.885-2.756-2.646-4.252l4.4-4.4c0.56-0.56,0.72-1.34,0.5-2.04
                C17.4,12.9,17,10.5,17,8c0-1.1-0.9-2-2-2H8C6.9,6,6,6.9,6,8c0,7.669,2.54,14.743,6.822,20.432"/>
            <line fill="none" x1="12.822" y1="28.432" x2="15.886" y2="25.832"/>
            <g>
                <path fill="#FFFFFF" d="M19.935,35.443C25.561,39.562,32.493,42,40,42c1.1,0,2-0.9,2-2v-6.98c0-1.1-0.9-2-2-2
                    c-2.48,0-4.9-0.397-7.141-1.14c-0.699-0.239-1.5-0.06-2.039,0.479l-4.4,4.398c-1.26-0.646-2.459-1.389-3.609-2.195"/>
                <line fill="none" x1="19.935" y1="35.443" x2="22.811" y2="32.562"/>
            </g>
            <path fill="none" d="M0,0h48v48H0V0z"/>
            <g>
                <path fill="#FFFFFF"
                      d="M23.747,26.613l-1.95-1.959L5.766,40.761v-9.157H3V45.5h13.832v-2.779H7.717L23.747,26.613z"/>
            </g>
            <path fill="#FFFFFF" d="M34.99,3c-5.527,0-10.011,4.488-10.011,10.019c0,5.53,4.483,10.018,10.011,10.018
                C40.516,23.037,45,18.548,45,13.019C45,7.488,40.516,3,34.99,3z M34.99,21.034c-4.425,0-8.009-3.587-8.009-8.014
                c0-1.854,0.631-3.558,1.691-4.909l11.22,11.231C38.543,20.402,36.842,21.034,34.99,21.034z M41.308,17.929L30.086,6.697
                c1.351-1.062,3.052-1.692,4.904-1.692c4.425,0,8.009,3.586,8.009,8.015C42.999,14.872,42.367,16.576,41.308,17.929z"/>
        </svg>
    );
}
export function swapPhone(size) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" x="0px" y="0px"
             width={_size} height={_size} viewBox="0 0 48 48" enableBackground="new 0 0 48 48">
            <path fill="none" d="M0,0h48v48H0V0z"/>
            <path fill="#FFFFFF" d="M13.24,21.58c2.88,5.66,7.52,10.279,13.18,13.18l4.4-4.4c0.539-0.539,1.34-0.719,2.039-0.479
                c2.24,0.74,4.66,1.141,7.141,1.141c1.1,0,2,0.899,2,2V40c0,1.1-0.9,2-2,2C21.22,42,6,26.78,6,8c0-1.1,0.9-2,2-2h7c1.1,0,2,0.9,2,2
                c0,2.5,0.4,4.9,1.14,7.14c0.22,0.7,0.06,1.48-0.5,2.04L13.24,21.58z"/>
            <path fill="#FFFFFF" d="M42.139,3.126l-4.859,4.862h3.646v8.511c0,1.337-1.095,2.432-2.433,2.432s-2.433-1.095-2.433-2.432V7.99
                c0-2.688-2.176-4.863-4.86-4.863c-2.688,0-4.865,2.176-4.865,4.863v8.51h-3.646l4.863,4.863l4.862-4.863h-3.647V7.99
                c0-1.338,1.097-2.432,2.433-2.432c1.338,0,2.43,1.094,2.43,2.432v8.51c0,2.687,2.18,4.863,4.865,4.863
                c2.688,0,4.86-2.176,4.86-4.863V7.99H47L42.139,3.126z"/>
        </svg>
    );
}
export function speakerZeroModified(size, color) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    let _color = color !== undefined ? color : DEFULAT_COLOR
    return (
        <svg fill={_color} height={_size} viewBox="0 0 48 48" width={_size} xmlns="http://www.w3.org/2000/svg">
            <path d="M6,18v12h8l10,10V8L14,18H6z"/>
            <path fill="none" d="M0,0h48v48H0V0z"/>
        </svg>
    );
}
export function speakerHalfModified(size, color) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    let _color = color !== undefined ? color : DEFULAT_COLOR
    return (
        <svg fill={_color} height={_size} viewBox="0 0 48 48" width={_size} xmlns="http://www.w3.org/2000/svg">
            <path d="M6,18v12h8l10,10V8L14,18H6z M33,24c0-3.54-2.04-6.58-5-8.06v16.1C30.96,30.58,33,27.54,33,24z"/>
            <path fill="none" d="M0,0h48v48H0V0z"/>
        </svg>
    );
}


export function callsync_logo(height, width) {
    let _height = height !== undefined ? height : 18,
        _width = width !== undefined ? width : _height * 4;
    return (
        <svg version="1.1" id="Layer_1" x="0px" y="0px"
             width={_width} height={_height} viewBox="0 0 73 18" enableBackground="new 0 0 73 18" xmlSpace="preserve">
            <g>
                <path fill="#FFFFFF" d="M9.128,16.229v-3.936c0-1.049,0.293-1.957,1.061-2.236l3.279-1.168c0.083-0.205,0.235-0.616,0.223-1.193
                    c-0.042-1.992-1.134-3.438-2.641-3.932L2.07,0.958l2.342-0.839C4.538,0.074,4.695,0.05,4.833,0.05c0.146,0,0.321,0.03,0.437,0.067
                    l9.163,2.864c1.595,0.531,2.189,2.438,2.189,3.468c0,0.837-0.285,1.802-1.174,2.125c-0.79,0.289-3.163,1.138-3.163,1.138
                    c-0.086,0.204-0.231,0.59-0.231,1.438v3.545c0,1.115-0.538,2.129-1.568,2.129C10.037,16.823,9.528,16.614,9.128,16.229"/>
                <path fill="#FFFFFF" d="M6.778,7.285c0.472,0.717,0.71,1.619,0.71,2.382v3.301c0,2.044,0.944,3.709,2.501,4.185l-2.403,0.829
                    c-0.481,0.168-0.952-0.006-1.237-0.188c-1.17-0.75-1.787-1.911-1.787-3.697c0-0.838-0.004-1.986-0.004-3.465
                    c0-0.843-0.359-1.825-0.913-2.553c-0.417-0.549-0.898-0.891-1.51-1.11C0.954,6.546,0,5.012,0,3.504C0,2.208,0.659,1.392,1.535,1.33
                    c0.189-0.013,0.349,0.021,0.5,0.068c0.521,0.158,0.94,0.304,0.94,0.304C2.686,3.199,3.56,5.5,5.322,6.122
                    C6.015,6.366,6.424,6.747,6.778,7.285"/>
            </g>
            <g>
                <path fill="#FFFFFF" d="M27.006,7.431l-0.356,0.992c-0.39-0.229-0.885-0.343-1.487-0.343c-0.771,0-1.373,0.221-1.805,0.661
                    c-0.433,0.441-0.648,1.081-0.648,1.92c0,0.855,0.212,1.523,0.636,2.006c0.398,0.442,0.907,0.662,1.525,0.662
                    c0.534,0,1.012-0.093,1.437-0.279c0.178-0.084,0.313-0.127,0.407-0.127c0.271,0,0.407,0.141,0.407,0.42
                    c0,0.16-0.084,0.297-0.254,0.407c-0.568,0.415-1.279,0.622-2.136,0.622c-1,0-1.788-0.292-2.364-0.877
                    c-0.635-0.636-0.953-1.559-0.953-2.771c0-1.211,0.373-2.144,1.118-2.796c0.653-0.576,1.496-0.864,2.53-0.864
                    C25.849,7.063,26.497,7.186,27.006,7.431"/>
                <path fill="#FFFFFF" d="M34.505,7.241v6.331c0,0.086-0.004,0.166-0.013,0.242c-0.042,0.348-0.246,0.521-0.61,0.521
                    c-0.373,0-0.581-0.173-0.623-0.521c-0.008-0.076-0.013-0.156-0.013-0.242V9.948c0-0.652-0.191-1.148-0.572-1.487
                    c-0.322-0.28-0.741-0.419-1.257-0.419c-1.382,0-2.073,0.903-2.073,2.708c0,0.857,0.186,1.512,0.559,1.971
                    c0.348,0.424,0.814,0.635,1.399,0.635c0.271,0,0.55-0.049,0.838-0.152c0.102-0.033,0.187-0.051,0.254-0.051
                    c0.279,0,0.419,0.141,0.419,0.42c0,0.246-0.199,0.445-0.598,0.598c-0.339,0.136-0.716,0.203-1.131,0.203
                    c-0.933,0-1.672-0.313-2.219-0.939c-0.546-0.628-0.819-1.509-0.819-2.645c0-1.178,0.309-2.106,0.928-2.785
                    c0.585-0.636,1.352-0.953,2.301-0.953c0.958,0,1.687,0.334,2.187,1.004l0.089-0.813H34.505z"/>
                <path fill="#FFFFFF" d="M36.616,4.063h1.271v9.508c0,0.086-0.005,0.166-0.014,0.242c-0.042,0.348-0.25,0.521-0.622,0.521
		            c-0.364,0-0.572-0.173-0.623-0.521c-0.008-0.068-0.013-0.148-0.013-0.242V4.063z"/>
                <path fill="#FFFFFF" d="M40.023,4.063h1.271v9.508c0,0.086-0.004,0.166-0.013,0.242c-0.042,0.348-0.25,0.521-0.623,0.521
		            c-0.364,0-0.572-0.173-0.623-0.521c-0.008-0.068-0.012-0.148-0.012-0.242V4.063z"/>
                <path fill="#FFFFFF" d="M51.554,7.444L51.211,8.41c-0.475-0.229-1.013-0.343-1.614-0.343c-0.356,0-0.652,0.063-0.891,0.191
                    C48.402,8.41,48.25,8.639,48.25,8.944c0,0.346,0.237,0.627,0.712,0.839c0.763,0.339,1.259,0.563,1.487,0.673
                    c0.83,0.408,1.246,1.014,1.246,1.818c0,0.695-0.259,1.225-0.775,1.59c-0.483,0.339-1.08,0.508-1.792,0.508
                    c-0.525,0-0.967-0.051-1.322-0.152c-0.568-0.152-0.852-0.398-0.852-0.736c0-0.137,0.051-0.25,0.152-0.344s0.225-0.141,0.368-0.141
                    c0.042,0,0.284,0.064,0.725,0.191c0.33,0.102,0.657,0.152,0.979,0.152c0.89,0,1.334-0.344,1.334-1.031
                    c0-0.388-0.262-0.693-0.788-0.914c-0.805-0.339-1.334-0.58-1.589-0.725c-0.712-0.398-1.067-0.953-1.067-1.665
                    c0-0.652,0.267-1.152,0.8-1.5c0.45-0.296,1.01-0.444,1.678-0.444C50.394,7.063,51.064,7.19,51.554,7.444"/>
                <path fill="#FFFFFF" d="M52.28,7.241h1.373l1.436,3.827c0.212,0.593,0.391,1.157,0.534,1.69h0.051
                    c0.034-0.136,0.217-0.7,0.547-1.69l1.284-3.827h1.283l-2.948,7.908c-0.229,0.61-0.575,1.135-1.037,1.575
                    c-0.461,0.441-0.908,0.662-1.341,0.662c-0.406,0-0.61-0.174-0.61-0.521c0-0.203,0.161-0.387,0.483-0.547
                    c0.737-0.373,1.25-1.055,1.539-2.047c0.032-0.118,0.051-0.22,0.051-0.305c0-0.119-0.023-0.232-0.064-0.344L52.28,7.241z"/>
                <path fill="#FFFFFF" d="M59.804,7.241h1.106v1.03c0.517-0.813,1.288-1.22,2.313-1.22c0.729,0,1.305,0.22,1.729,0.661
                    c0.475,0.483,0.712,1.187,0.712,2.11v3.75c0,0.086-0.005,0.166-0.014,0.242c-0.042,0.348-0.25,0.521-0.622,0.521
                    c-0.364,0-0.572-0.173-0.623-0.521c-0.01-0.068-0.013-0.148-0.013-0.242V9.91c0-1.246-0.496-1.869-1.487-1.869
                    c-0.534,0-0.967,0.157-1.297,0.471c-0.356,0.339-0.534,0.813-0.534,1.423v3.636c0,0.086-0.005,0.166-0.012,0.242
                    c-0.044,0.348-0.25,0.521-0.624,0.521c-0.363,0-0.571-0.173-0.622-0.521c-0.009-0.068-0.014-0.148-0.014-0.242V7.241z"/>
                <path fill="#FFFFFF" d="M72.885,7.431l-0.356,0.992C72.14,8.194,71.643,8.08,71.042,8.08c-0.771,0-1.373,0.221-1.806,0.661
                    c-0.432,0.441-0.648,1.081-0.648,1.92c0,0.855,0.212,1.523,0.636,2.006c0.398,0.442,0.907,0.662,1.525,0.662
                    c0.534,0,1.013-0.093,1.437-0.279c0.179-0.084,0.313-0.127,0.407-0.127c0.271,0,0.406,0.141,0.406,0.42
                    c0,0.16-0.085,0.297-0.254,0.407c-0.568,0.415-1.28,0.622-2.136,0.622c-1,0-1.788-0.292-2.364-0.877
                    c-0.636-0.636-0.954-1.559-0.954-2.771c0-1.211,0.374-2.144,1.119-2.796c0.652-0.576,1.496-0.864,2.53-0.864
                    C71.729,7.063,72.376,7.186,72.885,7.431"/>
            </g>
        </svg>
    );
}

export function setImage(size) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    return (
        <svg fill="#FFFFFF" width={_size} height={_size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M4 4h7V2H4c-1.1 0-2 .9-2 2v7h2V4zm6 9l-4 5h12l-3-4-2.03 2.71L10 13zm7-4.5c0-.83-.67-1.5-1.5-1.5S14 7.67 14 8.5s.67 1.5 1.5 1.5S17 9.33 17 8.5zM20 2h-7v2h7v7h2V4c0-1.1-.9-2-2-2zm0 18h-7v2h7c1.1 0 2-.9 2-2v-7h-2v7zM4 13H2v7c0 1.1.9 2 2 2h7v-2H4v-7z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
    )
}

export function socketStatusImg(size, color, marginLeft) {
    let _size = size !== undefined ? size : DEFULAT_SIZE
    let _color = color !== undefined ? color : "#000000"
    let _marginLeft = marginLeft !== undefined ? marginLeft : 0
    return (
        <svg fill={_color} width={_size} height={_size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
             style={{marginLeft:_marginLeft}}>
            <path d="M24 24H0V0h24v24z" fill="none"/>
            <circle cx="12" cy="12" fill={_color} r="8"/>
        </svg>
    )
}

export function garbage(size, color){
  let _size = size !== undefined ? size : DEFULAT_SIZE
  let _color = color !== undefined ? color : "#000000"
  return(
    <svg version="1.1" id="레이어_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
    	 y="0px" width={_size} height={_size} viewBox="0 0 48 48" enableBackground="new 0 0 48 48" xmlSpace="preserve">
    <g>
    	<path fillRule="evenodd" clipRule="evenodd" fill={_color} d="M17.14,18.635v-1.788h4.471v-0.895h4.778v0.895h4.471v1.788H17.14
    		z M29.965,30.26c0,0.983-0.805,1.788-1.787,1.788h-8.355c-0.983,0-1.788-0.805-1.788-1.788v-10.73h11.93V30.26z M21.611,21.317
    		h-0.894v8.048h0.894V21.317z M27.283,21.317h-0.895v8.048h0.895V21.317z"/>
    </g>
    </svg>
  )
}

export function garbage2(size, color){
  let _size = size !== undefined ? size : DEFULAT_SIZE
  let _color = color !== undefined ? color : "#000000"
  return(
    <svg fill={_color} height={_size} viewBox="0 0 24 24" width={_size} xmlns="http://www.w3.org/2000/svg">
        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
    </svg>
  )
}

export function add_ico(size, color){
  let _size = size !== undefined ? size : DEFULAT_SIZE
  let _color = color !== undefined ? color : "#000000"
  return(
          <svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
       	 width={_size} height={_size} viewBox="12 10 24 24" enableBackground="new 0 0 48 48" xmlSpace="preserve">
       	<g>
       		<path fillRule="evenodd" clipRule="evenodd" fill={_color} d="M28.103,23.169H24.83v-3.271c0-0.452-0.365-0.817-0.817-0.817
       			s-0.817,0.365-0.817,0.817v3.271h-3.271c-0.453,0-0.818,0.366-0.818,0.818c0,0.451,0.365,0.817,0.818,0.817h3.271v3.272
       			c0,0.451,0.365,0.817,0.817,0.817s0.817-0.366,0.817-0.817v-3.272h3.272c0.452,0,0.817-0.366,0.817-0.817
       			C28.92,23.535,28.555,23.169,28.103,23.169z M24,15.016c-4.962,0-8.984,4.022-8.984,8.984s4.022,8.984,8.984,8.984
       			s8.984-4.022,8.984-8.984S28.962,15.016,24,15.016z M24,32.109c-4.479,0-8.109-3.631-8.109-8.109s3.631-8.109,8.109-8.109
       			s8.109,3.631,8.109,8.109S28.479,32.109,24,32.109z"/>
       	</g>
       </svg>
  )
}

export function address_ico(size, color){
         let _size = size !== undefined ? size : DEFULAT_SIZE
  let _color = color !== undefined ? color : "#000000"
  return(
          <svg version="1.1" id="레이어_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
	 y="0px" width={_size} height={_size} viewBox="15 12 20 20" enableBackground="new 0 0 48 48" xmlSpace="preserve">
<path fill={_color} d="M31.095,15.488H18.798c-1.041,0-1.893,0.852-1.893,1.892v0.945h-1.892v1.892h1.892v1.885v0.945h-1.892v1.892
	h1.892v1.443v1.402h-1.892v1.891h1.892v0.947c0,1.049,0.852,1.891,1.893,1.891h12.297c1.04,0,1.892-0.842,1.892-1.891V17.379
	C32.986,16.339,32.135,15.488,31.095,15.488z M25.009,18.145c1.489,0,2.69,1.201,2.69,2.689s-1.201,2.689-2.69,2.689
	c-1.488,0-2.689-1.201-2.689-2.689S23.521,18.145,25.009,18.145z M30.014,29.467h-10.01v-1.459c0-1.793,3.212-2.779,5.005-2.779
	c1.794,0,5.005,0.986,5.005,2.779V29.467z"/>
</svg>

  )
}


export function time_ico(size, color){
         let _size = size !== undefined ? size : DEFULAT_SIZE
  let _color = color !== undefined ? color : "#000000"
  return(
          <svg version="1.1" id="레이어_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
  	 y="0px" width={_size} height={_size} viewBox="11 10 26 26" enableBackground="new 0 0 48 48" xmlSpace="preserve">
          <g>
          	<g>
          		<path fill="#9FAEB6" d="M23.991,15.25c-4.83,0-8.741,3.92-8.741,8.75c0,4.829,3.911,8.75,8.741,8.75
          			c4.838,0,8.759-3.921,8.759-8.75C32.75,19.17,28.829,15.25,23.991,15.25z M24,31c-3.867,0-7-3.133-7-7s3.133-7,7-7s7,3.133,7,7
          			S27.867,31,24,31z M24.438,19.625h-1.313v5.25l4.594,2.757l0.656-1.077l-3.938-2.336V19.625z"/>
          	</g>
          </g>
        </svg>

  )
}
export function date_ico(size, color){
         let _size = size !== undefined ? size : DEFULAT_SIZE
  let _color = color !== undefined ? color : "#000000"
  return(
          <svg version="1.1" id="레이어_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
 	 y="0px"width={_size} height={_size} viewBox="11 11 26 26" enableBackground="new 0 0 48 48" xmlSpace="preserve">
 <path fill="#9FAEB6" d="M21.358,23.119h-1.762v1.762h1.762V23.119z M24.881,23.119h-1.762v1.762h1.762V23.119z M28.404,23.119
 	h-1.762v1.762h1.762V23.119z M30.166,16.954h-0.881v-1.762h-1.762v1.762h-7.046v-1.762h-1.762v1.762h-0.881
 	c-0.978,0-1.752,0.792-1.752,1.762l-0.009,12.33c0,0.969,0.784,1.762,1.761,1.762h12.332c0.968,0,1.761-0.793,1.761-1.762v-12.33
 	C31.927,17.746,31.134,16.954,30.166,16.954z M30.166,31.046H17.834V21.024h12.332V31.046z"/>
 </svg>

  )
}
export function arrow_down(size, color){
    let _size = size !== undefined ? size : DEFULAT_SIZE
    let _color = color !== undefined ? color : "#000000"
    return(
      <svg fill={_color} height={_size} viewBox="0 0 24 24" width={_size} xmlns="http://www.w3.org/2000/svg">
          <path d="M7 10l5 5 5-5z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
      </svg>
    )
}

export function arrow_up(size, color){
    let _size = size !== undefined ? size : DEFULAT_SIZE
    let _color = color !== undefined ? color : "#000000"
    return(
      <svg fill={_color} height={_size} viewBox="0 0 24 24" width={_size} xmlns="http://www.w3.org/2000/svg">
          <path d="M7 14l5-5 5 5z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
      </svg>
    )
}
