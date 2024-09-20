import React, { useEffect, useState, memo } from 'react';
import '../styles/Gallery.css';
import data from '../../data.json'; // Correct path to your JSON file

interface Section {
    id: number;
    image: string;
    title: string;
    description: string;
}

interface Data {
    sections: Section[];
}

const Gallery: React.FC = () => {
    const [dataState, setDataState] = useState<Data>({ sections: [] });

    useEffect(() => {
        // Set the imported JSON data to the state
        setDataState(data);
    }, []);

    // Render section items
    const renderSection = (section: Section) => (
        <React.Fragment key={section.id}>
            <div className="gallery-image border blue-shadow">
                <img
                    src={`${section.image}`} // Corrected template literal syntax for dynamic image source
                    alt={`image-${section.id}`}
                    className="image"
                />
            </div>
            <div className="gallery-text glass-item blue-shadow">
                <h1 style={{ textAlign: "center", color: "#0084ff", fontSize: "3rem" }}>
                    {section.title}
                </h1>
                <br />
                <h3>
                    {section.description.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                            {line}
                            <br />
                            <br />
                        </React.Fragment>
                    ))}
                </h3>
            </div>
        </React.Fragment>
    );

    return (
        <div className="web-body gallery home-background">
            <div className="gallery-container">
                {dataState.sections.map(renderSection)}
            </div>
        </div>
    );
};

// Use React.memo to prevent unnecessary re-renders
export default memo(Gallery);
