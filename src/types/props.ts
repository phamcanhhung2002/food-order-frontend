import React from 'react';
/**
 * @description Interface for the routes props
 * @param {string} path - The path of the route
 * @param {React.FC} element - The component to render
 * @param {string} title - The title of the route
 */
export interface IRoutesProps {
    path: string;
    element: React.ReactElement;
    title: string;
}