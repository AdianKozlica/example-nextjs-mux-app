"use client";

import { useState } from "react";

export default function Upload() {
    const [file, setFile] = useState<File | undefined>(undefined);

    return (
        <div>
            <input type="file" onChange={(e) => setFile(e.target.files![0])}></input>
            <button onClick={() => {
                fetch('/api/videos', {
                    method: 'POST'
                })
                .then(res => res.json())
                .then(json => {
                    fetch('/api/mux', {
                        method: 'POST',
                        body: JSON.stringify({
                            uuid: json.uuid
                        })
                    })
                    .then(res => res.json())
                    .then(json => {
                        file?.arrayBuffer()
                        .then(arrayBuff => {
                            const blob = new Blob([new Uint8Array(arrayBuff)], {type: file.type });
                            fetch(json.uploadUrl, {
                                method: 'PUT',
                                body: blob,
                                headers: { "content-type": blob.type}
                            })
                            .then(res => {
                                window.location.href = '/';
                            });
                        });
                    })
                })
            }}>Submit</button>
        </div>
    )
}