import React from 'react';
import '../styles/footer.css';
import { Button } from "antd";

export const Footer = () => {
    return (
        <>
            <footer className="footer">
                <Button type="primary" ghost href="https://www.instagram.com/guille_laviero" target="_blank">Instagram</Button>
                <Button type="primary" ghost href="https://www.youtube.com/@gorilanator" target="_blank">YouTube</Button>
                <Button type="primary" ghost href="https://www.twitch.tv/gu1ll3lc" target="_blank">Twitch</Button>
                <Button type="primary" ghost href="https://github.com/Guille-LC/React-Practice" target="_blank">Github</Button>
                <Button type="primary" ghost href="https://x.com/Guille_LC96" target="_blank">X/Twitter</Button>
                <Button type="primary" ghost href="https://linktr.ee/guillermolc" target="_blank">Linktree</Button>
                <strong>@2025 Sweet Merch | Todos los derechos e izquierdos reservados</strong>
            </footer>
            
        </>
    )
}
