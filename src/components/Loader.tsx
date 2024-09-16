// src/components/Loading.js
import React from 'react';
import './styles/Loader.css';

const Loading = () => { // Just an animation, doesn't load anything
    return (
        <div className="loading-overlay glass-item">
            <div className="loading-item">
                <div id="Logo" >
                </div>
            </div>
        </div>
    );
};

export default Loading;