import { css } from "@emotion/css";
import React from "react";

export const Logo: React.FC<React.SVGAttributes<SVGSVGElement>> = (props) => {
    return (
        <svg
            {...props}
            id="Capa_1"
            data-name="Capa 1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 544.38 319.88"
            className={css`
                width: 136px;
                .cls-1 {
                    opacity: 0.3;

                    transform: translateX(-800px);
                    animation: slideRight 1.8s 0s ease 1;
                    animation-fill-mode: forwards;
                }

                .cls-2 {
                    fill: url(#Degradado_sin_nombre_22);
                }

                .cls-3 {
                    opacity: 0.6;

                    transform: translateX(-800px);
                    animation: slideRight 1.8s 0.2s ease 1;
                    animation-fill-mode: forwards;
                }

                .cls-4 {
                    fill: url(#Degradado_sin_nombre_22-2);
                }

                .cls-5 {
                    fill: url(#Degradado_sin_nombre_22-3);

                    transform: translateX(-800px);
                    animation: slideRight 1.8s 0.4s ease 1;
                    animation-fill-mode: forwards;
                }

                .cls-6 {
                    fill: #dedede;
                }

                .d {
                    transform: translateX(-800px);
                    animation: slideRight 1.8s 0.8s ease 1;
                    animation-fill-mode: forwards;
                }

                .cls-7 {
                    fill: #3c3c3b;
                }

                .ctopw {
                    transform: translate3d(0, -100%, 0);
                    animation: slideInDown 0.8s 1.7s ease-in forwards;
                }

                .ctop {
                    transform: translate3d(0, -100%, 0);
                    animation: slideInDown 0.8s 1.9s ease-in forwards;
                }

                .cbot {
                    transform: translate3d(0, -100%, 0);
                    animation: slideInDown 0.8s 1.5s ease-in forwards;
                }

                .cls-8 {
                    fill: #706f6e;
                    transform: translate3d(0, -100%, 0);
                    animation: slideInDown 0.8s 1.3s ease-in forwards;
                }

                @keyframes slideInDown {
                    from {
                        -webkit-transform: translate3d(0, -100%, 0);
                        transform: translate3d(0, -100%, 0);
                        visibility: visible;
                    }

                    to {
                        -webkit-transform: translate3d(0, 0, 0);
                        transform: translate3d(0, 0, 0);
                    }
                }

                @keyframes slideRight {
                    from {
                        transform: translateX(-800px);
                    }

                    to {
                        transform: translateX(0px);
                    }
                }
            `}
        >
            <defs>
                <linearGradient
                    id="Degradado_sin_nombre_22"
                    x1="266.98"
                    y1="163.81"
                    x2="462.2"
                    y2="163.81"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stop-color="#149bd7" />
                    <stop offset="0.11" stop-color="#2189ca" />
                    <stop offset="0.39" stop-color="#3e5eaa" />
                    <stop offset="0.64" stop-color="#533f93" />
                    <stop offset="0.85" stop-color="#602c85" />
                    <stop offset="1" stop-color="#652580" />
                </linearGradient>
                <linearGradient
                    id="Degradado_sin_nombre_22-2"
                    x1="248.15"
                    y1="163.81"
                    x2="443.37"
                    y2="163.81"
                    xlinkHref="#Degradado_sin_nombre_22"
                />
                <linearGradient
                    id="Degradado_sin_nombre_22-3"
                    x1="226.33"
                    y1="163.81"
                    x2="421.55"
                    y2="163.81"
                    xlinkHref="#Degradado_sin_nombre_22"
                />
            </defs>
            <title>Tweek</title>
            <g className="cls-1">
                <path
                    className="cls-2"
                    d="M267,110.33V51.71h83.11a112.11,112.11,0,0,1,0,224.21H267v-89l58.59.14v30.3h24.81a53.33,53.33,0,0,0,53.21-53.22c0-29-23.9-52.9-53.21-52.9Z"
                />
            </g>
            <g className="cls-3">
                <path
                    className="cls-4"
                    d="M248.15,110.33V51.71h83.11a112.11,112.11,0,0,1,0,224.21H248.15v-89l58.59.14v30.3h24.81a53.33,53.33,0,0,0,53.21-53.22c0-29-23.9-52.9-53.21-52.9Z"
                />
            </g>
            <path
                className="cls-5"
                d="M226.33,110.33V51.71h83.11a112.11,112.11,0,1,1,0,224.21H226.33v-89l58.59.14v30.3h24.81a53.33,53.33,0,0,0,53.21-53.22c0-29-23.9-52.9-53.21-52.9Z"
            />
            <path
                className="cls-6 d"
                d="M197.06,110.33V51.71h83.11a112.11,112.11,0,1,1,0,224.21H197.06v-89l58.59.14v30.3h24.81a53.33,53.33,0,0,0,53.21-53.22c0-29-23.9-52.9-53.21-52.9Z"
            />
            <rect
                className="cls-6 ctopw"
                x="123.61"
                y="51.71"
                width="58.71"
                height="58.71"
            />
            <rect
                className="cls-7 ctop"
                x="50.38"
                y="51.71"
                width="58.71"
                height="58.71"
            />
            <rect
                className="cls-7 cbot"
                x="123.61"
                y="134.46"
                width="58.71"
                height="58.71"
            />
            <rect
                className="cls-8"
                x="123.61"
                y="217.21"
                width="58.71"
                height="58.71"
            />
        </svg>
    );
};
