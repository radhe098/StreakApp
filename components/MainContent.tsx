import React from 'react';

export default function MainComponent() {
    return (
        <div className="relative pt-[56.25%] h-0 overflow-hidden">
            <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/STScKOUpXR8?si=kDdVotD-cShFgyZs"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        </div>
    );
}
