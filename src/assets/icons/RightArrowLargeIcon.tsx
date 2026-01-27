import React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & {
    size?: number
}

export const RightArrowLargeIcon = ({size = 28}: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M51.5903 28L27.9995 51.5908L24.8179 48.4092L43.2271 30H4.40968V25.5H42.7271L24.8179 7.59082L27.9995 4.40918L51.5903 28Z" fill="currentColor" />
    </svg>
)