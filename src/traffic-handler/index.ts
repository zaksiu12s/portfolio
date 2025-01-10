const SERVER_URL = "http://localhost:5000/api/v1/websiteInfo";
let activeTime = 0;
let lastActiveTimestamp = Date.now();

const sendData = async ({
    currentPageURL,
    currentPageTitle,
    currentPageHeight,
    currentPageWidth
}: {
    currentPageURL: string,
    currentPageTitle: string,
    currentPageHeight: number,
    currentPageWidth: number
}) => {
    await fetch(SERVER_URL, {
        body: JSON.stringify({
            currentPageURL,
            currentPageTitle,
            currentPageHeight,
            currentPageWidth,
            timeSpent: activeTime
        }),
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    });
};

const updateActiveTime = () => {
    if (document.visibilityState === "visible") {
        activeTime += Date.now() - lastActiveTimestamp;
        lastActiveTimestamp = Date.now();
    }
};

const trackVisibility = () => {
    document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "visible") {
            lastActiveTimestamp = Date.now();
        } else {
            activeTime += Date.now() - lastActiveTimestamp;
        }
    });
};

async function init() {
    const currentPageURL = window.location.href;
    const currentPageTitle = document.title;
    let currentPageHeight = window.innerWidth;
    let currentPageWidth = window.innerHeight;

    window.addEventListener("resize", () => {
        currentPageHeight = window.innerWidth;
        currentPageWidth = window.innerHeight;
    });

    trackVisibility();


    updateActiveTime();
    sendData({ currentPageHeight, currentPageTitle, currentPageWidth, currentPageURL });

}

export default init();
