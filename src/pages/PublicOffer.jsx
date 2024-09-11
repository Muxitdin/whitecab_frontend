import React from 'react'
import Navbar from '../components/Navbar'

const pdfUrl = 'dsds'

export default function PublicOffer() {
    return (
        <>
            <Navbar />
            <div className="p-4">
                <h1 className="text-2xl mb-4 text-center">Публичная оферта</h1>
                <div className="border border-gray-300 rounded-lg overflow-hidden">
                    <iframe
                        src={pdfUrl}
                        width="100%"
                        height="800px"
                        style={{ border: 'none' }}
                        title="Public Offer"
                    />
                </div>
            </div>
        </>
    )
}