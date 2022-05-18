import "./background.css";

export default function getBackground() {
    if (window.innerWidth <= 540) {
        return mobileBG();
    }
    return desktopBG();
}

export function desktopBG() {
    return (

        <svg 
        className="background"
        version="1.1" 
        id="visual" 
        xmlns="http://www.w3.org/2000/svg" 
        xmlns:xlink="http://www.w3.org/1999/xlink" 
        width= "1920" 
        height= "1080"
        viewBox= "0 0 1920 1080" 
        style="enable-background:new 0 0 307.4 307.4;" 
        xml:space="preserve">

        </svg>

    );
}




export function mobileBG() {
    return (
<svg 
        className="background"
        version="1.1" 
        id="visual" 
        xmlns="http://www.w3.org/2000/svg" 
        xmlns:xlink="http://www.w3.org/1999/xlink" 
        width="540"
        height="960" 
        viewBox="0 0 540 960" 
        style="enable-background:new 0 0 307.4 307.4;" 
        xml:space="preserve">
            
        </svg>

    );
}