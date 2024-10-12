import React from 'react'

export default function TourParticular({ title, content }: { title: string, content: string }) {
    return (
        <div>
            <span className="text-sm md:text-sm text-gray-500">{title}</span>
            <div className="mb-4">
                <span className="text-lg font-bold" >{content}</span>
            </div>
        </div>
    )
}
