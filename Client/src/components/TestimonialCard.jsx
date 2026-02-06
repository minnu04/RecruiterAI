import React from 'react';

const TestimonialCard = ({ quote, name, role, company, image }) => {
    // Use the provided image, or fallback to a professional abstract/colored background if missing
    // The user stated they will provide the URL, so we rely on the prop.
    // We can add a subtle gradient fallback if image is empty to maintain readability.

    return (
        <div
            className="relative rounded-2xl overflow-hidden min-h-[400px] flex flex-col justify-between p-8 text-white shadow-lg group hover:shadow-xl transition-all duration-300"
            style={{
                // If image exists, use it. Otherwise, use a fallback gradient matching the theme.
                backgroundImage: image ? `url(${image})` : 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Dark Overlay for text readability - visible if image is present */}
            {image && (
                <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply transition-opacity duration-300 group-hover:bg-blue-900/70"></div>
            )}
            {/* Additional gradient overlay for bottom text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>

            {/* Content Container (z-10 to sit above overlay) */}
            <div className="relative z-10 flex flex-col h-full">

                {/* Quote Section */}
                <div className="flex-1">
                    {/* Quote Icon */}
                    <svg className="w-10 h-10 text-blue-200 mb-6 opacity-80" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21L14.017 18C14.017 16.896 14.353 15.908 15.024 15.034C15.696 14.16 16.536 13.528 17.544 13.136L17.544 3.003C17.064 3.003 16.592 3.003 16.128 3.003C12.336 3.003 9.492 4.416 7.596 7.243C5.7 10.07 4.752 13.435 4.752 17.338L4.752 21L14.017 21ZM22.017 21L22.017 18C22.017 16.896 22.353 15.908 23.025 15.034C23.696 14.16 24.536 13.528 25.544 13.136L25.544 3.003C25.064 3.003 24.592 3.003 24.128 3.003C20.336 3.003 17.492 4.416 15.596 7.243C13.7 10.07 12.752 13.435 12.752 17.338L12.752 21L22.017 21Z" transform="translate(-5 0)" />
                    </svg>

                    <p className="text-xl md:text-2xl font-medium leading-relaxed tracking-wide text-white drop-shadow-sm">
                        "{quote}"
                    </p>
                </div>

                {/* User Details */}
                <div className="mt-8 pt-6 border-t border-white/20 flex items-center gap-4">
                    {/* Optional: Avatar could still be shown, or just text. Keeping simplified as per 'modern card' look */}
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-lg font-bold">
                        {name.charAt(0)}
                    </div>
                    <div>
                        <h4 className="font-bold text-white text-lg">{name}</h4>
                        <p className="text-blue-200 text-sm font-medium">{role}, {company}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TestimonialCard;
