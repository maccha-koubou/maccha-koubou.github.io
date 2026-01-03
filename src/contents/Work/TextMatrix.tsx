import React from 'react'
import {colors} from "../../styles/theme";
import content from './textMatrixContent.txt?raw'

const TextMatrix = ({ width }: { width: number }) => {
    return (
        <div style={{
            width: `${width}px`,
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '120px 140px 120px 160px',
            color: colors.primary,
        }}>
            <div className={"textMatrix" }>
                {content}{content}{content}
            </div>
        </div>
    )
}

export default TextMatrix;